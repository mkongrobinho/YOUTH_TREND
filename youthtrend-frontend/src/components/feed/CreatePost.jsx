import { Image, Send } from "lucide-react";
import { useState } from "react";


function CreatePost(){

  const [text,setText] = useState("");



  const handlePost = () => {

    if(!text.trim()) return;


    console.log({
      text:text,
      date:new Date()
    });


    setText("");

  };



return (

<div className="
bg-white
border
rounded-2xl
p-5
">


<div className="
flex
gap-3
items-center
">


<img

src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200"

alt="Student"

className="
w-12
h-12
rounded-full
object-cover
"

/>



<textarea

value={text}

onChange={(e)=>setText(e.target.value)}

placeholder="Share something with your campus..."

className="
flex-1
bg-gray-100
rounded-xl
px-5
py-3
outline-none
resize-none
h-20
"

/>


</div>





<div className="
flex
justify-between
mt-4
">


<button className="
flex
items-center
gap-2
text-gray-600
hover:text-[#005429]
">

<Image size={20}/>

Photo

</button>





<button

onClick={handlePost}

className="
bg-[#005429]
text-white
px-5
py-2
rounded-xl
flex
items-center
gap-2
hover:bg-green-800
"

>


<Send size={18}/>

Post


</button>



</div>


</div>

)

}


export default CreatePost;