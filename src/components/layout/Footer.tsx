import logo from "../../assets/images/logo.png";
// import a1 from '../../assets/images/Group 62.svg'
// import a2 from '../../assets/images/Group 67.svg'

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
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3">About Us</p>
          <p>Careers</p>
          <p>Social</p>
          <p>Boxes</p>
          <p>Fruits</p>
        </div>

        <div>
          <p className="font-semibold mb-3">Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Refund Policy</p>
          <p>Faqs</p>
        </div>

        <div>
          <p className="font-semibold mb-3">Contact us on</p>
          
          <h4 className="font-bold text-lg">1111111111</h4>
          <p>Folloe our Journey

            {/* <img src={a1}/>
          <img src={a2}/> */}
          </p>
          
        </div>

      </div>
    </div>
  );
};

export default Footer;
