import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../assets/logo1.png";
import { IoEyeOffOutline, IoKeyOutline } from "react-icons/io5";
import google_logo from "../../assets/google-logo.png";
import x_logo from "../../assets/x-logo.png";
import github_logo from "../../assets/github-logo.png";

const FormLogin = () => {
  return (
    <div className="w-7/12 h-full flex flex-col items-center justify-center relative">
      <div className="w-full h-1/6 flex items-start justify-center">
        <img src={logo} alt="logo" className="w-[40px] h-[40px] object-cover" />
        <p className="font-bold text-4xl text-center">Hoşgeldiniz</p>
      </div>

      <form className="form">
        <div className="input-big-frame">
          <p className="input-title">Email</p>
          <div className="input-small-frame">
            <MdOutlineMarkEmailRead className="input-icon ml-3" />
            <input
              className="input pb-1"
              type="email"
              placeholder="whatinkitchen@info.com"
              id="email"
            />
          </div>
        </div>

        <div className="input-big-frame">
          <p className="input-title">Şifre</p>
          <div className="input-small-frame">
            <IoKeyOutline className="ml-3 input-icon" />
            <input
              className="input"
              type="password"
              placeholder="***********"
              id="password"
            />
            <IoEyeOffOutline className="mr-3 input-icon" />
          </div>
        </div>

        <div className="w-10/12 h-[40px] flex items-center justify-center mt-2">
          <div className="other-login-methods">
            <img
              src={google_logo}
              alt="login-method"
              className="login-methods-image"
            />
          </div>
          <div className="other-login-methods">
            <img
              src={x_logo}
              alt="login-method"
              className="login-methods-image"
            />
          </div>
          <div className="other-login-methods">
            <img
              src={github_logo}
              alt="login-method"
              className="login-methods-image"
            />
          </div>
        </div>

        <div className="w-10/12 h-[20px] flex items-center justify-start border-2 ">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-[20px] h-[20px] rounded-lg cursor-pointer"
          />
          <p className="pl-2 text-gray-500 capitalize text-sm">
            Ben robot değilim
          </p>
        </div>

        <button
          type="submit"
          className="w-10/12 h-[45px] bg-green_custom rounded-lg font-semibold text-cream_custom hover:bg-red_custom"
        >
          Login
        </button>

        <p className="w-10/12 h-[20px] text-sm text-gray-500 text-center cursor-pointer relative bottom-4 hover:text-black">
          Email ile Kayıt
        </p>
      </form>
    </div>
  );
};

export default FormLogin;
