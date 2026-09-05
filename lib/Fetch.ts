import axios from "axios";
import { AppConfig } from "../config/app.config";
import { Session } from "./session";

type AdapterOption = "fetch" | "axios";

const baseUrl = `${AppConfig().app.apiUrl}`;

// Configure axios defaults once
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

let interceptorAdded = false;

function ensureAuthInterceptor() {
  if (interceptorAdded) return;
  interceptorAdded = true;

  axios.interceptors.request.use(config => {
    const token = Session.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) {
        Session.clearAll();
      }
      return Promise.reject(error);
    }
  );
}

ensureAuthInterceptor();

/**
 * Custom fetch class
 *
 * Credentials are included automatically for all requests.
 * Auth headers are attached automatically via axios interceptor
 * when a session token is present.
 */
export class Fetch {
  private static _adapter: AdapterOption = "axios";

  static setAdapter(adapter: AdapterOption) {
    this._adapter = adapter;
  }

  private static getFetchConfig(header?: Record<string, any>): RequestInit {
    return {
      ...header,
      credentials: "include",
    };
  }

  static async get(url: string, header?: Record<string, any>) {
    if (this._adapter === "axios") {
      return await axios.get(url, header);
    }
    const res = await fetch(`${baseUrl}${url}`, this.getFetchConfig(header));
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.message ?? `Request failed with status ${res.status}`);
    }
    return res.json();
  }

  static async post(url: string, data: any, header?: Record<string, any>) {
    if (this._adapter === "axios") {
      return await axios.post(url, data, header);
    }
    const res = await fetch(`${baseUrl}${url}`, {
      ...this.getFetchConfig(header),
      method: "POST",
      body: data,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.message ?? `Request failed with status ${res.status}`);
    }
    return res.json();
  }

  static async put(url: string, data: any, header?: Record<string, any>) {
    if (this._adapter === "axios") {
      return await axios.put(url, data, header);
    }
    const res = await fetch(`${baseUrl}${url}`, {
      ...this.getFetchConfig(header),
      method: "PUT",
      body: data,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.message ?? `Request failed with status ${res.status}`);
    }
    return res.json();
  }

  static async patch(url: string, data: any, header?: Record<string, any>) {
    if (this._adapter === "axios") {
      return await axios.patch(url, data, header);
    }
    const res = await fetch(`${baseUrl}${url}`, {
      ...this.getFetchConfig(header),
      method: "PATCH",
      body: data,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.message ?? `Request failed with status ${res.status}`);
    }
    return res.json();
  }

  static async delete(url: string, header?: Record<string, any>) {
    if (this._adapter === "axios") {
      return await axios.delete(url, header);
    }
    const res = await fetch(`${baseUrl}${url}`, {
      ...this.getFetchConfig(header),
      method: "DELETE",
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.message ?? `Request failed with status ${res.status}`);
    }
    return res.json();
  }
}
