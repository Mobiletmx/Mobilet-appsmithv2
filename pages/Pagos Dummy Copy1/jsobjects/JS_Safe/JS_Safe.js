export default {
  // detecta rutas con tipos no serializables (function, symbol, undefined)
  findNonSerializable(obj) {
    const problems = [];
    const seen = new WeakSet();

    const isPrimitive = v => v === null || (typeof v !== "object" && typeof v !== "function");

    function walk(value, path) {
      // evitar repetir objetos (ciclos)
      if (value && typeof value === "object") {
        if (seen.has(value)) return;
        seen.add(value);
      }
      const t = typeof value;
      if (t === "function" || t === "symbol" || t === "undefined") {
        problems.push({ path, type: t, valuePreview: String(value) });
        return;
      }
      if (isPrimitive(value)) return;
      // Si es objeto/array, iterar
      if (Array.isArray(value)) {
        value.forEach((v, i) => walk(v, `${path}[${i}]`));
      } else {
        Object.keys(value || {}).forEach(k => {
          try {
            walk(value[k], path ? `${path}.${k}` : k);
          } catch (e) {
            problems.push({ path: path ? `${path}.${k}` : k, type: typeof value[k], valuePreview: String(value[k]) });
          }
        });
      }
    }

    walk(obj, "");
    return problems;
  },

  // intenta guardar en store solo si es serializable; devuelve objeto con resultado y detalles
  async safeStore(key, value) {
    // primer intento simple con JSON.stringify
    try {
      JSON.stringify(value);
      // si stringify OK, hacemos store
      storeValue(key, value, true);
      return { ok: true, message: "Stored successfully", problems: [] };
    } catch (err) {
      // si falla stringify, buscar rutas problemáticas
      const problems = this.findNonSerializable(value);
      // si no se hallaron funciones/símbolos, puede ser referencia circular u otro; incluir mensaje
      if (!problems.length) {
        return { ok: false, message: "No se pudo serializar: posible referencia circular u objeto complejo", problems: [] };
      }
      return { ok: false, message: "Se detectaron valores no serializables", problems };
    }
  }
}