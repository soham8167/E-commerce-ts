import { Minus, Plus, ShoppingCart } from "lucide-react";

import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";
import c4 from "../../assets/images/c4.png";
import { useState } from "react";


interface Product {
  id: number;
  title: string;
  image: string;
  weight: string;
  originalPrice: number;
  price: number;
  discount: number;
  quantity: number;
  bestSeller?: boolean;
}


const products: Product[] = [
  {
    id: 1,
    title: "Ooty Baby Potato",
    image: c1,
    weight: "1Kg",
    originalPrice: 120,
    price: 80,
    discount: 20,
    quantity: 10,
    bestSeller: true,
  },
  {
    id: 2,
    title: "Ooty Baby Potato",
    image: c2,
    weight: "1Kg",
    originalPrice: 120,
    price: 80,
    discount: 20,
    quantity: 10,
    bestSeller: true,
  },
  {
    id: 3,
    title: "Ooty Baby Potato",
    image: c3,
    weight: "1Kg",
    originalPrice: 120,
    price: 80,
    discount: 20,
    quantity: 10,
  },
  {
    id: 4,
    title: "Ooty Baby Potato",
    image: c4,
    weight: "1Kg",
    originalPrice: 120,
    price: 80,
    discount: 20,
    quantity: 10,
  },
  
];


const Card = () => {

   const [items, setItems] = useState<Product[]>(products);


     const handleIncrement = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-[#d2ccc4] w-65 rounded-2xl p-4 shadow-md relative"
        >
         
          {item.bestSeller && (
            <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              Best Seller
            </span>
          )}

         
          <span className="absolute top-3 right-3 bg-orange-400 text-white text-xs px-2 py-2 rounded-full text-center">
            {item.discount}% <br /> OFF
          </span>

         
          <div className="bg-white rounded-xl p- flex justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="h-32 object-contain"
            />
          </div>

          
          <div className="text-center mt-4">
            <h3 className="font-medium text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.weight}</p>

            
            <div className="flex justify-center items-center gap-2 mt-2">
              <span className="line-through text-gray-400 text-sm">
                ₹{item.originalPrice}
              </span>
              <span className="text-green-500 font-bold text-lg">
                ₹{item.price}/-
              </span>
            </div>
          </div>


      
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <button onClick={()=> handleDecrement(item.id)}  className="border rounded-full px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <Minus size={10} />
              </button>
              <div className="border rounded-md px-4 py-2 font-medium">
      {item.quantity}
    </div>
              <button onClick={()=>handleIncrement(item.id)} className="border rounded-full px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <Plus size={10} />
              </button>
            </div>

            <button className="flex items-center gap-3 border border-orange-500 text-orange-500 px-3 py-2 rounded hover:bg-orange-500 hover:text-white">
              <ShoppingCart size={15} />
              Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
