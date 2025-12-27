import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 mt-30">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
          <h2 className="text-center text-xl font-semibold mb-6">
            Login to Bhoomi Store
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="password"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* OTP */}
          <p className="text-center text-sm text-gray-400 my-3">
            Or Login using OTP
          </p>

          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full px-3 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Links */}
          <div className="flex justify-between text-sm mb-4">
            <span> New User?</span>
            <span
              className="text-green-600 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </span>
           
            <span className="cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* Login Button */}
          <button className="w-20 bg-green-600 text-white py-2 rounded font-medium hover:bg-green-700 transition">
            LOGIN
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-sm text-gray-400">Or Signing using</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex gap-4 justify-center">
            <button className="cursor-pointer border p-2 rounded w-12 flex justify-center hover:bg-gray-100">
              <FcGoogle size={20} />
            </button>

            <button className="cursor-pointer border p-2 rounded w-12 flex justify-center text-blue-600 hover:bg-gray-100">
              <FaFacebookF size={18} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
