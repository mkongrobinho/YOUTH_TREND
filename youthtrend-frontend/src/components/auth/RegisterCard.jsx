import { Link } from "react-router-dom";
import { User, Mail, School, Lock } from "lucide-react";

function RegisterCard() {
  return (
    <div className="w-full max-w-lg">

      <div className="bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-[#005429]">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Join the YouthTrend student community
        </p>


        <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1 mt-8">

          <Link
            to="/login"
            className="flex justify-center items-center py-3 text-gray-600 font-semibold"
          >
            Log In
          </Link>


          <button className="bg-white rounded-lg py-3 text-[#005429] font-semibold shadow">
            Sign Up
          </button>

        </div>



        <div className="mt-6 space-y-4">


          <div className="flex items-center border rounded-xl px-4">
            <User size={18} className="text-gray-400"/>

            <input
              placeholder="Full Name"
              className="flex-1 p-4 outline-none ml-3"
            />
          </div>



          <div className="flex items-center border rounded-xl px-4">
            <Mail size={18} className="text-gray-400"/>

            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-4 outline-none ml-3"
            />
          </div>



          <div className="flex items-center border rounded-xl px-4">
            <School size={18} className="text-gray-400"/>

            <input
              placeholder="University"
              className="flex-1 p-4 outline-none ml-3"
            />
          </div>



          <div className="flex items-center border rounded-xl px-4">
            <Lock size={18} className="text-gray-400"/>

            <input
              type="password"
              placeholder="Password"
              className="flex-1 p-4 outline-none ml-3"
            />
          </div>



        </div>



        <button className="
          w-full
          mt-8
          bg-[#005429]
          text-white
          py-4
          rounded-xl
          font-semibold
        ">
          Create Account
        </button>



        <p className="text-center text-sm text-gray-500 mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-[#005429] font-semibold ml-2"
          >
            Login
          </Link>

        </p>


      </div>

    </div>
  );
}

export default RegisterCard;