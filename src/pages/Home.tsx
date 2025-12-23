import Header from "../components/layout/Header";
import bgimg from '../assets/images/background.png'
import Card from "../components/layout/Card";
import Catagory from "../components/layout/Catagory";
import AddProduct from "../components/layout/AddProduct";
import SeasonalFood from "../components/layout/SeasonalFood";
import Body from "../components/layout/Body";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div
      className="max-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

     <Header/>

     
      <div className="relative z-10 flex items-center justify-center h-screen text-white">
        <div className="text-center">
          <h3 className="text-5xl font-bold mb-4">
           ECOLOGIGALLY & RESPONSIBLY GROWNFOOD
          </h3>
          <h5>We supply highly quality organic products</h5><br/>
          <button className="bg-green-400 rounded-full text-lg h-10 w-30 flex justify-center hover:text-blue-500 cursor-pointer">Shop Now</button>
        </div>
       
      </div>
     <div className="-mt-20 relative ">
        <Catagory/>
     </div>
     <br/>
      <span className="bg-green-600 text-2xl">Best Sellers</span>
      <br/>
      <br/>
      <Card/>
      <br/>
      <span className="bg-green-600 text-2xl rounded">View more</span>
      <br/>
      <br/>
      <AddProduct/>
      <br/>
      <SeasonalFood/>
      <br/>
      <Body/>
      <br/>
      <Footer/>
    </div>
  );
};



export default Home;
