import CoverBanner from "../../components/profile/CoverBanner";
import ProfileHeader from "../../components/profile/ProfileHeader";
import AboutCard from "../../components/profile/AboutCard";
import InterestsCard from "../../components/profile/InterestsCard";
import SocialCard from "../../components/profile/SocialCard";
import MutualCommunities from "../../components/profile/MutualCommunities";
import ActivityCard from "../../components/profile/ActivityCard";
import EventCard from "../../components/profile/EventCard";


function Profile() {


  return (

    <div className="
      max-w-6xl
      mx-auto
      space-y-6
    ">


      {/* Cover */}

      <CoverBanner />



      {/* Profile Header */}

      <ProfileHeader />





      {/* Main Content */}

      <div className="
        grid
        lg:grid-cols-3
        gap-6
      ">



        {/* Left Column */}

        <div className="
          lg:col-span-2
          space-y-6
        ">


          <AboutCard />

          <InterestsCard />

          <ActivityCard />

          <EventCard />


        </div>





        {/* Right Column */}

        <div className="
          space-y-6
        ">


          <SocialCard />

          <MutualCommunities />


        </div>


      </div>


    </div>

  );

}


export default Profile;