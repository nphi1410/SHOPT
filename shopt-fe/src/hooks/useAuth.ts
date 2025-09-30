import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { logIn } from "../features/user/loginSlice";
import { useAppDispatch } from "../app/hooks";

export function useAuth() {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: (data) => {
      dispatch(logIn());
    },
  });
}
