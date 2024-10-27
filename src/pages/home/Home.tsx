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
      className="w-full min-h-screen flex items-center justify-center relative"
    >
      <Ai />
    </div>
  );
};

export default Home;
