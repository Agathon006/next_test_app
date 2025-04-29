type BaseAPIOptions = RequestInit & {
  baseURL: string;
  cookies?(): string;
};

export class BaseAPI {
  private baseURL: string;
  private defaults: RequestInit;
  private cookies?(): string;

  constructor({ baseURL, cookies, ...options }: BaseAPIOptions) {
    this.baseURL = baseURL;
    this.defaults = options;
    this.cookies = cookies;
  }

  private async handleRequest<T>(url: string, options: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseURL}${url}`, {
      ...this.defaults,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Cookie: this.cookies?.() ?? '',
        ...(options.headers || {}),
      },
    });

    const json = await response.json();

    if (!response.ok && json.error) {
      throw new Error(json.error.message || 'Something went wrong.');
    }

    return (json?.data ?? json) as T;
  }

  get<T>(url: string, options: RequestInit = {}) {
    return this.handleRequest<T>(url, { ...options, method: 'GET' });
  }

  post<T>(url: string, data?: unknown, options: RequestInit = {}) {
    return this.handleRequest<T>(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  patch<T>(url: string, data?: unknown, options: RequestInit = {}) {
    return this.handleRequest<T>(url, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  delete<T>(url: string, options: RequestInit = {}) {
    return this.handleRequest<T>(url, {
      ...options,
      method: 'DELETE',
    });
  }
}

export const api = new BaseAPI({
  // export baseURL: 'https://jsonplaceholder.typicode.com',
  baseURL: 'http://localhost:3001',
});
