import { Image, Paperclip, Smile, Send } from "lucide-react";


function MessageInput() {

  return (

    <div className="
      border-t
      bg-white
      p-4
    ">


      <div className="
        flex
        items-center
        gap-3
      ">


        {/* Emoji */}

        <button
          className="
            text-gray-500
            hover:text-green-700
          "
        >
          <Smile size={22} />
        </button>



        {/* Attachment */}

        <button
          className="
            text-gray-500
            hover:text-green-700
          "
        >
          <Paperclip size={22} />
        </button>



        {/* Image */}

        <button
          className="
            text-gray-500
            hover:text-green-700
          "
        >
          <Image size={22} />
        </button>




        {/* Input */}

        <input
          type="text"
          placeholder="Type a message..."
          className="
            flex-1
            border
            rounded-full
            px-5
            py-3
            outline-none
            focus:border-green-600
          "
        />




        {/* Send */}

        <button
          className="
            bg-green-700
            text-white
            p-3
            rounded-full
            hover:bg-green-800
          "
        >

          <Send size={20} />

        </button>


      </div>


    </div>

  );

}


export default MessageInput;