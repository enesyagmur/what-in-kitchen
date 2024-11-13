import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

type UnsuccessfulProp = {
  error: string;
};

const Unsuccessful: React.FC<UnsuccessfulProp> = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 h-[600px] sm:h-[500px] md:h-[400px] text-cream_custom relative rounded-lg flex items-center justify-center bg-red_custom p-4 border-8 border-brown_custom">
      <p className="w-full text-cream_custom text-center text-[16px] sm:text-lg md:text-xl font-semibold">
        {error}
      </p>

      <button
        className="absolute right-6 top-2 text-4xl  hover:text-brown_custom"
        onClick={() => navigate("/")}
      >
        <TiArrowBack />
      </button>
    </div>
  );
};

export default Unsuccessful;
