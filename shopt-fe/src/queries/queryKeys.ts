export const queryKeys = {
  users: ["users"] as const,
  user: (id: string) => ["user", id] as const,
  auth: ["auth"] as const,
};
