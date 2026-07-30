import {
  Bell,
  Mail,
  MessageCircle,
  Heart
} from "lucide-react";


function NotificationSettings() {

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
        Notification Settings
      </h2>





      {/* Push Notifications */}

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

          <Bell
            size={22}
            className="text-green-700"
          />


          <div>

            <h3 className="font-semibold">
              Push Notifications
            </h3>

            <p className="text-sm text-gray-500">
              Get updates about your account
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






      {/* Messages */}

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


          <MessageCircle
            size={22}
            className="text-green-700"
          />


          <div>

            <h3 className="font-semibold">
              Messages
            </h3>

            <p className="text-sm text-gray-500">
              Notify me when I receive messages
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







      {/* Likes */}

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


          <Heart
            size={22}
            className="text-green-700"
          />


          <div>

            <h3 className="font-semibold">
              Likes & Comments
            </h3>

            <p className="text-sm text-gray-500">
              Receive activity on your posts
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






      {/* Email */}

      <div className="
        flex
        items-center
        justify-between
      ">


        <div className="
          flex
          items-center
          gap-3
        ">


          <Mail
            size={22}
            className="text-green-700"
          />


          <div>

            <h3 className="font-semibold">
              Email Notifications
            </h3>

            <p className="text-sm text-gray-500">
              Receive important emails
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


    </div>

  );

}


export default NotificationSettings;