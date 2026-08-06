import {
  Search,
  ShieldAlert,
  Check,
  X,
  UserX,
} from "lucide-react";


const reports = [

  {
    id:1,
    user:"John Kamga",
    avatar:"https://i.pravatar.cc/100?img=11",
    contentImage:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    reason:"Harassment",
    description:"User posted inappropriate comments in a community.",
    severity:"High",
    status:"Pending"
  },


  {
    id:2,
    user:"Sarah Mbi",
    avatar:"https://i.pravatar.cc/100?img=32",
    contentImage:"https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    reason:"Spam",
    description:"Multiple promotional posts detected.",
    severity:"Medium",
    status:"Pending"
  },


  {
    id:3,
    user:"David Talla",
    avatar:"https://i.pravatar.cc/100?img=52",
    contentImage:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    reason:"Fake Account",
    description:"Account reported as suspicious.",
    severity:"Low",
    status:"Reviewed"
  }

];



function Moderation(){


return (

<div className="space-y-8">


{/* Header */}

<div>


<h1 className="
text-4xl
font-bold
">

Moderation Center

</h1>


<p className="
text-gray-500
mt-2
">

Review reports and maintain a safe community.

</p>


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

<p className="text-gray-500">
Total Reports
</p>

<h2 className="text-3xl font-bold mt-3">
128
</h2>

</div>



<div className="
bg-white
border
rounded-2xl
p-6
">

<p className="text-gray-500">
Pending
</p>

<h2 className="text-3xl font-bold mt-3">
24
</h2>

</div>



<div className="
bg-white
border
rounded-2xl
p-6
">

<p className="text-gray-500">
Resolved
</p>

<h2 className="text-3xl font-bold mt-3">
98
</h2>

</div>



<div className="
bg-white
border
rounded-2xl
p-6
">

<p className="text-gray-500">
Suspended Users
</p>

<h2 className="text-3xl font-bold mt-3">
6
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


<div className="
flex
items-center
border
rounded-xl
px-4
py-3
max-w-md
mb-6
">


<Search size={18}/>


<input

placeholder="Search reports..."

className="
outline-none
ml-3
w-full
"

/>


</div>





<div className="overflow-x-auto">


<table className="w-full">


<thead>

<tr className="
border-b
text-left
text-gray-500
">


<th className="py-4">
User
</th>


<th>
Reason
</th>


<th>
Severity
</th>


<th>
Status
</th>


<th>
Actions
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
gap-4
">


<img

src={report.avatar}

className="
w-12
h-12
rounded-full
"

/>


<div>


<h3 className="font-semibold">

{report.user}

</h3>


<p className="text-sm text-gray-500">

{report.description}

</p>


</div>


</div>


</td>





<td>

<div className="
flex
items-center
gap-2
">

<ShieldAlert size={18}/>

{report.reason}

</div>

</td>





<td>


<span

className={`

px-3
py-1
rounded-full
text-sm

${
report.severity==="High"

?
"bg-red-100 text-red-700"

:

report.severity==="Medium"

?
"bg-yellow-100 text-yellow-700"

:

"bg-green-100 text-green-700"

}

`}

>

{report.severity}

</span>


</td>





<td>

{report.status}

</td>






<td>


<div className="flex gap-3">


<button
className="
p-2
rounded-lg
bg-green-100
text-green-700
"
>

<Check size={18}/>

</button>



<button
className="
p-2
rounded-lg
bg-red-100
text-red-700
"
>

<X size={18}/>

</button>



<button
className="
p-2
rounded-lg
bg-gray-100
text-gray-700
"
>

<UserX size={18}/>

</button>


</div>


</td>



</tr>


))


}


</tbody>


</table>


</div>


</div>



</div>

)

}


export default Moderation;