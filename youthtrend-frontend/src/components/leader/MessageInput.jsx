import { Paperclip, Smile, Send } from "lucide-react";

function MessageInput() {
  return (
    <div className="border-t bg-white p-4 flex items-center gap-3">

      <Paperclip className="text-gray-500 cursor-pointer" />

      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 border rounded-xl px-4 py-3 outline-none"
      />

      <Smile className="text-gray-500 cursor-pointer" />

      <button className="bg-[#005429] text-white p-3 rounded-xl">
        <Send size={18} />
      </button>

    </div>
  );
}

export default MessageInput;