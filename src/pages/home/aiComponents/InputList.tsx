import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import logo from "../../../assets/logo5.png";
import toast from "react-hot-toast";

type inputProps = {
  setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const InputList: React.FC<inputProps> = ({ setList }) => {
  const [input, setInput] = useState<string>("");

  const updateList = () => {
    const cleandedInput = input.trim().replace(/\s+/g, ` `);
    const newList = cleandedInput.split(" ").filter((item) => item !== "");

    if (newList.length < 2) {
      toast.error(`Tarif için, lütfen birden fazla malzeme girin.`, {
        style: {
          background: "#DCE9E2",
          color: "#D96452",
          border: "1px solid #D96452",
        },
      });
    }

    setList([...newList]);
  };

  return (
    <div className="relative mt-6 w-11/12 h-40 sm:w-9/12 md:w-8/12 lg:w-7/12 flex flex-col items-center justify-center ">
      <div className="w-full h-[40px] flex items-center justify-center mb-4">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize text-cream_custom ">
          Mutfakta ne var
        </p>

        <img src={logo} alt="logo" className="w-[40px] h-[40px] object-cover" />
      </div>

      <div className="w-full h-20 sm:h-10 lg:h-12 flex items-center justify-center bg-white border-2 border-cream_custom rounded-3xl">
        <input
          type="text"
          className="w-11/12 h-full rounded-3xl focus:outline-none text-center pl-2 capitalize text-[10px] sm:text-sm hidden sm:flex"
          placeholder="makarna krema mantar tavuk..."
          onChange={(e) => setInput(e.target.value)}
        />
        <textarea
          className="w-11/12 h-full rounded-3xl focus:outline-none text-center p-2 capitalize text-sm flex sm:hidden overflow-hidden"
          placeholder="makarna krema mantar tavuk..."
          cols={2}
          onChange={(e) => setInput(e.target.value)}
        />
        <div
          className="w-[63px] h-full flex items-center text-cream_custom justify-center bg-red_custom  text-lg rounded-tr-3xl rounded-br-3xl cursor-pointer hover:bg-brown_custom"
          onClick={updateList}
        >
          <FaPlus />
        </div>
      </div>

      <p className="text-cream_custom text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] mt-1 text-center">
        Doğru tarif ve sonuç için malzemelerinizin arasında boşluk olacak
        şekilde girmeniz yeterli.
      </p>
    </div>
  );
};

export default InputList;
