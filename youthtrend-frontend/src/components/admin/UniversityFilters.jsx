import { Search, Filter } from "lucide-react";


function UniversityFilters(){

return (

<div className="
bg-white
rounded-2xl
border
p-6
">


<div className="
grid
grid-cols-1
lg:grid-cols-4
gap-4
">


{/* Search */}

<div className="
flex
items-center
border
rounded-xl
px-4
">

<Search
size={18}
className="text-gray-400"
/>


<input

placeholder="Search university..."

className="
w-full
px-3
py-3
outline-none
"

/>


</div>




{/* Region */}

<select
className="
border
rounded-xl
px-4
py-3
"
>

<option>
All Regions
</option>

<option>
Centre
</option>

<option>
South West
</option>

<option>
Littoral
</option>

<option>
North West
</option>

<option>
West
</option>

</select>





{/* Status */}

<select
className="
border
rounded-xl
px-4
py-3
"
>

<option>
All Status
</option>


<option>
Active
</option>


<option>
Inactive
</option>


</select>




<button
className="
border
rounded-xl
flex
items-center
justify-center
hover:bg-gray-50
"
>

<Filter size={18}/>

</button>



</div>


</div>


)

}


export default UniversityFilters;