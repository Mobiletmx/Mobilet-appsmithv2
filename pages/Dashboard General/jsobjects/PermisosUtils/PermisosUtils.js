export default {
  // 1) Mapeo manual de emails a roles
  usuariosRoles: {
    "riosje@gmail.com": "key_user",
    "riosje13@yahoo.com": "key_user",		
    "riosjp88@gmail.com": "key_user",
    "miguegil@gmail.com": "key_user",		
    "rocytec@gmail.com": "auxiliar",
    "logistica@example.com": "logistica",
    "chofer@example.com": "chofer",
    "onboarding@example.com": "onboarding"
  },

  // 2) Mapeo de páginas y roles permitidos
  permisosPorPagina: {
    "Inicio de Sesión": ["key_user", "auxiliar", "logistica", "chofer"],
    "Dashboard General": ["key_user", "auxiliar", "logistica", "chofer"],
    "Usuarios": ["key_user"],
    "Roles-Permisos": ["key_user"],
    "Cotizaciones": ["key_user", "auxiliar"],
    "Inventario": ["key_user", "auxiliar", "logistica", "chofer"],
    "Clientes": ["key_user", "auxiliar"],
    "Ubicaciones": ["key_user", "auxiliar", "logistica"],
    "Pedidos": ["key_user", "auxiliar"],
    "Ordenes de trabajo": ["key_user", "logistica", "chofer"],
    "Cobros": ["key_user", "auxiliar"],
    "Datos Facturación": ["key_user", "auxiliar"],
    "Facturación": ["key_user", "auxiliar"]
  },

  // 3) Mapeo de bloques/secciones dentro de Dashboard General
  permisosPorBloque: {
    "DG_INVENTARIO": ["key_user", "auxiliar", "logistica"],
    "DG_OPERACION": ["key_user", "logistica"],
    "DG_PEDIDOS": ["key_user", "auxiliar"],
    "DG_COBROS": ["key_user", "auxiliar"],
    "DG_ESTADO_CUENTA": ["key_user", "auxiliar"]
  },

  // 4) Obtener el rol del usuario actual (por email)
  getRolUsuario() {
    const email = appsmith.store.userInfo?.email_usuario || "";
    return this.usuariosRoles[email] || null;
  },

  // 5) Verificar si el usuario tiene acceso a una página
  tieneAcceso(nombrePagina) {
    const rol = this.getRolUsuario();

    // Inicio de Sesión siempre visible (por si no hay login)
    if (nombrePagina === "Inicio de Sesión") {
      return true;
    }

    if (!rol) {
      return false; // Sin rol mapeado = sin acceso
    }

    const rolesPermitidos = this.permisosPorPagina[nombrePagina] || [];
    return rolesPermitidos.includes(rol);
  },

  // 6) Verificar si el usuario tiene acceso a un bloque/sección
  tieneAccesoBloque(idBloque) {
    const rol = this.getRolUsuario();
    if (!rol) return false;

    const rolesPermitidos = this.permisosPorBloque[idBloque] || [];
    return rolesPermitidos.includes(rol);
  }
};