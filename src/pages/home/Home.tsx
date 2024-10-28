import { useEffect, useState } from "react";

import Ai from "./Ai";
import getRandomImage from "../../components/RandomBg";

const Home = () => {
  const [randomImage, setRandomImage] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl: string = await getRandomImage();
      setRandomImage(imageUrl);
    };
    fetchImage();
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${randomImage})`,

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
