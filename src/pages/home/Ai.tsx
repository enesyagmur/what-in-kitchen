import CurrentUser from "../../components/CurrentUser";
import InputList from "./aiComponents/InputList";
import Materials from "./aiComponents/Materials";
type AiProps = {
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const Ai: React.FC<AiProps> = ({ list, setList }) => {
  return (
    <div className="w-full lg:w-11/12 min-h-svh lg:h-[600px] relative flex items-center justify-center">
      <div className="w-full h-full lg:h-5/6 bg-green_custom rounded-lg opacity-50 absolute"></div>
      <CurrentUser list={list} setList={setList} />
      <div className="h-[600px] md:h-[500px] lg:h-4/6 rounded-lg w-full lg:w-11/12 bg-green_custom z-10 flex flex-col items-center justify-center">
        {list.length ? (
          <Materials list={list} />
        ) : (
          <InputList setList={setList} />
        )}
      </div>
    </div>
  );
};

export default Ai;
