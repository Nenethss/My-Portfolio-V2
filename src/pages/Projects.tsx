import Header from "../components/Header/Header";
import Type from "../components/Project/Type";
import { projectsData } from "../data/projectData";
import ProjectsCard from "../components/Project/ProjectsCard";
import { Social } from "../components/Social";
import { useState } from "react";

function Projects() {
  const [activeType, setActiveType] = useState("All");

  const filteredProjects =
    activeType === "All"
      ? projectsData
      : projectsData.filter((project) => project.type === activeType);

  return (
    <div className="min-h-[100vh] pt-[70px] dark:bg-[#252525] bg-[#fff] flex flex-row gap-6">
      <Social />
      <div className="mx-auto flex flex-col w-full gap-4">
        <Header
          subtitle="Take a look at some of my projects"
          initial="My "
          title="Projects"
        />
        <Type activeType={activeType} onChangeType={setActiveType} />
        <div className="md:px-20 px-6 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 pb-16 justify-items-center">
          {filteredProjects.map((project) => (
            <ProjectsCard
              key={project.id}
              title={project.title}
              type={project.type}
              description={project.description}
              image={project.image}
              link={project.link}
              codelink={project.codelink}
              date={project.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
