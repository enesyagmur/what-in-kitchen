import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//DURUM: ai componentinde materials da inputa girilen malzemeleri göstereceğim sağında tarif türü(vegan, vejeteryan) - tarif çşidi (tatlı yemek meze vb) gibi filtre ekleyeceğim
