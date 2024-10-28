import HalfImage from "../../components/HalfImage";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-brown_custom to-red_custom">
      <div className="w-11/12 sm:w-full md:w-10/12 lg:w-8/12 h-full sm:h-5/6 flex flex-col sm:flex-row items-center justify-center bg-cream_custom rounded-lg p-2">
        <FormLogin />
        <HalfImage />
      </div>
    </div>
  );
};

export default Login;
