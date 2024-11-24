import { AiFillHome } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

type Item = {
  name: string;
  ingredients: string[];
  instructions: string[];
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
        <AiFillHome />
      </div>

      {answer.length &&
        answer.map((item, index) => (
          <div
            key={index}
            className="w-11/12 flex flex-col items-start mt-8 mb-8"
          >
            <p className="w-11/12 font-bold text-center p-3 rounded-lg text-2xl text-green_custom bg-cream_custom">
              {index + 1}. {item.name}
            </p>

            <div className="w-full flex flex-col md:flex-row items-center justify-center ">
              <div className="w-full md:w-4/12   flex flex-col items-start justify-start mb-auto mt-6 md:mt-0 md:pt-5">
                <p className="w-4/12 text-xl text-start border-b-2 border-cream_custom mb-4">
                  Malzemeler
                </p>
                {item.ingredients.map((element: string, index: number) => (
                  <li key={"ingredients" + index}>{element}</li>
                ))}
              </div>

              <div className="w-full md:w-8/12 flex flex-col items-start justify-start mb-auto mt-6 md:mt-0 md:pt-5 ">
                <p className="w-2/12 text-xl text-start border-b-2 border-cream_custom mb-4">
                  Tarif
                </p>

                {item.instructions.map((element: string, index: number) => (
                  <li className="list-decimal" key={"instructions" + index}>
                    {element}
                  </li>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Successful;
