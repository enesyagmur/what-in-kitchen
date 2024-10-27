import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import getRandomImage from "../../components/RandomBg";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [randomImage, setRandomImage] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl: string = await getRandomImage();
      setRandomImage(imageUrl);
    };
    fetchImage();
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${randomImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
  };

  return (
    <div
      style={backgroundStyle}
      className="w-full h-screen flex items-center justify-center relative"
    >
      <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 h-4/6  rounded-xl bg-brown_custom flex flex-col items-center justify-center">
        <div className="w-full h-2/6 flex flex-col items-center justify-center">
          <p className=" font-bold text-2xl md:text-3xl lg:text-4xl text-cream_custom ">
            Tühh, yolumuzu kaybettik galiba!
          </p>
          <p className="text-sm text-cream_custom mt-2">
            Mutfağına uygun tarifi bulmak için hemen anasayfaya dönebilirsin.
          </p>
        </div>
        <p className="w-full h-1/6 text-4xl  md:text-6xl text-cream_custom flex items-center justify-center ">
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
