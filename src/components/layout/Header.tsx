import logo from "../../assets/images/logo.png";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className=" inset-0 w-full fixed z-100">
      <div className="flex items-start justify-between px-6 md:px-10 py-4 bg-white/90  rounded-2xl mx-4">
        <div className="flex items-center">
          <img src={logo} alt="Bhoomi Logo" className="h-14 relative left-25" />
        </div>

        <div className="flex flex-col gap-3 w-full max-w-xl">
          <div className="w-full max-w-sm">
            <SearchBar />
          </div>

          <div className="bg-green-500 rounded-full px-4 py-2 w-full relative right-25">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
