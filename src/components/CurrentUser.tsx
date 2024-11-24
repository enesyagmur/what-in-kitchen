import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

type userProps = {
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const CurrentUser: React.FC<userProps> = ({ list, setList }) => {
  const [user, setUser] = useState<string>("");
  const navigate = useNavigate();

  const takeCurrentUser = async () => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user && typeof user.displayName === "string") {
          resolve(user.displayName);
        } else if (user! && localStorage.getItem("try")) {
          resolve("Misafir");
        } else {
          window.location.href = "/";
        }
      });
    });
  };

  useEffect(() => {
    const takeUser = async () => {
      const currentUser = await takeCurrentUser();

      if (typeof currentUser === "string") {
        setUser(currentUser);
      }
    };

    takeUser();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  if (user) {
    return (
      <div className="w-11/12 flex items-center justify-between absolute top-[3%] md:top-[10%] lg:top-[70px] z-50  font-bold text-cream_custom capitalize p-2 ">
        <p className="text-xl">{user}</p>

        <div
          className={`w-32 h-full flex items-center text-3xl ${
            list.length > 0 ? "justify-evenly" : "justify-end"
          }`}
        >
          {list.length > 0 && (
            <AiFillHome
              className="ml-3 text-brown_custom  hover:text-red_custom cursor-pointer"
              title="Anasayfaya dön"
              onClick={() => setList([])}
            />
          )}

          <IoMdLogOut
            className="ml-3 text-brown_custom  hover:text-red_custom cursor-pointer "
            title="Oturumu kapat"
            onClick={handleLogout}
          />
        </div>
      </div>
    );
  }
};

export default CurrentUser;
