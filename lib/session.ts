export const SESSION_COOKIE = 'apsu_auth_token';
export const USER_COOKIE = 'apsu_user';

export const Session = {
  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${SESSION_COOKIE}=`))
      ?.split('=')[1] ?? null;
  },

  setToken(token: string): void {
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${SESSION_COOKIE}=${token}; expires=${expires}; path=/; SameSite=Lax`;
  },

  clearToken(): void {
    document.cookie = `${SESSION_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
  },

  getUser(): { email: string; name?: string } | null {
    if (typeof window === 'undefined') return null;
    const raw = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${USER_COOKIE}=`))
      ?.split('=')[1];
    if (!raw) return null;
    try {
      return JSON.parse(decodeURIComponent(raw));
    } catch {
      return null;
    }
  },

  setUser(user: { email: string; name?: string }): void {
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${USER_COOKIE}=${encodeURIComponent(JSON.stringify(user))}; expires=${expires}; path=/; SameSite=Lax`;
  },

  clearUser(): void {
    document.cookie = `${USER_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
  },

  clearAll(): void {
    this.clearToken();
    this.clearUser();
  },
};
