import group from '../../assets/images/Group.svg'
import cart from '../../assets/images/cart.svg'
import vector from '../../assets/images/Vector.svg'
import { FaMagnifyingGlass } from "react-icons/fa6";


const SearchBar = () => {
  return (
    <div>
        <div className="flex items-start justify-between px-3 rounded-b-2xl gap-4">
           <div className='relative w-full'>
             <input
      type="text"
      placeholder="Search for products..."
      className="w-full px-5 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
     
    />
     <FaMagnifyingGlass className='absolute right-4 top-0.5 cursor-pointer'/>
           </div>

        <img className='cursor-pointer' src={group} alt='not found'/>
        <img className='cursor-pointer' src={vector} alt='not found'/>
        <img className='cursor-pointer' src={cart} alt='not found'/>

        </div>

    </div>
  );
};

export default SearchBar;
