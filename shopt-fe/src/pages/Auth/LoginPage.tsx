import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/common/Button";
import { useAppSelector } from "../../app/hooks";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useAuth();
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const handleLogin = () => {
    mutation.mutate({ email, password });
  };
  return (
    <div
      className={`max-w-sm mx-auto p-4 mt-40 border rounded-md ${
        darkMode ? "border-white" : ""
      }`}
    >
      <div
        className={`${
          darkMode
            ? "text-white placeholder:text-white"
            : "placeholder:text-black"
        }`}
      >
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
      </div>

      <Button onClick={handleLogin}>Login</Button>
      {mutation.isError && <p className="text-red-500 mt-2">Login failed</p>}
    </div>
  );
}
