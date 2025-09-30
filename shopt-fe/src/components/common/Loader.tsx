import Lottie from "lottie-react";
import cartLoader from "../../assets/cart-loader.json";
import { useAppSelector } from "../../app/hooks";

const Loader = ({ size = 120 }) => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={cartLoader}
        loop
        autoplay
        style={{
          width: size,
          height: size,
          filter: `${darkMode ? "brightness(0) invert(1)" : "none"}`,
        }}
      />
    </div>
  );
};

export default Loader;
