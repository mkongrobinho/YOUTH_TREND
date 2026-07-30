function InterestsCard() {


  const interests = [
    "Web Development",
    "Artificial Intelligence",
    "UI/UX Design",
    "Mobile Development",
    "Entrepreneurship",
    "Cyber Security"
  ];


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
        mb-4
      ">
        Interests & Skills
      </h2>




      <div className="
        flex
        flex-wrap
        gap-3
      ">


        {interests.map((item,index)=>(

          <span
            key={index}
            className="
              bg-green-50
              text-green-700
              border
              border-green-200
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
            "
          >
            {item}
          </span>

        ))}


      </div>


    </div>

  );

}


export default InterestsCard;