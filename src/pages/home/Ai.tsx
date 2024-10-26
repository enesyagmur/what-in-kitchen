import logo from "../../assets/logo1.png";
import { FaArrowRight } from "react-icons/fa6";

const Ai = () => {
  return (
    <div className="w-9/12 lg:min-h-[500px] bg-cream_custom rounded-lg z-10 flex flex-col items-center justify-center">
      <div className="w-full h-10 flex items-center justify-center  font-bold text-center text-red_custom">
        <p className="capitalize text-4xl">Mutfakta ne var</p>
        <img src={logo} alt="logo" className=" ml-1 mt-1 h-[30px]" />
      </div>

      <div className="w-7/12 h-16 flex items-center justify-center mt-6 bg-white border-2 border-green_custom rounded-lg">
        <input
          type="text"
          className="w-11/12 h-full rounded-lg focus:outline-none text-center pl-2 capitalize "
        />
        <div className="w-[63px] h-[63px] flex items-center justify-center bg-red_custom text-green_custom text-lg rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-brown_custom">
          <FaArrowRight />
        </div>
      </div>

      <p className="text-green_custom text-sm  mt-1">
        Doğru tarif için malzemelerinizi arasında boşluk olacak şekilde girmeniz
        yeterli.
      </p>
    </div>
  );
};

export default Ai;
