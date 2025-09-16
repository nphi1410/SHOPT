import Lottie from "lottie-react";
import cartLoader from "../../assets/cart-loader.json";

const Loader = ({ size = 120 }) => {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={cartLoader}
        loop
        autoplay
        style={{ width: size, height: size, filter: "brightness(0) invert(1)" }}
      />
    </div>
  );
};

export default Loader;
