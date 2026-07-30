import { useState } from "react";

import ProjectCard from "../../components/projects/ProjectCard";
import ProjectHeader from "../../components/projects/ProjectHeader";
import CreateProject from "../../components/projects/CreateProject";


const projects = [

  {
    id: 1,
    title: "YouthTrend Campus Platform",
    description:
      "A social platform connecting students from different universities.",
    tech:
      "React, Tailwind CSS, Node.js",
    members: 5,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",

    students: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
    ]
  },


  {
    id: 2,
    title: "AI Study Assistant",
    description:
      "An artificial intelligence tool helping students study better.",
    tech:
      "Python, Machine Learning",
    members: 4,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",

    students: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80"
    ]
  },


  {
    id: 3,
    title: "Campus Marketplace",
    description:
      "A platform where students buy and sell items on campus.",
    tech:
      "React, Firebase",
    members: 6,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",

    students: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80"
    ]
  }

];



function Projects() {


  const [showCreate, setShowCreate] = useState(false);



  return (

    <div className="space-y-6">


      {/* Header */}

      <ProjectHeader
        openCreate={() => setShowCreate(true)}
      />





      {/* Search */}

      <div className="
        bg-white
        border
        rounded-2xl
        p-4
      ">

        <input
          placeholder="Search projects..."
          className="
            w-full
            bg-gray-100
            rounded-xl
            px-4
            py-3
            outline-none
          "
        />

      </div>





      {/* Projects */}

      <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      ">


        {
          projects.map((project)=>(

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))
        }


      </div>





      {/* Create Project Modal */}

      {
        showCreate && (

          <CreateProject
            close={() => setShowCreate(false)}
          />

        )
      }


    </div>

  );

}


export default Projects;