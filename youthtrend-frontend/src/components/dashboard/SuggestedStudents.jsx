function SuggestedStudents() {

  const students = [
    {
      name: "David Paul",
      course: "Software Engineering"
    },
    {
      name: "Mariam N.",
      course: "Computer Science"
    },
    {
      name: "Kevin T.",
      course: "Information Technology"
    }
  ];


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
        Suggested Students
      </h2>


      <div className="mt-5 space-y-5">

        {students.map((student, index) => (

          <div
            key={index}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <div className="
                w-12
                h-12
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
                font-bold
                text-[#005429]
              ">
                {student.name.charAt(0)}
              </div>


              <div>

                <h3 className="font-semibold">
                  {student.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {student.course}
                </p>

              </div>

            </div>


            <button className="
              bg-[#005429]
              text-white
              px-3
              py-2
              rounded-lg
              text-sm
            ">
              Follow
            </button>


          </div>

        ))}

      </div>


    </div>

  );

}


export default SuggestedStudents;