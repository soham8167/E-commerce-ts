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

      <div className=" flex justify-center gap-4">
        
        <div className="bg-[#F3BD30] rounded-2xl  p-5 flex items-center">
            <div className="mb-30">
          <h3 className="text-xl font-bold  text-red-700 ">
            FARM FRESH
          </h3>
          <h2 className="text-4xl font-bold text-black-700 mt-2">
            GOLD
          </h2>
          <p className="text-gray-600 mt-3">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="bg-[#FBF9F6] text-[#00814E] px-6 py-2 rounded-full relative top-20 cursor-pointer font-semibold">
            Shop Now
          </button>
            </div>
          <div>
            <img
            src={img2}
            alt="Gold Product"
            className="w-40 h-auto my-6"
          />
          </div>
        </div>

        <div className="bg-[#F9CF3A] rounded-2xl  p-5 flex items-center">
            <div className="mb-30">
          <h3 className="text-xl font-bold  text-red-700 ">
            FARM FRESH
          </h3>
          <h2 className="text-4xl font-bold text-black-700 mt-2">
            GOLD
          </h2>
          <p className="text-gray-600 mt-3">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="bg-[#FBF9F6] text-[#00814E] px-6 py-2 rounded-full relative top-20 cursor-pointer font-semibold">
            Shop Now
          </button>
            </div>
          <div>
            <img
            src={img3}
            alt="Gold Product"
            className="w-40 h-auto my-6"
          />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddProduct;
