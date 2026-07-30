import { Settings } from "lucide-react";


function SettingsHeader() {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      p-6
      flex
      items-center
      gap-4
    ">


      <div className="
        w-12
        h-12
        rounded-full
        bg-green-100
        flex
        items-center
        justify-center
        text-green-700
      ">

        <Settings size={26}/>

      </div>




      <div>

        <h1 className="
          text-3xl
          font-bold
        ">
          Settings
        </h1>


        <p className="
          text-gray-500
        ">
          Manage your account and preferences.
        </p>


      </div>


    </div>

  );

}


export default SettingsHeader;