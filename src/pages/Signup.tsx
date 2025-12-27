import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-20 mt-20">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6 sm:p-10">

          {/* Header */}
          <h2 className="text-center text-xl font-semibold">
            Create a new account
          </h2>
          <p className="text-center text-sm text-gray-500 mt-1">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-600 cursor-pointer"
            >
              Log in
            </span>
          </p>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

            <div>
              <label className="text-sm">First Name</label>
              <input className="input" />
            </div>

            <div>
              <label className="text-sm">Last Name</label>
              <input className="input" />
            </div>

            <div>
              <label className="text-sm">Email ID</label>
              <input type="email" className="input" />
            </div>

            <div>
              <label className="text-sm">Mobile Number</label>
              <input className="input" />
            </div>

            <div>
              <label className="text-sm">Password</label>
              <input type="password" className="input" />
            </div>

            <div>
              <label className="text-sm">Confirm Password</label>
              <input type="password" className="input" />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm">Referral Code (optional)</label>
              <input className="input" />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" />
            <span className="text-sm">
              I accept the{" "}
              <span className="text-green-600 cursor-pointer">
                terms & conditions
              </span>
            </span>
          </div>

          {/* Button */}
          <button className="mt-6 bg-green-600 text-white px-8 py-2 rounded hover:bg-green-700 transition">
            SIGNUP
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
