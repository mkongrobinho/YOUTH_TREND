const schools = [
  {
    name: "University of Buea",
    engagement: 94,
    students: "24,500 students",
  },
  {
    name: "University of Yaoundé I",
    engagement: 88,
    students: "31,200 students",
  },
  {
    name: "University of Douala",
    engagement: 82,
    students: "28,600 students",
  },
  {
    name: "University of Bamenda",
    engagement: 76,
    students: "15,400 students",
  },
];


function SchoolRanking() {

  return (

    <div className="bg-white rounded-2xl border p-8">


      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold">
            Top Schools by Engagement
          </h2>


          <p className="text-gray-500 text-sm mt-1">
            Based on student activity and interaction
          </p>

        </div>


        <button className="text-[#005429] font-semibold">
          View All Rankings
        </button>


      </div>



      <div className="space-y-6">


        {schools.map((school) => (

          <div key={school.name}>


            <div className="flex justify-between items-center mb-2">


              <div>

                <h3 className="font-semibold text-gray-800">
                  {school.name}
                </h3>


                <p className="text-xs text-gray-400">
                  {school.students}
                </p>

              </div>



              <span className="font-bold text-[#005429]">
                {school.engagement}%
              </span>


            </div>



            <div className="w-full h-3 bg-gray-100 rounded-full">


              <div
                className="h-3 bg-[#005429] rounded-full"
                style={{
                  width: `${school.engagement}%`,
                }}
              />


            </div>


          </div>


        ))}


      </div>


    </div>

  );

}


export default SchoolRanking;