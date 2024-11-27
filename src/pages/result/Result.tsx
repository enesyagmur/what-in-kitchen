import resultBg from "../../assets/home-images/homebg6.png";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";
import Successful from "./Successful";
import Unsuccessful from "./Unsuccessful";

const Result = () => {
  const answer = useSelector((state: rootState) => state.apiAnswer.answer);
  const errorResult = useSelector((state: rootState) => state.sliceError.error);

  const backgroundStyle = {
    backgroundImage: `url(${resultBg})`,
    backgroundRepeat: "repeat-y",
  };

  return (
    <div
      style={backgroundStyle}
      className="w-full min-h-screen flex items-center justify-center relative py-8"
    >
      {answer !== null && answer.length > 0 ? (
        <Successful answer={answer} />
      ) : (
        <Unsuccessful error={errorResult} />
      )}
    </div>
  );
};

export default Result;
