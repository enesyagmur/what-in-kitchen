import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";
import Result from "./pages/result/Result";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Result />} path="/result" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//DURUM:firebase bağlantılarını yapacağım
/*
notfound sayfasında giriş yapıldıysa home a - yapılmadıysa login e gönderme kontrolü yapmalıyım
 */
