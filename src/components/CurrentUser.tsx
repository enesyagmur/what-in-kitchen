import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";

const CurrentUser = () => {
  const [user, setUser] = useState<string>("");

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

  if (user) {
    return (
      <div className="flex items-center justify-center absolute lg:right-20 lg:top-16 z-50 text-xl font-bold text-cream_custom capitalize border-b-2  p-2 ">
        <p>{user}</p>
        <IoMdLogOut className="ml-3 hover:text-red_custom cursor-pointer" />
      </div>
    );
  }
};

export default CurrentUser;
