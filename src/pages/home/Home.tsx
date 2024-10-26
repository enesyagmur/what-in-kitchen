import homeBg from "../../assets/homebg6.png";
import Ai from "./Ai";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${homeBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
  };

  return (
    <div
      style={backgroundStyle}
      className="w-full min-h-svh flex items-center justify-center relative"
    >
      <div className="w-10/12 min-h-[600px] bg-green_custom rounded-lg opacity-50 flex items-center justify-center absolute"></div>
      <Ai />
    </div>
  );
};

export default Home;
