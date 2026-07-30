import {
  Users,
  ArrowRight
} from "lucide-react";


function MutualCommunities() {


  const communities = [
    {
      name: "Software Developers Cameroon",
      members: "2.4K members"
    },
    {
      name: "Campus Entrepreneurs",
      members: "1.8K members"
    },
    {
      name: "UI/UX Designers",
      members: "950 members"
    }
  ];



  return (

    <div className="
      bg-white
      rounded-2xl
      border
      shadow-sm
      p-6
    ">


      <div className="
        flex
        justify-between
        items-center
        mb-5
      ">


        <h2 className="
          text-xl
          font-bold
        ">
          Mutual Communities
        </h2>


        <button className="
          text-green-700
          text-sm
          flex
          items-center
          gap-1
        ">
          View all
          <ArrowRight size={16}/>
        </button>


      </div>





      <div className="space-y-4">


        {communities.map((community,index)=>(

          <div
            key={index}
            className="
              flex
              items-center
              gap-4
              p-3
              rounded-xl
              hover:bg-gray-50
            "
          >


            <div className="
              w-12
              h-12
              rounded-xl
              bg-green-100
              flex
              items-center
              justify-center
            ">

              <Users
                size={22}
                className="text-green-700"
              />

            </div>



            <div>

              <h3 className="
                font-semibold
              ">
                {community.name}
              </h3>


              <p className="
                text-sm
                text-gray-500
              ">
                {community.members}
              </p>


            </div>


          </div>


        ))}


      </div>


    </div>

  );

}


export default MutualCommunities;