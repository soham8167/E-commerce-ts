import img1 from "../../assets/images/Rectangle 115.png";
import img2 from "../../assets/images/Group 112.png";
import img3 from "../../assets/images/Group 113.png";

const AddProduct = () => {
  return (
    <div
      className="bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Value Added Products
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="bg-[#F3BD30] rounded-2xl  p-5 flex flex-col items-center text-center">
          <h3 className="text-lg  text-red-700 ">
            FARM FRESH
          </h3>
          <h2 className="text-2xl font-bold text-black-700 mt-2">
            GOLD
          </h2>
          <p className="text-gray-600 mt-3">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <img
            src={img2}
            alt="Gold Product"
            className="w-40 h-auto my-6"
          />

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full cursor-pointer">
            Shop Now
          </button>
        </div>

        <div className="bg-[#F9CF3A] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <h3 className="text-lg  text-red-500">
            FARM FRESH
          </h3>
          <h2 className="text-2xl font-bold text-green-700 mt-2">
            PREMIUM
          </h2>
          <p className="text-gray-600 mt-3">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <img
            src={img3}
            alt="Premium Product"
            className="w-40 h-auto my-6"
          />

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full cursor-pointer">
            Shop Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddProduct;
