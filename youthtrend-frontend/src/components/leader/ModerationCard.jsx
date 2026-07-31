function ModerationCard() {
  return (
    <div className="border rounded-xl p-5">

      <div className="flex justify-between">

        <div>

          <h3 className="font-semibold">
            Community Dispute
          </h3>

          <p className="text-gray-500 mt-1 text-sm">
            Inappropriate language reported.
          </p>

        </div>

        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm">
          HIGH
        </span>

      </div>

      <div className="flex gap-3 mt-5">

        <button className="bg-[#005429] text-white px-5 py-2 rounded-lg">
          Resolve
        </button>

        <button className="border px-5 py-2 rounded-lg">
          Dismiss
        </button>

      </div>

    </div>
  );
}

export default ModerationCard;