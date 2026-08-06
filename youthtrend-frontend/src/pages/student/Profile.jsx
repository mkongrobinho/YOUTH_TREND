import { useEffect, useState } from "react";
import CoverBanner from "../../components/profile/CoverBanner";
import ProfileHeader from "../../components/profile/ProfileHeader";
import AboutCard from "../../components/profile/AboutCard";
import InterestsCard from "../../components/profile/InterestsCard";
import SocialCard from "../../components/profile/SocialCard";
import MutualCommunities from "../../components/profile/MutualCommunities";
import ActivityCard from "../../components/profile/ActivityCard";
import EventCard from "../../components/profile/EventCard";
import { fetchCurrentUser } from "../../services/userService";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCurrentUser()
      .then(setProfile)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-red-600 p-6">{error}</p>;
  if (!profile) return <p className="p-6">Loading profile...</p>;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <CoverBanner />
      <ProfileHeader profile={profile} />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AboutCard profile={profile} />
          <InterestsCard />
          <ActivityCard />
          <EventCard />
        </div>
        <div className="space-y-6">
          <SocialCard />
          <MutualCommunities />
        </div>
      </div>
    </div>
  );
}

export default Profile;