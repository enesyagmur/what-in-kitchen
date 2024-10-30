import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

type inputProps = {
  setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const InputList: React.FC<inputProps> = ({ setList }) => {
  const [input, setInput] = useState<string>("");

  const updateList = () => {
    const newList = input.split(" ").filter((item) => item !== "");
    setList([...newList]);
  };

  return (
    <div className="relative mt-6 w-11/12 h-20 lg:h-20 sm:w-9/12 md:w-8/12 lg:w-7/12 flex flex-col items-center justify-center">
      <div className="w-full h-12 sm:h-14 lg:h-16 flex items-center justify-center bg-white border-2 border-cream_custom rounded-3xl">
        <input
          type="text"
          className="w-11/12 h-full rounded-3xl focus:outline-none text-center pl-2 capitalize"
          placeholder="makarna krema mantar tavuk..."
          onChange={(e) => setInput(e.target.value)}
        />
        <div
          className="w-[63px] h-full flex items-center justify-center bg-red_custom text-green_custom text-lg rounded-tr-3xl rounded-br-3xl cursor-pointer hover:bg-brown_custom"
          onClick={updateList}
        >
          <FaPlus />
        </div>
      </div>

      <p className="text-cream_custom text-[11px] mt-2">
        Öncelikle malzeme listesi oluşturalım. Doğru tarif ve sonuç için
        malzemelerinizin arasında boşluk olacak şekilde girmeniz yeterli.
      </p>
    </div>
  );
};

export default InputList;
