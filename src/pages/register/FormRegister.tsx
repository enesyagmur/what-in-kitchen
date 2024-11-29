import { CiMail } from "react-icons/ci";

import logo from "../../assets/logo1.png";
import { IoEye, IoEyeOffOutline, IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { VscError } from "react-icons/vsc";
import { useState } from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../formSchema/registerSchema";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { LuSpace } from "react-icons/lu";
import { LuMailX } from "react-icons/lu";
import { CgPassword } from "react-icons/cg";

const FormRegister = () => {
  const navigate = useNavigate();

  const registerWithFormFunc = async (values: {
    user: string;
    email: string;
    password: string;
  }) => {
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = data.user;
      if (user) {
        await updateProfile(user, {
          displayName: values.user,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Kayıt sayfasında hata:", error);
    }
  };

  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      user: ``,
      email: ``,
      password: ``,
      term: ``,
    },
    validationSchema: registerSchema,
    onSubmit: (values) => registerWithFormFunc(values),
  });

  return (
    <div className="w-full sm:w-7/12 h-3/6 sm:h-full flex flex-col items-center justify-between sm:justify-center relative">
      <div className="form-title-frame">
        <img src={logo} alt="logo" className="form-title-logo" />
        <p className="form-title">Yeni Hesap</p>
      </div>

      <form
        className="w-11/12 h-[90%] sm:h-4/6 flex flex-col items-center justify-between mb-4 sm:mb-0"
        onSubmit={handleSubmit}
      >
        <div className="input-big-frame">
          <p className="input-title">İsim Soyisim</p>
          <div className="input-small-frame">
            <CiUser className="input-icon ml-3" />
            <input
              className="input pb-1"
              type="text"
              placeholder="Mehmet Yılmaz"
              id="user"
              value={values.user}
              onChange={handleChange}
            />

            {showErrors && errors.user && values.user === "" ? (
              <VscError className="input-error-icon" title="Boş bırakılamaz" />
            ) : null}

            {showErrors && errors.user && !values.user.includes(" ") ? (
              <LuSpace
                className="input-error-icon"
                title="İsim ve soyisim ayrı yazılmalı"
              />
            ) : null}
          </div>
        </div>

        <div className="input-big-frame">
          <p className="input-title">Email</p>
          <div className="input-small-frame">
            <CiMail className="input-icon ml-3" />
            <input
              className="input pb-1"
              type="email"
              placeholder="whatinkitchen@info.com"
              id="email"
              value={values.email}
              onChange={handleChange}
            />

            {showErrors && values.email === "" ? (
              <VscError className="input-error-icon" title="Boş bırakılamaz" />
            ) : null}

            {showErrors && errors.email && values.email !== "" ? (
              <LuMailX
                className="input-error-icon"
                title="Girilen mail geçersiz"
              />
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

            {!showPassword ? (
              <IoEyeOffOutline
                className="input-info-icon mr-4 cursor-pointer"
                title="Şifreyi göster/gizle"
                onClick={() => setShowPassword(true)}
              />
            ) : (
              <IoEye
                className="input-info-icon mr-4 cursor-pointer"
                title="Şifreyi göster/gizle"
                onClick={() => setShowPassword(false)}
              />
            )}

            {showErrors && values.password === "" ? (
              <VscError className="input-error-icon" title="Boş bırakılamaz" />
            ) : null}

            {showErrors &&
            values.password !== "" &&
            values.password.length < 8 ? (
              <CgPassword
                className="input-error-icon"
                title="Girilen şifre en az 8 karakter olmalı"
              />
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
            <VscError
              className="text-red-400 absolute right-2"
              title="Boş bırakılamaz"
            />
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
