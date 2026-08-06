import {
  User,
  Shield,
  KeyRound,
  Activity,
  Edit,
} from "lucide-react";


function Profile(){

return (

<div className="space-y-8">


{/* Header */}

<div>

<h1 className="text-4xl font-bold">
Admin Profile
</h1>

<p className="text-gray-500 mt-2">
Manage your administrator account.
</p>

</div>





{/* Profile Card */}


<div className="
bg-white
border
rounded-2xl
p-8
">


<div className="
flex
items-center
gap-6
">


<img

src="https://i.pravatar.cc/200?img=12"

className="
w-32
h-32
rounded-full
border-4
border-green-100
"

/>



<div>


<h2 className="
text-3xl
font-bold
">

Ivan Admin

</h2>


<p className="
text-gray-500
">

Super Administrator

</p>



<button

className="
mt-4
bg-[#005429]
text-white
px-5
py-3
rounded-xl
flex
items-center
gap-2
"

>

<Edit size={18}/>

Edit Profile

</button>



</div>



</div>


</div>







{/* Information */}


<div className="
grid
md:grid-cols-2
gap-6
">





<div className="
bg-white
border
rounded-2xl
p-6
">


<div className="
flex
items-center
gap-3
mb-4
">


<User className="text-green-700"/>


<h2 className="text-xl font-bold">
Personal Information
</h2>


</div>


<p>
Email: admin@youthtrend.com
</p>

<p className="mt-2">
Phone: +237 600000000
</p>


</div>







<div className="
bg-white
border
rounded-2xl
p-6
">


<div className="
flex
items-center
gap-3
mb-4
">


<Shield className="text-red-600"/>


<h2 className="text-xl font-bold">
Permissions
</h2>


</div>


<p>
✓ Manage Universities
</p>

<p>
✓ Manage Users
</p>

<p>
✓ Moderate Content
</p>


</div>



</div>








{/* Security */}


<div className="
bg-white
border
rounded-2xl
p-8
">


<div className="
flex
items-center
gap-3
mb-6
">


<KeyRound className="text-blue-600"/>


<h2 className="text-2xl font-bold">
Security
</h2>


</div>



<input

type="password"

placeholder="Current Password"

className="
border
rounded-xl
px-4
py-3
w-full
mb-4
"

/>



<input

type="password"

placeholder="New Password"

className="
border
rounded-xl
px-4
py-3
w-full
"

/>


</div>







{/* Activity */}


<div className="
bg-white
border
rounded-2xl
p-8
">


<div className="
flex
items-center
gap-3
mb-4
">


<Activity
className="text-purple-600"
/>


<h2 className="text-2xl font-bold">
Recent Activity
</h2>


</div>



<ul className="
space-y-3
text-gray-600
">


<li>
Logged into Admin Dashboard
</li>


<li>
Updated University of Buea information
</li>


<li>
Reviewed moderation reports
</li>


</ul>



</div>




</div>

)

}


export default Profile;