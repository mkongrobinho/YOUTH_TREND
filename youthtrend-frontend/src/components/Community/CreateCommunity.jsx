import { X } from "lucide-react";


function CreateCommunity({ close }) {

  return (

    <div className="
      fixed
      inset-0
      bg-black/40
      flex
      items-center
      justify-center
      z-50
    ">


      <div className="
        bg-white
        w-full
        max-w-lg
        rounded-2xl
        p-6
      ">



        <div className="
          flex
          justify-between
          items-center
          mb-5
        ">

          <h2 className="
            text-2xl
            font-bold
          ">
            Create Community
          </h2>


          <button onClick={close}>
            <X />
          </button>


        </div>





        <div className="
          space-y-4
        ">


          <input
            placeholder="Community name"
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          />



          <textarea
            placeholder="Community description"
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              h-28
              outline-none
            "
          />



          <input
            placeholder="Cover image URL"
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          />




          <button
            className="
              w-full
              bg-green-700
              text-white
              py-3
              rounded-xl
            "
          >
            Create Community
          </button>



        </div>


      </div>


    </div>

  );

}


export default CreateCommunity;