import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import notFoundBg from "../../assets/home-images/homebg3.png";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { FaUser } from "react-icons/fa";

const NotFound = () => {
  const [user, setUser] = useState<boolean>(false);

  const navigate = useNavigate();

  const takeCurrentUser = async () => {
    return new Promise(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(true);
        } else if (user!) {
          setUser(false);
        }
      });
    });
  };

  useEffect(() => {
    takeCurrentUser();
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${notFoundBg})`,
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
          {user ? (
            <p className="text-sm text-cream_custom mt-2">
              Mutfağına uygun tarifi bulmak için hemen anasayfaya dönebilirsin.
            </p>
          ) : (
            <p className="text-sm text-cream_custom mt-2">
              Mutfağına uygun tarifi bulmak için hemen giriş yaparak
              başlayabilirsin.
            </p>
          )}
        </div>
        <p className="w-full h-1/6 text-4xl  md:text-6xl text-cream_custom flex items-center justify-center ">
          {user ? (
            <AiFillHome
              className="cursor-pointer hover:text-green_custom"
              onClick={() => navigate("/home")}
            />
          ) : (
            <FaUser
              className="cursor-pointer hover:text-green_custom"
              onClick={() => navigate("/")}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
