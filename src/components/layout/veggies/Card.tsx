

import { Minus, Plus, ShoppingCart } from "lucide-react";
import { vegStore } from "../../../store/vegstore";
import { useNavigate } from "react-router-dom";
import made from '../../../assets/images/made.svg'
const Card = () => {
  const { products, increment, decrement } = vegStore();
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-8 justify-center m-5">
      

      {products.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/product/${item.id}`)}
          className="bg-[#FBF9F6] border-[#A59786] w-60 h-90 rounded-2xl p-4 shadow-md relative cursor-pointer hover:scale-105 transition"
        >
          {item.bestSeller && (
            <span className="absolute top-3 left-3 bg-[#EF7F00] text-white text-xs px-3 py-1 rounded-full">
              Best Seller
            </span>
          )}

          <span className="absolute top-1 right-2 bg-orange-400 text-white text-xs px-1.5 py-1 rounded-full text-center">
            {item.discount}% <br /> OFF
          </span>

          <div className="bg-white rounded-xl flex justify-center p-4">
            <img
              src={item.image}
              alt={item.title}
              className="h-32 object-contain"
            />
          </div>

<div className="flex justify-center  bottom-3 relative ml-16">
                  <img src={made}/>
                  </div>

          <div className="text-center mt-4">
            <h3 className="font-medium text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.weight}</p>

            <div className="flex justify-center items-center gap-2 mt-2">
              <span className="line-through text-gray-400 text-sm">
                ₹{item.originalPrice}/-
              </span>
              <span className="text-green-500 font-bold text-lg">
                ₹{item.price}/-
              </span>
            </div>
          </div>

          {/* Stop propagation so buttons don’t navigate */}
          <div
            className="flex items-center justify-between mt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
                <button
                  onClick={() => decrement(item.id)}
                  className="border rounded-full px-1 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  <Minus size={10} />
                </button>
                <div className="border   px-2 py-0.5 rounded-sm font-medium">
                  {item.quantity}
                </div>
                <button
                  onClick={() => increment(item.id)}
                  className="border rounded-full px-1 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  <Plus size={10} />
                </button>
              </div>

            <button className="flex items-center gap-2 border border-orange-500 px-3 py-2 rounded-2xl">
              <ShoppingCart size={15} /> Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
