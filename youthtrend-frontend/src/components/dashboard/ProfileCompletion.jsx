function ProfileCompletion(){

  return (

    <div className="
      bg-white
      rounded-3xl
      shadow
      p-6
    ">


      <div className="flex justify-between items-center">


        <div>

          <h2 className="
            text-xl
            font-bold
            text-[#005429]
          ">
            Complete your profile
          </h2>


          <p className="text-gray-500 mt-2">
            Add your skills and interests to connect with more students.
          </p>

        </div>


        <div className="
          w-20
          h-20
          rounded-full
          border-8
          border-green-600
          flex
          items-center
          justify-center
          font-bold
        ">
          70%
        </div>


      </div>



      <button className="
        mt-5
        bg-[#005429]
        text-white
        px-6
        py-3
        rounded-xl
      ">
        Complete Profile
      </button>


    </div>

  );

}


export default ProfileCompletion;