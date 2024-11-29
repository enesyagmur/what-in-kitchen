import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../assets/logo1.png";
import { IoEye, IoEyeOffOutline, IoKeyOutline } from "react-icons/io5";
import { FcQuestions } from "react-icons/fc";
import google_logo from "../../assets/login-bg/google-logo.png";
import github_logo from "../../assets/login-bg/github-logo.png";
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
import { CgPassword } from "react-icons/cg";
import { LuMailX } from "react-icons/lu";
import ResetPassword from "./ResetPassword";
import toast from "react-hot-toast";

type loginError = {
  code?: string;
  message?: string;
};

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
    } catch (error: unknown) {
      const AuthError = error as loginError;
      if (AuthError?.code === `auth/invalid-credential`) {
        toast.error("Email veya şifre hatalı", {
          style: {
            background: "#DCE9E2",
            color: "#D96452",
            border: "1px solid #D96452",
          },
        });
      } else {
        toast.error(AuthError.message || "Bir hata oluştu");
      }
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
    } catch (error: unknown) {
      const AuthError = error as loginError;
      toast.error(`Google girişinde hata ${AuthError.message}`, {
        style: {
          background: "#DCE9E2",
          color: "#D96452",
          border: "1px solid #D96452",
        },
      });
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
    } catch (error: unknown) {
      const AuthError = error as loginError;
      toast.error(`Github girişinde hata ${AuthError.message}`, {
        style: {
          background: "#DCE9E2",
          color: "#D96452",
          border: "1px solid #D96452",
        },
      });
    }
  };

  const loginForGuest = () => {
    const check = localStorage.getItem("try");

    if (!check) {
      localStorage.setItem("try", "1");
      navigate("/home");
    } else if (Number(check) < 4) {
      navigate("/home");
    } else if (Number(check) === 4) {
      toast.error(
        `Misafir giriş hakkınız bitti. Hesap oluşturarak tarif bulma yardımcınızı kullanmaya devam edebilirsiniz.`,
        {
          style: {
            background: "#DCE9E2",
            color: "#D96452",
            border: "1px solid #D96452",
          },
        }
      );
    }
  };

  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [resetPasswordShow, setResetPasswordShow] = useState<boolean>(false);

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
      {resetPasswordShow ? (
        <ResetPassword setResetPasswordShow={setResetPasswordShow} />
      ) : (
        <form
          className={`w-11/12 h-[90%] sm:h-4/6 flex flex-col items-center justify-between mb-4 sm:mb-0`}
          onSubmit={handleSubmit}
        >
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
              {showErrors && values.email === "" ? (
                <VscError
                  className="input-error-icon"
                  title="Boş bırakılamaz"
                />
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
              <IoKeyOutline className="input-info-icon ml-3 " />
              <input
                className="input"
                placeholder="***********"
                id="password"
                value={values.password}
                onChange={handleChange}
                type={`${showPassword ? "text" : "password"}`}
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
                <VscError
                  className="input-error-icon"
                  title="Boş bırakılamaz"
                />
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
          <p
            className="robot-check-info cursor-pointer"
            onClick={() => setResetPasswordShow(true)}
          >
            şifremi unuttum
          </p>

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
              title="Misafir girişi"
              onClick={loginForGuest}
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
            Giriş
          </button>

          <p
            className="form-page-change-button "
            onClick={() => navigate("/register")}
          >
            Email ile Kayıt
          </p>
        </form>
      )}
    </div>
  );
};

export default FormLogin;
