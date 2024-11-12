import { useState } from "react";
import InputList from "./aiComponents/InputList";
import Materials from "./aiComponents/Materials";

const Ai = () => {
  const [list, setList] = useState<string>([]);

  return (
    <div className="w-full lg:w-11/12 min-h-svh lg:h-[600px] relative flex items-center justify-center">
      <div className="w-full h-full lg:h-5/6 bg-green_custom rounded-lg opacity-50 absolute"></div>

      <div className="h-5/6 lg:h-[500px] rounded-lg w-full  lg:w-11/12 bg-green_custom z-10 flex flex-col items-center justify-center">
        {list.length ? (
          <Materials list={list} />
        ) : (
          <InputList setList={setList} />
        )}
      </div>
    </div>
  );
};

export default Ai;
