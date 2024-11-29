import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import { auth } from "../../firebase/firebase";

type ResetPasswordProp = {
  setResetPasswordShow: (show: boolean) => void;
};

const ResetPassword: React.FC<ResetPasswordProp> = ({
  setResetPasswordShow,
}) => {
  const [inputEmail, setInputEmail] = useState<string>("");

  const handleSendResetPasswordConnect = async () => {
    if (inputEmail === "") {
      console.log("Lütfen email adresinizi giriniz");
    }

    try {
      await sendPasswordResetEmail(auth, inputEmail);
      console.log("Şifre sıfırlama bağlantısı gönderildi");
      setResetPasswordShow(false);
    } catch (error) {
      console.error("şifre sıfırlama işleminde hata:", error);
    }
  };

  return (
    <div className="w-11/12 h-[90%] sm:h-4/6 flex flex-col items-center justify-center mb-4 sm:mb-0">
      <div className="input-big-frame mb-8">
        <p className="input-title">Email</p>
        <div className="input-small-frame">
          <MdOutlineMarkEmailRead className="input-info-icon ml-3" />
          <input
            className="input pb-1"
            type="email"
            placeholder="whatinkitchen@info.com"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          {inputEmail === "" ? (
            <VscError className="input-error-icon" title="Boş bırakılamaz" />
          ) : null}
        </div>
      </div>
      <button className="form-button" onClick={handleSendResetPasswordConnect}>
        Sıfırlama Bağlantısı
      </button>
      <p
        className="robot-check-info cursor-pointer mt-2"
        onClick={() => setResetPasswordShow(false)}
      >
        Giriş
      </p>
    </div>
  );
};

export default ResetPassword;
