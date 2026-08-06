import {
  FileText,
  Download,
  Users,
  School,
  CalendarDays,
  Activity,
} from "lucide-react";


const reports = [

  {
    id:1,
    title:"Monthly User Growth Report",
    type:"Users",
    date:"August 2026",
    status:"Generated"
  },

  {
    id:2,
    title:"University Performance Report",
    type:"Universities",
    date:"August 2026",
    status:"Generated"
  },

  {
    id:3,
    title:"Campus Events Report",
    type:"Events",
    date:"July 2026",
    status:"Generated"
  }

];



function Reports(){


return (

<div className="space-y-8">



{/* Header */}


<div className="
flex
justify-between
items-center
">


<div>

<h1 className="
text-4xl
font-bold
">

Reports Center

</h1>


<p className="
text-gray-500
mt-2
">

Generate and manage platform reports.

</p>


</div>



<button

className="
bg-[#005429]
text-white
px-6
py-3
rounded-xl
flex
items-center
gap-2
"

>

<Download size={18}/>

Export Report

</button>


</div>







{/* Statistics */}


<div className="
grid
md:grid-cols-4
gap-6
">



<div className="
bg-white
border
rounded-2xl
p-6
">


<Users className="text-green-700"/>

<p className="text-gray-500 mt-3">
Users Report
</p>


<h2 className="text-3xl font-bold">
142K
</h2>


</div>






<div className="
bg-white
border
rounded-2xl
p-6
">

<School className="text-blue-700"/>


<p className="text-gray-500 mt-3">
Universities
</p>


<h2 className="text-3xl font-bold">
42
</h2>


</div>






<div className="
bg-white
border
rounded-2xl
p-6
">


<CalendarDays className="text-orange-600"/>


<p className="text-gray-500 mt-3">
Events
</p>


<h2 className="text-3xl font-bold">
256
</h2>


</div>







<div className="
bg-white
border
rounded-2xl
p-6
">


<Activity className="text-purple-700"/>


<p className="text-gray-500 mt-3">
Engagement
</p>


<h2 className="text-3xl font-bold">
78%
</h2>


</div>



</div>







{/* Reports Table */}


<div className="
bg-white
border
rounded-2xl
p-8
">


<h2 className="
text-2xl
font-bold
mb-6
">

Generated Reports

</h2>





<table className="w-full">


<thead>


<tr className="
border-b
text-left
text-gray-500
">


<th className="py-4">
Report
</th>


<th>
Type
</th>


<th>
Date
</th>


<th>
Status
</th>


<th>
Action
</th>


</tr>


</thead>






<tbody>


{

reports.map((report)=>(


<tr

key={report.id}

className="
border-b
hover:bg-gray-50
"

>


<td className="py-5">


<div className="
flex
items-center
gap-3
">


<div className="
bg-green-100
text-green-700
p-3
rounded-xl
">

<FileText size={20}/>

</div>


{report.title}


</div>


</td>





<td>
{report.type}
</td>





<td>
{report.date}
</td>





<td>

<span className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
text-sm
">

{report.status}

</span>

</td>






<td>


<button

className="
flex
items-center
gap-2
bg-gray-100
px-4
py-2
rounded-lg
hover:bg-gray-200
"

>


<Download size={16}/>

Download


</button>


</td>



</tr>


))


}


</tbody>


</table>



</div>



</div>

)

}


export default Reports;