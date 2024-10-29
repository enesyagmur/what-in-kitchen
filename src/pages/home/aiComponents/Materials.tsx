import logo from "../../../assets/logo5.png";
import ip from "../../../assets/underBg1.png";
import normal from "../../../assets/normal.png";
import vegan from "../../../assets/vegan.png";
import vejetaryan from "../../../assets/vejetaryan.png";

type materialsProps = {
  searched: boolean;
  setSearched: (value: boolean) => void;
};

const Materials: React.FC<materialsProps> = ({ searched, setSearched }) => {
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

  const foodTypeArray: string[] = [
    "Başlangıç",
    "Ara Sıcak",
    "Ana Yemek",
    "Tatlı",
    "Meze",
    "İçecek",
    "Atıştırmalık",
  ];

  return (
    <div className="w-full h-full flex items-center justify-evenly">
      <div className="w-8/12 h-5/6 flex flex-wrap justify-evenly items-center ">
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
      <div className="w-4/12 h-5/6 flex flex-col items-center justify-evenly ">
        <div className="w-11/12 h-1/5 flex items-center justify-between">
          <div className="w-4/12 h-full flex items-center justify-start">
            <input
              type="radio"
              name="foodChoice"
              className="w-[20px] h-[20px] rounded-full hidden"
            />
            <img
              src={normal}
              alt=""
              className="w-[40px] h-[40px] object-cover"
            />
            <p className="text-cream_custom ml-1">Normal</p>
          </div>
          <div className="w-4/12 h-full flex items-center justify-start">
            <input
              type="radio"
              name="foodChoice"
              className="w-[20px] h-[20px] rounded-full hidden"
            />
            <img
              src={vegan}
              alt=""
              className="w-[40px] h-[40px] object-cover"
            />
            <p className="text-cream_custom ml-1">Vegan</p>
          </div>
          <div className="w-4/12 h-full flex items-center justify-start">
            <input
              type="radio"
              name="foodChoice"
              className="w-[20px] h-[20px] rounded-full hidden"
            />
            <img
              src={vejetaryan}
              alt=""
              className="w-[40px] h-[40px] object-cover"
            />
            <p className="text-cream_custom ml-1">Vejetaryan</p>
          </div>
        </div>

        <div className="w-11/12 h-3/5 flex items-center justify-between flex-wrap">
          {foodTypeArray.map((element, index) => (
            <div
              className="w-4/12 h-1/5 flex items-center justify-start"
              key={index}
            >
              <input
                type="radio"
                name="foodType"
                className="w-[20px] h-[20px] rounded-full bg-cream_custom focus:bg-green_custom"
              />
              <p className="text-cream_custom ml-1">{element}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="w-4/12 h-[40px] bg-brown_custom rounded-2xl absolute bottom-[30px] font-semibold cursor-pointer hover:bg-red_custom">
        Ask
      </button>
    </div>
  );
};

export default Materials;
