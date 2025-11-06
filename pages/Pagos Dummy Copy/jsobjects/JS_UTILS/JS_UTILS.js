export default {
  // --- util helpers ---
  roundHalfUp(value, decimals = 2) {
    const factor = Math.pow(10, decimals);
    return Math.round((Number(value) + Number.EPSILON) * factor + 1e-12) / factor;
  },

  toNumberSafe(v) {
    const n = Number(v);
    return isNaN(n) ? 0 : n;
  },

  // Normaliza una fila de cobro a forma canónica (sólo primitivos)
  normalizePag(candidate = {}) {
    const c = candidate || {};

    const monto_sin_iva_num = this.toNumberSafe(c.monto_sin_iva ?? c._monto_sin_iva ?? c.monto ?? 0);
    const monto_iva_num = this.roundHalfUp(this.toNumberSafe(c.monto_iva ?? c._monto_iva ?? monto_sin_iva_num * 0.16), 2);
    const monto_total_num = this.roundHalfUp(this.toNumberSafe(c.monto_total_con_iva ?? c._monto_total_con_iva ?? monto_sin_iva_num + monto_iva_num), 2);

    return {
      id_cobro: c.id_cobro ? String(c.id_cobro) : "",
      id_item_pedido: c.id_item_pedido ? String(c.id_item_pedido) : "",
      id_bano: c.id_bano ? String(c.id_bano) : "",
      id_cliente: c.id_cliente ? String(c.id_cliente) : "",
      nombre_cliente: c.nombre_cliente ?? "",
      id_ubicacion: c.id_ubicacion ? String(c.id_ubicacion) : "",
      nombre_ubicacion: c.nombre_ubicacion ?? "",
      periodo_cobro: c.periodo_cobro ? String(c.periodo_cobro) : "",
      monto_sin_iva: monto_sin_iva_num,
      monto_iva: monto_iva_num,
      monto_total_con_iva: monto_total_num,
      estatus_pago: !!c.estatus_pago,
      estatus_factura: !!c.estatus_factura,
      cancelado: !!c.cancelado
    };
  },

  // --- sanitize para stores: convierte/omitir valores no serializables ---
  sanitizeForStore(obj) {
    const seen = new WeakSet();
    function sanitize(value) {
      if (value === null) return null;
      const t = typeof value;
      if (t === "string" || t === "number" || t === "boolean") return value;
      if (Array.isArray(value)) return value.map(v => sanitize(v));
      if (t === "object") {
        if (value === undefined) return String(value);
        if (seen.has(value)) return null;
        seen.add(value);
        const out = {};
        Object.keys(value || {}).forEach(k => {
          try {
            const s = sanitize(value[k]);
            if (s !== undefined) out[k] = s;
          } catch (e) {
            out[k] = String(value[k]);
          }
        });
        return out;
      }
      // funciones, symbol, undefined -> guardar su string (primitivo)
      return String(value);
    }
    return sanitize(obj);
  },

  // --- Merge parcial y almacenar de forma robusta ---
  mergeAndStorePagForm(partial = {}) {
    const cur = appsmith.store.pagForm || {};
    const merged = { ...cur, ...partial };
    const norm = this.normalizePag(merged);
    const safe = this.sanitizeForStore(norm);

    try {
      storeValue("pagForm", safe, true);
      storeValue("pagPending", safe, true);
      // snapshot para debug
      try { storeValue("pagForm_json_snapshot", JSON.stringify(safe), true); } catch(e) {}
      // limpiar lastStoreError si todo ok
      try { storeValue("lastStoreError", "", true); } catch(e) {}
    } catch (err) {
      try { storeValue("lastStoreError", String(err), true); } catch(e) {}
      console.error("Error guardando pagForm sanitizado:", err);
      // no mostrar alert masivo para no romper UX; el store lastStoreError queda para inspección
    }

    return safe;
  },

  // Inicializar desde una fila cobro
  setFromCobro(row) {
    if (!row) {
      try {
        storeValue("pagSel", null, true);
        storeValue("pagForm", null, true);
        storeValue("pagPending", null, true);
        storeValue("pagIsEditMode", false, true);
      } catch (e) { console.warn("setFromCobro storeValue error", e); }
      return null;
    }
    const norm = this.normalizePag(row);
    const safe = this.sanitizeForStore(norm);
    try {
      storeValue("pagSel", safe, true);
      storeValue("pagForm", safe, true);
      storeValue("pagPending", safe, true);
      storeValue("pagIsEditMode", true, true);
      try { storeValue("pagForm_json_snapshot", JSON.stringify(safe), true); } catch(e) {}
      try { storeValue("lastStoreError", "", true); } catch(e) {}
    } catch (err) {
      try { storeValue("lastStoreError", String(err), true); } catch(e) {}
      console.error("Error setFromCobro:", err);
    }
    return safe;
  },

  clearPag() {
    try {
      storeValue("pagSel", null, true);
      storeValue("pagForm", null, true);
      storeValue("pagPending", null, true);
      storeValue("pagIsEditMode", false, true);
      try { storeValue("pagForm_json_snapshot", "", true); } catch(e) {}
    } catch (e) {
      console.warn("clearPag error", e);
    }
  }
};