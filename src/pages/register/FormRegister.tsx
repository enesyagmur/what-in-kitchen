import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../assets/logo1.png";
import { IoEyeOffOutline, IoKeyOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { useState } from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../formSchema/registerSchema";

const FormRegister = () => {
  const navigate = useNavigate();

  const registerWithFormFunc = () => {};

  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: ``,
      email: ``,
      password: ``,
      term: ``,
    },
    validationSchema: registerSchema,
    onSubmit: registerWithFormFunc,
  });

  return (
    <div className="w-full sm:w-7/12 h-3/6 sm:h-full flex flex-col items-center justify-between sm:justify-center relative">
      <div className="form-title-frame">
        <img src={logo} alt="logo" className="form-title-logo" />
        <p className="form-title">Yeni Hesap</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-big-frame">
          <p className="input-title">İsim Soyisim</p>
          <div className="input-small-frame">
            <BiUserCircle className="input-info-icon ml-3" />
            <input
              className="input pb-1"
              type="text"
              placeholder="Ahmet Yılmaz"
              id="name"
              value={values.name}
              onChange={handleChange}
            />
            {showErrors && errors.name ? (
              <VscError className="input-error-icon" />
            ) : null}
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
              value={values.email}
              onChange={handleChange}
            />

            {showErrors && errors.email ? (
              <VscError className="input-error-icon" />
            ) : null}
          </div>
        </div>

        <div className="input-big-frame">
          <p className="input-title">Şifre</p>
          <div className="input-small-frame">
            <IoKeyOutline className="input-info-icon ml-3" />
            <input
              className="input"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="***********"
              id="password"
              value={values.password}
              onChange={handleChange}
            />
            <IoEyeOffOutline
              className="input-info-icon mr-4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />

            {showErrors && errors.password ? (
              <VscError className="input-error-icon" />
            ) : null}
          </div>
        </div>

        <div className="robot-check-frame">
          <input
            type="checkbox"
            id="term"
            className="robot-check-input"
            value={values.term}
            onChange={handleChange}
          />
          <p className="robot-check-info">Ben robot değilim</p>
          {showErrors && errors.term ? (
            <VscError className="text-red-400 absolute right-2" />
          ) : null}
        </div>

        <button
          type="submit"
          className="form-button"
          onClick={() => setShowErrors(true)}
        >
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
