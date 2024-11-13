import { useEffect, useState } from "react";

import Ai from "./Ai";
import getRandomImage from "../../components/RandomBg";

const Home = () => {
  const [randomImage, setRandomImage] = useState<string>("");
  const [list, setList] = useState<string>([]);

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl: string = await getRandomImage();
      setRandomImage(imageUrl);
    };
    fetchImage();

    setList([]);
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
      <Ai list={list} setList={setList} />
    </div>
  );
};

export default Home;
