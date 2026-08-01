import {
  Search,
  UserCheck,
  UserX,
  MoreHorizontal,
} from "lucide-react";


const users = [
  {
    id: 1,
    name: "Kevin Tanyi",
    email: "kevin@gmail.com",
    university: "University of Buea",
    role: "Student",
    status: "Verified",
  },

  {
    id: 2,
    name: "Mary Eposi",
    email: "mary@gmail.com",
    university: "University of Yaounde 1",
    role: "Student",
    status: "Pending",
  },

  {
    id: 3,
    name: "Campus Leader",
    email: "leader@youthtrend.com",
    university: "University of Douala",
    role: "Leader",
    status: "Verified",
  },

];


function UserManagement(){

return (

<div className="space-y-8">


{/* Header */}

<div>

<h1 className="text-4xl font-bold text-gray-900">
User Management
</h1>

<p className="text-gray-500 mt-2">
Manage all users across YouthTrend campuses.
</p>

</div>




{/* Search + Filters */}

<div className="
bg-white
rounded-2xl
border
p-6
flex
gap-4
">


<div className="
flex
items-center
gap-3
border
rounded-xl
px-4
py-3
flex-1
">

<Search size={20} className="text-gray-400"/>

<input
placeholder="Search users..."
className="outline-none w-full"
/>

</div>



<select className="border rounded-xl px-4">
<option>All Roles</option>
<option>Students</option>
<option>Leaders</option>
</select>



<select className="border rounded-xl px-4">
<option>All Status</option>
<option>Verified</option>
<option>Pending</option>
</select>


</div>





{/* Users Table */}

<div className="
bg-white
rounded-2xl
border
overflow-hidden
">


<table className="w-full">


<thead className="bg-gray-50">

<tr>

<th className="text-left p-5">
User
</th>

<th className="text-left p-5">
University
</th>

<th className="text-left p-5">
Role
</th>

<th className="text-left p-5">
Status
</th>

<th className="text-left p-5">
Action
</th>

</tr>

</thead>



<tbody>


{
users.map((user)=>(

<tr
key={user.id}
className="border-t"
>


<td className="p-5">

<div>

<p className="font-semibold">
{user.name}
</p>

<p className="text-sm text-gray-500">
{user.email}
</p>

</div>

</td>



<td className="p-5">
{user.university}
</td>



<td className="p-5">
{user.role}
</td>



<td className="p-5">

<span
className={`
px-3 py-1 rounded-full text-sm
${
user.status==="Verified"
?"bg-green-100 text-green-700"
:"bg-yellow-100 text-yellow-700"
}
`}
>

{user.status}

</span>

</td>



<td className="p-5">

<div className="flex gap-3">


<button className="text-green-600">
<UserCheck size={18}/>
</button>


<button className="text-red-600">
<UserX size={18}/>
</button>


<button>
<MoreHorizontal size={18}/>
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

)

}


export default UserManagement;