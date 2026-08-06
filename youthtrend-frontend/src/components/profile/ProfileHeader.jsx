import { MapPin, GraduationCap, BadgeCheck } from "lucide-react";

function ProfileHeader() {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow
        p-8
        -mt-20
        relative
        z-10
      "
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8">

        {/* Profile Picture */}
    <img
  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80"
  alt="African Student Profile"
  className="
    w-40
    h-40
    rounded-full
    border-4
    border-white
    object-cover
    shadow-lg
  "
/>
        {/* Profile Info */}
        <div className="flex-1 text-center lg:text-left">

          <div className="flex items-center justify-center lg:justify-start gap-2">

            <h2 className="text-3xl font-bold">
              Christell Ivana
            </h2>

            <BadgeCheck
              size={24}
              className="text-blue-500"
            />

          </div>

          <p className="text-gray-500 mt-2">
            Software Engineering Student
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4 text-gray-600">

            <div className="flex items-center gap-2">
              <GraduationCap size={18} />
              University of Buea
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              Cameroon
            </div>

          </div>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-10 mt-6">

            <div>
              <h3 className="text-2xl font-bold text-[#005429]">
                248
              </h3>
              <p className="text-gray-500 text-sm">
                Posts
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#005429]">
                5.2K
              </h3>
              <p className="text-gray-500 text-sm">
                Followers
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#005429]">
                980
              </h3>
              <p className="text-gray-500 text-sm">
                Following
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#005429]">
                12
              </h3>
              <p className="text-gray-500 text-sm">
                Communities
              </p>
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button
            className="
              bg-[#005429]
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-green-800
              transition
            "
          >
            Edit Profile
          </button>

          <button
            className="
              border
              border-[#005429]
              text-[#005429]
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-green-50
              transition
            "
          >
            Message
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProfileHeader;