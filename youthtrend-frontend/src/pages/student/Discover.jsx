import {
  Search,
  MapPin,
  Users,
  GraduationCap,
  UserPlus
} from "lucide-react";


function Discover() {


 const students = [
  {
    name: "Chris Ivan",
    role: "Software Engineering",
    university: "University of Yaoundé I",
    avatar:
       "https://images.pexels.com/photos/34191464/pexels-photo-34191464.jpeg?auto=compress&cs=tinysrgb&w=300" 
  },

  {
    name: "Brenda Johnson",
    role: "Computer Science",
    university: "ICT University",
    avatar:
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300"
  },

  {
    name: "Michael Brown",
    role: "Cyber Security",
    university: "University of Buea",
    avatar:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];



  const communities = [
    "Software Developers",
    "Entrepreneurs",
    "Design Community"
  ];



  return (

    <div className="p-6 max-w-6xl mx-auto">


      {/* Header */}

      <div className="mb-8">

        <h1 className="
          text-3xl
          font-bold
          text-gray-900
        ">
          Discover
        </h1>


        <p className="
          text-gray-500
          mt-2
        ">
          Discover students, communities and opportunities around you.
        </p>

      </div>





      {/* Search */}

      <div className="
        bg-white
        border
        rounded-2xl
        flex
        items-center
        px-5
        py-3
        shadow-sm
      ">

        <Search 
          className="text-gray-400"
        />


        <input
          placeholder="Search students, communities..."
          className="
            flex-1
            ml-3
            outline-none
          "
        />

      </div>






      {/* Categories */}

      <div className="
        grid
        grid-cols-3
        gap-5
        mt-8
      ">


        <div className="
          bg-white
          rounded-2xl
          p-5
          border
        ">

          <Users className="text-green-700"/>

          <h3 className="font-semibold mt-3">
            Students
          </h3>

          <p className="text-sm text-gray-500">
            Connect with students
          </p>

        </div>




        <div className="
          bg-white
          rounded-2xl
          p-5
          border
        ">

          <GraduationCap className="text-green-700"/>

          <h3 className="font-semibold mt-3">
            Universities
          </h3>

          <p className="text-sm text-gray-500">
            Explore campuses
          </p>

        </div>




        <div className="
          bg-white
          rounded-2xl
          p-5
          border
        ">

          <Users className="text-green-700"/>

          <h3 className="font-semibold mt-3">
            Communities
          </h3>

          <p className="text-sm text-gray-500">
            Join groups
          </p>

        </div>


      </div>







      {/* Students */}

      <div className="mt-10">


        <h2 className="
          text-xl
          font-bold
          mb-5
        ">
          People you may know
        </h2>



        <div className="
          grid
          md:grid-cols-3
          gap-6
        ">


          {students.map((student,index)=>(


            <div
              key={index}
              className="
                bg-white
                border
                rounded-2xl
                p-5
              "
            >


            <img
  src={student.avatar}
  alt={student.name}
  className="
    w-16
    h-16
    rounded-full
    object-cover
    border-2
    border-green-600
  "
/>



              <h3 className="
                font-bold
                mt-4
              ">
                {student.name}
              </h3>



              <p className="
                text-sm
                text-gray-500
              ">
                {student.role}
              </p>



              <div className="
                flex
                gap-2
                items-center
                text-sm
                text-gray-500
                mt-2
              ">

                <MapPin size={15}/>

                {student.university}

              </div>



              <button className="
                mt-5
                w-full
                bg-green-700
                text-white
                rounded-xl
                py-2
                flex
                justify-center
                gap-2
                items-center
              ">

                <UserPlus size={18}/>

                Connect

              </button>


            </div>


          ))}


        </div>


      </div>







      {/* Communities */}

      <div className="mt-10">


        <h2 className="
          text-xl
          font-bold
        ">
          Trending Communities
        </h2>



        <div className="
          flex
          gap-4
          mt-5
        ">


          {communities.map((item,index)=>(

            <div
              key={index}
              className="
                bg-green-50
                border
                rounded-xl
                px-5
                py-4
                font-medium
              "
            >
              {item}
            </div>

          ))}


        </div>


      </div>


    </div>

  );
}


export default Discover;