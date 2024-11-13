import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

type UnsuccessfulProp = {
  error: string;
};

const Unsuccessful: React.FC<UnsuccessfulProp> = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 md:h-96 text-cream_custom relative rounded-lg flex items-center justify-center bg-red_custom p-4 border-8 border-brown_custom">
      {error !== "" ? (
        <p className="w-full text-cream_custom text-center text-xl font-semibold">
          {error}
        </p>
      ) : (
        <p className="w-full text-cream_custom text-center text-xl font-semibold">
          Sonuç Bulunamadı! Malzemeleri ya da tarif tipini değiştirerek tekrar
          deneyebilirsiniz.
        </p>
      )}

      <button
        className="absolute left-4 top-2 text-4xl   hover:text-brown_custom"
        onClick={() => navigate("/")}
      >
        <TiArrowBack />
      </button>
    </div>
  );
};

export default Unsuccessful;
