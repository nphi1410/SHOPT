import { BaseApi } from "./base/baseApi";
import type { User } from "../types/user";

export const userApi = new BaseApi<User>("/users");
