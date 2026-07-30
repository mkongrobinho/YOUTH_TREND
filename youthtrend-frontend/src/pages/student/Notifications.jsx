import {
  Bell,
  Heart,
  MessageCircle,
  UserPlus,
  Calendar,
  Check
} from "lucide-react";


function Notifications() {


  const notifications = [
    {
      icon: <Heart size={20}/>,
      title: "Your post received 24 likes",
      text: "Students liked your recent project post",
      time: "10 minutes ago"
    },

    {
      icon: <MessageCircle size={20}/>,
      title: "New comment on your post",
      text: "David commented on your React project",
      time: "1 hour ago"
    },

    {
      icon: <UserPlus size={20}/>,
      title: "New connection request",
      text: "Sarah wants to connect with you",
      time: "3 hours ago"
    },

    {
      icon: <Calendar size={20}/>,
      title: "Event reminder",
      text: "Campus Tech Meetup starts tomorrow",
      time: "Yesterday"
    }
  ];



  return (

    <div className="
      max-w-5xl
      mx-auto
      space-y-6
    ">


      {/* Header */}

      <div className="
        bg-white
        rounded-2xl
        border
        p-6
        flex
        justify-between
        items-center
      ">

        <div className="
          flex
          items-center
          gap-3
        ">

          <div className="
            bg-green-100
            text-green-700
            p-3
            rounded-full
          ">
            <Bell/>
          </div>


          <div>

            <h1 className="
              text-2xl
              font-bold
            ">
              Notifications
            </h1>

            <p className="
              text-gray-500
            ">
              Stay updated with your campus activities
            </p>

          </div>


        </div>



        <button className="
          text-green-700
          flex
          items-center
          gap-2
        ">

          <Check size={18}/>

          Mark all read

        </button>


      </div>





      {/* Notification list */}

      <div className="
        bg-white
        rounded-2xl
        border
        p-6
      ">


        <h2 className="
          font-bold
          text-lg
          mb-5
        ">
          Today
        </h2>



        <div className="
          space-y-4
        ">


          {notifications.map((item,index)=>(

            <div
              key={index}
              className="
                flex
                gap-4
                p-4
                rounded-xl
                hover:bg-gray-50
              "
            >


              <div className="
                w-12
                h-12
                rounded-full
                bg-green-100
                text-green-700
                flex
                items-center
                justify-center
              ">

                {item.icon}

              </div>



              <div>

                <h3 className="
                  font-semibold
                ">
                  {item.title}
                </h3>


                <p className="
                  text-gray-500
                  text-sm
                ">
                  {item.text}
                </p>


                <p className="
                  text-xs
                  text-gray-400
                  mt-1
                ">
                  {item.time}
                </p>


              </div>


            </div>


          ))}


        </div>


      </div>





      {/* Suggestions */}

      <div className="
        bg-white
        rounded-2xl
        border
        p-6
      ">


        <h2 className="
          font-bold
          text-lg
          mb-4
        ">
          Suggested Connections
        </h2>


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

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              className="
                w-12
                h-12
                rounded-full
                object-cover
              "
            />

            <div>

              <p className="font-semibold">
                Grace M.
              </p>

              <p className="text-sm text-gray-500">
                Computer Science Student
              </p>

            </div>

          </div>



          <button className="
            bg-green-700
            text-white
            px-4
            py-2
            rounded-xl
          ">
            Connect
          </button>


        </div>


      </div>


    </div>

  );

}


export default Notifications;