import { Shield, Lock } from "lucide-react";


function PrivacySettings() {

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
        Privacy Settings
      </h2>





      {/* Profile Visibility */}

      <div className="
        flex
        items-center
        justify-between
        border-b
        pb-4
      ">


        <div className="
          flex
          items-center
          gap-3
        ">

          <Shield
            size={22}
            className="text-green-700"
          />


          <div>

            <h3 className="font-semibold">
              Profile Visibility
            </h3>

            <p className="text-sm text-gray-500">
              Allow other students to see your profile
            </p>

          </div>


        </div>


        <input
          type="checkbox"
          defaultChecked
          className="
            w-5
            h-5
            accent-green-700
          "
        />


      </div>






      {/* Private Account */}

      <div className="
        flex
        items-center
        justify-between
        border-b
        pb-4
      ">


        <div className="
          flex
          items-center
          gap-3
        ">


          <Lock
            size={22}
            className="text-green-700"
          />


          <div>

            <h3 className="font-semibold">
              Private Account
            </h3>

            <p className="text-sm text-gray-500">
              Only accepted connections can view your posts
            </p>

          </div>


        </div>



        <input
          type="checkbox"
          className="
            w-5
            h-5
            accent-green-700
          "
        />


      </div>






      {/* Messages */}

      <div className="
        flex
        items-center
        justify-between
      ">


        <div>

          <h3 className="font-semibold">
            Message Requests
          </h3>

          <p className="text-sm text-gray-500">
            Receive messages from other students
          </p>

        </div>



        <select
          className="
            border
            rounded-xl
            px-3
            py-2
            outline-none
          "
        >

          <option>
            Everyone
          </option>

          <option>
            Friends only
          </option>

          <option>
            Nobody
          </option>

        </select>


      </div>



    </div>

  );

}


export default PrivacySettings;