import { Search, Filter, UserPlus } from "lucide-react";


function MemberManagement() {


  const members = [
    {
      name: "Sarah Mbarga",
      school: "University of Yaoundé",
      role: "Student",
      status: "Active",
      image:
       "https://images.pexels.com/photos/31528664/pexels-photo-31528664.jpeg?w=200&q=80" 
    },
    {
      name: "Kevin Tchana",
      school: "ENS Yaoundé",
      role: "Moderator",
      status: "Active",
      image:
        "https://images.pexels.com/photos/14756531/pexels-photo-14756531.jpeg?w=200&q=80"
    },
    {
      name: "Grace Nono",
      school: "University of Douala",
      role: "Student",
      status: "Pending",
      image:
       "https://images.pexels.com/photos/11189022/pexels-photo-11189022.jpeg?w=200&q=80" 
    }
  ];



  return (

    <div className="space-y-6">


      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Member Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage students and community members
          </p>

        </div>



        <button
          className="
          bg-[#005429]
          text-white
          px-5
          py-3
          rounded-xl
          flex
          items-center
          gap-2
          "
        >

          <UserPlus size={20}/>

          Add Member

        </button>


      </div>






      {/* Filters */}

      <div className="
        bg-white
        rounded-2xl
        border
        p-5
        flex
        flex-wrap
        gap-4
      ">


        <div className="
          flex
          items-center
          bg-gray-100
          rounded-xl
          px-4
          py-3
          flex-1
        ">

          <Search
            size={20}
            className="text-gray-400"
          />

          <input
            placeholder="Search members..."
            className="
              bg-transparent
              outline-none
              ml-3
              w-full
            "
          />

        </div>



        <button className="
          border
          rounded-xl
          px-5
          flex
          items-center
          gap-2
        ">

          <Filter size={18}/>

          Status

        </button>


        <button className="
          border
          rounded-xl
          px-5
        ">

          School

        </button>


        <button className="
          border
          rounded-xl
          px-5
        ">

          Role

        </button>


      </div>







      {/* Table */}

      <div className="
        bg-white
        rounded-2xl
        border
        overflow-hidden
      ">


        <table className="w-full">


          <thead className="bg-gray-50">

            <tr>

              <th className="text-left p-5">
                Member
              </th>

              <th className="text-left p-5">
                School
              </th>

              <th className="text-left p-5">
                Role
              </th>

              <th className="text-left p-5">
                Status
              </th>

            </tr>

          </thead>




          <tbody>


          {members.map((member,index)=>(

            <tr
              key={index}
              className="border-t"
            >


              <td className="p-5 flex items-center gap-3">


                <img
                  src={member.image}
                  className="
                    w-10
                    h-10
                    rounded-full
                    object-cover
                  "
                />


                <span className="font-medium">
                  {member.name}
                </span>


              </td>




              <td className="p-5 text-gray-600">

                {member.school}

              </td>




              <td className="p-5">

                <span className="
                  bg-green-100
                  text-[#005429]
                  px-3
                  py-1
                  rounded-full
                  text-sm
                ">

                  {member.role}

                </span>

              </td>




              <td className="p-5">

                <span className="
                  bg-green-100
                  text-green-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                ">

                  {member.status}

                </span>

              </td>


            </tr>

          ))}


          </tbody>


        </table>


      </div>


    </div>

  );
}


export default MemberManagement;