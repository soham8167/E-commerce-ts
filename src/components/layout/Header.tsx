import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="px-4 sm:px-6">
        <div className="bg-white rounded-b-2xl shadow-md">
          
          {/* Top Row */}
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            
            {/* Logo */}
            <img
              src={logo}
              alt="Bhoomi Farmers"
              className="h-12 sm:h-14 cursor-pointer"
              onClick={() => navigate("/")}
            />

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-xl justify-end">
              <SearchBar />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Navbar />
            </div>
          </div>

          {/* Mobile Search */}
          <div className="block md:hidden px-4 pb-3">
            <SearchBar />
          </div>

          {/* Desktop Navbar with Clip */}
          <div className="hidden md:block relative h-16">
            <div
              className="absolute right-0 bottom-0 bg-[#5E8E2D] 
                         w-[92%] h-[85%] 
                         px-6 flex items-center justify-end 
                         shadow-lg rounded-br-2xl"
              style={{
                clipPath:
                  "polygon(10% 15%, 100% 8%, 100% 100%, 0% 100%, 3% 20%)",
              }}
            >
              <Navbar />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
