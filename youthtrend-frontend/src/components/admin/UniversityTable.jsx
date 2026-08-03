import UniversityRow from "./UniversityRow";


function UniversityTable({ universities }) {


  return (

    <div className="
    bg-white
    rounded-2xl
    border
    overflow-hidden
    ">


      <table className="w-full">


        <thead className="bg-gray-50">


          <tr>


            <th className="px-6 py-4 text-left text-sm">
              University
            </th>


            <th className="px-6 py-4 text-left text-sm">
              Region
            </th>


            <th className="px-6 py-4 text-left text-sm">
              Students
            </th>


            <th className="px-6 py-4 text-left text-sm">
              Communities
            </th>


            <th className="px-6 py-4 text-left text-sm">
              Leaders
            </th>


            <th className="px-6 py-4 text-left text-sm">
              Status
            </th>


            <th className="px-6 py-4 text-left text-sm">
              Actions
            </th>


          </tr>


        </thead>



        <tbody>


        {
          universities.map((university)=>(

            <UniversityRow

              key={university.id}

              university={university}

            />

          ))
        }


        </tbody>



      </table>


    </div>

  );

}


export default UniversityTable;