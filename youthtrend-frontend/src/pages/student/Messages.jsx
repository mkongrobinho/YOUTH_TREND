import { useState } from "react";

import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatWindow from "../../components/chat/ChatWindow";


function Messages() {


  const [selectedChat, setSelectedChat] = useState(null);



  return (

    <div className="
      h-[calc(100vh-100px)]
      flex
      gap-6
    ">


      <div className="
        w-full
        md:w-96
      ">

        <ChatSidebar
          onSelectChat={setSelectedChat}
        />

      </div>





      <div className="
        hidden
        md:flex
        flex-1
      ">


        {
          selectedChat ? (

            <ChatWindow
              selectedChat={selectedChat}
            />

          ) : (

            <div className="
              flex
              items-center
              justify-center
              bg-white
              rounded-2xl
              border
              flex-1
              text-gray-500
            ">

              Select a conversation

            </div>

          )
        }


      </div>


    </div>

  );

}


export default Messages;