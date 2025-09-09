import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/common/Button";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useAuth();

  const handleLogin = () => mutation.mutate({ email, password });

  return (
    <div className="max-w-sm mx-auto p-4 border rounded">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border w-full mb-2 p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border w-full mb-2 p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      {mutation.isError && <p className="text-red-500 mt-2">Login failed</p>}
    </div>
  );
}
