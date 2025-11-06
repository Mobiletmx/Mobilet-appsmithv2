export default {
  // Inicializa desde fila seleccionada (delegar)
  setFromRow(row) {
    return JS_UTILS.setFromCobro(row);
  },

  // Wrapper explícito
  setFromCobro(cobro) {
    return JS_UTILS.setFromCobro(cobro);
  },

  // Merge parcial (usa sanitize + normalize dentro)
  mergeAndStore(partial) {
    return JS_UTILS.mergeAndStorePagForm(partial);
  },

  clear() {
    return JS_UTILS.clearPag();
  }
};