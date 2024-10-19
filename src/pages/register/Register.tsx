import HalfImage from "../../components/HalfImage";
import FormRegister from "./FormRegister";

const Register = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-red_custom to-brown_custom">
      <div className="w-11/12 md:w-8/12 h-5/6 flex items-center justify-center bg-cream_custom rounded-lg p-2">
        <FormRegister />
        <HalfImage />
      </div>
    </div>
  );
};

export default Register;
