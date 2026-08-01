import ConversationList from "../../components/leader/ConversationList";
import ChatWindow from "../../components/leader/ChatWindow";

function LeaderMessages() {
  return (
    <div className="h-[calc(100vh-90px)] bg-white rounded-2xl border overflow-hidden">

      <div className="grid grid-cols-12 h-full">

        {/* Conversations */}

        <div className="col-span-4 border-r">
          <ConversationList />
        </div>

        {/* Chat */}

        <div className="col-span-8">
          <ChatWindow />
        </div>

      </div>

    </div>
  );
}

export default LeaderMessages;