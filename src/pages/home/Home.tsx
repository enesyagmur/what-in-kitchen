import { useEffect, useState } from "react";

import Ai from "./Ai";
import getRandomImage from "../../components/RandomBg";
import { useDispatch } from "react-redux";
import { updateError } from "../../redux/errorSlice";
import { resetResult } from "../../redux/resultSlice";

const Home = () => {
  const [randomImage, setRandomImage] = useState<string>("");
  const [list, setList] = useState<string>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl: string = await getRandomImage();
      setRandomImage(imageUrl);
    };
    fetchImage();

    setList([]);
    dispatch(updateError(""));
    dispatch(resetResult());
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
