import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatWindow from "../../components/chat/ChatWindow";


function Messages() {

  return (

    <div className="
      h-[calc(100vh-100px)]
      flex
      gap-6
    ">


      {/* Conversations */}

      <div className="
        w-full
        md:w-96
      ">

        <ChatSidebar />

      </div>





      {/* Chat */}

      <div className="
        hidden
        md:flex
        flex-1
      ">

        <ChatWindow />

      </div>


    </div>

  );

}


export default Messages;