export default {

  // Clasificador de estatus
  getEstatus: (p) => {
    if (p.estatus_pedido === "Cerrado") return "Cerrado";
    if (p.estatus_pedido === "Activo") return "Activo";
    return "Nuevo";
  },

  // Dataset base
  datosBase: () => {
    return GetPedidosPorFecha.data || [];
  },

  // Dataset filtrado por UI
  datosFiltrados: () => {
    let datos = JSPedidos.datosBase();

    const estatusSel = ms_estatus_ped.selectedOptionValues || [];
    if (estatusSel.length > 0) {
      datos = datos.filter(p => estatusSel.includes(JSPedidos.getEstatus(p)));
    }

    const clientesSel = ms_cliente_ped.selectedOptionValues || [];
    if (clientesSel.length > 0) {
      datos = datos.filter(p => clientesSel.includes(String(p.id_cliente)));
    }

    const pedidosSel = ms_pedido_ped.selectedOptionValues || [];
    if (pedidosSel.length > 0) {
      datos = datos.filter(p => pedidosSel.includes(String(p.id_item_pedido)));
    }

    const ubicSel = ms_ubicacion_ped.selectedOptionValues || [];
    if (ubicSel.length > 0) {
      datos = datos.filter(p => ubicSel.includes(String(p.id_ubicacion)));
    }

    return datos;
  },

  // ================================
  // Opciones para filtros (sin encadenamiento)
  // Siempre basadas en datosBase()
  // ================================

  estatusDisponibles: () => [
    { label: "Nuevo",   value: "Nuevo" },
    { label: "Activo",  value: "Activo" },
    { label: "Cerrado", value: "Cerrado" }
  ],

  clientesDisponibles: () => {
    const datos = JSPedidos.datosBase();
    const mapa = {};
    datos.forEach(p => {
      if (!p.id_cliente) return;
      mapa[String(p.id_cliente)] = p.comodinp_b || String(p.id_cliente);
    });
    return Object.entries(mapa)
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map(([id, nombre]) => ({ label: nombre, value: id }));
  },

  pedidosDisponibles: () => {
    const datos = JSPedidos.datosBase();
    const mapa = {};
    datos.forEach(p => {
      if (!p.id_item_pedido) return;
      const key = String(p.id_item_pedido);
      mapa[key] = `${p.id_item_pedido} - ${p.id_bano || ""}`;
    });
    return Object.entries(mapa)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([id, label]) => ({ label, value: id }));
  },

  ubicacionesDisponibles: () => {
    const datos = JSPedidos.datosBase();
    const mapa = {};
    datos.forEach(p => {
      if (!p.id_ubicacion) return;
      mapa[String(p.id_ubicacion)] = p.nombre_ubicacion || String(p.id_ubicacion);
    });
    return Object.entries(mapa)
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map(([id, nombre]) => ({ label: nombre, value: id }));
  },

  // =====================
  // PIE 1: Total Pedidos
  // =====================
  kpiPedidos: () => {
    const datos = JSPedidos.datosFiltrados();
    let nuevos = 0, activos = 0, cerrados = 0;
    datos.forEach(p => {
      const e = JSPedidos.getEstatus(p);
      if (e === "Nuevo") nuevos++;
      else if (e === "Activo") activos++;
      else cerrados++;
    });
    return { total: datos.length, nuevos, activos, cerrados };
  },

  piePedidos: () => {
    const k = JSPedidos.kpiPedidos();
    return [
      { x: "Nuevos",   y: k.nuevos },
      { x: "Activos",  y: k.activos },
      { x: "Cerrados", y: k.cerrados }
    ].filter(d => d.y > 0);
  },

  // ======================
  // PIE 2: Total Clientes
  // ======================
  kpiClientes: () => {
    const datos = JSPedidos.datosFiltrados();
    const setNuevos = new Set();
    const setActivos = new Set();
    const setCerrados = new Set();

    datos.forEach(p => {
      const e = JSPedidos.getEstatus(p);
      if (!p.id_cliente) return;
      if (e === "Nuevo") setNuevos.add(p.id_cliente);
      else if (e === "Activo") setActivos.add(p.id_cliente);
      else setCerrados.add(p.id_cliente);
    });

    const todos = new Set([...setNuevos, ...setActivos, ...setCerrados]);
    return {
      total: todos.size,
      nuevos: setNuevos.size,
      activos: setActivos.size,
      cerrados: setCerrados.size
    };
  },

  pieClientes: () => {
    const k = JSPedidos.kpiClientes();
    return [
      { x: "Nuevos",   y: k.nuevos },
      { x: "Activos",  y: k.activos },
      { x: "Cerrados", y: k.cerrados }
    ].filter(d => d.y > 0);
  },

  // ========================
  // PIE 3: Total Ubicaciones
  // ========================
  kpiUbicaciones: () => {
    const datos = JSPedidos.datosFiltrados();
    const setNuevos = new Set();
    const setActivos = new Set();
    const setCerrados = new Set();

    datos.forEach(p => {
      const e = JSPedidos.getEstatus(p);
      if (!p.id_ubicacion) return;
      if (e === "Nuevo") setNuevos.add(p.id_ubicacion);
      else if (e === "Activo") setActivos.add(p.id_ubicacion);
      else setCerrados.add(p.id_ubicacion);
    });

    const todos = new Set([...setNuevos, ...setActivos, ...setCerrados]);
    return {
      total: todos.size,
      nuevos: setNuevos.size,
      activos: setActivos.size,
      cerrados: setCerrados.size
    };
  },

  pieUbicaciones: () => {
    const k = JSPedidos.kpiUbicaciones();
    return [
      { x: "Nuevos",   y: k.nuevos },
      { x: "Activos",  y: k.activos },
      { x: "Cerrados", y: k.cerrados }
    ].filter(d => d.y > 0);
  },

  // ================================
  // BARRAS 1: Pedidos por Ruta
  // ================================
  graficoPedidosRuta: () => {
    const datos = JSPedidos.datosFiltrados();
    const rutas = {};

    datos.forEach(p => {
      const r = p.id_ruta || "Sin Ruta";
      if (!rutas[r]) rutas[r] = { x: r, nuevos: 0, activos: 0, cerrados: 0 };
      const e = JSPedidos.getEstatus(p);
      if (e === "Nuevo") rutas[r].nuevos++;
      else if (e === "Activo") rutas[r].activos++;
      else rutas[r].cerrados++;
    });

    return Object.values(rutas).sort((a, b) => a.x.localeCompare(b.x));
  },

  graficoPedidosRutaNuevos: () => {
    return JSPedidos.graficoPedidosRuta().map(r => ({ x: r.x, y: r.nuevos }));
  },
  graficoPedidosRutaActivos: () => {
    return JSPedidos.graficoPedidosRuta().map(r => ({ x: r.x, y: r.activos }));
  },
  graficoPedidosRutaCerrados: () => {
    return JSPedidos.graficoPedidosRuta().map(r => ({ x: r.x, y: r.cerrados }));
  },

  // ==================================
  // BARRAS 2: Ubicaciones por Ruta
  // ==================================
  graficoUbicacionesRuta: () => {
    const datos = JSPedidos.datosFiltrados();
    const rutas = {};

    datos.forEach(p => {
      const r = p.id_ruta || "Sin Ruta";
      if (!rutas[r]) rutas[r] = {
        x: r,
        setNuevos: new Set(),
        setActivos: new Set(),
        setCerrados: new Set()
      };
      const e = JSPedidos.getEstatus(p);
      if (!p.id_ubicacion) return;
      if (e === "Nuevo") rutas[r].setNuevos.add(p.id_ubicacion);
      else if (e === "Activo") rutas[r].setActivos.add(p.id_ubicacion);
      else rutas[r].setCerrados.add(p.id_ubicacion);
    });

    return Object.values(rutas).map(r => ({
      x: r.x,
      nuevos: r.setNuevos.size,
      activos: r.setActivos.size,
      cerrados: r.setCerrados.size
    })).sort((a, b) => a.x.localeCompare(b.x));
  },

  graficoUbicacionesRutaNuevos: () => {
    return JSPedidos.graficoUbicacionesRuta().map(r => ({ x: r.x, y: r.nuevos }));
  },
  graficoUbicacionesRutaActivos: () => {
    return JSPedidos.graficoUbicacionesRuta().map(r => ({ x: r.x, y: r.activos }));
  },
  graficoUbicacionesRutaCerrados: () => {
    return JSPedidos.graficoUbicacionesRuta().map(r => ({ x: r.x, y: r.cerrados }));
  },

  // ================================
  // PIE 4: Eventos vs Obras
  // ================================
  pieEventosObras: () => {
    const datos = JSPedidos.datosFiltrados();
    let eventos = 0, obras = 0;

    datos.forEach(p => {
      const cat = (p.categoria_bano || "").toLowerCase();
      if (cat.includes("evento")) eventos++;
      else if (cat.includes("obra")) obras++;
    });

    return [
      { x: "Eventos", y: eventos },
      { x: "Obras",   y: obras }
    ].filter(d => d.y > 0);
  }
};