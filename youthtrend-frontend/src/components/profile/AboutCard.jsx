import {
  Mail,
  Phone,
  GraduationCap,
  BookOpen,
  Calendar,
  Globe
} from "lucide-react";

function AboutCard() {

  return (

    <div className="
      bg-white
      rounded-3xl
      shadow
      p-6
    ">

      <h2 className="
        text-2xl
        font-bold
        text-[#005429]
        mb-6
      ">
        About
      </h2>


      <p className="
        text-gray-600
        leading-7
      ">
        Passionate Software Engineering student focused on frontend
        development, UI/UX design and building innovative campus
        solutions. Currently developing <strong>YouthTrend</strong>,
        a social platform connecting students from different universities.
      </p>



      <div className="
        grid
        md:grid-cols-2
        gap-5
        mt-8
      ">

        <div className="flex items-center gap-3">
          <GraduationCap className="text-[#005429]" />
          <div>
            <p className="text-gray-500 text-sm">
              University
            </p>
            <h4 className="font-semibold">
              University of Buea
            </h4>
          </div>
        </div>


        <div className="flex items-center gap-3">
          <BookOpen className="text-[#005429]" />
          <div>
            <p className="text-gray-500 text-sm">
              Department
            </p>
            <h4 className="font-semibold">
              Software Engineering
            </h4>
          </div>
        </div>


        <div className="flex items-center gap-3">
          <Mail className="text-[#005429]" />
          <div>
            <p className="text-gray-500 text-sm">
              Email
            </p>
            <h4 className="font-semibold">
              christianivan@outlook.com
            </h4>
          </div>
        </div>


        <div className="flex items-center gap-3">
          <Phone className="text-[#005429]" />
          <div>
            <p className="text-gray-500 text-sm">
              Phone
            </p>
            <h4 className="font-semibold">
              +237 6XX XXX XXX
            </h4>
          </div>
        </div>


        <div className="flex items-center gap-3">
          <Calendar className="text-[#005429]" />
          <div>
            <p className="text-gray-500 text-sm">
              Joined
            </p>
            <h4 className="font-semibold">
              January 2026
            </h4>
          </div>
        </div>


        <div className="flex items-center gap-3">
          <Globe className="text-[#005429]" />
          <div>
            <p className="text-gray-500 text-sm">
              Country
            </p>
            <h4 className="font-semibold">
              Cameroon
            </h4>
          </div>
        </div>

      </div>

    </div>

  );

}

export default AboutCard;