function StoryCard() {

  return (

    <div
      className="
        relative
        min-w-32
        h-52
        rounded-2xl
        overflow-hidden
        cursor-pointer
        shadow-md
      "
    >

      <img
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Campus Story"
        className="
          w-full
          h-full
          object-cover
        "
      />

      <div className="
        absolute
        inset-0
        bg-linear-to-t
        from-black/70
        to-transparent
      "></div>

      <img
        src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200"
        alt="Student"
        className="
          absolute
          top-3
          left-3
          w-12
          h-12
          rounded-full
          border-4
          border-green-500
          object-cover
        "
      />

      <p
        className="
          absolute
          bottom-4
          left-4
          text-white
          font-semibold
        "
      >
        Brenda N.
      </p>

    </div>

  );

}

export default StoryCard;