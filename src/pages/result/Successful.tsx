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
  return (
    <div className="w-11/12 bg-green_custom text-cream_custom  rounded-lg flex flex-col items-center">
      {answer.length &&
        answer.map((item, index) => (
          <div
            key={index}
            className="w-11/12 flex flex-col items-center mt-8 mb-8"
          >
            <p className=" w-full font-bold text-center p-3 rounded-lg text-2xl text-green_custom bg-cream_custom">
              {item.name}
            </p>
            <p className="mt-2">{item.description}</p>

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
