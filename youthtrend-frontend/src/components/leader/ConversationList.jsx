import { Search } from "lucide-react";

function ConversationList() {
  const conversations = [
    {
      name: "Executive Board",
      message: "Meeting starts at 3 PM",
      time: "10:20",
      unread: 2,
    },
    {
      name: "Community Leaders",
      message: "New event proposal",
      time: "09:45",
      unread: 0,
    },
    {
      name: "Moderation Team",
      message: "5 reports pending",
      time: "Yesterday",
      unread: 4,
    },
    {
      name: "Student Affairs",
      message: "Thank you!",
      time: "Yesterday",
      unread: 0,
    },
  ];

  return (
    <div className="h-full flex flex-col bg-white">

      {/* Header */}

      <div className="p-5 border-b">

        <h2 className="text-2xl font-bold">
          Messages
        </h2>

        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 mt-4">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search conversations..."
            className="bg-transparent outline-none ml-3 flex-1"
          />

        </div>

      </div>

      {/* Conversation List */}

      <div className="flex-1 overflow-y-auto">

        {conversations.map((chat, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b cursor-pointer hover:bg-gray-50 transition"
          >

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-[#005429] text-white flex items-center justify-center font-bold">
                {chat.name.charAt(0)}
              </div>

              <div>

                <h3 className="font-semibold">
                  {chat.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {chat.message}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="text-xs text-gray-400">
                {chat.time}
              </p>

              {chat.unread > 0 && (
                <span className="inline-flex items-center justify-center mt-2 w-6 h-6 rounded-full bg-[#005429] text-white text-xs">
                  {chat.unread}
                </span>
              )}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ConversationList;