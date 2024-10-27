import { useState } from "react";
import logo from "../../assets/logo1.png";
import Input from "./Input";
import Result from "./Result";

const Ai = () => {
  const [searched, setSearched] = useState<boolean>(false);

  return (
    <div
      className={`  ${
        searched ? "w-full min-h-screen" : "sm:w-11/12 lg:w-10/12 h-[600px]"
      } relative flex items-center justify-center`}
    >
      <div className="w-full h-full bg-green_custom rounded-lg opacity-50 absolute"></div>

      <div
        className={`${
          searched ? "min-h-screen" : "h-5/6 lg:min-h-[500px] rounded-lg"
        } w-full sm:w-11/12 bg-cream_custom  z-10 flex flex-col items-center justify-center `}
      >
        {!searched && (
          <div
            className={`display-flex w-full h-10 flex items-center justify-center font-bold text-center text-red_custom`}
          >
            <p className={`display-flex capitalize text-4xl`}>
              Mutfakta ne var
            </p>
            <img
              src={logo}
              alt="logo"
              className={`display-flex ml-1 mt-1 h-[30px]`}
            />
          </div>
        )}
        <Input searched={searched} setSearched={setSearched} />

        {searched && <Result />}
      </div>
    </div>
  );
};

export default Ai;
