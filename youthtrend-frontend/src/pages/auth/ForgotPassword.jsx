import { Link } from "react-router-dom";
import { Mail } from "lucide-react";


function ForgotPassword() {

  return (

    <div className="
      min-h-screen
      bg-[#f7faf7]
      flex
      items-center
      justify-center
      px-5
    ">


      <div className="
        bg-white
        w-full
        max-w-md
        rounded-3xl
        shadow-lg
        p-8
      ">


        {/* Logo */}

        <div className="text-center">

          <h1 className="
            text-4xl
            font-bold
            text-[#005429]
          ">
            YouthTrend
          </h1>

          <p className="text-gray-500 mt-2">
            Reset your password
          </p>

        </div>



        <h2 className="
          text-2xl
          font-bold
          mt-8
        ">
          Forgot Password?
        </h2>


        <p className="
          text-gray-500
          mt-2
        ">
          Enter your email and we will send you a reset link.
        </p>




        {/* Email */}

        <div className="mt-6">

          <label className="text-sm font-medium">
            Email
          </label>


          <div className="
            flex
            items-center
            gap-3
            bg-gray-100
            rounded-xl
            px-4
            mt-2
          ">

            <Mail 
              size={20}
              className="text-gray-400"
            />


            <input
              type="email"
              placeholder="Enter your email"
              className="
                bg-transparent
                py-3
                outline-none
                w-full
              "
            />


          </div>

        </div>




        {/* Button */}

        <button className="
          w-full
          bg-[#005429]
          text-white
          py-3
          rounded-xl
          mt-7
          font-semibold
        ">
          Send Reset Link
        </button>




        <div className="
          text-center
          mt-6
        ">

          <Link
            to="/login"
            className="
              text-[#005429]
              font-semibold
            "
          >
            Back to Login
          </Link>

        </div>


      </div>


    </div>

  );

}


export default ForgotPassword;