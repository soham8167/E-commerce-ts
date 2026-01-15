// import bgimg from "../assets/images/background.png";
// import Card from "../components/layout/Card";
// import Catagory from "../components/layout/Catagory";
// import AddProduct from "../components/layout/AddProduct";
// import SeasonalFood from "../components/layout/SeasonalFood";
// import Body from "../components/layout/Body";
// import Seasonal from "../components/layout/Seasonal";

// const Home = () => {
//   return (
//     <div className="w-full overflow-hidden">

//       <div
//         className="flex justify-start items-start min-h-screen bg-cover bg-center pt-10 pl-10 fade-zoom"
//         style={{ backgroundImage: `url(${bgimg})` }}
//       >
//         <div className="flex items-center justify-center min-h-screen px-4 text-white text-center">
//           <div >
//             <h3 className="font-bebas text-6xl sm:text-4xl md:text-5xl  mb-4 tracking-wide">
//               ECOLOGIGALLY & RESPONSIBLY
//             </h3>

//             <h3 className="font-bebas  sm:text-4xl md:text-5xl  mb-4  flex tracking-wide ">GROWN FOOD</h3>
//             <h5 className="text-sm sm:text-base flex">
//               We supply highly quality organic products
//             </h5>
//             <br />
//             <div className="flex ">
//               <button className="bg-[#00814E] rounded-full text-base sm:text-lg h-12 px-6   hover:text-blue-500 cursor-pointer">
//               Shop Now
//             </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative -mt-16 px-4">
//         <Catagory />
//         <br />

//         <span className="text-[#00814E] font-bebas  sm:text-2xl md:text-3xl flex justify-center uppercase text-center  text-3xl">
//           Best Sellor
//         </span>

//       </div>

//       <Card />
//       <AddProduct />
//       <div className="mt-4">
//         <Seasonal />
//       </div>
//       <div className="mt-4">
//         <SeasonalFood />
//       </div>
//      <div className="mt-4">
//        <Body />
//      </div>
//     </div>
//   );
// };

// export default Home

import Card from "../components/layout/Card";
import Catagory from "../components/layout/Catagory";
import AddProduct from "../components/layout/AddProduct";
import SeasonalFood from "../components/layout/SeasonalFood";
import Body from "../components/layout/Body";
import Seasonal from "../components/layout/Seasonal";
import { motion } from "framer-motion";
 import { useNavigate } from "react-router-dom";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative min-h-screen overflow-hidden">
        {/*  Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/home-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/*  Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/*  Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-xl text-white">
              <h2 className="font-bebas text-2xl sm:text-4xl md:text-6xl lg:text-7xl mb-2 tracking-wide uppercase whitespace-nowrap">
                Ecologically & Responsibly
              </h2>

              <h4 className="font-light text-2xl sm:text-3xl md:text-6xl lg:text-5xl mb-4 tracking-wider ">
                GROWN FOOD
              </h4>

              <p className="text-sm sm:text-base md:text-lg mb-8 text-white/90">
                We supply highly quality organic products
              </p>

              <button 
              className="bg-[#00814E] rounded-full text-sm sm:text-base md:text-lg h-11 sm:h-12 px-6 sm:px-8 hover:bg-white hover:text-[#00814E] transition font-medium"
               onClick={() => navigate("/veg")}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY */}

      <motion.div
        className="relative -mt-16 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Catagory />

        <br />
        <span className="text-[#00814E] font-bebas sm:text-2xl md:text-3xl flex justify-center uppercase text-center text-3xl">
          Best Seller
        </span>
      </motion.div>

      {/* CARDS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card />
      </motion.div>

      {/* ADD PRODUCT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <AddProduct />
      </motion.div>

      {/* SEASONAL */}
      <motion.div
        className="mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <Seasonal />
      </motion.div>

      <motion.div
        className="mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <SeasonalFood />
      </motion.div>

      <motion.div
        className="mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <Body />
      </motion.div>
    </div>
  );
};

export default Home;
