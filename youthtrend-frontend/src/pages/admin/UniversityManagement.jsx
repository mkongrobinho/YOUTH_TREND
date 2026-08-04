import {
  School,
  Users,
  UsersRound,
  Crown,
} from "lucide-react";

import UniversityHeader from "../../components/admin/UniversityHeader";
import UniversityFilters from "../../components/admin/UniversityFilters";
import UniversityStatCard from "../../components/admin/UniversityStatCard";
import UniversityTable from "../../components/admin/UniversityTable";


const universities = [

  {
    id: 1,
    logo: "https://placehold.co/80x80?text=UB",
    name: "University of Buea",
    region: "South West",
    city: "Buea",
    students: 18420,
    communities: 42,
    leaders: 18,
    status: "Active",
  },


  {
    id: 2,
    logo: "https://placehold.co/80x80?text=UY1",
    name: "University of Yaoundé I",
    region: "Centre",
    city: "Yaoundé",
    students: 22150,
    communities: 56,
    leaders: 24,
    status: "Active",
  },


  {
    id: 3,
    logo: "https://placehold.co/80x80?text=UD",
    name: "University of Douala",
    region: "Littoral",
    city: "Douala",
    students: 19840,
    communities: 48,
    leaders: 20,
    status: "Inactive",
  },


  {
    id: 4,
    logo: "https://placehold.co/80x80?text=UBa",
    name: "University of Bamenda",
    region: "North West",
    city: "Bamenda",
    students: 16320,
    communities: 37,
    leaders: 15,
    status: "Active",
  },


];


function UniversityManagement() {


  return (

    <div className="space-y-8">


      {/* Header */}

      <UniversityHeader />



      {/* Statistics Cards */}

      <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-4
      gap-6
      ">


        <UniversityStatCard
          icon={School}
          title="Total Universities"
          value="42"
        />


        <UniversityStatCard
          icon={Users}
          title="Total Students"
          value="142,830"
        />


        <UniversityStatCard
          icon={UsersRound}
          title="Total Communities"
          value="610"
        />


        <UniversityStatCard
          icon={Crown}
          title="Campus Leaders"
          value="275"
        />


      </div>




      {/* Filters */}

      <UniversityFilters />





      {/* University Table */}

      <UniversityTable
        universities={universities}
      />



    </div>

  );

}


export default UniversityManagement;