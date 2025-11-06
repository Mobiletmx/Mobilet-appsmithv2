export default {
  // Guarda la fila (item o orden) en appsmith.store.otSel
  setFromRow(row) {
    if (!row) {
      storeValue("otSel", null, true);
      return;
    }
    // Normaliza claves mínimas: toma campos del row y del raw si es necesario,
    // e incluye la PK id_orden_de_trabajo en varias variantes
    const pk = row.id_orden_de_trabajo ?? row._id_orden_de_trabajo ?? row.id_orden ?? row._id_orden ?? null;

    const normalized = {
      id_item_pedido: row.id_item_pedido ?? row.id_item ?? null,
      id_pedido: row.id_pedido ?? null,
      id_cliente: row.id_cliente ?? null,
      nombre_cliente: row.nombre_cliente ?? null,
      id_bano: row.id_bano ?? row._raw?.id_bano ?? null,
      fecha_inicio: row.fecha_inicio ?? row.fecha_programada ?? null,
      fecha_programada: row.fecha_programada ?? row.fecha_inicio ?? null,
      estatus_pedido: row.estatus_pedido ?? row.status_pedido ?? null,
      actividad_programada: row.actividad_programada ?? row.tipo_actividad ?? row.actividad ?? null,
      estatus_ot: row.estatus_ot ?? row.estatus ?? row.status ?? null,
      id_ubicacion: row.id_ubicacion ?? row._raw?.id_ubicacion ?? null,
      id_ruta: row.id_ruta ?? row._raw?.id_ruta ?? null,
      geolocalizacion_ubicacion: row.geolocalizacion_ubicacion ?? row._raw?.geolocalizacion_ubicacion ?? null,
      nombre_ubicacion: row.nombre_ubicacion ?? row._raw?.nombre_ubicacion ?? null,
      costo_reparacion: row.costo_reparacion ?? null,
      // PK normalizada
      id_orden_de_trabajo: pk,
      _id_orden_de_trabajo: pk,
      id_orden: pk,
      _raw: row
    };
    storeValue("otSel", normalized, true);
  },

  // Para editar: pasar la orden (GetOrdenesTrabajo.data)
  setFromOrden(orden) {
    if (!orden) { storeValue("otSel", null, true); return; }
    const pk = orden.id_orden_de_trabajo ?? orden._id_orden_de_trabajo ?? orden.id_orden ?? orden.id ?? null;
    const normalized = {
      id_orden: orden.id_orden ?? orden.id ?? null,
      // Mantenemos ambos nombres por compatibilidad: tipo_actividad y actividad_programada
      tipo_actividad: orden.tipo_actividad ?? orden.actividad ?? null,
      actividad_programada: orden.actividad_programada ?? orden.tipo_actividad ?? orden.actividad ?? null,
      id_item_pedido: orden.id_item_pedido ?? null,
      id_bano: orden.id_bano ?? null,
      fecha_programada: orden.fecha_programada ?? orden.fecha_inicio ?? null,
      fecha_ejecucion: orden.fecha_ejecucion ?? null,
      costo_reparacion: orden.costo_reparacion ?? null,
      estatus_ot: orden.estatus_ot ?? orden.estatus ?? orden.status ?? null,
      estatus: orden.estatus ?? orden.status ?? null,
      id_ubicacion: orden.id_ubicacion ?? orden._raw?.id_ubicacion ?? null,
      id_ruta: orden.id_ruta ?? orden._raw?.id_ruta ?? null,
      geolocalizacion_ubicacion: orden.geolocalizacion_ubicacion ?? orden._raw?.geolocalizacion_ubicacion ?? null,
      nombre_ubicacion: orden.nombre_ubicacion ?? orden._raw?.nombre_ubicacion ?? null,
      // PK normalizada
      id_orden_de_trabajo: pk,
      _id_orden_de_trabajo: pk,
      _raw: orden
    };
    storeValue("otSel", normalized, true);
  },

  clear() {
    // limpiar solo otSel; boton_nuevo ya limpia otForm cuando corresponde
    storeValue("otSel", null, true);
  },

  // Días transcurridos: fechaProgramada (string/Date), fechaEjecucion (string/Date)
  diasTranscurridos(fechaProgramada, fechaEjecucion) {
    if (!fechaProgramada || !fechaEjecucion) return null;
    const fProg = new Date(fechaProgramada);
    const fEje = new Date(fechaEjecucion);
    if (isNaN(fProg) || isNaN(fEje)) return null;
    const diff = Math.floor((fEje - fProg) / (1000 * 60 * 60 * 24));
    return diff;
  }
};