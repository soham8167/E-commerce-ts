import apple from "../assets/images/combo.jpg";
import banana from "../assets/images/combo1.jpg";
import mango from "../assets/images/combo2.jpeg";
import orange from "../assets/images/combo.jpg";

const Fruits = () => {
  const fruits = [
    { name: "Apple", price: "₹120 / kg", image: apple },
    { name: "Banana", price: "₹60 / kg", image: banana },
    { name: "Mango", price: "₹150 / kg", image: mango },
    { name: "Orange", price: "₹90 / kg", image: orange },
  ];

  return (
    <div className="pt-32 px-4 sm:px-6 max-w-7xl mx-auto mt-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#5E8E2D] mb-8 text-center sm:text-left">
        Fresh Fruits
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {fruits.map((fruit) => (
          <div
            key={fruit.name}
            className="bg-white shadow rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition"
          >
            <img
              src={fruit.image}
              alt={fruit.name}
              className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-lg"
            />

            <h3 className="font-semibold mt-3 text-sm sm:text-base">
              {fruit.name}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {fruit.price}
            </p>

            <button className="mt-3 bg-[#5E8E2D] text-white text-xs sm:text-sm px-3 py-1.5 rounded-full hover:bg-[#4b7424] transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
