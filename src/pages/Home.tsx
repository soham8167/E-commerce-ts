import Header from "../components/layout/Header";
import bgimg from '../assets/images/background.png'
import Card from "../components/layout/Card";
import Catagory from "../components/layout/Catagory";
import AddProduct from "../components/layout/AddProduct";
import SeasonalFood from "../components/layout/SeasonalFood";
import Body from "../components/layout/Body";
import Footer from "../components/layout/Footer";
import Seasonal from "../components/layout/Seasonal";



const Home = () => {
  return (
    <div
      className="max-h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${bgimg})`}}
    >
      

     <Header/>

     
      <div className="relative z-10 flex items-center justify-center h-screen text-white">
        <div className="text-center">
          <h3 className="text-5xl font-bold mb-4">
           ECOLOGIGALLY & RESPONSIBLY GROWNFOOD
          </h3>
          <h5>We supply highly quality organic products</h5><br/>
          <button className="bg-green-400 rounded-full text-lg h-10 w-30 flex justify-center items-center hover:text-blue-500 cursor-pointer">Shop Now</button>
        </div>
       
      </div>
     <div className="-mt-20 relative ">
        <Catagory/>
        <br/>
     <span className="text-[#00814E] font-bold text-3xl rounded flex justify-center uppercase">Best Sellor</span>

     </div>
    
      
      <Card/>
      
      
      <AddProduct/>
     <div className="mt-8">
        <Seasonal/>
     </div>
      <div className="mt-8">
        <SeasonalFood/>
      </div>
     
      <div className="mt-12">
        <Body/>
      </div>
  
      
      <div className="mt-10">
        <Footer/>
      </div>

    </div>
  );
};



export default Home;
