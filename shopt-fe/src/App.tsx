import { HomePage } from "./pages/Home/HomePage";
import { UsersPage } from "./pages/Users/UsersPage";
import { LoginPage } from "./pages/Auth/LoginPage";
import { Navbar } from "./components/layout/Navbar";
import Loader from "./components/common/Loader";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <HomePage />
        <UsersPage />
        <LoginPage />
        <div className="flex justify-center items-center h-100">
          <Loader />
        </div>
      </main>
    </div>
  );
}
