import {
  MapPin,
  MessageCircle,
  UserPlus,
  BadgeCheck
} from "lucide-react";


function ProfileHeader() {

  return (

    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        border
        p-6
        -mt-16
        relative
        mx-5
      "
    >

      <div
        className="
          flex
          flex-col
          md:flex-row
          md:items-end
          justify-between
          gap-5
        "
      >


        <div
          className="
            flex
            items-center
            gap-5
          "
        >

          {/* Profile Image */}

          <div
            className="
              w-32
              h-32
              rounded-full
              overflow-hidden
              border-4
              border-white
              shadow-lg
            "
          >

            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              alt="Profile"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>



          <div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >

              <h1 className="
                text-3xl
                font-bold
              ">
                Amara Njoku
              </h1>


              <BadgeCheck
                className="text-green-600"
                size={24}
              />

            </div>


            <p className="text-gray-500">
              University of Yaoundé I
            </p>


            <p className="text-gray-500 text-sm">
              Faculty of Science • Software Engineering
            </p>


            <div
              className="
                flex
                items-center
                gap-2
                text-gray-500
                mt-2
                text-sm
              "
            >

              <MapPin size={16}/>
              Cameroon

            </div>


          </div>


        </div>




        <div className="flex gap-3">

          <button
            className="
              bg-green-700
              text-white
              px-6
              py-3
              rounded-xl
              flex
              items-center
              gap-2
            "
          >

            <UserPlus size={18}/>
            Connect

          </button>



          <button
            className="
              border
              border-green-700
              text-green-700
              px-6
              py-3
              rounded-xl
              flex
              items-center
              gap-2
            "
          >

            <MessageCircle size={18}/>
            Message

          </button>


        </div>


      </div>


    </div>

  );
}


export default ProfileHeader;