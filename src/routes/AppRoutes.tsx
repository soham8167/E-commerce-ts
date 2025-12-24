import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Veggies from "../pages/Veggies";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Routes>
      <Route path="/veg" element={<Veggies/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
