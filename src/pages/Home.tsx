import bgimg from "../assets/images/background.png";
import Card from "../components/layout/Card";
import Catagory from "../components/layout/Catagory";
import AddProduct from "../components/layout/AddProduct";
import SeasonalFood from "../components/layout/SeasonalFood";
import Body from "../components/layout/Body";
import Footer from "../components/layout/Footer";
import Seasonal from "../components/layout/Seasonal";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">

      <div
        className="min-h-screen bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="flex items-center justify-center min-h-screen px-4 text-white text-center">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              ECOLOGIGALLY & RESPONSIBLY GROWNFOOD
            </h3>
            <h5 className="text-sm sm:text-base">
              We supply highly quality organic products
            </h5>
            <br />
            <button className="bg-green-400 rounded-full text-base sm:text-lg h-10 px-6 flex justify-center items-center mx-auto hover:text-blue-500 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative -mt-16 px-4">
        <Catagory />
        <br />
        <span className="text-[#00814E] font-bold text-xl sm:text-2xl md:text-3xl flex justify-center uppercase text-center">
          Best Sellor
        </span>
      </div>

      <Card />
      <AddProduct />
      <div className="mt-4">
        <Seasonal />
      </div>
      <div className="mt-4">
        <SeasonalFood />
      </div>
     <div className="mt-4">
       <Body />
     </div>
      <Footer />
    </div>
  );
};

export default Home