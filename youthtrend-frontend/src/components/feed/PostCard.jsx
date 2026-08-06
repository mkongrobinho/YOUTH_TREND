import {
  Heart,
  MessageCircle,
  Send
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


function PostCard({post}) {

  const navigate = useNavigate();


  const [liked,setLiked] = useState(false);

  const [likes,setLikes] = useState(post.likes);

  const [showComments,setShowComments] = useState(false);

  const [comment,setComment] = useState("");

  const [comments,setComments] = useState([]);



  const handleLike = ()=>{

    setLiked(!liked);

    setLikes(
      liked ? likes - 1 : likes + 1
    );

  };



  const addComment = ()=>{

    if(!comment.trim()) return;


    setComments([
      ...comments,
      comment
    ]);


    setComment("");

  };



return (

<div className="
bg-white
rounded-2xl
border
p-6
shadow-sm
">


{/* User */}

<div
onClick={()=>navigate("/profile")}
className="
flex
items-center
gap-3
cursor-pointer
"
>


<img

src={post.avatar}

alt={post.name}

className="
w-12
h-12
rounded-full
object-cover
"

/>


<div>

<h3 className="font-bold">
{post.name}
</h3>

<p className="text-sm text-gray-500">
{post.school}
</p>

</div>


</div>






{/* Content */}

<div
onClick={()=>navigate("/post/1")}
className="
mt-5
cursor-pointer
"
>


<p className="text-gray-700">
{post.text}
</p>



{
post.image && (

<img

src={post.image}

alt="Post"

className="
mt-4
rounded-xl
w-full
h-64
object-cover
"

/>

)

}


</div>






{/* Actions */}


<div className="
flex
gap-8
mt-6
text-gray-500
">


<button

onClick={handleLike}

className={`
flex
items-center
gap-2

${liked ? "text-red-500" : ""}
`}

>


<Heart

size={20}

fill={liked ? "red" : "none"}

/>


{likes}


</button>





<button

onClick={()=>setShowComments(!showComments)}

className="
flex
items-center
gap-2
"

>

<MessageCircle size={20}/>

{post.comments + comments.length}


</button>



</div>







{/* Comments */}


{
showComments && (

<div className="
mt-5
border-t
pt-4
">


<div className="
space-y-3
">


{
comments.map((item,index)=>(

<div
key={index}
className="
bg-gray-100
rounded-xl
px-4
py-2
text-sm
"
>

{item}

</div>

))

}


</div>






<div className="
flex
gap-2
mt-4
">


<input

value={comment}

onChange={(e)=>setComment(e.target.value)}

placeholder="Write a comment..."

className="
flex-1
bg-gray-100
rounded-xl
px-4
py-2
outline-none
"

/>



<button

onClick={addComment}

className="
bg-[#005429]
text-white
px-4
rounded-xl
"

>

<Send size={18}/>

</button>



</div>


</div>

)

}



</div>

);

}


export default PostCard;