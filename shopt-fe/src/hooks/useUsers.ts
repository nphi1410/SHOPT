import { userApi } from "../api/users";
import { useBaseQuery } from "./baseQuery";
import { queryKeys } from "../queries/queryKeys";

export function useUsers() {
  return useBaseQuery(queryKeys.users, () => userApi.getAll());
}
