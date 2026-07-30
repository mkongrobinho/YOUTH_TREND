import { GraduationCap, Users } from "lucide-react";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-white">

      {/* LEFT SIDE */}
      <div className="
        hidden
        lg:flex
        w-1/2
        relative
        overflow-hidden
        text-white
        p-12
        flex-col
        justify-between
      ">

        {/* Background image */}
        <img
          src="/campus.jpg"
          alt="Campus"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />


        {/* Green overlay */}
        <div className="
          absolute
          inset-0
          bg-green-900/70
        "></div>



        {/* Logo */}

        <div className="
          relative
          flex
          items-center
          gap-2
          text-2xl
          font-bold
        ">

          <GraduationCap />

          YouthTrend

        </div>




        {/* Hero Text */}

        <div className="relative max-w-xl">

          <span className="
            bg-green-500/30
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
            mt-8
            leading-tight
          ">

            The Hub for Cameroon's
            <br />
            <span className="text-green-300">
              Future Leaders
            </span>

          </h1>


          <p className="
            mt-6
            text-lg
            text-gray-200
          ">

            Join students across multi-campus networks.
            Access resources, communities, and opportunities
            tailored for your academic journey.

          </p>



          {/* Stats */}

          <div className="
            flex
            gap-8
            mt-8
          ">


            <div className="flex items-center gap-2">

              <GraduationCap />

              <span>
                Verified Students
              </span>

            </div>



            <div className="flex items-center gap-2">

              <Users />

              <span>
                Active Communities
              </span>

            </div>


          </div>


        </div>



        <div className="
          relative
          text-sm
          text-gray-300
        ">

          © 2026 YouthTrend Student Network

        </div>


      </div>





      {/* RIGHT SIDE */}

      <div className="
        w-full
        lg:w-1/2
        flex
        items-center
        justify-center
        bg-gray-50
        p-8
        relative
      ">

        {children}

      </div>


    </div>
  );
}

export default AuthLayout;