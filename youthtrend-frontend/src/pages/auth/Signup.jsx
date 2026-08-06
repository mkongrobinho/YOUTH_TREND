import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, User, GraduationCap, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";

function Signup() {
  const { t } = useTranslation();
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    university: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(formData);
      navigate("/login");
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1564981797816-1043664bf78d')]">
        <div className="absolute inset-0 bg-green-900/60"></div>
        <div className="relative z-10 text-white p-12 flex flex-col justify-between">
          <h2 className="text-2xl font-bold">🎓 YouthTrend</h2>
          <div>
            <span className="bg-green-700/70 px-4 py-2 rounded-full text-sm">
              OFFICIAL STUDENT NETWORK
            </span>
            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Join Cameroon's
              <br />
              Campus Community
            </h1>
            <p className="mt-6 text-gray-200 text-lg max-w-lg">
              Create your account and connect with students across
              multi-campus networks.
            </p>
            <div className="flex gap-8 mt-8">
              <span>✓ Verified Students</span>
              <span>👥 Active Communities</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col items-center justify-center p-5">
        <form onSubmit={handleSubmit} className="w-full max-w-md border rounded-2xl p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-center">Create Account</h1>
          <p className="text-center text-gray-500 mt-2">
            Join your campus dashboard
          </p>

          {error && (
            <p className="text-red-600 text-sm text-center mt-4">{error}</p>
          )}

          {/* Tabs */}
          <div className="flex bg-gray-200 rounded-xl mt-8 p-1">
            <Link to="/login" className="flex-1 text-center py-2 text-gray-500">
              Log In
            </Link>
            <button
              type="button"
              className="flex-1 bg-white rounded-lg py-2 font-semibold text-green-800"
            >
              Sign Up
            </button>
          </div>

          {/* Full Name */}
          <label className="block mt-7 font-medium">Full Name</label>
          <div className="flex items-center border rounded-xl mt-2 px-4">
            <User size={20} className="text-gray-400" />
            <input
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full p-3 outline-none"
              required
            />
          </div>

          {/* Email */}
          <label className="block mt-5 font-medium">Email</label>
          <div className="flex items-center border rounded-xl mt-2 px-4">
            <Mail size={20} className="text-gray-400" />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="student@university.cm"
              className="w-full p-3 outline-none"
              required
            />
          </div>

          {/* University */}
          <label className="block mt-5 font-medium">University</label>
          <div className="flex items-center border rounded-xl mt-2 px-4">
            <GraduationCap size={20} className="text-gray-400" />
            <input
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="University of Buea"
              className="w-full p-3 outline-none"
            />
          </div>

          {/* Password */}
          <label className="block mt-5 font-medium">Password</label>
          <div className="flex items-center border rounded-xl mt-2 px-4">
            <Lock size={20} className="text-gray-400" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full p-3 outline-none"
              required
            />
            <button type="button" onClick={() => setShowPassword((s) => !s)}>
              {showPassword ? (
                <EyeOff size={20} className="text-gray-500" />
              ) : (
                <Eye size={20} className="text-gray-500" />
              )}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#006b3c] text-white py-4 rounded-xl mt-6 font-semibold flex justify-center items-center gap-2 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
            {!loading && <ArrowRight size={20} />}
          </button>

          <p className="text-center text-xs text-gray-500 mt-7">
            By signing up, you agree to YouthTrend's
            <br />
            Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;