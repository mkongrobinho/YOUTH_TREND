function UpcomingEvents() {

  return (

    <div className="
      bg-white
      rounded-3xl
      shadow
      p-6
    ">

      <h2 className="
        text-xl
        font-bold
        text-[#005429]
      ">
        Upcoming Events
      </h2>


      <div className="
        mt-5
        bg-green-50
        rounded-2xl
        p-5
      ">


        <h3 className="font-bold text-lg">
          YouthTrend Tech Summit
        </h3>


        <p className="
          text-gray-500
          mt-2
        ">
          August 15 • 10:00 AM
        </p>


        <p className="
          text-gray-500
          mt-1
        ">
          University Conference Hall
        </p>


        <button className="
          mt-5
          w-full
          bg-[#005429]
          text-white
          py-3
          rounded-xl
        ">
          View Event
        </button>


      </div>


    </div>

  );

}


export default UpcomingEvents;