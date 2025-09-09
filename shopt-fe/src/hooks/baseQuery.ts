import {
  useMutation,
  useQuery,
  type QueryKey,
  type UseMutationOptions,
  type UseQueryOptions,
} from "@tanstack/react-query";

export function useBaseQuery<T>(
  key: QueryKey,
  queryFn: () => Promise<T>,
  options?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">
) {
  return useQuery<T>({
    queryKey: key,
    queryFn,
    ...options,
  });
}

export function useBaseMutation<TData, TVariables>(
  mutationFn: (vars: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, Error, TVariables>
) {
  return useMutation<TData, Error, TVariables>({
    mutationFn,
    ...options,
  });
}
