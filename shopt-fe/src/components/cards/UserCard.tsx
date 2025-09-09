import type { User } from "../../types/user";

type Props = { user: User };

export function UserCard({ user }: Props) {
  return (
    <div className="border p-4 rounded-md shadow">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
