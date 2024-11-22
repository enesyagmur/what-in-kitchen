import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../assets/logo1.png";
import { IoEyeOffOutline, IoKeyOutline } from "react-icons/io5";
import { FcQuestions } from "react-icons/fc";
import google_logo from "../../assets/google-logo.png";
import github_logo from "../../assets/github-logo.png";
import { useNavigate } from "react-router-dom";
import { VscError } from "react-icons/vsc";
import { useFormik } from "formik";
import { loginSchema } from "../../formSchema/loginSchema";
import { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

const FormLogin = () => {
  const navigate = useNavigate();

  const loginWithFormFunc = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = data.user;
      if (user) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Login formunda hata:", error);
    }
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const data = await signInWithPopup(auth, provider);
      const user = data.user;
      if (user) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Google ile girişite hata:", error);
    }
  };

  const loginWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const data = await signInWithPopup(auth, provider);
      const user = data.user;
      if (user) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Github ile girişte hata:", error);
    }
  };

  const loginForOneTry = async () => {
    const check = localStorage.getItem("try");

    if (!check) {
      localStorage.setItem("try", "1");
      navigate("/home");
    } else {
      console.error(
        "Misafir giriş hakkınız bitti. Hesap oluşturarak kullanabilirsiniz."
      );
    }
  };

  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: ``,
      password: ``,
      term: ``,
    },
    validationSchema: loginSchema,
    onSubmit: (values) => loginWithFormFunc(values),
  });

  return (
    <div className="w-full sm:w-7/12 md:w-7/12 h-3/6 sm:h-full flex flex-col items-center justify-between sm:justify-center">
      <div className="form-title-frame">
        <img src={logo} alt="logo" className="form-title-logo" />
        <p className="form-title">Hoşgeldiniz</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-big-frame">
          <p className="input-title">Email</p>
          <div className="input-small-frame">
            <MdOutlineMarkEmailRead className="input-info-icon ml-3" />
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
            <IoKeyOutline className="input-info-icon ml-3 " />
            <input
              className="input"
              placeholder="***********"
              id="password"
              value={values.password}
              onChange={handleChange}
              type={`${showPassword ? "text" : "password"}`}
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

        <div className="w-full md:w-10/12 h-[30px] sm:h-[40px] flex items-center justify-center mt-2">
          <div className="other-login-methods" onClick={loginWithGoogle}>
            <img
              src={google_logo}
              alt="login-method"
              className="login-methods-image"
              title="Google ile giriş"
            />
          </div>
          <div
            className="other-login-methods text-3xl"
            title="Bir seferlik misafir girişi"
            onClick={loginForOneTry}
          >
            <FcQuestions />
          </div>
          <div className="other-login-methods" onClick={loginWithGithub}>
            <img
              src={github_logo}
              alt="login-method"
              className="login-methods-image"
              title="Github ile giriş"
            />
          </div>
        </div>

        <div className="robot-check-frame">
          <input
            type="checkbox"
            name=""
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
