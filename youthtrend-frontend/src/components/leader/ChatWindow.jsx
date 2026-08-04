import MessageInput from "./MessageInput";

function ChatWindow() {
  return (
    <div className="flex flex-col h-full">

      {/* Chat Header */}
      <div className="border-b p-5 bg-white">

        <h2 className="text-xl font-bold">
          Community Leaders
        </h2>

        <p className="text-sm text-gray-500">
          5 leaders online
        </p>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-gray-50">

        <div className="flex">

          <div className="bg-white rounded-2xl px-4 py-3 shadow max-w-sm">
            Welcome everyone 👋
          </div>

        </div>


        <div className="flex justify-end">

          <div className="bg-[#005429] text-white rounded-2xl px-4 py-3 shadow max-w-sm">
            Let's prepare tomorrow's announcement.
          </div>

        </div>


        <div className="flex">

          <div className="bg-white rounded-2xl px-4 py-3 shadow max-w-sm">
            Sure, I'll create the notice.
          </div>

        </div>

      </div>

      {/* Message Input */}

      <MessageInput />

    </div>
  );
}

export default ChatWindow;