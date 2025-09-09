import client from "./client";

export class BaseApi<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  async getAll(): Promise<T[]> {
    const { data } = await client.get(this.baseUrl);
    return data;
  }

  async getById(id: string): Promise<T> {
    const { data } = await client.get(`${this.baseUrl}/${id}`);
    return data;
  }

  async create(payload: Partial<T>): Promise<T> {
    const { data } = await client.post(this.baseUrl, payload);
    return data;
  }

  async update(id: string, payload: Partial<T>): Promise<T> {
    const { data } = await client.put(`${this.baseUrl}/${id}`, payload);
    return data;
  }

  async delete(id: string): Promise<void> {
    await client.delete(`${this.baseUrl}/${id}`);
  }
}
