import {
  Settings as SettingsIcon,
  Shield,
  Bell,
  Mail,
  Save,
} from "lucide-react";


function Settings() {

  return (

    <div className="space-y-8">


      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">
          Admin Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage YouthTrend platform configuration.
        </p>

      </div>




      {/* General Settings */}

      <div className="
      bg-white
      border
      rounded-2xl
      p-8
      ">


        <div className="
        flex
        items-center
        gap-3
        mb-6
        ">

          <SettingsIcon className="text-green-700"/>

          <h2 className="text-2xl font-bold">
            General Settings
          </h2>

        </div>



        <div className="
        grid
        md:grid-cols-2
        gap-6
        ">


          <input
            defaultValue="YouthTrend"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />


          <input
            defaultValue="Cameroon"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />


        </div>


      </div>






      {/* Security */}

      <div className="
      bg-white
      border
      rounded-2xl
      p-8
      ">


        <div className="
        flex
        items-center
        gap-3
        mb-6
        ">


          <Shield className="text-red-600"/>


          <h2 className="text-2xl font-bold">
            Security
          </h2>


        </div>



        <div className="
        flex
        justify-between
        items-center
        ">

          <span>
            Enable two-factor authentication
          </span>


          <input
            type="checkbox"
            className="w-5 h-5"
          />


        </div>


      </div>







      {/* Notifications */}


      <div className="
      bg-white
      border
      rounded-2xl
      p-8
      ">


        <div className="
        flex
        items-center
        gap-3
        mb-6
        ">


          <Bell className="text-orange-600"/>


          <h2 className="text-2xl font-bold">
            Notifications
          </h2>


        </div>



        <div className="
        flex
        justify-between
        items-center
        ">


          <span>
            Email notifications
          </span>


          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5"
          />


        </div>


      </div>







      {/* Email Configuration */}


      <div className="
      bg-white
      border
      rounded-2xl
      p-8
      ">


        <div className="
        flex
        items-center
        gap-3
        mb-6
        ">


          <Mail className="text-blue-600"/>


          <h2 className="text-2xl font-bold">
            Email Configuration
          </h2>


        </div>




        <div className="
        grid
        md:grid-cols-2
        gap-6
        ">


          <input
            defaultValue="admin@youthtrend.com"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />


          <input
            defaultValue="smtp.gmail.com"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />


        </div>


      </div>







      {/* Save Button */}


      <button

        className="
        bg-[#005429]
        text-white
        px-6
        py-3
        rounded-xl
        flex
        items-center
        gap-2
        "

      >

        <Save size={18}/>

        Save Changes


      </button>



    </div>

  );

}


export default Settings;