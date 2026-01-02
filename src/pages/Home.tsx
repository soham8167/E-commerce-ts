import bgimg from "../assets/images/background.png";
import Card from "../components/layout/Card";
import Catagory from "../components/layout/Catagory";
import AddProduct from "../components/layout/AddProduct";
import SeasonalFood from "../components/layout/SeasonalFood";
import Body from "../components/layout/Body";
import Seasonal from "../components/layout/Seasonal";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">

      <div
        className="flex justify-start items-start min-h-screen bg-cover bg-center pt-10 pl-10 fade-zoom"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="flex items-center justify-center min-h-screen px-4 text-white text-center">
          <div >
            <h3 className="font-bebas text-6xl sm:text-4xl md:text-5xl  mb-4 tracking-wide">
              ECOLOGIGALLY & RESPONSIBLY 
            </h3>
           
            <h3 className="font-bebas  sm:text-4xl md:text-5xl  mb-4  flex tracking-wide ">GROWN FOOD</h3>
            <h5 className="text-sm sm:text-base flex">
              We supply highly quality organic products
            </h5>
            <br />
            <div className="flex ">
              <button className="bg-[#00814E] rounded-full text-base sm:text-lg h-12 px-6   hover:text-blue-500 cursor-pointer">
              Shop Now
            </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-16 px-4">
        <Catagory />
        <br />
        
        <span className="text-[#00814E] font-bebas  sm:text-2xl md:text-3xl flex justify-center uppercase text-center  text-3xl">
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
    </div>
  );
};

export default Home