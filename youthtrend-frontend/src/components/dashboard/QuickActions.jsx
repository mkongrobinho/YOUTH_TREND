import {
  Users,
  FolderKanban,
  CalendarDays
} from "lucide-react";


function QuickActions(){

const actions=[
 {
  title:"Join Community",
  icon:Users
 },
 {
  title:"Create Project",
  icon:FolderKanban
 },
 {
  title:"Find Events",
  icon:CalendarDays
 }
];


return(

<div className="
grid
md:grid-cols-3
gap-5
">


{
actions.map((item,index)=>{

const Icon=item.icon;


return(

<div
key={index}
className="
bg-white
rounded-2xl
shadow
p-5
hover:shadow-lg
cursor-pointer
"
>

<Icon
size={30}
className="text-[#005429]"
/>


<h3 className="
font-semibold
mt-4
">
{item.title}
</h3>


</div>

)

})
}


</div>

)

}

export default QuickActions;