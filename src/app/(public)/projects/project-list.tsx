"use client";

import * as React from "react";
import { projects } from "@/app/libs/data";
import { Project } from "@/app/interfaces";
import TheHeader from "@/components/TheHeader";
import ItemList from "@/components/ItemList";
import ProjectItem from "./project-item";

const ProjectList = () => {
  const [filteredProjects, setFilteredProjects] =
    React.useState<Project[]>(projects);

  const handleSearch = (result: Project[]) => {
    setFilteredProjects(result);
  };

  return (
    <>
      <div className="min-h-screen">
        <TheHeader onSearch={handleSearch} />

        <ItemList
          items={filteredProjects}
          renderItem={(project) => (
            <ProjectItem
              key={`${project.id}${project.name}`}
              project={project}
            />
          )}
        />
      </div>

      {/* <ReturnButton /> */}
    </>
  );
};

export default ProjectList;
