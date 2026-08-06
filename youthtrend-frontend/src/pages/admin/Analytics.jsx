import {
  Users,
  School,
  Activity,
  CalendarDays,
} from "lucide-react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";



const growthData = [
  {
    month:"Jan",
    users:8000
  },
  {
    month:"Feb",
    users:12000
  },
  {
    month:"Mar",
    users:18000
  },
  {
    month:"Apr",
    users:25000
  },
  {
    month:"May",
    users:32000
  },
  {
    month:"Jun",
    users:42000
  },
];



const universityData = [
  {
    name:"UB",
    students:18000
  },

  {
    name:"UY1",
    students:22000
  },

  {
    name:"UD",
    students:15000
  },

  {
    name:"Bamenda",
    students:12000
  }
];



const communityData = [
  {
    name:"Technology",
    value:40
  },

  {
    name:"Sports",
    value:25
  },

  {
    name:"Business",
    value:20
  },

  {
    name:"Other",
    value:15
  }
];




function Analytics(){


return (

<div className="space-y-8">


{/* Header */}

<div>

<h1 className="
text-4xl
font-bold
">

Platform Analytics

</h1>


<p className="
text-gray-500
mt-2
">

Monitor YouthTrend growth and engagement.

</p>


</div>






{/* Stats */}


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


<Users
className="text-green-700"
/>


<p className="text-gray-500 mt-3">
Total Users
</p>


<h2 className="
text-3xl
font-bold
">

142,830

</h2>


</div>






<div className="
bg-white
border
rounded-2xl
p-6
">

<School
className="text-blue-700"
/>


<p className="text-gray-500 mt-3">
Universities
</p>


<h2 className="
text-3xl
font-bold
">

42

</h2>


</div>







<div className="
bg-white
border
rounded-2xl
p-6
">


<Activity
className="text-purple-700"
/>


<p className="text-gray-500 mt-3">
Engagement
</p>


<h2 className="
text-3xl
font-bold
">

78%

</h2>


</div>







<div className="
bg-white
border
rounded-2xl
p-6
">


<CalendarDays
className="text-orange-700"
/>


<p className="text-gray-500 mt-3">
Events
</p>


<h2 className="
text-3xl
font-bold
">

256

</h2>


</div>


</div>







{/* User Growth */}


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

User Growth

</h2>


<div className="h-80">


<ResponsiveContainer width="100%" height="100%">


<LineChart data={growthData}>


<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>


<Line

type="monotone"

dataKey="users"

stroke="#005429"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>


</div>


</div>








{/* University + Community */}


<div className="
grid
lg:grid-cols-2
gap-6
">



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

Students By University

</h2>



<div className="h-72">


<ResponsiveContainer width="100%" height="100%">


<BarChart data={universityData}>


<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>


<Bar

dataKey="students"

fill="#005429"

/>


</BarChart>


</ResponsiveContainer>


</div>


</div>








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

Community Distribution

</h2>



<div className="h-72">


<ResponsiveContainer width="100%" height="100%">


<PieChart>


<Pie

data={communityData}

dataKey="value"

outerRadius={100}

label

>


{
communityData.map((entry,index)=>(

<Cell key={index}/>

))
}


</Pie>


<Tooltip/>


</PieChart>


</ResponsiveContainer>


</div>


</div>




</div>



</div>

)

}


export default Analytics;