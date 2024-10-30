import { useState } from "react";
import logo from "../../assets/logo5.png";
import Input from "./aiComponents/Input";
import Result from "./aiComponents/Result";
import Materials from "./aiComponents/Materials";
import Begining from "./aiComponents/Begining";

const Ai = () => {
  const [searched, setSearched] = useState<boolean>(false);
  const [list, setList] = useState<string>([".", "."]);

  return (
    <div className="w-full sm:w-11/12 lg:w-10/12 h-[600px] relative flex items-center justify-center">
      <div className="w-full h-full bg-green_custom rounded-lg opacity-50 absolute"></div>

      <div
        className={`${
          searched ? "min-h-screen" : "h-5/6 lg:h-[420px] rounded-lg"
        } w-full sm:w-11/12 lg:w-10/12 bg-green_custom  z-10 flex flex-col items-center justify-center `}
      >
        {list.length ? <Materials setSearched={setSearched} /> : <Begining />}
      </div>
    </div>
  );
};

export default Ai;
