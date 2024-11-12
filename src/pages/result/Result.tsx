import { useEffect, useState } from "react";
import getRandomImage from "../../components/RandomBg";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";
import Successful from "./Successful";
import Unsuccessful from "./Unsuccessful";

const Result = () => {
  const [randomImage, setRandomImage] = useState<string>("");
  const answer = useSelector((state: rootState) => state.apiAnswer.answer);
  const errorResult = useSelector((state: rootState) => state.sliceError.error);

  const fetchImage = async () => {
    const imageUrl: string = await getRandomImage();
    setRandomImage(imageUrl);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${randomImage})`,
    backgroundRepeat: "repeat-y",
  };

  console.log(answer);
  console.log(errorResult);

  return (
    <div
      style={backgroundStyle}
      className="w-full min-h-screen flex items-center justify-center relative py-8"
    >
      {/* {answer ? (
        <Successful answer={answer} />
      ) : (
        <Unsuccessful error={errorResult} />
      )} */}
    </div>
  );
};

export default Result;
