import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Veggies from "../pages/Veggies";
import About from "../pages/About";
import Combos from "../pages/Combos";
import Exotic from "../pages/Exotic";
import Fruits from "../pages/Fruits";
import Recipes from "../pages/Recipes";
import Subscriptions from "../pages/Subscriptions";
import Notfound from "../pages/Notfound";
import ProductDetails from "../pages/ProductDetails";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/veg" element={<Veggies />} />
      <Route path="/about" element={<About />} />
      <Route path="/combo" element={<Combos />} />
      <Route path="/exotic" element={<Exotic />} />
      <Route path="/fruit" element={<Fruits />} />
      <Route path="/recipe" element={<Recipes />} />
      <Route path="/subscription" element={<Subscriptions />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
  );
};

export default AppRoutes;
