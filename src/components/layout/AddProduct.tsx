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

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <div className="bg-[#F3BD30] rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-red-700">FARM FRESH</h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2">GOLD</h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="bg-[#FBF9F6] text-[#00814E] px-6 py-2 rounded-full mt-4 cursor-pointer font-semibold">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src={img2}
              alt="Gold Product"
              className="w-32 sm:w-40 h-auto mx-auto sm:mx-0 my-4 sm:my-6"
            />
          </div>
        </div>

        <div className="bg-[#F9CF3A] rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-red-700">FARM FRESH</h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2">GOLD</h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="bg-[#FBF9F6] text-[#00814E] px-6 py-2 rounded-full mt-4 cursor-pointer font-semibold">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src={img3}
              alt="Gold Product"
              className="w-32 sm:w-40 h-auto mx-auto sm:mx-0 my-4 sm:my-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
