import HalfImage from "../../components/HalfImage";
import FormRegister from "./FormRegister";

const Register = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-red_custom to-brown_custom">
      <div className="w-11/12 sm:w-full md:w-10/12 lg:w-8/12 h-full sm:h-5/6 flex flex-col sm:flex-row items-center justify-center bg-cream_custom rounded-lg p-2">
        <FormRegister />
        <HalfImage />
      </div>
    </div>
  );
};

export default Register;
