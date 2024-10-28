import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../assets/logo1.png";
import { IoEyeOffOutline, IoKeyOutline } from "react-icons/io5";
import google_logo from "../../assets/google-logo.png";
import x_logo from "../../assets/x-logo.png";
import github_logo from "../../assets/github-logo.png";
import { useNavigate } from "react-router-dom";
import { VscError } from "react-icons/vsc";

const FormLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-7/12 md:w-7/12 h-3/6 sm:h-full flex flex-col items-center justify-between sm:justify-center">
      <div className="form-title-frame">
        <img src={logo} alt="logo" className="form-title-logo" />
        <p className="form-title">Hoşgeldiniz</p>
      </div>

      <form className="form">
        <div className="input-big-frame">
          <p className="input-title">Email</p>
          <div className="input-small-frame">
            <MdOutlineMarkEmailRead className="input-info-icon ml-3" />
            <input
              className="input pb-1"
              type="email"
              placeholder="whatinkitchen@info.com"
              id="email"
            />
            <VscError className="input-error-icon" />
          </div>
        </div>

        <div className="input-big-frame">
          <p className="input-title">Şifre</p>
          <div className="input-small-frame">
            <IoKeyOutline className="input-info-icon ml-3 " />
            <input
              className="input"
              type="password"
              placeholder="***********"
              id="password"
            />
            <IoEyeOffOutline className="input-info-icon mr-4" />
            <VscError className="input-error-icon" />
          </div>
        </div>

        <div className="w-full md:w-10/12 h-[30px] sm:h-[40px] flex items-center justify-center mt-2">
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

        <div className="robot-check-frame">
          <input type="checkbox" name="" id="" className="robot-check-input" />
          <p className="robot-check-info">Ben robot değilim</p>
        </div>

        <button type="submit" className="form-button">
          Giriş
        </button>

        <p
          className="form-page-change-button"
          onClick={() => navigate("/register")}
        >
          Email ile Kayıt
        </p>
      </form>
    </div>
  );
};

export default FormLogin;
