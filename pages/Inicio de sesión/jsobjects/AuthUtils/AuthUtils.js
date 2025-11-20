export default {
  // Tiempo máximo de inactividad permitido
  IDLE_MAX_SEC: 2 * 60 * 60,   // 2 horas en segundos

  ping() {
    storeValue('last_activity', Math.floor(Date.now()/1000));
  },

  async ensureFresh() {
    const now = Math.floor(Date.now()/1000);
    const exp = appsmith.store.access_token_exp || 0;
    const last = appsmith.store.last_activity || now;

    // 1) Revisar inactividad
    if ((now - last) > this.IDLE_MAX_SEC) {
      await this.softLogout();
      return '';
    }

    // 2) Token aún válido
    if (now < (exp - 30)) {
      return appsmith.store.access_token || '';
    }

    // 3) Refrescar si expiró
    const resp = await refresh_token.run().catch(() => null);
    if (!resp || !refresh_token.data?.access_token) {
      await this.softLogout();
      return '';
    }

    storeValue("access_token", refresh_token.data.access_token);
    storeValue("refresh_token", refresh_token.data.refresh_token || appsmith.store.refresh_token);
    storeValue("access_token_exp", Math.floor(Date.now()/1000) + (refresh_token.data.expires_in || 3600));
    this.ping();  // actividad al usar el refresh
    return refresh_token.data.access_token;
  },

  async softLogout() {
    storeValue('access_token','');
    storeValue('refresh_token','');
    storeValue('access_token_exp',0);
    storeValue('last_activity',0);
    navigateTo('Login');
  }
}