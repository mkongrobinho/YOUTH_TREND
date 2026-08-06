import {
  Heart,
  MessageCircle,
  Users,
  FolderKanban
} from "lucide-react";


function NotificationCard({notification}) {


  const icons = {

    like: Heart,

    comment: MessageCircle,

    community: Users,

    project: FolderKanban

  };


  const Icon = icons[notification.type];



  return (

    <div className={`
      flex
      items-center
      gap-4
      p-5
      border-b
      hover:bg-gray-50
      transition
      ${!notification.read ? "bg-green-50" : ""}
    `}>


      <img

        src={notification.avatar}

        alt={notification.name}

        className="
          w-12
          h-12
          rounded-full
          object-cover
        "

      />




      <div className="flex-1">


        <p className="
          text-gray-700
        ">

          <span className="font-bold">

            {notification.name}

          </span>

          {" "}

          {notification.message}


        </p>



        <span className="
          text-sm
          text-gray-400
        ">

          {notification.time}

        </span>


      </div>




      <Icon

        size={22}

        className="text-[#005429]"

      />


    </div>

  );

}


export default NotificationCard;