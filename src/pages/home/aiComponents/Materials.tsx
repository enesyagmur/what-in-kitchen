import ip from "../../../assets/materials-images/lineBg.png";
import Standart from "../../../assets/materials-images/standart.png";
import Vejeteryan from "../../../assets/materials-images/vejetaryan.png";
import Vegan from "../../../assets/materials-images/vegan.png";
import Yemek from "../../../assets/materials-images/yemek.png";
import Tatli from "../../../assets/materials-images/tatli.png";
import Icecek from "../../../assets/materials-images/icecek.png";
import Meze from "../../../assets/materials-images/meze.png";
import Atistirmalik from "../../../assets/materials-images/atistirmalik.png";
import Farketmez from "../../../assets/materials-images/farketmez.png";
import { useEffect, useState } from "react";
import callGeminiAPI from "../../../Api/aiCall";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateResult } from "../../../redux/resultSlice";
import { updateError } from "../../../redux/errorSlice";
import Loading from "./Loading";

type materialsProps = {
  list: string[];
};

const Materials: React.FC<materialsProps> = ({ list }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [foodChoice, setFoodChoice] = useState<
    { name: string; selected: boolean }[]
  >([
    { name: "Yemek", selected: false },
    { name: "Tatlı", selected: false },
    { name: "Atıştırmalık", selected: false },
    { name: "İçecek", selected: false },
    { name: "Meze", selected: false },
    { name: "Fark Etmez", selected: true },
  ]);
  const foodChoiceImages = [
    Yemek,
    Tatli,
    Atistirmalik,
    Icecek,
    Meze,
    Farketmez,
  ];

  const [foodType, setFoodType] = useState<
    { name: string; selected: boolean }[]
  >([
    {
      name: "Standart",
      selected: true,
    },
    {
      name: "Vegan",
      selected: false,
    },
    {
      name: "Vejeteryan",
      selected: false,
    },
  ]);
  const foodTypeImages = [Standart, Vegan, Vejeteryan];

  const createAsk = () => {
    const askArray: string[] = [];
    list.forEach((element) => {
      askArray.push(element);
    });
    askArray.push("bu malzemeler ile yapılabilcek");
    foodType.forEach((element, index) => {
      if (element.selected === true && index !== 0) {
        askArray.push(element.name);
      }
    });

    foodChoice.forEach((element, index) => {
      if (element.selected === true && index !== 5) {
        askArray.push(element.name);
      }
    });
    askArray.push("tariifleri bul ve json formatında dönüş yap");

    return askArray.join(" ");
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchApi = async () => {
    try {
      const result: string = await callGeminiAPI(createAsk());
      return result;
    } catch (error) {
      console.error("Materials componentinde hata:", error);
      return error;
    }
  };

  const checkAnswer = async () => {
    const result: string | unknown = await fetchApi();

    if (typeof result === "string") {
      if (result.includes("```json")) {
        dispatch(updateResult(result));
        setLoading(false);

        navigate("/result");
      } else {
        dispatch(updateError(result));
        setLoading(false);
        navigate("/result");
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading === true) {
        dispatch(
          updateError(
            "Sonuç beklenenden uzun sürdü! Dilerseniz malzemeleri ya da tarif tipini değiştirerek tekrar deneyebilirsiniz"
          )
        );
        navigate("/result");
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [loading]);

  const searchFunc = () => {
    checkAnswer();
    setLoading(true);
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-evenly">
      <div className="w-11/12 md:w-5/12 lg:w-6/12 h-2/6 md:h-5/6 flex flex-wrap justify-between md:justify-evenly items-center pl-8 md:pl-0">
        {list.map((element, index) => (
          <div className="w-4/12 md:w-5/12 h-1/6 flex flex-col items-start justify-center">
            <div className="w-full h-4/6 flex items-center justify-start">
              <p className="text-cream_custom">{index + 1}.</p>
              <p className="bg-transparent text-cream_custom w-10/12 text-start text-[12px] sm:text-sm  lg:text-lg font-semibold  p-1 capitalize">
                {element}
              </p>
            </div>
            <img
              src={ip}
              className="w-4/12 md:w-6/12 h-[6px] object-cover rounded-xl"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="w-11/12 md:w-8/12 lg:w-7/12 h-4/6 md:h-5/6 flex flex-col items-center justify-evenly">
        <img
          src={ip}
          className=" w-11/12 h-[6px] object-cover rounded-xl flex md:hidden"
          alt=""
        />

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
                src={foodTypeImages[index]}
                className="food-option-frame-image"
                alt="Tarif Tipi"
              />
              <p className="text-cream_custom ml-0 sm:ml-1 text-[12px] sm:text-sm">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <img
          src={ip}
          className=" w-10/12 h-[6px] object-cover rounded-xl hidden md:flex"
          alt=""
        />
        <div className="w-11/12 h-3/5 flex items-center justify-start flex-wrap ">
          {foodChoice.map((item, index) => (
            <div
              className={`food-option-frame  ${
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
                src={foodChoiceImages[index]}
                alt=""
                className="food-option-frame-image"
              />
              <p className="text-cream_custom ml-0 sm:ml-1 text-[12px] sm:text-sm">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        className="w-11/12 md:w-7/12 lg:w-5/12 h-[50px] md:h-[40px] bg-brown_custom text-cream_custom border-2 border-cream_custom rounded-lg absolute bottom-1 text-xl cursor-pointer hover:bg-red_custom "
        onClick={searchFunc}
      >
        Tarif Bul
      </button>
    </div>
  );
};

export default Materials;
