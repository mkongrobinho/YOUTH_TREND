function InterestsCard() {
  const interests = [
    "Frontend Development",
    "React.js",
    "JavaScript",
    "UI/UX Design",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cyber Security",
    "Mobile Development",
    "Football",
    "Photography",
    "Public Speaking",
    "Leadership"
  ];

  return (
    <div className="bg-white rounded-3xl shadow p-6">

      <h2 className="text-2xl font-bold text-[#005429] mb-6">
        Interests & Skills
      </h2>

      <div className="flex flex-wrap gap-3">

        {interests.map((interest, index) => (

          <span
            key={index}
            className="
              px-4
              py-2
              bg-green-100
              text-[#005429]
              rounded-full
              font-medium
              hover:bg-[#005429]
              hover:text-white
              transition
              cursor-pointer
            "
          >
            {interest}
          </span>

        ))}

      </div>

    </div>
  );
}

export default InterestsCard;