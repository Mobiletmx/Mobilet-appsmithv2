export default {
  // ---------- Utilidades internas ----------
  __safe(val, fallback = null) {
    return typeof val === "undefined" ? fallback : val;
  },

  __mirror(line) {
    return {
      ...line,
      // mirrors antiguos -> nuevos
      id_ubicacion: line.id_ubicacion ?? line.ubicacion_id ?? null,
      id_bano: line.id_bano ?? line.bano_id ?? null,
      fecha_inicio: line.fecha_inicio ?? null,
      monto_sin_iva: line.monto_sin_iva ?? line.precio_unitario ?? null,

      // mirrors nuevos -> antiguos
      ubicacion_id: line.id_ubicacion ?? line.ubicacion_id ?? null,
      bano_id: line.id_bano ?? line.bano_id ?? null,
      precio_unitario: line.monto_sin_iva ?? line.precio_unitario ?? null,
    };
  },

  __withUbicacionData(baseLine, idU) {
    const ubi = (GetUbicaciones.data || []).find(u => u.id_ubicacion === idU) || {};
    return this.__mirror({
      ...baseLine,
      id_ubicacion: idU ?? baseLine.id_ubicacion,
      nombre_ubicacion: this.__safe(ubi.nombre_ubicacion, baseLine.nombre_ubicacion),
      geolocalizacion_ubicacion: this.__safe(ubi.geolocalizacion_ubicacion, baseLine.geolocalizacion_ubicacion),
      id_ruta: this.__safe(ubi.id_ruta, baseLine.id_ruta),
      // Mantener el precio existente SIN modificarlo
      monto_sin_iva: baseLine.monto_sin_iva
    });
  },

  __commit(next) {
    return storeValue("lines", next, true);
  },

  // ---------- API pública ----------

  init(count, defaults = {}) {
    const n = Number(count || 0);
    const base = Array.from({ length: n }, (_, i) => this.__mirror({
      idx: i,
      id_ubicacion: this.__safe(defaults.id_ubicacion, null),
      id_bano: this.__safe(defaults.id_bano, null),
      fecha_inicio: this.__safe(defaults.fecha_inicio, null),
      monto_sin_iva: this.__safe(defaults.monto_sin_iva, null),
      nombre_ubicacion: null,
      geolocalizacion_ubicacion: null,
      id_ruta: null,
    }));

    const next = defaults.id_ubicacion
      ? base.map(line => this.__withUbicacionData(line, defaults.id_ubicacion))
      : base;

    return this.__commit(next);
  },

  getAll() {
    return appsmith.store.lines || [];
  },

  /**
   * Actualiza una línea puntual (merge).
   * @param {number} idx  Índice de la línea.
   * @param {object} patch Campos a actualizar.
   */
  update(idx, patch) {
    const curr = this.getAll();
    if (!Array.isArray(curr) || idx < 0 || idx >= curr.length) return;

    const merged = this.__mirror({ ...curr[idx], ...patch });
    const next = [...curr];
    next[idx] = merged;

    return this.__commit(next);
  },

  /**
   * Cambia la ubicación de UNA línea y autocompleta nombre/ruta/geoloc.
   * @param {number} idx
   * @param {string} idU
   */
  setUbicacion(idx, idU) {
    const curr = this.getAll();
    if (!Array.isArray(curr) || idx < 0 || idx >= curr.length) return;

    const withData = this.__withUbicacionData(curr[idx], idU);
    const next = [...curr];
    next[idx] = withData;

    return this.__commit(next);
  },

  /**
   * Cambia la ubicación de TODAS las líneas y autocompleta nombre/ruta/geoloc.
   * @param {string} idU
   */
  setAllUbicaciones(idU) {
    if (!idU) return;
    const curr = this.getAll();
    if (!Array.isArray(curr) || !curr.length) return;

    const next = curr.map(line => {
      // Preserva TODOS los valores existentes excepto los de ubicación
      return this.__withUbicacionData(line, idU);
    });
    
    return this.__commit(next);
  },

  /**
   * Verifica si hay baños duplicados en las líneas.
   * Devuelve true si hay duplicados y guarda en appsmith.store.__banosDuplicados
   * una lista de pares [idxPrimero, idxDuplicado] para diagnóstico.
   */
  hasDuplicateBanos() {
    const lines = this.getAll() || [];
    const seen = new Map();   // id_bano_normalizado -> índice de la primera aparición
    const dups = [];          // pares [idxPrimero, idxDuplicado]

    const norm = (v) =>
      v === undefined || v === null ? "" : String(v).trim();

    lines.forEach((line, idx) => {
      // Soporta id_bano o bano_id por compatibilidad, preferimos id_bano
      const id = norm(line?.id_bano ?? line?.bano_id);
      if (!id) return; // Ignora vacíos; se validan aparte como obligatorios

      if (seen.has(id)) {
        dups.push([seen.get(id), idx]);
      } else {
        seen.set(id, idx);
      }
    });

    // Guarda el detalle para que el botón lo muestre si hace falta
    storeValue("__banosDuplicados", dups, true);
    return dups.length > 0;
  }
};