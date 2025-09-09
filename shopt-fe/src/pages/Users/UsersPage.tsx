import { useUsers } from "../../hooks/useUsers";
import { Loader } from "../../components/common/Loader";
import { UserCard } from "../../components/cards/UserCard";

export function UsersPage() {
  const { data, isLoading } = useUsers();

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid gap-4">
        {data?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
