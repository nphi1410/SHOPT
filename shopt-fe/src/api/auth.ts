import type { LoginResponse } from "../types/auth";
import client from "./base/client";

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  // const { data } = await client.post("/auth/login", { email, password });
  // return data;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // fake check: success if password === "123456", else error
      if (password === "123456") {
        resolve({
          token: "fake-jwt-token",
          userId: "1",
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000); // simulate 1s network delay
  });
};
