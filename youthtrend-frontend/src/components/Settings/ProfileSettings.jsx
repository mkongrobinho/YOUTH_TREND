import { Camera, User } from "lucide-react";


function ProfileSettings() {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      p-6
      space-y-6
    ">


      <h2 className="
        text-xl
        font-bold
      ">
        Profile Settings
      </h2>





      {/* Profile Image */}

      <div className="
        flex
        items-center
        gap-5
      ">


        <div className="relative">


          <img
            src="https://images.pexels.com/photos/31528664/pexels-photo-31528664.jpeg?auto=compress&cs=tinysrgb&w=200&q=80"
            alt="student"
            className="
              w-24
              h-24
              rounded-full
              object-cover
            "
          />


          <button
            className="
              absolute
              bottom-0
              right-0
              bg-green-700
              text-white
              p-2
              rounded-full
            "
          >
            <Camera size={16}/>
          </button>


        </div>



        <div>

          <h3 className="
            font-bold
          ">
            Ivan Student
          </h3>

          <p className="
            text-gray-500
          ">
            Software Engineering Student
          </p>

        </div>


      </div>





      {/* Inputs */}

      <div className="space-y-4">


        <div className="
          flex
          items-center
          border
          rounded-xl
          px-4
        ">

          <User size={18}
            className="text-gray-400"
          />

          <input
            defaultValue="Ivan Student"
            className="
              w-full
              px-3
              py-3
              outline-none
            "
          />

        </div>





        <input
          defaultValue="ivan@student.com"
          className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            outline-none
          "
        />





        <input
          defaultValue="Computer Science"
          className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            outline-none
          "
        />



      </div>





      <button
        className="
          bg-green-700
          text-white
          px-6
          py-3
          rounded-xl
        "
      >
        Save Changes
      </button>


    </div>

  );

}


export default ProfileSettings;