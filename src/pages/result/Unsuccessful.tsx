type UnsuccessfulProp = {
  error: string;
};

const Unsuccessful: React.FC<UnsuccessfulProp> = ({ error }) => {
  return (
    <div className="w-11/12 md:h-96 text-cream_custom  rounded-lg flex items-center justify-center bg-red_custom ">
      <p className="lg:8/12 h-5/6 text-cream_custom">{error}</p>
    </div>
  );
};

export default Unsuccessful;
