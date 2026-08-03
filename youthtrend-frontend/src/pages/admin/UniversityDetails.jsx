import {
  Users,
  UsersRound,
  CalendarDays,
  Crown,
  MapPin,
  Edit,
  Ban
} from "lucide-react";


function UniversityDetails(){

return (

<div className="space-y-8">


{/* Cover */}

<div className="
bg-white
rounded-2xl
border
overflow-hidden
">


<div className="
h-52
bg-gradient-to-r
from-green-700
to-green-400
">
</div>


<div className="p-8 flex items-center gap-6">


<img
src="https://placehold.co/120x120?text=UB"
className="
w-28
h-28
rounded-2xl
border-4
border-white
-mt-20
"
/>


<div>

<h1 className="text-3xl font-bold">
University of Buea
</h1>

<p className="text-gray-500 flex items-center gap-2 mt-2">
<MapPin size={18}/>
Buea, South West Cameroon
</p>

</div>


<div className="ml-auto flex gap-3">


<button className="
flex
items-center
gap-2
bg-green-700
text-white
px-5
py-3
rounded-xl
">

<Edit size={18}/>
Edit

</button>


<button className="
flex
items-center
gap-2
bg-red-100
text-red-600
px-5
py-3
rounded-xl
">

<Ban size={18}/>
Disable

</button>


</div>


</div>


</div>





{/* Stats */}


<div className="
grid
grid-cols-1
md:grid-cols-4
gap-6
">


<Card
icon={Users}
title="Students"
value="18,420"
/>


<Card
icon={UsersRound}
title="Communities"
value="42"
/>


<Card
icon={Crown}
title="Leaders"
value="18"
/>


<Card
icon={CalendarDays}
title="Events"
value="65"
/>


</div>




</div>

)

}



function Card({icon:Icon,title,value}){

return (

<div className="
bg-white
border
rounded-2xl
p-6
">


<Icon
size={28}
className="text-green-700"
/>


<p className="text-gray-500 mt-3">
{title}
</p>


<h2 className="text-3xl font-bold">
{value}
</h2>


</div>

)

}



export default UniversityDetails;