import { useEffect, useMemo, useState } from "react";

import Ai from "./Ai";
import homeBg from "../../assets/home-images/homebg4.png";
import { useDispatch } from "react-redux";
import { updateError } from "../../redux/errorSlice";
import { resetResult } from "../../redux/resultSlice";

const Home = () => {
  const [list, setList] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setList([]);
    dispatch(updateError(""));
    dispatch(resetResult());
  }, [dispatch]);

  const backgroundStyle = useMemo(
    () => ({
      backgroundImage: `url(${homeBg})`,
      backgroundRepeat: "repeat-y",
    }),
    []
  );

  return (
    <div
      style={backgroundStyle}
      className="w-full min-h-screen flex items-center justify-center relative"
    >
      <Ai list={list} setList={setList} />
    </div>
  );
};

export default Home;
