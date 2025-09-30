import { useAppSelector } from "../../app/hooks";

const TextLogo = ({ size = 20 }) => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <img
      src={
        darkMode ? "/shoptimize-logo-light.svg" : "/shoptimize-logo-dark.svg"
      }
      alt="logo"
      style={{ width: size * 10, height: "auto" }}
    />
  );
};
export default TextLogo;
