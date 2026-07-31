function NoticeBoard() {
  return (
    <div className="bg-[#005429] rounded-2xl p-8 text-white">

      <h2 className="text-3xl font-bold">
        Official Noticeboard
      </h2>

      <div className="bg-white text-black rounded-xl p-5 mt-6">

        <h3 className="font-bold">
          System Maintenance
        </h3>

        <p className="text-gray-500 mt-2">
          Platform maintenance is scheduled for Sunday at 2:00 GMT.
        </p>

      </div>

    </div>
  );
}

export default NoticeBoard;