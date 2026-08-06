function CoverBanner() {

  return (

    <div
      className="
        relative
        h-72
        rounded-3xl
        overflow-hidden
        shadow
      "
    >

      {/* Cover Image */}

      <img

  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1400"

  alt="African Campus Students"

  className="
    w-full
    h-full
    object-cover
  "

/>



      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-black/35
        "
      ></div>



      {/* Edit Button */}

      <button

        className="
          absolute
          top-5
          right-5
          bg-white
          text-[#005429]
          font-semibold
          px-5
          py-2
          rounded-xl
          shadow
          hover:bg-gray-100
          transition
        "

      >

        Edit Cover

      </button>



      {/* Welcome Text */}

      <div
        className="
          absolute
          bottom-8
          left-8
          text-white
        "
      >

        <h1
          className="
            text-4xl
            font-bold
          "
        >
          Welcome Back 👋
        </h1>

        <p
          className="
            mt-2
            text-lg
            text-gray-200
          "
        >
          Showcase your journey, achievements and campus life.
        </p>

      </div>

    </div>

  );

}

export default CoverBanner;