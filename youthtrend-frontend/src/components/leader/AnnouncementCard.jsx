import { Megaphone, Pin } from "lucide-react";


function AnnouncementCard({
  title,
  message,
  date,
  audience,
  pinned,
}) {

  return (
    <div className="
      bg-white
      border
      rounded-2xl
      p-6
    ">


      <div className="
        flex
        justify-between
      ">


        <div className="flex gap-4">


          <div className="
            bg-green-100
            text-[#005429]
            p-3
            rounded-xl
            h-fit
          ">

            <Megaphone size={22}/>

          </div>




          <div>

            <h2 className="text-xl font-bold">
              {title}
            </h2>


            <p className="
              text-gray-500
              mt-2
              max-w-xl
            ">
              {message}
            </p>


          </div>


        </div>





        {pinned && (

          <Pin
            size={22}
            className="text-[#005429]"
          />

        )}


      </div>






      <div className="
        flex
        gap-6
        mt-5
        text-sm
        text-gray-500
      ">


        <span>
          📅 {date}
        </span>


        <span>
          👥 {audience}
        </span>


      </div>



    </div>
  );
}


export default AnnouncementCard;