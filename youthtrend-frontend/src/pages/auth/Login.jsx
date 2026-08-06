import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Globe, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const { t, i18n } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [language, setLanguage] = useState("en");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login({ email, password });
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
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
              The Hub for Cameroon's
              <br />
              Future Leaders
            </h1>
            <p className="mt-6 text-gray-200 text-lg max-w-lg">
              Join students across multi-campus networks. Access resources,
              communities, and opportunities tailored for your academic
              journey.
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
        {/* Language Switch */}
        <div className="w-full max-w-md flex justify-end mb-4">
          <div className="flex items-center gap-2 border rounded-full bg-white px-4 py-2 shadow-sm">
            <Globe size={18} className="text-green-700" />
            <button
              onClick={() => changeLanguage("en")}
              className={`px-2 font-medium ${
                language === "en" ? "text-green-700" : "text-gray-500"
              }`}
            >
              🇬🇧 EN
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => changeLanguage("fr")}
              className={`px-2 font-medium ${
                language === "fr" ? "text-green-700" : "text-gray-500"
              }`}
            >
              🇫🇷 FR
            </button>
          </div>
        </div>

        {/* Card */}
        <form onSubmit={handleSubmit} className="w-full max-w-md border rounded-2xl p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-center">{t("welcome")}</h1>
          <p className="text-center text-gray-500 mt-2">
            Access your campus dashboard
          </p>

          {error && (
            <p className="text-red-600 text-sm text-center mt-4">{error}</p>
          )}

          {/* Tabs */}
          <div className="flex bg-gray-200 rounded-xl mt-8 p-1">
            <button
              type="button"
              className="flex-1 bg-white rounded-lg py-2 font-semibold text-green-800"
            >
              {t("login")}
            </button>
            <Link to="/register" className="flex-1 text-center py-2 text-gray-500">
              Sign Up
            </Link>
          </div>

          {/* Email */}
          <label className="block mt-7 font-medium">{t("email")}</label>
          <div className="flex items-center border rounded-xl mt-2 px-4">
            <Mail size={20} className="text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@university.cm"
              className="w-full p-3 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="flex justify-between mt-5">
            <label className="font-medium">{t("password")}</label>
            <Link to="/forgot-password" className="text-green-700 text-sm">
              Forgot password?
            </Link>
          </div>
          <div className="flex items-center border rounded-xl mt-2 px-4">
            <Lock size={20} className="text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="mt-4 text-sm">
            <input type="checkbox" />
            <span className="ml-2">Remember this device</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#006b3c] text-white py-4 rounded-xl mt-6 font-semibold flex justify-center items-center gap-2 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Continue to Dashboard"}
            {!loading && <ArrowRight size={20} />}
          </button>

          <div className="flex items-center gap-3 my-7">
            <hr className="flex-1" />
            <span className="text-gray-400 text-sm">Or continue with</span>
            <hr className="flex-1" />
          </div>

          <div className="flex gap-4">
            <button type="button" className="flex-1 border rounded-xl py-3">
              🔍 Google
            </button>
            <button type="button" className="flex-1 border rounded-xl py-3">
              ✉️ Outlook
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-7">
            By continuing, you agree to YouthTrend's
            <br />
            Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;