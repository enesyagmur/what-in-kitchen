import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../assets/logo1.png";

const FormLogin = () => {
  return (
    <div className="w-7/12 h-full flex flex-col items-center justify-center relative">
      <div className="w-full h-1/5 flex items-center justify-center">
        <img src={logo} alt="logo" className="w-[40px] h-[40px] object-cover" />
        <p className="font-bold text-4xl text-center">Hoşgeldiniz</p>
      </div>

      <form className="w-11/12 h-5/6 flex flex-col items-center justify-evenly">
        <div className="w-10/12 h-[70px] flex flex-col items-start justify-between">
          <p className="font-bold">Email</p>
          <div className="w-full h-[40px] flex items-center border-2 rounded-lg bg-white focus:border-2 focus:border-black">
            <MdOutlineMarkEmailRead className="ml-3 text-gray-400" />
            <input
              className="w-11/12 h-full pl-2 pb-1 focus:outline-none"
              type="email"
              placeholder="whatinkitchen@info.com"
              id="email"
            />
          </div>
        </div>

        <div className="w-10/12 h-[80px] flex items-center justify-center">
          <input
            className="w-full h-5/6"
            type="password"
            placeholder="Şifre Giriniz"
            id="password"
          />
        </div>

        <div className="w-10/12 h-[50px] flex items-center justify-start border-2 ">
          <input type="checkbox" name="" id="" className=" w-[20px] h-[20px]" />
          <p className="pl-2 text-gray-500">Ben robot değilim</p>
        </div>

        <button
          type="submit"
          className="w-10/12 h-[50px] bg-green_custom rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
