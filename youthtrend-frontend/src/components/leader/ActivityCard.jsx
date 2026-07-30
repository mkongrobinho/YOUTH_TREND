import {
  UserPlus,
  FileText,
  CalendarDays,
  Users
} from "lucide-react";


const icons = {
  student: UserPlus,
  post: FileText,
  event: CalendarDays,
  community: Users
};



function ActivityCard({ activity }) {


  const Icon = icons[activity.type] || FileText;



  return (

    <div className="
      bg-white
      rounded-2xl
      border
      p-5
      flex
      items-center
      gap-4
    ">


      <div className="
        w-11
        h-11
        rounded-full
        bg-green-100
        flex
        items-center
        justify-center
        text-green-700
      ">

        <Icon size={22}/>

      </div>





      <div>

        <h3 className="
          font-semibold
        ">
          {activity.title}
        </h3>


        <p className="
          text-sm
          text-gray-500
          mt-1
        ">
          {activity.description}
        </p>


        <span className="
          text-xs
          text-gray-400
        ">
          {activity.time}
        </span>


      </div>



    </div>

  );

}


export default ActivityCard;