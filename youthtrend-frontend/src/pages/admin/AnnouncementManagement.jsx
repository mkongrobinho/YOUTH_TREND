import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Megaphone,
} from "lucide-react";


const announcements = [

  {
    id:1,
    image:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    title:"Welcome to YouthTrend",
    description:
    "Welcome students to the new campus social platform.",
    author:"Admin Team",
    avatar:"https://i.pravatar.cc/100?img=12",
    date:"02 Aug 2026",
    status:"Published"
  },


  {
    id:2,
    image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    title:"Campus Registration Update",
    description:
    "Important updates about student registration.",
    author:"Admin Team",
    avatar:"https://i.pravatar.cc/100?img=15",
    date:"05 Aug 2026",
    status:"Draft"
  },


  {
    id:3,
    image:"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    title:"New Community Rules",
    description:
    "Read the latest community guidelines.",
    author:"Admin Team",
    avatar:"https://i.pravatar.cc/100?img=20",
    date:"10 Aug 2026",
    status:"Published"
  }

];





function AnnouncementManagement(){


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

Announcement Management

</h1>


<p className="
text-gray-500
mt-2
">

Manage announcements across all campuses.

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

Create Announcement


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
rounded-2xl
border
p-6
">

<p className="text-gray-500">
Total Announcements
</p>

<h2 className="
text-3xl
font-bold
mt-3
">

24

</h2>

</div>





<div className="
bg-white
rounded-2xl
border
p-6
">


<p className="text-gray-500">
Published
</p>


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
rounded-2xl
border
p-6
">


<p className="text-gray-500">
Drafts
</p>


<h2 className="
text-3xl
font-bold
mt-3
">

6

</h2>


</div>




</div>






{/* Table */}



<div className="
bg-white
rounded-2xl
border
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

placeholder="Search announcement..."

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
Announcement
</th>


<th>
Author
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

announcements.map((item)=>(


<tr
key={item.id}
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

src={item.image}

alt="announcement"

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

{item.title}

</h3>



<p className="
text-sm
text-gray-500
">

{item.description}

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

src={item.avatar}

className="
w-10
h-10
rounded-full
"

/>


<span>
{item.author}
</span>


</div>


</td>





<td>

{item.date}

</td>





<td>


<span

className={`
px-3
py-1
rounded-full
text-sm
font-medium

${
item.status==="Published"

?
"bg-green-100 text-green-700"

:
"bg-gray-100 text-gray-700"

}

`}

>

{item.status}

</span>


</td>





<td>


<div className="
flex
gap-3
">



<button

className="
p-2
rounded-lg
bg-green-50
text-green-700
hover:bg-green-100
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
hover:bg-red-100
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


export default AnnouncementManagement;