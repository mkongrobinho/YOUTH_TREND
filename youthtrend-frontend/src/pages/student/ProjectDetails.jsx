import {
  ArrowLeft,
  Users,
  Code
} from "lucide-react";

import {
  useNavigate,
  useParams
} from "react-router-dom";


const projects = [

{
id:1,
title:"YouthTrend Campus Platform",
description:
"A social platform connecting students from different universities.",
tech:"React, Tailwind CSS, Node.js",
members:5,
image:
"https://images.pexels.com/photos/34257712/pexels-photo-34257712.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
},

{
id:2,
title:"AI Study Assistant",
description:
"An artificial intelligence tool helping students study better.",
tech:"Python, Machine Learning",
members:4,
image:
"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=80"
},

{
id:3,
title:"Campus Marketplace",
description:
"A platform where students buy and sell items on campus.",
tech:"React, Firebase",
members:6,
image:
"https://images.pexels.com/photos/5940864/pexels-photo-5940864.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
}

];


function ProjectDetails(){

const {id}=useParams();

const navigate=useNavigate();


const project = projects.find(
(item)=>item.id === Number(id)
);



if(!project){

return (

<div className="p-6">

<h1 className="text-2xl font-bold">
Project not found
</h1>

</div>

);

}



return (

<div className="space-y-6">


<button

onClick={()=>navigate("/projects")}

className="
flex
items-center
gap-2
text-[#005429]
"

>

<ArrowLeft size={20}/>

Back to Projects

</button>





<img

src={project.image}

className="
w-full
h-80
object-cover
rounded-3xl
"

/>




<div className="
bg-white
border
rounded-3xl
p-8
">


<h1 className="
text-4xl
font-bold
text-[#005429]
">

{project.title}

</h1>




<p className="
mt-4
text-gray-600
text-lg
">

{project.description}

</p>




<div className="
mt-6
space-y-4
text-gray-600
">


<p className="flex gap-3 items-center">

<Code/>

{project.tech}

</p>


<p className="flex gap-3 items-center">

<Users/>

{project.members} members

</p>


</div>





<button

className="
mt-8
bg-[#005429]
text-white
px-8
py-3
rounded-xl
"

>

Join Project

</button>



</div>


</div>

);

}


export default ProjectDetails;