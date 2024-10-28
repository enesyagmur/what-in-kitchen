import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type inputProps = {
  searched: boolean;
  setSearched: (value: boolean) => void;
};

const Input: React.FC<inputProps> = ({ searched, setSearched }) => {
  return (
    <div
      className={`${
        searched
          ? "fixed top-2 h-16 lg:h-20 w-10/12"
          : "relative mt-6 w-11/12  h-20 lg:h-20"
      }  sm:w-9/12 md:w-8/12 lg:w-7/12 h-14  flex flex-col items-center justify-center`}
    >
      <div className="w-full h-12 sm:h-14 lg:h-16 flex items-center justify-center bg-white border-2 border-green_custom rounded-3xl">
        <input
          type="text"
          className="w-11/12 h-full rounded-3xl focus:outline-none text-center pl-2 capitalize"
          placeholder="makarna krema mantar tavuk..."
        />
        <div
          className={`${
            searched ? "ml-4 " : "ml-0"
          } w-[63px] h-full flex items-center justify-center bg-red_custom text-green_custom text-lg rounded-tr-3xl rounded-br-3xl cursor-pointer hover:bg-brown_custom`}
          onClick={() => setSearched(true)}
        >
          <FaArrowRight />
        </div>
      </div>
      {!searched && (
        <p className="text-green_custom text-sm mt-1">
          Doğru tarif ve sonuç için malzemelerinizi arasında boşluk olacak
          şekilde girmeniz yeterli.
        </p>
      )}
    </div>
  );
};

export default Input;
