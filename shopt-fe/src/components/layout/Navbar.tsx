import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logOut } from "../../features/user/loginSlice";
import TextLogo from "../common/TextLogo";
import ThemeToggle from "../common/ThemeToogle";

export function Navbar() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const login = useAppSelector((state) => state.loginState.isLogin);
  const dispatch = useAppDispatch();

  return (
    <nav
      className={`w-full  p-4 flex align-center gap-2 transition-colors shadow-md
      ${darkMode ? "bg-gray-900 text-white shadow-gray-200" : "bg-white"}`}
    >
      <TextLogo />
      <ThemeToggle />
      {login && <button onClick={() => dispatch(logOut())}>Logout</button>}
    </nav>
  );
}
