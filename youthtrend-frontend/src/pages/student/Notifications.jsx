import NotificationCard from "../../components/notifications/NotificationCard";


const notifications = [

  {
    id: 1,
    name: "Grace M.",
    message: "liked your post about the YouthTrend project.",
    time: "2 minutes ago",
    type: "like",
    avatar:
      "https://images.pexels.com/photos/1181688/pexels-photo-1181688.jpeg?auto=compress&cs=tinysrgb&w=300",
    read: false
  },


  {
    id: 2,
    name: "Daniel T.",
    message: "commented on your project update.",
    time: "15 minutes ago",
    type: "comment",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
    read: false
  },


  {
    id: 3,
    name: "AWS Community Cameroon",
    message: "published a new announcement.",
    time: "1 hour ago",
    type: "community",
    avatar:
      "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=300",
    read: true
  },


  {
    id: 4,
    name: "Sarah K.",
    message: "invited you to join a project team.",
    time: "3 hours ago",
    type: "project",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    read: true
  }

];



function Notifications() {


  return (

    <div className="
      space-y-6
    ">


      <div>

        <h1 className="
          text-3xl
          font-bold
          text-[#005429]
        ">

          Notifications

        </h1>


        <p className="
          text-gray-500
          mt-2
        ">

          Stay updated with activities from your campus community.

        </p>


      </div>





      <div className="
        bg-white
        rounded-2xl
        border
        overflow-hidden
      ">


        {
          notifications.map((notification)=>(


            <NotificationCard

              key={notification.id}

              notification={notification}

            />


          ))
        }


      </div>



    </div>

  );

}


export default Notifications;