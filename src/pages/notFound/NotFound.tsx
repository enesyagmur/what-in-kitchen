import { useNavigate } from "react-router-dom";
import homeBg from "../../assets/homebg3.png";
import { AiFillHome } from "react-icons/ai";

const NotFound = () => {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url(${homeBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
  };
  return (
    <div
      style={backgroundStyle}
      className="w-full h-screen flex items-center justify-center relative"
    >
      <div className="w-8/12 h-4/6 rounded-xl bg-brown_custom flex flex-col items-center justify-center">
        <div className="w-full h-2/6 flex flex-col items-center justify-center">
          <p className=" font-bold text-4xl text-cream_custom ">
            Tühh, yolumuzu kaybettik galiba!
          </p>
          <p className="text-sm text-cream_custom mt-2">
            Mutfağına uygun tarifi bulmak için hemen anasayfaya dönebilirsin.
          </p>
        </div>
        <p className="w-full h-1/6 text-6xl text-cream_custom flex items-center justify-center ">
          <AiFillHome
            className="cursor-pointer hover:text-green_custom"
            onClick={() => navigate("/home")}
          />
        </p>
      </div>
    </div>
  );
};

export default NotFound;
