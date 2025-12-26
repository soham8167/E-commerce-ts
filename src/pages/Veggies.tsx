import bgimg from "../assets/images/Rectangle 122.png";
import Footer from "../components/layout/Footer";
import Card from "../components/layout/veggies/Card";
import Catagory from "../components/layout/veggies/Catatory";

const Veggies = () => {
  return (
    <div className="pt-20">
      <div
        className="min-h-screen bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${bgimg})` }}
      />

      <div className="-mt-45 px-4">
        <Catagory />
      </div>

      <div className="mt-10">
        <Card/>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default Veggies;
