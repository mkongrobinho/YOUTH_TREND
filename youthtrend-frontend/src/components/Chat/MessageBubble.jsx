function MessageBubble({ sender, text, time }) {
  const isMe = sender === "me";

  return (
    <div
      className={`flex ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 shadow-sm ${
          isMe
            ? "bg-green-700 text-white"
            : "bg-white border text-gray-800"
        }`}
      >
        <p>{text}</p>

        <p
          className={`text-xs mt-2 ${
            isMe ? "text-green-100" : "text-gray-400"
          }`}
        >
          {time}
        </p>
      </div>
    </div>
  );
}

export default MessageBubble;