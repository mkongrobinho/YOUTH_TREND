function UniversityStatCard({
  title,
  value,
  icon: Icon,
}) {


return (

<div className="
bg-white
rounded-2xl
border
p-6
shadow-sm
">


<div className="flex justify-between items-center">


<div>

<p className="text-gray-500 text-sm">
{title}
</p>


<h2 className="
text-3xl
font-bold
mt-3
">
{value}
</h2>


</div>



{
Icon &&

<div className="
w-12
h-12
rounded-xl
bg-[#005429]
flex
items-center
justify-center
">

<Icon
size={22}
className="text-white"
/>


</div>

}



</div>


</div>


)

}


export default UniversityStatCard;