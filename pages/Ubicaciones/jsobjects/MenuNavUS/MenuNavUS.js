export default {
  // Catálogo completo de páginas
  allPages() {
    return [
      { label: "Dashboard General", value: "Dashboard General" },
      { label: "Dashboard Auxiliar", value: "Dashboard Auxiliar" },
      { label: "Dashboard Logística", value: "Dashboard Logística" },
      { label: "Dashboard Operación", value: "Dashboard Operación" },
      { label: "Cotizaciones", value: "Cotizaciones" },
      { label: "Inventario", value: "Inventario" },
      { label: "Clientes", value: "Clientes" },
      { label: "Ubicaciones", value: "Ubicaciones" },
      { label: "Pedidos", value: "Pedidos" },
      { label: "Órdenes de trabajo", value: "Órdenes de trabajo" },
      { label: "Cobros", value: "Cobros" },
      { label: "Datos Clientes Facturación", value: "Datos Clientes Facturación" },
      { label: "Facturación", value: "Facturación" },
      { label: "Usuarios", value: "Usuarios" },
      { label: "Roles - Permisos", value: "Roles - Permisos" }
      // Agrega más páginas si las tienes
    ];
  },

  // Devuelve todas las páginas sin filtro
  options() {
    return this.allPages().map(p => ({
      label: p.label,
      value: p.value
    }));
  },

  // Navega a la página seleccionada
  irAPagina(nombrePagina) {
    if (!nombrePagina) return;
    navigateTo(nombrePagina);
  }
};