import { Link } from "react-router-dom";
import { Mail, Lock, Eye, Globe, ArrowRight } from "lucide-react";


function Login() {

  return (

    <div className="
      min-h-screen
      flex
      bg-white
    ">


      {/* LEFT SIDE */}

      <div className="
        hidden
        lg:flex
        w-1/2
        relative
        bg-cover
        bg-center
        bg-[url('https://images.unsplash.com/photo-1564981797816-1043664bf78d')]
      ">


        {/* Green overlay */}

        <div className="
          absolute
          inset-0
          bg-green-900/60
        "></div>



        <div className="
          relative
          z-10
          text-white
          p-12
          flex
          flex-col
          justify-between
        ">


          <h2 className="
            text-2xl
            font-bold
          ">
            🎓 YouthTrend
          </h2>



          <div>


            <span className="
              bg-green-700/70
              px-4
              py-2
              rounded-full
              text-sm
            ">
              OFFICIAL STUDENT NETWORK
            </span>



            <h1 className="
              text-5xl
              font-bold
              mt-6
              leading-tight
            ">
              The Hub for Cameroon's
              <br/>
              Future Leaders
            </h1>



            <p className="
              mt-6
              text-gray-200
              text-lg
              max-w-lg
            ">
              Join students across multi-campus networks.
              Access resources, communities, and opportunities
              tailored for your academic journey.
            </p>



            <div className="
              flex
              gap-8
              mt-8
            ">

              <span>
                ✓ Verified Students
              </span>


              <span>
                👥 Active Communities
              </span>


            </div>


          </div>


        </div>


      </div>






      {/* RIGHT SIDE */}

      <div className="
        flex-1
        flex
        items-center
        justify-center
        relative
        p-5
      ">


        {/* Language button */}

        <button className="
          absolute
          top-6
          right-8
          border
          rounded-full
          px-5
          py-2
          flex
          items-center
          gap-2
          text-gray-600
        ">

          <Globe size={18}/>
          Switch Language

        </button>





        {/* Card */}

        <div className="
          w-full
          max-w-md
          border
          rounded-2xl
          p-8
          shadow-sm
        ">



          <h1 className="
            text-4xl
            font-bold
            text-center
          ">
            Welcome Back
          </h1>



          <p className="
            text-center
            text-gray-500
            mt-2
          ">
            Access your campus dashboard
          </p>





          {/* Tabs */}

          <div className="
            flex
            bg-gray-200
            rounded-xl
            mt-8
            p-1
          ">


            <button className="
              flex-1
              bg-white
              rounded-lg
              py-2
              font-semibold
              text-green-800
            ">
              Log In
            </button>


            <Link
              to="/register"
              className="
                flex-1
                text-center
                py-2
                text-gray-500
              "
            >
              Sign Up
            </Link>


          </div>





          {/* Email */}

          <label className="
            block
            mt-7
            font-medium
          ">
            Email Address
          </label>


          <div className="
            flex
            items-center
            border
            rounded-xl
            mt-2
            px-4
          ">


            <Mail 
              size={20}
              className="text-gray-400"
            />


            <input
              placeholder="student@university.cm"
              className="
                w-full
                p-3
                outline-none
              "
            />


          </div>





          {/* Password */}

          <div className="
            flex
            justify-between
            mt-5
          ">

            <label className="font-medium">
              Password
            </label>


            <Link
              to="/forgot-password"
              className="
                text-green-700
                text-sm
              "
            >
              Forgot password?
            </Link>


          </div>



          <div className="
            flex
            items-center
            border
            rounded-xl
            mt-2
            px-4
          ">


            <Lock
              size={20}
              className="text-gray-400"
            />


            <input
              type="password"
              placeholder="••••••••"
              className="
                w-full
                p-3
                outline-none
              "
            />


            <Eye
              size={20}
              className="text-gray-500"
            />


          </div>





          <div className="mt-4 text-sm">

            <input type="checkbox"/>

            <span className="ml-2">
              Remember this device
            </span>

          </div>





          <button className="
            w-full
            bg-[#006b3c]
            text-white
            py-4
            rounded-xl
            mt-6
            font-semibold
            flex
            justify-center
            items-center
            gap-2
          ">

            Continue to Dashboard

            <ArrowRight size={20}/>

          </button>






          <div className="
            flex
            items-center
            gap-3
            my-7
          ">

            <hr className="flex-1"/>

            <span className="text-gray-400 text-sm">
              Or continue with
            </span>

            <hr className="flex-1"/>

          </div>






          <div className="
            flex
            gap-4
          ">


            <button className="
              flex-1
              border
              rounded-xl
              py-3
            ">
              🔍 Google
            </button>



            <button className="
              flex-1
              border
              rounded-xl
              py-3
            ">
              ✉️ Outlook
            </button>


          </div>




          <p className="
            text-center
            text-xs
            text-gray-500
            mt-7
          ">
            By continuing, you agree to YouthTrend's
            <br/>
            Terms of Service and Privacy Policy.
          </p>



        </div>


      </div>


    </div>

  );

}


export default Login;