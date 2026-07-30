function TrendingCommunities(){

const communities=[
  "Computer Science",
  "Entrepreneurs Club",
  "Football Fans"
];


return(

<div className="
bg-white
rounded-3xl
shadow
p-6
">

<h2 className="
text-xl
font-bold
text-[#005429]
">
Trending Communities
</h2>


<div className="mt-5 space-y-3">

{
communities.map((community,index)=>(

<div
key={index}
className="
bg-green-50
rounded-xl
p-4
font-semibold
"
>

{community}

</div>

))
}

</div>


</div>

);

}


export default TrendingCommunities;