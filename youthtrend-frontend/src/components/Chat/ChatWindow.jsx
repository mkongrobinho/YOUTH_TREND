import { Phone, Video, MoreVertical } from "lucide-react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const messages = [
  {
    id: 1,
    sender: "other",
    text: "Hi Ivan! Have you finished the YouthTrend UI?",
    time: "09:30 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "Yes! I'm almost done with the Profile and Notifications pages.",
    time: "09:32 AM",
  },
  {
    id: 3,
    sender: "other",
    text: "Awesome. Let's continue with the Chat page today.",
    time: "09:35 AM",
  },
];

function ChatWindow() {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b">

        <div className="flex items-center gap-3">

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
              alt="Student"
              className="w-12 h-12 rounded-full object-cover"
            />

            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>

          </div>

          <div>

            <h3 className="font-bold text-lg">
              Grace M.
            </h3>

            <p className="text-sm text-green-600">
              Online
            </p>

          </div>

        </div>

        <div className="flex gap-4 text-gray-600">

          <Phone className="cursor-pointer hover:text-green-700" />

          <Video className="cursor-pointer hover:text-green-700" />

          <MoreVertical className="cursor-pointer hover:text-green-700" />

        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">

        {messages.map((message) => (

          <MessageBubble
            key={message.id}
            sender={message.sender}
            text={message.text}
            time={message.time}
          />

        ))}

      </div>

      {/* Input */}

      <MessageInput />

    </div>
  );
}

export default ChatWindow;