import { Search } from "lucide-react";


const chats = [

  {
    id: 1,
    name: "Grace M.",
    message: "See you at the hackathon!",
    time: "2m",
    online: true,
    avatar:
      "https://images.pexels.com/photos/1181688/pexels-photo-1181688.jpeg?auto=compress&cs=tinysrgb&w=300",
  },

  {
    id: 2,
    name: "Daniel T.",
    message: "I sent the project files.",
    time: "15m",
    online: true,
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
  },

  {
    id: 3,
    name: "Sarah K.",
    message: "Let's meet after class.",
    time: "1h",
    online: false,
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
  },

  {
    id: 4,
    name: "Michael A.",
    message: "Thanks for your help!",
    time: "3h",
    online: false,
    avatar:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300",
  },

];


function ChatSidebar({onSelectChat}) {


  return (

    <div className="
      bg-white
      h-full
      rounded-2xl
      border
      shadow-sm
    ">


      <div className="p-5 border-b">


        <h2 className="
          text-2xl
          font-bold
        ">

          Messages

        </h2>




        <div className="
          mt-4
          flex
          items-center
          bg-gray-100
          rounded-xl
          px-3
          py-2
        ">


          <Search
            size={18}
            className="text-gray-500"
          />


          <input

            placeholder="Search conversations..."

            className="
              bg-transparent
              outline-none
              ml-2
              w-full
            "

          />


        </div>


      </div>





      <div className="overflow-y-auto">


        {
          chats.map((chat)=>(


            <div

              key={chat.id}

              onClick={() => onSelectChat(chat)}

              className="
                flex
                items-center
                gap-3
                p-4
                hover:bg-gray-50
                cursor-pointer
                transition
              "

            >


              <div className="relative">


                <img

                  src={chat.avatar}

                  alt={chat.name}

                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                  "

                />



                {
                  chat.online && (

                    <span className="
                      absolute
                      bottom-0
                      right-0
                      w-3.5
                      h-3.5
                      bg-green-500
                      border-2
                      border-white
                      rounded-full
                    "></span>

                  )
                }


              </div>





              <div className="flex-1">


                <div className="
                  flex
                  justify-between
                ">

                  <h3 className="font-semibold">

                    {chat.name}

                  </h3>


                  <span className="
                    text-xs
                    text-gray-500
                  ">

                    {chat.time}

                  </span>


                </div>



                <p className="
                  text-sm
                  text-gray-500
                  truncate
                ">

                  {chat.message}

                </p>


              </div>



            </div>


          ))
        }


      </div>


    </div>

  );

}


export default ChatSidebar;