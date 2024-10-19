import HalfImage from "../../components/HalfImage";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-brown_custom to-red_custom">
      <div className="w-11/12 md:w-8/12 h-5/6 flex items-center justify-center bg-cream_custom rounded-lg p-2">
        <FormLogin />
        <HalfImage />
      </div>
    </div>
  );
};

export default Login;
