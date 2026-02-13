export default {
  // === Opciones de rutas (dependen del día seleccionado) ===
  // Nota: id_ruta ya es el nombre de la ruta, así que label/value son iguales.
  rutasDisponibles: () => {
    const data = GetOrdenesTrabajo.data || [];

    // Si NO hay día seleccionado, no mostramos rutas
    if (!dp_dia_operacion.selectedDate) {
      return [{ label: "Selecciona un día", value: "" }];
    }

    const diaSel = moment(dp_dia_operacion.selectedDate).format("YYYY-MM-DD");

    const delDia = data.filter(ot =>
      moment(ot.fecha_programada).format("YYYY-MM-DD") === diaSel
    );

    const set = new Set();
    for (const ot of delDia) {
      const ruta = String(ot?.id_ruta ?? "").trim();
      if (ruta) set.add(ruta);
    }

    const opciones = Array.from(set)
      .sort((a, b) => a.localeCompare(b))
      .map(r => ({ label: r, value: r }));

    return [{ label: "Todas", value: "" }, ...opciones];
  },

  // Dataset filtrado por día y ruta, excluyendo Lista negra
  datosFiltrados: () => {
    const data = GetOrdenesTrabajo.data || [];

    // Si NO hay día seleccionado, no mostramos información
    if (!dp_dia_operacion.selectedDate) return [];

    const diaSel = moment(dp_dia_operacion.selectedDate).format("YYYY-MM-DD");

    // Ruta seleccionada (null o vacío = todas)
    const rutaSel = sel_ruta_operacion.selectedOptionValue;

    return data.filter(ot => {
      const fechaProg = moment(ot.fecha_programada).format("YYYY-MM-DD");
      const coincideDia = fechaProg === diaSel;
      const coincideRuta = !rutaSel || String(ot.id_ruta) === String(rutaSel);
      const noListaNegra = ot.estatus_ot !== "Lista negra";
      return coincideDia && coincideRuta && noListaNegra;
    });
  },

  // Dataset SIN excluir Lista negra (para el indicador de Lista negra)
  datosFiltradosConListaNegra: () => {
    const data = GetOrdenesTrabajo.data || [];

    // Si NO hay día seleccionado, no mostramos información
    if (!dp_dia_operacion.selectedDate) return [];

    const diaSel = moment(dp_dia_operacion.selectedDate).format("YYYY-MM-DD");

    const rutaSel = sel_ruta_operacion.selectedOptionValue;

    return data.filter(ot => {
      const fechaProg = moment(ot.fecha_programada).format("YYYY-MM-DD");
      const coincideDia = fechaProg === diaSel;
      const coincideRuta = !rutaSel || String(ot.id_ruta) === String(rutaSel);
      return coincideDia && coincideRuta;
    });
  },

  // Total sin Lista negra
  totalSinListaNegra: () => {
    return OperacionDia.datosFiltrados().length;
  }
};
