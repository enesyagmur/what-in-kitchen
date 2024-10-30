import ip from "../../../assets/underBg1.png";
import Standart from "../../../assets/normal.png";
import Vegan from "../../../assets/vegan.png";
import Vejetaryan from "../../../assets/vejetaryan.png";
import { useState } from "react";

type materialsProps = {
  setSearched: (value: boolean) => void;
};

const Materials: React.FC<materialsProps> = ({ setSearched }) => {
  const [foodChoice, setFoodChoice] = useState<
    { name: string; selected: boolean }[]
  >([
    { name: "Yemek", selected: false },
    { name: "Tatlı", selected: false },
    { name: "Atıştırmalık", selected: false },
    { name: "Meze", selected: false },
    { name: "Fark Etmez", selected: true },
  ]);

  const [foodType, setFoodType] = useState<
    { name: string; selected: boolean }[]
  >([
    { name: "Standart", selected: true },
    { name: "Vegan", selected: false },
    { name: "Vejeteryan", selected: false },
  ]);

  const mateialArray: string[] = [
    "soğan",
    "patlican",
    "tavuk",
    "mantar",
    "krema",
    "biber",
    "domates",
    "sarımsak",
    "Ekle",
  ];

  return (
    <div className="w-full h-full flex items-center justify-evenly">
      <div className="w-6/12 h-5/6 flex flex-wrap justify-evenly items-center ">
        {mateialArray.map((element, index) => (
          <div className="w-5/12 h-1/6 flex flex-col items-start justify-center">
            <div className="w-full h-4/6 flex items-center justify-start">
              <p className="text-cream_custom">{index + 1}.</p>

              <p className="bg-transparent text-cream_custom w-10/12 text-start text-lg font-semibold focus:outline-none p-1 capitalize">
                {element}
              </p>
            </div>
            <img
              src={ip}
              className="w-6/12 h-[6px] object-cover rounded-xl"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="w-6/12 h-5/6 flex flex-col items-center justify-evenly ">
        <div className="w-11/12 h-1/5 flex items-center justify-between">
          {foodType.map((item, index) => (
            <div
              className={`food-option-frame ${
                foodType[index].selected ? "border-2 rounded-lg" : "border-none"
              }`}
              key={item.name}
              onClick={() =>
                setFoodType(() => {
                  return foodType.map((element, id) => ({
                    ...element,
                    selected: id === index ? true : false,
                  }));
                })
              }
            >
              <img
                src={`${
                  index === 0 ? Standart : index === 1 ? Vegan : Vejetaryan
                }`}
                alt=""
                className="w-[40px] h-[40px] object-cover"
              />
              <p className="text-cream_custom ml-1">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="w-11/12 h-3/5 flex items-center justify-between flex-wrap">
          {foodChoice.map((item, index) => (
            <div
              className={`food-option-frame ${
                item.selected === true ? "border-2 rounded-lg" : "border-none"
              }`}
              key={index}
              onClick={() =>
                setFoodChoice(() => {
                  return foodChoice.map((element, id) => ({
                    ...element,
                    selected: id === index ? true : false,
                  }));
                })
              }
            >
              <img
                src={Standart}
                alt=""
                className="w-[40px] h-[40px] object-cover"
              />
              <p className="text-cream_custom ml-1">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="w-4/12 h-[50px] bg-brown_custom text-cream_custom rounded-2xl absolute bottom-[20px] text-xl cursor-pointer hover:bg-red_custom">
        Tarif Bul
      </button>
    </div>
  );
};

export default Materials;
