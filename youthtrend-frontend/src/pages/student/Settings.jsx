import SettingsHeader from "../../components/settings/SettingsHeader";
import ProfileSettings from "../../components/settings/ProfileSettings";
import PrivacySettings from "../../components/settings/PrivacySettings";
import NotificationSettings from "../../components/settings/NotificationSettings";


function Settings() {

  return (

    <div className="
      space-y-6
    ">


      {/* Header */}

      <SettingsHeader />





      {/* Profile */}

      <ProfileSettings />





      {/* Privacy */}

      <PrivacySettings />





      {/* Notifications */}

      <NotificationSettings />





      {/* Logout */}

      <div className="
        bg-white
        rounded-2xl
        border
        p-6
      ">

        <button
          className="
            bg-red-600
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-red-700
          "
        >
          Logout
        </button>

      </div>



    </div>

  );

}


export default Settings;