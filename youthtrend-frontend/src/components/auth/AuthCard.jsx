import { Link } from "react-router-dom";
import { Mail, Lock, Eye, Globe } from "lucide-react";

function AuthCard() {
  return (
    <div className="w-full max-w-lg">

      {/* Language */}
      <div className="flex justify-end mb-6">
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100">
          <Globe size={18} />
          Switch Language
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-center text-[#005429]">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Access your campus dashboard
        </p>

        {/* Tabs */}
        <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1 mt-8">

          <button className="bg-white rounded-lg py-3 font-semibold text-[#005429] shadow">
            Log In
          </button>

          <Link
            to="/register"
            className="flex items-center justify-center font-semibold text-gray-600"
          >
            Sign Up
          </Link>

        </div>

        {/* Email */}
        <div className="mt-8">
          <label className="font-semibold">Email Address</label>

          <div className="flex items-center border rounded-xl px-4 mt-2">

            <Mail size={18} className="text-gray-400" />

            <input
              type="email"
              placeholder="student@university.cm"
              className="flex-1 py-4 ml-3 outline-none"
            />

          </div>
        </div>

        {/* Password */}
        <div className="mt-6">

          <div className="flex justify-between">

            <label className="font-semibold">
              Password
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-[#005429]"
            >
              Forgot password?
            </Link>

          </div>

          <div className="flex items-center border rounded-xl px-4 mt-2">

            <Lock size={18} className="text-gray-400" />

            <input
              type="password"
              placeholder="••••••••"
              className="flex-1 py-4 ml-3 outline-none"
            />

            <Eye
              size={18}
              className="text-gray-400 cursor-pointer"
            />

          </div>

        </div>

        {/* Remember */}
        <div className="flex items-center gap-2 mt-5">
          <input type="checkbox" />

          <span className="text-sm text-gray-600">
            Remember this device
          </span>
        </div>

        {/* Button */}
        <button className="w-full mt-8 bg-[#005429] hover:bg-green-800 text-white py-4 rounded-xl font-semibold transition">
          Continue to Dashboard
        </button>

      </div>

    </div>
  );
}

export default AuthCard;