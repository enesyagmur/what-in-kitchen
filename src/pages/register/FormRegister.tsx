import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../assets/logo1.png";
import { IoEyeOffOutline, IoKeyOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";

const FormRegister = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-7/12 h-3/6 sm:h-full flex flex-col items-center justify-between sm:justify-center relative">
      <div className="form-title-frame">
        <img src={logo} alt="logo" className="form-title-logo" />
        <p className="form-title">Yeni Hesap</p>
      </div>

      <form className="form">
        <div className="input-big-frame">
          <p className="input-title">İsim Soyisim</p>
          <div className="input-small-frame">
            <BiUserCircle className="input-info-icon ml-3" />
            <input
              className="input pb-1"
              type="text"
              placeholder="Ahmet Yılmaz"
              id="name"
            />
            <VscError className="input-error-icon" />
          </div>
        </div>

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
            <VscError className="input-error-icon" />
          </div>
        </div>

        <div className="input-big-frame">
          <p className="input-title">Şifre</p>
          <div className="input-small-frame">
            <IoKeyOutline className="input-info-icon ml-3" />
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

        <div className="robot-check-frame">
          <input type="checkbox" name="" id="" className="robot-check-input" />
          <p className="robot-check-info">Ben robot değilim</p>
        </div>

        <button type="submit" className="form-button">
          Kayıt
        </button>

        <p className="form-page-change-button" onClick={() => navigate("/")}>
          Hesabım Var!
        </p>
      </form>
    </div>
  );
};

export default FormRegister;
