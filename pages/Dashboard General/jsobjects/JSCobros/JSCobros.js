export default {
  // Obtener el periodo más alto (más reciente)
  periodoMasAlto: () => {
    const data = GetCobros.data || [];
    if (!data.length) return "";

    const periodos = [...new Set(data.map(c => c.periodo_cobro))];
    return Math.max(...periodos).toString(); // string
  },

  // Periodos seleccionados (o el más alto si no hay selección)
  periodosSeleccionados: () => {
    const sel = ms_periodo_cobro.selectedOptionValues;
    if (sel && sel.length > 0) {
      return sel;
    }
    const maxP = JSCobros.periodoMasAlto();
    return maxP ? [maxP] : [];
  },

  // Dataset filtrado por periodos seleccionados
  datosFiltrados: () => {
    const data = GetCobros.data || [];
    const periodos = JSCobros.periodosSeleccionados();
    if (!periodos.length) return [];
    return data.filter(c => periodos.includes(c.periodo_cobro));
  },

  // a. Pendiente por cobrar en $ (monto)
  pendienteMonto: () => {
    return JSCobros.datosFiltrados()
      .filter(c => c.estatus_pago === false)
      .reduce((sum, c) => sum + (c.monto_sin_iva || 0), 0);
  },

  // Total de monto en el periodo (para calcular %)
  totalMonto: () => {
    return JSCobros.datosFiltrados()
      .reduce((sum, c) => sum + (c.monto_sin_iva || 0), 0);
  },

  // b. Pendiente por cobrar en % (vs total del periodo)
  pendientePct: () => {
    const total = JSCobros.totalMonto() || 1;
    const pendiente = JSCobros.pendienteMonto();
    return ((pendiente / total) * 100).toFixed(2);
  },

  // c. Cobros facturados pendientes en $ (monto)
  factPendienteMonto: () => {
    return JSCobros.datosFiltrados()
      .filter(c => c.estatus_pago === false && c.estatus_factura === true)
      .reduce((sum, c) => sum + (c.monto_sin_iva || 0), 0);
  },

  // Total facturado (para calcular %)
  totalFacturado: () => {
    return JSCobros.datosFiltrados()
      .filter(c => c.estatus_factura === true)
      .reduce((sum, c) => sum + (c.monto_sin_iva || 0), 0);
  },

  // d. Cobros facturados pendientes en %
  factPendientePct: () => {
    const total = JSCobros.totalFacturado() || 1;
    const pendiente = JSCobros.factPendienteMonto();
    return ((pendiente / total) * 100).toFixed(2);
  },

  // Serie 1: Pendiente por cobrar (array de objetos {x, y}) ordenado desc por periodo
  chartPendienteSerie: () => {
    const data = GetCobros.data || [];
    const periodosSel = JSCobros.periodosSeleccionados();
    if (!periodosSel.length) return [];

    // Periodos únicos como números para ordenar bien
    const periodosOrdenados = [...new Set(
      data
        .filter(c => periodosSel.includes(c.periodo_cobro))
        .map(c => Number(c.periodo_cobro))
    )].sort((a, b) => b - a);  // descendente numérico

    return periodosOrdenados.map(pNum => {
      const pStr = pNum.toString();
      const registros = data.filter(c => c.periodo_cobro === pStr);

      const pendiente = registros
        .filter(c => c.estatus_pago === false)
        .reduce((sum, c) => sum + (c.monto_sin_iva || 0), 0);

      return {
        x: pStr,
        y: pendiente
      };
    });
  },

  // Serie 2: Facturado pendiente (array de objetos {x, y}) ordenado desc por periodo
  chartFactPendienteSerie: () => {
    const data = GetCobros.data || [];
    const periodosSel = JSCobros.periodosSeleccionados();
    if (!periodosSel.length) return [];

    const periodosOrdenados = [...new Set(
      data
        .filter(c => periodosSel.includes(c.periodo_cobro))
        .map(c => Number(c.periodo_cobro))
    )].sort((a, b) => b - a);  // descendente numérico

    return periodosOrdenados.map(pNum => {
      const pStr = pNum.toString();
      const registros = data.filter(c => c.periodo_cobro === pStr);

      const factPendiente = registros
        .filter(c => c.estatus_pago === false && c.estatus_factura === true)
        .reduce((sum, c) => sum + (c.monto_sin_iva || 0), 0);

      return {
        x: pStr,
        y: factPendiente
      };
    });
  }
};