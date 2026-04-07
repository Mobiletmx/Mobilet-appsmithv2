export default {
  // Tipos de actividad válidos
  ACTIVIDADES_VALIDAS: new Set([
    "Entrega con cliente",
    "Recoleccion con cliente",
    "Limpieza con cliente"
  ]),

  // === Opciones de rutas (vienen directamente del query del día) ===
  rutasDisponibles: () => {
    const data = GetOrdenesTrabajoPorDia.data || [];

    const set = new Set();
    for (const ot of data) {
      const ruta = String(ot?.id_ruta ?? "").trim();
      if (ruta) set.add(ruta);
    }

    const opciones = Array.from(set)
      .sort((a, b) => a.localeCompare(b))
      .map(r => ({ label: r, value: r }));

    return [{ label: "Todas", value: "" }, ...opciones];
  },

  // Dataset filtrado por ruta y tipo de actividad, excluyendo Lista negra
  datosFiltrados: () => {
    const data = GetOrdenesTrabajoPorDia.data || [];
    const rutaSel = sel_ruta_operacion.selectedOptionValue;
    const actividadesValidas = new Set([
      "Entrega con cliente",
      "Recoleccion con cliente",
      "Limpieza con cliente"
    ]);

    return data.filter(ot => {
      const coincideRuta = !rutaSel || String(ot.id_ruta) === String(rutaSel);
      const noListaNegra = ot.estatus_ot !== "Lista negra";
      const actividadValida = actividadesValidas.has(ot.actividad_programada);
      return coincideRuta && noListaNegra && actividadValida;
    });
  },

  // Dataset para Lista negra (incluye todo el día, solo actividades válidas)
  datosFiltradosConListaNegra: () => {
    const data = GetOrdenesTrabajoPorDia.data || [];
    const rutaSel = sel_ruta_operacion.selectedOptionValue;
    const actividadesValidas = new Set([
      "Entrega con cliente",
      "Recoleccion con cliente",
      "Limpieza con cliente"
    ]);

    return data.filter(ot => {
      const coincideRuta = !rutaSel || String(ot.id_ruta) === String(rutaSel);
      const actividadValida = actividadesValidas.has(ot.actividad_programada);
      return coincideRuta && actividadValida;
    });
  },

  // Total para los relojes
  totalSinListaNegra: () => {
    return this.datosFiltrados().length;
  }
};