import { LoginPage } from "./pages/Auth/LoginPage";
import { Navbar } from "./components/layout/Navbar";
import { useAppSelector } from "./app/hooks";
import { UsersPage } from "./pages/Users/UsersPage";

export default function App() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const login = useAppSelector((state) => state.loginState.isLogin);
  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode ? "bg-gray-800" : "bg-gray-200"
      }`}
    >
      <Navbar />
      <main className={`p-4 `}>{!login ? <LoginPage /> : <UsersPage />}</main>
    </div>
  );
}
