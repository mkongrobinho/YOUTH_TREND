import { Megaphone } from "lucide-react";

function Announcements() {
  const announcements = [
    {
      title: "Registration Deadline",
      description: "Course registration closes this Friday."
    },
    {
      title: "Hackathon 2026",
      description: "Join the campus hackathon next weekend."
    },
    {
      title: "Career Fair",
      description: "More than 30 companies will be on campus."
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow p-6">

      <div className="flex items-center gap-3 mb-5">
        <Megaphone className="text-[#005429]" />
        <h2 className="text-xl font-bold text-[#005429]">
          Announcements
        </h2>
      </div>

      <div className="space-y-4">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-[#005429] pl-4 py-2"
          >
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Announcements;