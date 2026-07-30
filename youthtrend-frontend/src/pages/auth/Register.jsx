import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  GraduationCap,
  Globe,
  ArrowRight
} from "lucide-react";


function Register() {

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
              Connect With
              <br/>
              Students Across Cameroon
            </h1>



            <p className="
              mt-6
              text-lg
              text-gray-200
              max-w-lg
            ">
              Create your account and discover communities,
              projects, events and opportunities around you.
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
        justify-center
        items-center
        relative
        p-5
      ">


        {/* Language */}

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







        {/* Register Card */}

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
            Create Account
          </h1>


          <p className="
            text-center
            text-gray-500
            mt-2
          ">
            Join your campus community
          </p>






          {/* Tabs */}

          <div className="
            flex
            bg-gray-200
            rounded-xl
            mt-8
            p-1
          ">


            <Link
              to="/login"
              className="
                flex-1
                text-center
                py-2
                text-gray-500
              "
            >
              Log In
            </Link>


            <button className="
              flex-1
              bg-white
              rounded-lg
              py-2
              font-semibold
              text-green-800
            ">
              Sign Up
            </button>


          </div>







          {/* Full Name */}

          <label className="
            block
            mt-6
            font-medium
          ">
            Full Name
          </label>


          <div className="
            flex
            items-center
            border
            rounded-xl
            mt-2
            px-4
          ">


            <User
              size={20}
              className="text-gray-400"
            />


            <input
              placeholder="Your full name"
              className="
                w-full
                p-3
                outline-none
              "
            />


          </div>







          {/* Email */}

          <label className="
            block
            mt-4
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








          {/* University */}

          <label className="
            block
            mt-4
            font-medium
          ">
            University
          </label>


          <div className="
            flex
            items-center
            border
            rounded-xl
            mt-2
            px-4
          ">


            <GraduationCap
              size={20}
              className="text-gray-400"
            />


            <input
              placeholder="Your university"
              className="
                w-full
                p-3
                outline-none
              "
            />


          </div>







          {/* Password */}

          <label className="
            block
            mt-4
            font-medium
          ">
            Password
          </label>


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
              placeholder="Create password"
              className="
                w-full
                p-3
                outline-none
              "
            />


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

            Create Account

            <ArrowRight size={20}/>

          </button>







          <p className="
            text-center
            text-xs
            text-gray-500
            mt-6
          ">
            By creating an account, you agree to
            <br/>
            YouthTrend Terms and Privacy Policy.
          </p>


        </div>


      </div>


    </div>

  );

}


export default Register;