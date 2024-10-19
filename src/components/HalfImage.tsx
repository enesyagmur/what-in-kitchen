import image1 from "../assets/loginbg1.png";
import image2 from "../assets/loginbg2.png";
import image3 from "../assets/loginbg3.png";
import image4 from "../assets/loginbg4.png";
import { useState } from "react";

const HalfImage = () => {
  const [randomNumber, setRandomNumber] = useState<number>(() => {
    return Math.floor(Math.random() * 4) + 1;
  });

  return (
    <>
      <img
        src={
          randomNumber === 1
            ? image1
            : randomNumber === 2
            ? image2
            : randomNumber === 3
            ? image3
            : image4
        }
        alt="how it works"
        className="hidden md:flex w-5/12 h-full bg-cover rounded-lg"
      />
    </>
  );
};

export default HalfImage;
