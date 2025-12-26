import logo from "../../assets/images/logo.png";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="px-4 pt-3">
        <div className="bg-white rounded-2xl shadow-md px-6 py-3 -mt-3">

          {/* 🔹 Top Section */}
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <img
              src={logo}
              alt="Bhoomi Farmers"
              className="h-12 sm:h-14 object-contain"
            />

            {/* Search Bar (Desktop) */}
            <div className="hidden md:block flex-1 max-w-2xl">
              <SearchBar />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Navbar />
            </div>
          </div>

          {/* Search Bar (Mobile) */}
          <div className="block md:hidden mt-3">
            <SearchBar />
          </div>

          {/* 🔹 Green Navigation Strip */}
          <div className="hidden md:flex justify-end mt-4">
            <div className="bg-[#5E8E2D] rounded-full px-10 py-2 shadow">
              <Navbar />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
