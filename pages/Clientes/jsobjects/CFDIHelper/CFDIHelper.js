export default {
  // === 1) Datos duros desde tu catálogo SAT (persona, régimen, uso CFDI) ===
  data() {
    return [
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "D01",
    "uso_de_cfdi_name": "D01 - Honorarios médicos, dentales y gastos hospitalarios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "D01",
    "uso_de_cfdi_name": "D01 - Honorarios médicos, dentales y gastos hospitalarios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "D01",
    "uso_de_cfdi_name": "D01 - Honorarios médicos, dentales y gastos hospitalarios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "D01",
    "uso_de_cfdi_name": "D01 - Honorarios médicos, dentales y gastos hospitalarios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "D01",
    "uso_de_cfdi_name": "D01 - Honorarios médicos, dentales y gastos hospitalarios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "D01",
    "uso_de_cfdi_name": "D01 - Honorarios médicos, dentales y gastos hospitalarios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "D01",
    "uso_de_cfdi_name": "D01 - Honorarios médicos, dentales y gastos hospitalarios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "D01",
    "uso_de_cfdi_name": "D01 - Honorarios médicos, dentales y gastos hospitalarios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "D01",
    "uso_de_cfdi_name": "D01 - Honorarios médicos, dentales y gastos hospitalarios."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "D02",
    "uso_de_cfdi_name": "D02 - Gastos médicos por incapacidad o discapacidad."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "D02",
    "uso_de_cfdi_name": "D02 - Gastos médicos por incapacidad o discapacidad."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "D02",
    "uso_de_cfdi_name": "D02 - Gastos médicos por incapacidad o discapacidad."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "D02",
    "uso_de_cfdi_name": "D02 - Gastos médicos por incapacidad o discapacidad."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "D02",
    "uso_de_cfdi_name": "D02 - Gastos médicos por incapacidad o discapacidad."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "D02",
    "uso_de_cfdi_name": "D02 - Gastos médicos por incapacidad o discapacidad."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "D02",
    "uso_de_cfdi_name": "D02 - Gastos médicos por incapacidad o discapacidad."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "D02",
    "uso_de_cfdi_name": "D02 - Gastos médicos por incapacidad o discapacidad."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "D02",
    "uso_de_cfdi_name": "D02 - Gastos médicos por incapacidad o discapacidad."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "D03",
    "uso_de_cfdi_name": "D03 - Gastos funerales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "D03",
    "uso_de_cfdi_name": "D03 - Gastos funerales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "D03",
    "uso_de_cfdi_name": "D03 - Gastos funerales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "D03",
    "uso_de_cfdi_name": "D03 - Gastos funerales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "D03",
    "uso_de_cfdi_name": "D03 - Gastos funerales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "D03",
    "uso_de_cfdi_name": "D03 - Gastos funerales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "D03",
    "uso_de_cfdi_name": "D03 - Gastos funerales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "D03",
    "uso_de_cfdi_name": "D03 - Gastos funerales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "D03",
    "uso_de_cfdi_name": "D03 - Gastos funerales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "D04",
    "uso_de_cfdi_name": "D04 - Donativos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "D04",
    "uso_de_cfdi_name": "D04 - Donativos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "D04",
    "uso_de_cfdi_name": "D04 - Donativos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "D04",
    "uso_de_cfdi_name": "D04 - Donativos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "D04",
    "uso_de_cfdi_name": "D04 - Donativos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "D04",
    "uso_de_cfdi_name": "D04 - Donativos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "D04",
    "uso_de_cfdi_name": "D04 - Donativos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "D04",
    "uso_de_cfdi_name": "D04 - Donativos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "D04",
    "uso_de_cfdi_name": "D04 - Donativos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "D05",
    "uso_de_cfdi_name": "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "D05",
    "uso_de_cfdi_name": "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "D05",
    "uso_de_cfdi_name": "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "D05",
    "uso_de_cfdi_name": "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "D05",
    "uso_de_cfdi_name": "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "D05",
    "uso_de_cfdi_name": "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "D05",
    "uso_de_cfdi_name": "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "D05",
    "uso_de_cfdi_name": "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "D05",
    "uso_de_cfdi_name": "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "D06",
    "uso_de_cfdi_name": "D06 - Aportaciones voluntarias al SAR."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "D06",
    "uso_de_cfdi_name": "D06 - Aportaciones voluntarias al SAR."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "D06",
    "uso_de_cfdi_name": "D06 - Aportaciones voluntarias al SAR."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "D06",
    "uso_de_cfdi_name": "D06 - Aportaciones voluntarias al SAR."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "D06",
    "uso_de_cfdi_name": "D06 - Aportaciones voluntarias al SAR."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "D06",
    "uso_de_cfdi_name": "D06 - Aportaciones voluntarias al SAR."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "D06",
    "uso_de_cfdi_name": "D06 - Aportaciones voluntarias al SAR."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "D06",
    "uso_de_cfdi_name": "D06 - Aportaciones voluntarias al SAR."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "D06",
    "uso_de_cfdi_name": "D06 - Aportaciones voluntarias al SAR."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "D07",
    "uso_de_cfdi_name": "D07 - Primas por seguros de gastos médicos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "D07",
    "uso_de_cfdi_name": "D07 - Primas por seguros de gastos médicos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "D07",
    "uso_de_cfdi_name": "D07 - Primas por seguros de gastos médicos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "D07",
    "uso_de_cfdi_name": "D07 - Primas por seguros de gastos médicos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "D07",
    "uso_de_cfdi_name": "D07 - Primas por seguros de gastos médicos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "D07",
    "uso_de_cfdi_name": "D07 - Primas por seguros de gastos médicos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "D07",
    "uso_de_cfdi_name": "D07 - Primas por seguros de gastos médicos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "D07",
    "uso_de_cfdi_name": "D07 - Primas por seguros de gastos médicos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "D07",
    "uso_de_cfdi_name": "D07 - Primas por seguros de gastos médicos."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "D08",
    "uso_de_cfdi_name": "D08 - Gastos de transportación escolar obligatoria."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "D08",
    "uso_de_cfdi_name": "D08 - Gastos de transportación escolar obligatoria."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "D08",
    "uso_de_cfdi_name": "D08 - Gastos de transportación escolar obligatoria."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "D08",
    "uso_de_cfdi_name": "D08 - Gastos de transportación escolar obligatoria."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "D08",
    "uso_de_cfdi_name": "D08 - Gastos de transportación escolar obligatoria."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "D08",
    "uso_de_cfdi_name": "D08 - Gastos de transportación escolar obligatoria."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "D08",
    "uso_de_cfdi_name": "D08 - Gastos de transportación escolar obligatoria."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "D08",
    "uso_de_cfdi_name": "D08 - Gastos de transportación escolar obligatoria."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "D08",
    "uso_de_cfdi_name": "D08 - Gastos de transportación escolar obligatoria."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "D09",
    "uso_de_cfdi_name": "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "D09",
    "uso_de_cfdi_name": "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "D09",
    "uso_de_cfdi_name": "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "D09",
    "uso_de_cfdi_name": "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "D09",
    "uso_de_cfdi_name": "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "D09",
    "uso_de_cfdi_name": "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "D09",
    "uso_de_cfdi_name": "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "D09",
    "uso_de_cfdi_name": "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "D09",
    "uso_de_cfdi_name": "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "D10",
    "uso_de_cfdi_name": "D10 - Pagos por servicios educativos (colegiaturas)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "D10",
    "uso_de_cfdi_name": "D10 - Pagos por servicios educativos (colegiaturas)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "D10",
    "uso_de_cfdi_name": "D10 - Pagos por servicios educativos (colegiaturas)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "D10",
    "uso_de_cfdi_name": "D10 - Pagos por servicios educativos (colegiaturas)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "D10",
    "uso_de_cfdi_name": "D10 - Pagos por servicios educativos (colegiaturas)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "D10",
    "uso_de_cfdi_name": "D10 - Pagos por servicios educativos (colegiaturas)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "D10",
    "uso_de_cfdi_name": "D10 - Pagos por servicios educativos (colegiaturas)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "D10",
    "uso_de_cfdi_name": "D10 - Pagos por servicios educativos (colegiaturas)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "D10",
    "uso_de_cfdi_name": "D10 - Pagos por servicios educativos (colegiaturas)."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "610",
    "regimen_fiscal_name": "610 - Residentes en el Extranjero sin Establecimiento Permanente en México",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "616",
    "regimen_fiscal_name": "616 - Sin obligaciones fiscales",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "610",
    "regimen_fiscal_name": "610 - Residentes en el Extranjero sin Establecimiento Permanente en México",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "616",
    "regimen_fiscal_name": "616 - Sin obligaciones fiscales",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Fisica",
    "tipo_cliente_name": "Persona Física",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "CN01",
    "uso_de_cfdi_name": "CN01 - Nómina"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "G01",
    "uso_de_cfdi_name": "G01 - Adquisición de mercancías."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "G02",
    "uso_de_cfdi_name": "G02 - Devoluciones, descuentos o bonificaciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "G03",
    "uso_de_cfdi_name": "G03 - Gastos en general."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I01",
    "uso_de_cfdi_name": "I01 - Construcciones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I02",
    "uso_de_cfdi_name": "I02 - Mobiliario y equipo de oficina por inversiones."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I03",
    "uso_de_cfdi_name": "I03 - Equipo de transporte."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I04",
    "uso_de_cfdi_name": "I04 - Equipo de computo y accesorios."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I05",
    "uso_de_cfdi_name": "I05 - Dados, troqueles, moldes, matrices y herramental."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I06",
    "uso_de_cfdi_name": "I06 - Comunicaciones telefónicas."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I07",
    "uso_de_cfdi_name": "I07 - Comunicaciones satelitales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "I08",
    "uso_de_cfdi_name": "I08 - Otra maquinaria y equipo."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "610",
    "regimen_fiscal_name": "610 - Residentes en el Extranjero sin Establecimiento Permanente en México",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "616",
    "regimen_fiscal_name": "616 - Sin obligaciones fiscales",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "S01",
    "uso_de_cfdi_name": "S01 - Sin efectos fiscales."
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "601",
    "regimen_fiscal_name": "601 - General de Ley Personas Morales",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "603",
    "regimen_fiscal_name": "603 - Personas Morales con Fines no Lucrativos",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "605",
    "regimen_fiscal_name": "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "606",
    "regimen_fiscal_name": "606 - Arrendamiento",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "608",
    "regimen_fiscal_name": "608 - Demás ingresos",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "610",
    "regimen_fiscal_name": "610 - Residentes en el Extranjero sin Establecimiento Permanente en México",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "611",
    "regimen_fiscal_name": "611 - Ingresos por Dividendos (socios y accionistas)",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "612",
    "regimen_fiscal_name": "612 - Personas Físicas con Actividades Empresariales y Profesionales",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "614",
    "regimen_fiscal_name": "614 - Ingresos por intereses",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "616",
    "regimen_fiscal_name": "616 - Sin obligaciones fiscales",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "620",
    "regimen_fiscal_name": "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "621",
    "regimen_fiscal_name": "621 - Incorporación Fiscal",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "622",
    "regimen_fiscal_name": "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "623",
    "regimen_fiscal_name": "623 - Opcional para Grupos de Sociedades",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "624",
    "regimen_fiscal_name": "624 - Coordinados",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "607",
    "regimen_fiscal_name": "607 - Régimen de Enajenación o Adquisición de Bienes",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "615",
    "regimen_fiscal_name": "615 - Régimen de los ingresos por obtención de premios",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "625",
    "regimen_fiscal_name": "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  },
  {
    "tipo_cliente_value": "Persona Moral",
    "tipo_cliente_name": "Persona Moral",
    "regimen_fiscal_value": "626",
    "regimen_fiscal_name": "626 - Régimen Simplificado de Confianza",
    "uso_de_cfdi_value": "CP01",
    "uso_de_cfdi_name": "CP01 - Pagos"
  }
];
  },

  // === 2) Opciones para el select tipo_cliente ===
  optionsTipoCliente() {
    const rows = this.data();
    const seen = new Set();
    const out = [];

    rows.forEach(r => {
      const val = String(r.tipo_cliente_value || "").trim();
      const name = String(r.tipo_cliente_name || "").trim();
      if (!val || !name) return;
      if (seen.has(val)) return;
      seen.add(val);
      out.push({ label: name, value: val });
    });

    out.sort((a, b) => a.label.localeCompare(b.label, "es"));
    return out;
  },

  // === 3) Opciones para el select regimen_fiscal (filtrado por tipo_cliente) ===
  optionsRegimenFiscal() {
    const tipoSel = tipo_cliente?.selectedOptionValue;
    if (!tipoSel) return [];
    const tipoNorm = String(tipoSel).trim();

    const rows = this.data();
    const seen = new Set();
    const out = [];

    rows.forEach(r => {
      const tipoVal = String(r.tipo_cliente_value || "").trim();
      if (tipoVal !== tipoNorm) return;

      const regVal  = String(r.regimen_fiscal_value || "").trim();
      const regName = String(r.regimen_fiscal_name || "").trim();
      if (!regVal || !regName) return;
      if (seen.has(regVal)) return;
      seen.add(regVal);
      out.push({ label: regName, value: regVal });
    });

    out.sort((a, b) => a.label.localeCompare(b.label, "es"));
    return out;
  },

  // === 4) Opciones para el select uso_de_cfdi (filtrado por tipo_cliente + régimen) ===
  optionsUsoCFDI() {
    const tipoSel    = tipo_cliente?.selectedOptionValue;
    const regimenSel = regimen_fiscal?.selectedOptionValue;
    if (!tipoSel || !regimenSel) return [];

    const tipoNorm    = String(tipoSel).trim();
    const regimenNorm = String(regimenSel).trim();

    const rows = this.data();
    const seen = new Set();
    const out = [];

    rows.forEach(r => {
      const tipoVal = String(r.tipo_cliente_value || "").trim();
      const regVal  = String(r.regimen_fiscal_value || "").trim();
      const usoVal  = String(r.uso_de_cfdi_value || "").trim();
      const usoName = String(r.uso_de_cfdi_name || "").trim();

      if (!tipoVal || !regVal || !usoVal || !usoName) return;
      if (tipoVal !== tipoNorm) return;
      if (regVal !== regimenNorm) return;
      if (seen.has(usoVal)) return;
      seen.add(usoVal);
      out.push({ label: usoName, value: usoVal });
    });

    out.sort((a, b) => a.label.localeCompare(b.label, "es"));
    return out;
  }
};
