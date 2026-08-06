import { Users, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function CommunityCard({ community }) {

  const navigate = useNavigate();

  const [joined, setJoined] = useState(false);

  const [members, setMembers] = useState(community.members);



  const handleJoin = (e)=>{

    e.stopPropagation();


    if(!joined){

      setMembers(members + 1);

    }
    else{

      setMembers(members - 1);

    }


    setJoined(!joined);

  };



return (

<div

className="
bg-white
rounded-2xl
border
overflow-hidden
shadow-sm
hover:shadow-md
transition
cursor-pointer
"

onClick={()=>navigate(`/community/${community.id}`)}

>




{/* Cover */}

<img

src={community.cover}

alt={community.name}

className="
w-full
h-40
object-cover
"

/>





<div className="p-5">



<h2 className="
text-xl
font-bold
text-[#005429]
">

{community.name}

</h2>




<p className="
text-gray-500
text-sm
mt-2
line-clamp-3
">

{community.description}

</p>






<div className="
flex
items-center
gap-2
mt-4
text-gray-600
">


<Users size={18}/>


<span>

{members} members

</span>


</div>








{/* Student avatars */}

<div className="
flex
mt-4
">


{
community.students.map((student,index)=>(


<img

key={index}

src={student}

alt="student"

className="
w-9
h-9
rounded-full
border-2
border-white
-object-cover
-ml-2
"

/>


))

}


</div>







{/* Join Button */}

<button

onClick={handleJoin}

className={`
mt-5
w-full
py-2
rounded-xl
flex
items-center
justify-center
gap-2
font-semibold

${
joined
?
"bg-gray-200 text-gray-700"
:
"bg-[#005429] text-white"
}

`}

>


{
joined
?
<>
<Check size={18}/>
Joined
</>
:
"Join Community"
}


</button>




</div>


</div>


);

}


export default CommunityCard;