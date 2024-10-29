import logo from "../../../assets/logo5.png";
import { IoAdd } from "react-icons/io5";

const Begining = () => {
  return (
    <div className="w-full sm:w-11/12 lg:w-10/12 h-[600px] relative flex items-center justify-center">
      <div className="w-full h-full bg-green_custom rounded-lg opacity-50 absolute"></div>
      <div className="h-5/6 lg:h-[420px] rounded-lg w-full sm:w-11/12 lg:w-10/12 bg-green_custom  z-10 flex flex-col items-center justify-center">
        <div className="sm:w-11/12 lg:w-10/12 h-[600px] relative flex items-center justify-center">
          <div className="w-full h-full bg-green_custom rounded-lg opacity-50 absolute"></div>

          <div className="h-5/6 lg:h-[420px] rounded-lg w-full sm:w-11/12 lg:w-10/12 bg-green_custom  z-10 flex flex-col items-center justify-center">
            <div className="display-flex w-full h-10 flex items-center justify-center font-bold text-center text-red_custom">
              <p className="display-flex capitalize text-2xl md:text-3xl text-white">
                Mutfakta ne var
              </p>
              <img
                src={logo}
                alt="logo"
                className="display-flex ml-1 mt-1 h-[30px]"
              />
            </div>
            <div className="relative mt-6 w-11/12 lg:h-20 sm:w-9/12 md:w-8/12 lg:w-7/12 h-14  flex flex-col items-center justify-center">
              <div className="w-full h-12 sm:h-14 lg:h-16 flex items-center justify-center bg-white border-2 border-cream_custom rounded-3xl">
                <input
                  type="text"
                  className="w-11/12 h-full rounded-3xl focus:outline-none text-center pl-2 capitalize"
                  placeholder="makarna krema mantar tavuk..."
                />
                <div className="w-[63px] h-full flex items-center justify-center bg-red_custom text-green_custom text-lg rounded-tr-3xl rounded-br-3xl cursor-pointer hover:bg-brown_custom">
                  <IoAdd />
                </div>
              </div>

              <p className="text-cream_custom text-[11px] mt-2">
                Öncelikle malzeme listesi oluşturalım. Doğru tarif ve sonuç için
                malzemelerinizin arasında boşluk olacak şekilde girmeniz
                yeterli.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Begining;
