export default {
  /* ========== Fuente de datos para id_item_pedido ========== 
     Soporta dos formas de GetPedidos:
     A) Array de líneas (cada fila ya trae id_item_pedido)
     B) Array de pedidos con un campo items/detalle (lo "aplana")
  */
  rows() {
    const raw = Array.isArray(GetPedidos?.data)
      ? GetPedidos.data
      : (GetPedidos?.data?.results || []);

    if (!Array.isArray(raw)) return [];

    // Detecta si ya vienen "líneas" (tienen id_item_pedido en la fila)
    const isFlatLines = raw.some(r => "id_item_pedido" in r);

    if (isFlatLines) return raw;

    // Si no, intenta aplanar detalle/items de cada pedido
    const detailKeys = ["detalle", "items", "lineas", "pedido_detalle"];
    const out = [];
    for (const p of raw) {
      const key = detailKeys.find(k => Array.isArray(p?.[k]));
      if (key) {
        for (const it of p[key]) {
          out.push({
            // Campos usuales (ajusta nombres si tus llaves reales difieren)
            id_item_pedido: it.id_item_pedido,
            id_pedido: p.id_pedido ?? it.id_pedido,
            id_cliente: p.id_cliente ?? it.id_cliente,
            nombre_cliente: p.nombre_cliente ?? it.nombre_cliente,
            id_bano: it.id_bano,
            id_ubicacion: it.id_ubicacion ?? p.id_ubicacion,
            nombre_ubicacion: it.nombre_ubicacion ?? p.nombre_ubicacion,
            geolocalizacion_ubicacion: it.geolocalizacion_ubicacion ?? p.geolocalizacion_ubicacion,
            // por si quieres arrastrar más campos del pedido
            _pedido_raw: p,
            _linea_raw: it
          });
        }
      }
    }
    return out;
  },

  // Busca línea por id_item_pedido
  byId(id) {
    return this.rows().find(r => String(r.id_item_pedido) === String(id)) || null;
  },

  /* ========== Ubicaciones (lookup de geo/ruta si falta) ========== */
  ubicRows() {
    return Array.isArray(GetUbicaciones?.data)
      ? GetUbicaciones.data
      : (GetUbicaciones?.data?.results || []);
  },

  lookupUbic(ubicId) {
    if (!ubicId) return null;
    return this.ubicRows().find(u => String(u.id_ubicacion) === String(ubicId)) || null;
  },

  /* ========== Selección y store para el modal ========== 
     Guarda la fila seleccionada en appsmith.store.otSel,
     enriqueciendo con geo/ruta si no venían en GetPedidos.
  */
  setItem(id) {
    const row = this.byId(id);
    if (!row) { storeValue("otSel", null, true); return; }

    let geo = row.geolocalizacion_ubicacion ?? null;
    let id_ruta = row.id_ruta ?? null;

    if (!geo || !id_ruta) {
      const u = this.lookupUbic(row.id_ubicacion);
      geo = geo ?? (u?.geolocalizacion_ubicacion ?? null);
      id_ruta = id_ruta ?? (u?.id_ruta ?? null);
    }

    storeValue("otSel", { ...row, geolocalizacion_ubicacion: geo, id_ruta });
  },

  clear() { storeValue("otSel", null, true); }
};
