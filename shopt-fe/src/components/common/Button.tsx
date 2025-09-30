import type { ReactNode } from "react";
import { useAppSelector } from "../../app/hooks";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ children, onClick, disabled }: ButtonProps) {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md disabled:opacity-50 ${
        darkMode ? "bg-gray-100 " : "bg-blue-600 text-white "
      }`}
    >
      {children}
    </button>
  );
}
