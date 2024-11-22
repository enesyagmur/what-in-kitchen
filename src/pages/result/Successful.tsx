import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

type Item = {
  name: string;
  description: string;
  ingredients: [];
  instructions: [];
};

type SuccessfulProp = {
  answer: Item[];
};

const Successful: React.FC<SuccessfulProp> = ({ answer }) => {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 bg-green_custom text-cream_custom rounded-lg flex flex-col items-center relative">
      <div
        className="fixed w-[30px] md:w-[50px] h-[30px] md:h-[50px]  flex items-center justify-center cursor-pointer right-8 sm:right-14  md:right-16 lg:right-32  top-20 md:top-16 text-4xl text-brown_custom hover:text-red_custom "
        onClick={() => navigate("/home")}
      >
        <TiArrowBack />
      </div>

      {answer.length &&
        answer.map((item, index) => (
          <div
            key={index}
            className="w-11/12 flex flex-col items-start mt-8 mb-8"
          >
            <p className="w-11/12 font-bold text-center p-3 rounded-lg text-2xl text-green_custom bg-cream_custom">
              {item.name}
            </p>
            <p className="w-11/12 text-center mt-2">{item.description}</p>

            <div className="w-full flex flex-col md:flex-row items-center justify-center pt-4">
              <div className="w-full md:w-4/12 flex flex-col items-start justify-start ">
                <p className="font-semibold text-lg">Malzemeler:</p>
                {item.ingredients.map((element: string, index: number) => (
                  <li key={"ingredients" + index}>{element}</li>
                ))}
              </div>

              <div className="w-full md:w-8/12 flex flex-col items-start justify-start ">
                <p className="font-semibold text-lg">Tarif:</p>
                {item.instructions.map((element: string, index: number) => (
                  <li key={"instructions" + index}>{element}</li>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Successful;
