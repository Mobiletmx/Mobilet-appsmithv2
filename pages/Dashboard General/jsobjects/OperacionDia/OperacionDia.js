export default {
  // Dataset filtrado por día y ruta, excluyendo Lista negra
  datosFiltrados: () => {
    const data = GetOrdenesTrabajo.data || [];

    // Día seleccionado (default = hoy si no hay selección)
    const diaSel = dp_dia_operacion.selectedDate 
      ? moment(dp_dia_operacion.selectedDate).format("YYYY-MM-DD")
      : moment().format("YYYY-MM-DD");

    // Ruta seleccionada (null o vacío = todas)
    const rutaSel = sel_ruta_operacion.selectedOptionValue;

    return data.filter(ot => {
      const fechaProg = moment(ot.fecha_programada).format("YYYY-MM-DD");
      const coincideDia = fechaProg === diaSel;
      const coincideRuta = !rutaSel || ot.id_ruta === rutaSel;
      const noListaNegra = ot.estatus_ot !== "Lista negra";
      
      return coincideDia && coincideRuta && noListaNegra;
    });
  },

  // Dataset SIN excluir Lista negra (para el indicador de Lista negra)
  datosFiltradosConListaNegra: () => {
    const data = GetOrdenesTrabajo.data || [];

    const diaSel = dp_dia_operacion.selectedDate 
      ? moment(dp_dia_operacion.selectedDate).format("YYYY-MM-DD")
      : moment().format("YYYY-MM-DD");

    const rutaSel = sel_ruta_operacion.selectedOptionValue;

    return data.filter(ot => {
      const fechaProg = moment(ot.fecha_programada).format("YYYY-MM-DD");
      const coincideDia = fechaProg === diaSel;
      const coincideRuta = !rutaSel || ot.id_ruta === rutaSel;
      
      return coincideDia && coincideRuta;
    });
  },

  // Total sin Lista negra
  totalSinListaNegra: () => {
    return OperacionDia.datosFiltrados().length;
  }
};