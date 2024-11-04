import { useEffect, useState } from "react";
import getRandomImage from "../../components/RandomBg";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";

const Result = () => {
  const [randomImage, setRandomImage] = useState<string>("");
  const answer = useSelector((state: rootState) => state.apiAnswer.answer);

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

  console.log(answer);

  return (
    <div
      style={backgroundStyle}
      className="w-full min-h-screen flex items-center justify-center relative py-8"
    >
      {answer && (
        <div className="w-11/12 bg-green_custom text-cream_custom px-10 py-10 rounded-lg flex flex-col ">
          {answer.length &&
            answer.map((item, index) => (
              <div
                key={index}
                className="w-11/12 flex flex-col items-center mt-8"
              >
                <p className="font-bold text-xl">{item.name}</p>
                <p>{item.description}</p>

                <div className="w-full flex flex-col items-start justify-center mt-2">
                  <p className="font-semibold text-lg">Malzemeler:</p>
                  {item.ingredients.map((element: string, index: number) => (
                    <li key={"ingredients" + index}>{element}</li>
                  ))}
                </div>

                <div className="w-full flex flex-col items-start justify-center mt-2">
                  <p className="font-semibold text-lg">Tarif:</p>
                  {item.instructions.map((element: string, index: number) => (
                    <li key={"instructions" + index}>{element}</li>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Result;
