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
  "https://images.pexels.com/photos/34257712/pexels-photo-34257712.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",

students: [
  "https://images.pexels.com/photos/29852896/pexels-photo-29852896.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  "https://images.pexels.com/photos/31437216/pexels-photo-31437216.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  "https://images.pexels.com/photos/31528664/pexels-photo-31528664.jpeg?auto=compress&cs=tinysrgb&w=200&q=80"
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
"https://images.pexels.com/photos/5940864/pexels-photo-5940864.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",

students: [
  "https://images.pexels.com/photos/8543078/pexels-photo-8543078.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  "https://images.pexels.com/photos/31367501/pexels-photo-31367501.jpeg?auto=compress&cs=tinysrgb&w=200&q=80"
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






      {/* Projects List */}

      <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      ">


        {projects.map((project)=>(

          <ProjectCard

            key={project.id}

            project={project}

          />

        ))}


      </div>






      {/* Create Project */}

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