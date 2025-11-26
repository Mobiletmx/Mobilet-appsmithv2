export default {
  // 1) Base: sólo cobros pendientes (estatus_pago = false)
  datosBase: () => {
    const data = GetCobros.data;
    if (!data || !Array.isArray(data)) return [];
    return data.filter(c => c.estatus_pago === false);
  },

  // 2) Clientes disponibles (para el select de cliente)
  clientesDisponibles: () => {
    const base = JSEstadoCuenta.datosBase();
    const mapa = {};
    base.forEach(c => {
      if (!c.id_cliente) return;
      const key = String(c.id_cliente);
      if (!mapa[key]) {
        mapa[key] = c.nombre_cliente || key;
      }
    });
    return Object.keys(mapa).map(id => ({
      label: mapa[id],
      value: id
    }));
  },

  // 3) Datos filtrados por cliente (si no hay cliente, devolver [])
  datosPorCliente: () => {
    const base = JSEstadoCuenta.datosBase();
    const idCliente = sel_cliente_ec.selectedOptionValue;
    if (!idCliente) return [];
    return base.filter(c => String(c.id_cliente) === String(idCliente));
  },

  // 4) Ubicaciones disponibles según cliente (TODAS las del cliente pend., sin periodo)
  ubicacionesDisponibles: () => {
    const porCliente = JSEstadoCuenta.datosPorCliente();
    const mapa = {};
    porCliente.forEach(c => {
      if (c.id_ubicacion === null || c.id_ubicacion === undefined) return;
      const key = String(c.id_ubicacion);
      if (!mapa[key]) {
        mapa[key] = c.nombre_ubicacion || key;
      }
    });

    return Object.keys(mapa).map(id => ({
      label: mapa[id],
      value: id
    }));
  },

  // 5) Datos filtrados por ubicaciones (multiselect)
  datosPorUbicacion: () => {
    const porCliente = JSEstadoCuenta.datosPorCliente();
    const ubicacionesSel = ms_ubicacion_ec.selectedOptionValues;

    if (!ubicacionesSel || ubicacionesSel.length === 0) {
      return porCliente;
    }

    return porCliente.filter(c =>
      ubicacionesSel.includes(String(c.id_ubicacion))
    );
  },

  // 6) Periodos disponibles según cliente + ubicaciones
  periodosDisponibles: () => {
    const porUbicacion = JSEstadoCuenta.datosPorUbicacion();
    const periodos = [
      ...new Set(porUbicacion.map(c => c.periodo_cobro))
    ].filter(p => p !== null && p !== undefined);

    return periodos
      .map(p => Number(p))
      .sort((a, b) => a - b)
      .map(p => p.toString());
  },

  // 7) Datos filtrados por periodo (multiselect)
  datosPorPeriodo: () => {
    const porUbicacion = JSEstadoCuenta.datosPorUbicacion();
    const periodosSel = ms_periodo_ec.selectedOptionValues;

    if (!periodosSel || periodosSel.length === 0) {
      return porUbicacion;
    }
    return porUbicacion.filter(c =>
      periodosSel.includes(String(c.periodo_cobro))
    );
  },

  // 8) Datos finales para el List (ordenados por periodo ascendente)
  datosTabla: () => {
    const datos = JSEstadoCuenta.datosPorPeriodo();
    return datos.sort((a, b) =>
      Number(a.periodo_cobro) - Number(b.periodo_cobro)
    );
  },

  // 9) KPIs
  cantidadCobrosPendientes: () => {
    return JSEstadoCuenta.datosTabla().length;
  },

  totalSinIVA: () => {
    return JSEstadoCuenta.datosTabla()
      .reduce((sum, c) => sum + (c.monto_sin_iva || 0), 0);
  },

  totalConIVA: () => {
    return JSEstadoCuenta.datosTabla()
      .reduce((sum, c) => sum + (c.monto_total_con_iva || 0), 0);
  }
};