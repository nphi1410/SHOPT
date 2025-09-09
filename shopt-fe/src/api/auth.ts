import type { LoginResponse } from "../types/auth";
import client from "./base/client";

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const { data } = await client.post("/auth/login", { email, password });
  return data;
};
