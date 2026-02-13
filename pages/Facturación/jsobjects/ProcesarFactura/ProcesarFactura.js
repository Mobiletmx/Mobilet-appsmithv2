export default {
  // === Selección desde la tabla ===
  selected() {
    return Tabla_cobros?.selectedRows ?? [];
  },

  // === Agregados de la selección ===
  cantidad_producto() {
    return this.selected().length;
  },

  monto_total_factura_sin_iva() {
    // Total base = suma de monto_sin_iva
    return this.selected().reduce((acc, r) => acc + Number(r?.monto_sin_iva || 0), 0);
  },

  price() {
    const n = this.cantidad_producto();
    if (!n) return 0;
    return Number((this.monto_total_factura_sin_iva() / n).toFixed(2));
  },

  // === IVA 16% ===
  monto_iva() {
    const base = this.monto_total_factura_sin_iva();
    return Number((base * 0.16).toFixed(2));
  },

  // === Total con IVA ===
  monto_total_con_iva() {
    const base = this.monto_total_factura_sin_iva();
    const iva  = this.monto_iva();
    return Number((base + iva).toFixed(2));
  },

  // === ISR 1.25% si persona_moral ===
  // Nota: aquí asumimos que tu widget se llama exactamente "persona_moral" (Text)
  // y que su .text es "true"/"false" en minúsculas.
  esPersonaMoral() {
    return String(persona_moral?.text ?? "").toLowerCase() === "true";
  },

  monto_isr() {
    const base = this.monto_total_factura_sin_iva();
    return this.esPersonaMoral() ? Number((base * 0.0125).toFixed(2)) : 0;
  },

  // === Strings de IDs y ubicaciones (únicos) ===
  id_cobro_string(sep = ",") {
    return this.selected().map(r => String(r?.id_cobro ?? "")).filter(Boolean).join(sep);
  },

  id_ubicacion_string(sep = ",") {
    const set = new Set();
    for (const r of (this.selected())) {
      const v = r?.id_ubicacion;
      if (v !== null && v !== undefined && String(v).trim() !== "") set.add(String(v));
    }
    return Array.from(set).join(sep);
  },

  id_bano_string(sep = ",") {
    const set = new Set();
    for (const r of (this.selected())) {
      const v = r?.id_bano;
      if (v !== null && v !== undefined && String(v).trim() !== "") set.add(String(v));
    }
    return Array.from(set).join(sep);
  },

  nombre_ubicacion_string(sep = ", ") {
    const set = new Set();
    for (const r of (this.selected())) {
      const v = r?.nombre_ubicacion;
      if (v !== null && v !== undefined && String(v).trim() !== "") set.add(String(v));
    }
    return Array.from(set).join(sep);
  },

	
  // === Descripción agrupada por ubicación+fechas, listando id_bano ===
  renta_sanitarios_descripcion(sep = ", ") {
    const formatDate = (v) => {
      if (!v) return "";
      const s = String(v);
      const m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
      let d;
      if (m) {
        // Construye fecha local para evitar corrimiento por timezone
        d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
      } else {
        d = new Date(v);
      }
      if (isNaN(d)) return "";
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yyyy = d.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    };

    // groups: key -> { nombre, ini, fin, banos: Set }
    const groups = new Map();

    for (const r of (this.selected())) {
      const nombre = String(r?.nombre_ubicacion ?? "").trim();
      if (!nombre) continue;

      const ini = formatDate(r?.fecha_inicio);
      const fin = formatDate(r?.fecha_fin);

      const idBano = String(r?.id_bano ?? "").trim(); // IDs alfanuméricos
      if (!idBano) continue; // si no hay id_bano, no lo agregamos al texto

      const key = `${nombre}||${ini}||${fin}`;

      if (!groups.has(key)) {
        groups.set(key, { nombre, ini, fin, banos: new Set() });
      }

      groups.get(key).banos.add(idBano);
    }

    const partes = Array.from(groups.values()).map(g => {
      const banosArr = Array.from(g.banos);
      const plural = banosArr.length > 1;

      const sujeto = plural ? "los sanitarios" : "un sanitario";
      const listaBanos = banosArr.join(", ");

      let rango = "";
      if (g.ini && g.fin) rango = ` del ${g.ini} al ${g.fin}`;
      else if (g.ini && !g.fin) rango = ` desde ${g.ini}`;
      else if (!g.ini && g.fin) rango = ` hasta ${g.fin}`;

      return `${sujeto} ${listaBanos} en ${g.nombre}${rango}`;
    });

    if (partes.length === 0) return "";

    return `Renta de ${partes.join(sep)}`;
  },

	
	
  // === Validación / flujo de confirmación ===
  boton_guardar_disabled() {
    return this.cantidad_producto() === 0 || this.monto_total_factura_sin_iva() === 0;
  },

  abrirConfirmacion() {
    if (this.boton_guardar_disabled()) {
      showAlert("No se han seleccionado cobros o el total es = 0", "warning");
      return;
    }
    showModal("Modal_confirmar");
  },

  async confirmarYGuardarNuevo() {
    try {
      if (this.boton_guardar_disabled()) {
        showAlert("No se han seleccionado cobros o el total es = 0", "warning");
        return;
      }

      // Tu query ya tiene el body con bindings a .text y a ProcesarFactura.*
      await InsertFacturacion.run();

      showAlert("Factura generada correctamente.", "success");

      // Refresca y cierra
      await GetCobros.run();
      closeModal("Modal_confirmar");
      closeModal("Modal_Procesar");

      // Si quieres limpiar selección: resetWidget("Tabla_cobros", true);
    } catch (e) {
      showAlert(`Error al generar la factura: ${e?.message || e}`, "error");
    }
  }
};
