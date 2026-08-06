import {
  Plus,
  Search,
  Pencil,
  Trash2,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";


const events = [

  {
    id:1,
    image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    title:"YouthTrend Campus Innovation Day",
    organizer:"Admin Team",
    avatar:"https://i.pravatar.cc/100?img=12",
    location:"University of Buea",
    date:"15 August 2026",
    attendees:850,
    status:"Upcoming"
  },


  {
    id:2,
    image:"https://images.unsplash.com/photo-1511578314322-379afb476865",
    title:"Student Leadership Conference",
    organizer:"Campus Leaders",
    avatar:"https://i.pravatar.cc/100?img=18",
    location:"University of Yaoundé I",
    date:"25 August 2026",
    attendees:1200,
    status:"Upcoming"
  },


  {
    id:3,
    image:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    title:"Career Development Workshop",
    organizer:"YouthTrend Team",
    avatar:"https://i.pravatar.cc/100?img=25",
    location:"University of Douala",
    date:"02 July 2026",
    attendees:430,
    status:"Completed"
  },

];



function EventManagement(){


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

Event Management

</h1>


<p className="
text-gray-500
mt-2
">

Manage campus events and activities.

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
hover:bg-green-800
"

>

<Plus size={18}/>

Create Event

</button>


</div>







{/* Statistics */}


<div className="
grid
md:grid-cols-3
gap-6
">


<div className="
bg-white
border
rounded-2xl
p-6
">

<div className="flex gap-3 items-center">

<CalendarDays
className="text-green-700"
/>

<p className="text-gray-500">
Total Events
</p>

</div>


<h2 className="
text-3xl
font-bold
mt-3
">

56

</h2>


</div>





<div className="
bg-white
border
rounded-2xl
p-6
">


<div className="flex gap-3 items-center">

<CalendarDays
className="text-blue-700"
/>

<p className="text-gray-500">
Upcoming
</p>

</div>


<h2 className="
text-3xl
font-bold
mt-3
">

18

</h2>


</div>





<div className="
bg-white
border
rounded-2xl
p-6
">


<div className="flex gap-3 items-center">

<Users
className="text-purple-700"
/>

<p className="text-gray-500">
Participants
</p>

</div>


<h2 className="
text-3xl
font-bold
mt-3
">

24,500

</h2>


</div>



</div>







{/* Events Table */}


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
mb-6
max-w-md
">


<Search size={18}
className="text-gray-400"
/>


<input

placeholder="Search events..."

className="
ml-3
outline-none
w-full
"

/>


</div>






<div className="overflow-x-auto">


<table className="
w-full
">


<thead>

<tr className="
border-b
text-left
text-gray-500
">


<th className="py-4">
Event
</th>


<th>
Organizer
</th>


<th>
Location
</th>


<th>
Date
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

events.map((event)=>(


<tr

key={event.id}

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

src={event.image}

className="
w-16
h-16
rounded-xl
object-cover
"

/>



<div>


<h3 className="
font-semibold
">

{event.title}

</h3>



<p className="
text-sm
text-gray-500
flex
items-center
gap-1
">

<MapPin size={14}/>

{event.location}

</p>


</div>


</div>


</td>







<td>


<div className="
flex
items-center
gap-3
">


<img

src={event.avatar}

className="
w-10
h-10
rounded-full
"

/>


{event.organizer}


</div>


</td>







<td>

{event.location}

</td>






<td>

{event.date}

</td>






<td>


<span

className={`
px-3
py-1
rounded-full
text-sm

${
event.status==="Upcoming"

?
"bg-green-100 text-green-700"

:
"bg-gray-100 text-gray-700"

}

`}

>

{event.status}

</span>


</td>






<td>


<div className="flex gap-3">


<button

className="
p-2
rounded-lg
bg-green-50
text-green-700
"

>

<Pencil size={18}/>

</button>




<button

className="
p-2
rounded-lg
bg-red-50
text-red-600
"

>

<Trash2 size={18}/>

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


export default EventManagement;