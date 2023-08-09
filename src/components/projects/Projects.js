import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Coming Soon!"
          des="..."
          src={projectOne}
          githubLink="https://github.com/segharedaghi"
          websiteLink=""
        />
        <ProjectsCard
          title="Coming Soon!"
          des="..."
          src={projectTwo}
          githubLink="https://github.com/segharedaghi"
          websiteLink=""
        />
        <ProjectsCard
          title="Coming Soon!"
          des="..."
          src={projectThree}
          githubLink="https://github.com/segharedaghi"
          websiteLink=""
        />
      </div>
    </section>
  );
};

export default Projects;
