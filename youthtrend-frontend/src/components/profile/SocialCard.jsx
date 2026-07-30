function SocialCard() {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      shadow-sm
      p-6
    ">

      <h2 className="
        text-xl
        font-bold
        mb-5
      ">
        Social Presence
      </h2>


      <div className="space-y-4">


        {/* Portfolio */}

        <a
          href="#"
          className="
            flex
            items-center
            gap-4
            p-3
            rounded-xl
            hover:bg-gray-50
          "
        >

          <div className="
            w-10
            h-10
            rounded-full
            bg-green-100
            flex
            items-center
            justify-center
            text-green-700
            font-bold
          ">
            🌐
          </div>


          <div>

            <p className="font-semibold">
              Portfolio
            </p>

            <p className="
              text-sm
              text-gray-500
            ">
              amara.dev
            </p>

          </div>


        </a>





        {/* GitHub */}

        <a
          href="#"
          className="
            flex
            items-center
            gap-4
            p-3
            rounded-xl
            hover:bg-gray-50
          "
        >

          <div className="
            w-10
            h-10
            rounded-full
            bg-gray-100
            flex
            items-center
            justify-center
            font-bold
          ">
            GH
          </div>


          <div>

            <p className="font-semibold">
              GitHub
            </p>

            <p className="
              text-sm
              text-gray-500
            ">
              github.com/amara
            </p>

          </div>


        </a>





        {/* LinkedIn */}

        <a
          href="#"
          className="
            flex
            items-center
            gap-4
            p-3
            rounded-xl
            hover:bg-gray-50
          "
        >

          <div className="
            w-10
            h-10
            rounded-full
            bg-blue-50
            flex
            items-center
            justify-center
            text-blue-600
            font-bold
          ">
            in
          </div>


          <div>

            <p className="font-semibold">
              LinkedIn
            </p>

            <p className="
              text-sm
              text-gray-500
            ">
              linkedin.com/in/amara
            </p>

          </div>


        </a>


      </div>


    </div>

  );

}


export default SocialCard;