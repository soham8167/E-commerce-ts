import logo from "../../assets/images/logo.png";
import a1 from '../../assets/images/path690.svg'
import a2 from '../../assets/images/path694.svg'
import a3 from '../../assets/images/path700.svg'
import a4 from '../../assets/images/path704.svg'
import a5 from '../../assets/images/image 97.svg'
import a6 from '../../assets/images/image 98.svg'
import a7 from '../../assets/images/image 99.svg'
import a8 from '../../assets/images/image 100.svg'
const Footer = () => {
  return (
    <div className="bg-gray-100 px-6 py-10">
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold mb-4">JOIN OUR MAILING LIST</h2>
        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Email Address"
            className="px-4 py-2 border rounded-md w-64"
          />
          <button className="bg-[#7C6345] text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <img src={logo} alt="logo" className="mb-4 w-32" />
          <p className="text-sm text-[#7C6345]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-sm text-[#7C6345] mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div>
          <p  className="text-[#7C6345]" >About Us</p>
          <p  className="text-[#7C6345]">Careers</p>
          <p className="text-[#7C6345]">Social</p>
          <p className="text-[#7C6345]">Boxes</p>
          <p className="text-[#7C6345]">Fruits</p>
        </div>

        <div>
          <p  className="text-[#7C6345]">Privacy Policy</p>
          <p  className="text-[#7C6345]">Terms & Conditions</p>
          <p  className="text-[#7C6345]">Refund Policy</p>
          <p  className="text-[#7C6345]">Faqs</p>
        </div>

        <div>
          <p  className="text-[#7C6345]">Contact us on</p>
          
          <h4 className=" text-[#7C6345] font-bold text-lg">1111111111</h4>
          <br/>
          <div className="flex gap-2 ">
            <p  className="text-[#7C6345]">Follow our Journey </p>
     <div className="flex rounded-full gap-2 ">
        <div className="border bg-white rounded-full p-1">
          <img src={a1}/>
          </div>
     <div className="border bg-white rounded-full p-1">
          <img src={a2}/>
          </div>
     <div className="border bg-white rounded-full p-1">
          <img src={a3}/>
          </div>
     <div className="border bg-white rounded-full p-1">
          <img src={a4}/>
          </div>
 
     </div>
    
          </div>
          <div className="flex m-1 gap-1 relative right-4 top-4 ">
        <img src={a5}/>
        <img src={a6}/>
        <img src={a7}/>
        <img src={a8}/>
     </div>
        </div>
 
      </div>
    </div>
  );
};

export default Footer;
