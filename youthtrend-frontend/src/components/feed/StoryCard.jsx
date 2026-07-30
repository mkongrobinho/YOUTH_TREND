function StoryCard() {
  return (
    <div className="min-w-30 h-48 rounded-2xl overflow-hidden relative shadow-md cursor-pointer">

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-green-700 to-green-400"></div>

      {/* Avatar */}
      <div className="absolute top-3 left-3">
        <div className="w-12 h-12 rounded-full border-4 border-white bg-white flex items-center justify-center font-bold text-[#005429]">
          YT
        </div>
      </div>

      {/* Name */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="font-semibold text-sm">
          Your Story
        </h3>
      </div>

    </div>
  );
}

export default StoryCard;