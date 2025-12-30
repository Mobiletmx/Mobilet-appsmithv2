export default {
  /**
   * 1) Unifica datos de GetPedidos + GetClientes + GetCobros
   *    y agrega totales por pedido a partir de GetCobros.
   */
  datosBase: () => {
    const pedidos = Array.isArray(GetPedidos.data) ? GetPedidos.data : [];
    const clientes = Array.isArray(GetClientes.data) ? GetClientes.data : [];
    const cobros = Array.isArray(GetCobros.data) ? GetCobros.data : [];

    // Index de clientes por id_cliente
    const mapaClientes = {};
    clientes.forEach(cl => {
      if (!cl.id_cliente) return;
      mapaClientes[String(cl.id_cliente)] = cl;
    });

    // Agrupar cobros por id_item_pedido
    const mapaCobros = {};
    cobros.forEach(co => {
      const idPedido = co.id_item_pedido;
      const key = idPedido ? String(idPedido) : null;
      if (!key) return;
      if (!mapaCobros[key]) {
        mapaCobros[key] = [];
      }
      mapaCobros[key].push(co);
    });

    // Construimos un arreglo de pedidos enriquecidos
    const resultado = pedidos.map(p => {
      const idCliente = p.id_cliente ? String(p.id_cliente) : null;
      const idPedido = p.id_item_pedido ? String(p.id_item_pedido) : null;

      const cliente = idCliente ? mapaClientes[idCliente] : null;
      const cobrosPedido = idPedido && mapaCobros[idPedido] ? mapaCobros[idPedido] : [];

      // Totales financieros a partir de GetCobros
      let totalCobradoSin = 0;
      let totalCobradoCon = 0;
      let totalNoPagadoSin = 0;

      cobrosPedido.forEach(co => {
        const msin = co.monto_sin_iva || 0;
        const mcon = co.monto_total_con_iva || 0;
        totalCobradoSin += msin;
        totalCobradoCon += mcon;
        if (co.estatus_pago === false) {
          totalNoPagadoSin += msin;
        }
      });

      return {
        // Campos de GetPedidos
        ...p,
        id_item_pedido: p.id_item_pedido,
        id_cliente: p.id_cliente,
        id_ubicacion: p.id_ubicacion,
        nombre_ubicacion: p.nombre_ubicacion,
        id_ruta: p.id_ruta,
        estatus_pedido: p.estatus_pedido,
        fecha_pedido: p.fecha_pedido,
        categoria_bano: p.categoria_bano,
        monto_pedido_sin_iva: p.monto_sin_iva,
        monto_pedido_total_con_iva: p.monto_total_con_iva,

        // Cliente
        nombre_cliente: cliente?.nombre_cliente ?? null,
        lista_negra: cliente?.lista_negra ?? null,

        // Cobros crudos
        cobros: cobrosPedido,

        // Agregados financieros
        total_cobrado_sin_iva: totalCobradoSin,
        total_cobrado_con_iva: totalCobradoCon,
        total_no_pagado_sin_iva: totalNoPagadoSin
      };
    });

    return resultado;
  },

  /**
   * 2) Filtro por fecha_pedido (rango).
   */
  datosPorFecha: () => {
    const base = JSPedidos.datosBase();

    const inicio = dp_fecha_inicio_ped.selectedDate;
    const fin = dp_fecha_fin_ped.selectedDate;

    return base.filter(p => {
      const f = p.fecha_pedido ? new Date(p.fecha_pedido) : null;
      if (!f) return false;

      if (inicio) {
        const fi = new Date(inicio);
        if (f < fi) return false;
      }
      if (fin) {
        const ff = new Date(fin);
        ff.setHours(23, 59, 59, 999);
        if (f > ff) return false;
      }
      return true;
    });
  },

  /**
   * 3) Filtros por estatus (multi), cliente (multi),
   *    pedido (multi) y ubicación (multi).
   */
  datosFiltrados: () => {
    let datos = JSPedidos.datosPorFecha();

    // 3.1 Filtro por estatus (ms_estatus_ped)
    const estatusSel = ms_estatus_ped.selectedOptionValues || [];
    if (estatusSel.length > 0) {
      datos = datos.filter(p => {
        const estatus = p.estatus_pedido;
        const esNuevo = estatus === null || estatus === "" || estatus === undefined;
        const etiqueta =
          esNuevo ? "Nuevo" :
          estatus === "Activo" ? "Activo" :
          estatus === "Cerrado" ? "Cerrado" :
          estatus || "Otro";
        return estatusSel.includes(etiqueta);
      });
    }

    // 3.2 Filtro por cliente (ms_cliente_ped)
    const clientesSel = ms_cliente_ped.selectedOptionValues || [];
    if (clientesSel.length > 0) {
      datos = datos.filter(p => clientesSel.includes(p.nombre_cliente));
    }

    // 3.3 Filtro por pedido (ms_pedido_ped)
    const pedidosSel = ms_pedido_ped.selectedOptionValues || [];
    if (pedidosSel.length > 0) {
      datos = datos.filter(p => pedidosSel.includes(String(p.id_item_pedido)));
    }

    // 3.4 Filtro por ubicación (ms_ubicacion_ped)
    const ubicSel = ms_ubicacion_ped.selectedOptionValues || [];
    if (ubicSel.length > 0) {
      datos = datos.filter(p => ubicSel.includes(p.nombre_ubicacion));
    }

    return datos;
  },

  /**
   * 4) Opciones para los filtros (autopobladas).
   *    Siempre se basan en datosPorFecha().
   */

  // 4.1 Clientes disponibles
  clientesDisponibles: () => {
    const datos = JSPedidos.datosPorFecha();
    const mapa = {};
    datos.forEach(p => {
      if (!p.nombre_cliente) return;
      mapa[p.nombre_cliente] = true;
    });
    return Object.keys(mapa).sort().map(nombre => ({
      label: nombre,
      value: nombre
    }));
  },

  // 4.2 Pedidos disponibles
  pedidosDisponibles: () => {
    const datos = JSPedidos.datosPorFecha();
    const mapa = {};
    datos.forEach(p => {
      if (!p.id_item_pedido) return;
      const key = String(p.id_item_pedido);
      mapa[key] = true;
    });
    return Object.keys(mapa).sort().map(id => ({
      label: id,
      value: id
    }));
  },

  // 4.3 Ubicaciones disponibles
  ubicacionesDisponibles: () => {
    const datos = JSPedidos.datosPorFecha();
    const mapa = {};
    datos.forEach(p => {
      if (!p.nombre_ubicacion) return;
      mapa[p.nombre_ubicacion] = true;
    });
    return Object.keys(mapa).sort().map(nombre => ({
      label: nombre,
      value: nombre
    }));
  },

  // 4.4 Estatus disponibles
  estatusDisponibles: () => {
    const datos = JSPedidos.datosPorFecha();
    const flags = {
      Nuevo: false,
      Activo: false,
      Cerrado: false
    };

    datos.forEach(p => {
      const estatus = p.estatus_pedido;
      const esNuevo = estatus === null || estatus === "" || estatus === undefined;
      if (esNuevo) flags.Nuevo = true;
      else if (estatus === "Activo") flags.Activo = true;
      else if (estatus === "Cerrado") flags.Cerrado = true;
    });

    const opciones = [];
    if (flags.Nuevo) opciones.push({ label: "Nuevo", value: "Nuevo" });
    if (flags.Activo) opciones.push({ label: "Activo", value: "Activo" });
    if (flags.Cerrado) opciones.push({ label: "Cerrado", value: "Cerrado" });
    return opciones;
  },

  /**
   * 5) KPIs sobre datosFiltrados()
   */

  datosKPI: () => {
    return JSPedidos.datosFiltrados();
  },

  // 5.1 Pedidos totales
  kpiPedidosTotales: () => {
    return JSPedidos.datosKPI().length;
  },

  // 5.2 Cantidades por estatus
  kpiPedidosPorEstatus: () => {
    const datos = JSPedidos.datosKPI();
    let nuevos = 0, activos = 0, cerrados = 0;

    datos.forEach(p => {
      const estatus = p.estatus_pedido;
      const esNuevo = estatus === null || estatus === "" || estatus === undefined;
      if (esNuevo) nuevos++;
      else if (estatus === "Activo") activos++;
      else if (estatus === "Cerrado") cerrados++;
    });

    return { nuevos, activos, cerrados };
  },

  // 5.3 Valores por estatus (suma total_cobrado_sin_iva)
  kpiValoresPorEstatus: () => {
    const datos = JSPedidos.datosKPI();
    let nuevos = 0, activos = 0, cerrados = 0;

    datos.forEach(p => {
      const estatus = p.estatus_pedido;
      const esNuevo = estatus === null || estatus === "" || estatus === undefined;
      const valor = p.total_cobrado_sin_iva || 0;

      if (esNuevo) nuevos += valor;
      else if (estatus === "Activo") activos += valor;
      else if (estatus === "Cerrado") cerrados += valor;
    });

    return { nuevos, activos, cerrados };
  },

  // 5.4 Monto total cobrado (suma total_cobrado_sin_iva)
  kpiCobradoTotal: () => {
    const datos = JSPedidos.datosKPI();
    return datos.reduce(
      (sum, p) => sum + (p.total_cobrado_sin_iva || 0),
      0
    );
  },

  // 5.5 Valor de cobros no pagados (suma total_no_pagado_sin_iva)
  kpiNoPagadoValor: () => {
    const datos = JSPedidos.datosKPI();
    return datos.reduce(
      (sum, p) => sum + (p.total_no_pagado_sin_iva || 0),
      0
    );
  },

  // 5.6 Porcentaje no pagado = total_no_pagado_sin_iva / total_cobrado_sin_iva
  kpiNoPagadoPorcentaje: () => {
    const datos = JSPedidos.datosKPI();
    let totalCobrado = 0;
    let totalNoPagado = 0;

    datos.forEach(p => {
      totalCobrado += p.total_cobrado_sin_iva || 0;
      totalNoPagado += p.total_no_pagado_sin_iva || 0;
    });

    if (totalCobrado <= 0) return 0;
    return totalNoPagado / totalCobrado;
  },

  // 5.7 Monto total pagado (total cobrado - no pagado)
  kpiPagadoValor: () => {
    const datos = JSPedidos.datosKPI();
    let totalCobrado = 0;
    let totalNoPagado = 0;

    datos.forEach(p => {
      totalCobrado += p.total_cobrado_sin_iva || 0;
      totalNoPagado += p.total_no_pagado_sin_iva || 0;
    });

    return totalCobrado - totalNoPagado;
  },

  // 5.8 Porcentaje pagado = pagado / total_cobrado
  kpiPagadoPorcentaje: () => {
    const datos = JSPedidos.datosKPI();
    let totalCobrado = 0;
    let totalNoPagado = 0;

    datos.forEach(p => {
      totalCobrado += p.total_cobrado_sin_iva || 0;
      totalNoPagado += p.total_no_pagado_sin_iva || 0;
    });

    if (totalCobrado <= 0) return 0;
    const pagado = totalCobrado - totalNoPagado;
    return pagado / totalCobrado;
  },

  /**
   * 6) Pie charts
   */

  // 6.1 Pie por cantidad de pedidos (Nuevos / Activos / Cerrados)
  pieCantidadPorEstatus: () => {
    const est = JSPedidos.kpiPedidosPorEstatus();
    const total = (est.nuevos || 0) + (est.activos || 0) + (est.cerrados || 0);

    if (!total) {
      return [];
    }

    return [
      { x: "Nuevo",   y: est.nuevos  || 0, porcentaje: (est.nuevos  || 0) / total },
      { x: "Activo",  y: est.activos || 0, porcentaje: (est.activos || 0) / total },
      { x: "Cerrado", y: est.cerrados|| 0, porcentaje: (est.cerrados|| 0) / total }
    ];
  },

  // 6.2 Pie por valor de pedidos (Nuevos / Activos / Cerrados)
  pieValorPorEstatus: () => {
    const vals = JSPedidos.kpiValoresPorEstatus();
    const total = (vals.nuevos || 0) + (vals.activos || 0) + (vals.cerrados || 0);

    if (!total) {
      return [];
    }

    return [
      { x: "Nuevo",   y: vals.nuevos  || 0, porcentaje: (vals.nuevos  || 0) / total },
      { x: "Activo",  y: vals.activos || 0, porcentaje: (vals.activos || 0) / total },
      { x: "Cerrado", y: vals.cerrados|| 0, porcentaje: (vals.cerrados|| 0) / total }
    ];
  },

  // 6.3 Pie chart: Pagado vs No Pagado (monto)
  piePagadoVsNoPagado: () => {
    const pagado = JSPedidos.kpiPagadoValor();
    const noPagado = JSPedidos.kpiNoPagadoValor();
    const total = pagado + noPagado || 1;

    return [
      {
        x: "Pagado",
        y: pagado,
        porcentaje: pagado / total
      },
      {
        x: "No Pagado",
        y: noPagado,
        porcentaje: noPagado / total
      }
    ];
  },

  /**
   * 7) Distribución de pedidos por categoria_bano (Eventos vs Obras)
   *    Usa los mismos filtros de JSPedidos, sin filtrar por estatus.
   */
  distribucionEventosObras: () => {
    const datos = JSPedidos.datosFiltrados() || [];

    const total = datos.length;
    let eventos = 0;
    let obras = 0;

    datos.forEach(p => {
      const cat = (p.categoria_bano || "").toString().trim().toLowerCase();
      if (cat.includes("evento")) {
        eventos++;
      } else if (cat.includes("obra")) {
        obras++;
      }
    });

    const totalEO = eventos + obras;

    return {
      total,             // total de pedidos filtrados
      eventos,
      obras,
      totalEO,           // total de eventos + obras
      porcentajeEventos: totalEO > 0 ? eventos / totalEO : 0,
      porcentajeObras: totalEO > 0 ? obras / totalEO : 0
    };
  },

  /**
   * 7.1 Porcentaje para widget de progreso: Eventos (0–100)
   */
  progresoEventos: () => {
    const d = JSPedidos.distribucionEventosObras();
    return d.porcentajeEventos * 100;
  },

  /**
   * 7.2 Porcentaje para widget de progreso: Obras (0–100)
   */
  progresoObras: () => {
    const d = JSPedidos.distribucionEventosObras();
    return d.porcentajeObras * 100;
  }
};