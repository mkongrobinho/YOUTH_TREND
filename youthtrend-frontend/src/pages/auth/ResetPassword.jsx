import { Link } from "react-router-dom";
import { Lock } from "lucide-react";


function ResetPassword() {

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


          <p className="
            text-gray-500
            mt-2
          ">
            Create a new password
          </p>

        </div>




        <h2 className="
          text-2xl
          font-bold
          mt-8
        ">
          Reset Password 🔐
        </h2>


        <p className="
          text-gray-500
          mt-2
        ">
          Enter your new password below.
        </p>




        {/* New Password */}

        <div className="mt-6">

          <label className="text-sm font-medium">
            New Password
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

            <Lock
              size={20}
              className="text-gray-400"
            />


            <input
              type="password"
              placeholder="New password"
              className="
                bg-transparent
                py-3
                outline-none
                w-full
              "
            />


          </div>

        </div>




        {/* Confirm Password */}

        <div className="mt-4">

          <label className="text-sm font-medium">
            Confirm Password
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

            <Lock
              size={20}
              className="text-gray-400"
            />


            <input
              type="password"
              placeholder="Confirm password"
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
          Update Password
        </button>




        <div className="text-center mt-6">

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


export default ResetPassword;