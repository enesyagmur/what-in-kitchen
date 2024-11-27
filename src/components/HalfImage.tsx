import howItWorksBg from "../assets/login-bg/loginbg3.png";

import { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const HalfImage = () => {
  const [showHowItWorks, setShowHowItWorks] = useState<boolean>(false);

  return (
    <div className="w-11/12 sm:w-5/12  h-3/6 sm:h-full rounded-lg relative">
      {showHowItWorks ? (
        <div className="w-full h-full bg-green_custom rounded-lg flex flex-col items-center justify-center">
          <p className="w-full h-1/6 font-bold text-2xl text-black text-center mt-2">
            Nasıl Çalışır?
          </p>
          <p className="w-11/12 h-4/6 text-[16px] sm:text-lg text-cream_custom">
            Bu araç, elinizdeki malzemelere göre size yapabileceğiniz tarifleri
            önerir. Tek yapmanız gereken, mutfağınızda bulunan malzemeleri
            listelemek. Yapay zeka, bu malzemelerle uyumlu olan tarifleri analiz
            eder ve size çeşitli yemek önerileri sunar. Hem yeni tarifler
            keşfetmek hem de elinizdeki malzemeleri en verimli şekilde
            değerlendirmek için ideal bir çözüm!Her tarif, elinizdeki
            malzemelere göre özel olarak oluşturulur, böylece zengin bir yemek
            deneyimi yaşarsınız.
          </p>
        </div>
      ) : (
        <img
          src={howItWorksBg}
          alt="how it works"
          className="w-full h-full bg-cover rounded-lg"
        />
      )}

      <IoIosInformationCircleOutline
        className="absolute text-2xl text-cream_custom top-4 right-4 hover:text-red_custom cursor-pointer"
        onClick={() => setShowHowItWorks(!showHowItWorks)}
      />
    </div>
  );
};

export default HalfImage;
