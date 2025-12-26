import group from "../../assets/images/Group.svg";
import cart from "../../assets/images/cart.svg";
import vector from "../../assets/images/Vector.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4">

        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search products"
            className="w-full px-5 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#5E8E2D]"
          />
          <FaMagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <img src={group} alt="" className="w-5 h-5 cursor-pointer" />
          <img src={vector} alt="" className="w-5 h-5 cursor-pointer" />
          <img src={cart} alt="" className="w-5 h-5 cursor-pointer" />
        </div>

      </div>
    </div>
  );
};

export default SearchBar;
