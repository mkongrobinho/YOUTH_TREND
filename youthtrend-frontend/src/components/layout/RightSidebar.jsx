function RightSidebar() {
  return (
    <aside className="
      hidden
      xl:block
      w-72
      2xl:w-80
      p-4
      bg-gray-50
      border-l
      pt-20
    ">

      {/* Upcoming Events */}

      <div className="
        bg-white
        rounded-2xl
        shadow-sm
        p-5
      ">

        <h2 className="
          text-lg
          font-bold
          text-[#005429]
        ">
          Upcoming Events
        </h2>


        <div className="mt-4 space-y-4">

          <div>
            <h3 className="font-semibold">
              Tech Innovation Meetup
            </h3>

            <p className="text-sm text-gray-500">
              Aug 15 • 10:00 AM
            </p>
          </div>


          <div>
            <h3 className="font-semibold">
              Leadership Workshop
            </h3>

            <p className="text-sm text-gray-500">
              Aug 22 • 2:00 PM
            </p>
          </div>

        </div>

      </div>





      {/* Suggested Communities */}

      <div className="
        bg-white
        rounded-2xl
        shadow-sm
        p-5
        mt-6
      ">


        <h2 className="
          text-lg
          font-bold
          text-[#005429]
        ">
          Suggested Communities
        </h2>



        <div className="mt-4 space-y-4">


          {[
            "Computer Science",
            "Entrepreneurs Hub",
            "Design Club"
          ].map((community,index)=>(

            <div
              key={index}
              className="
                flex
                justify-between
                items-center
                gap-2
              "
            >

              <span className="text-sm">
                {community}
              </span>


              <button className="
                bg-[#005429]
                text-white
                px-3
                py-1
                rounded-lg
                text-sm
              ">
                Join
              </button>


            </div>

          ))}


        </div>


      </div>


    </aside>
  );
}

export default RightSidebar;