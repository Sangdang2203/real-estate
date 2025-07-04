"use client";

import * as React from "react";
import { projects } from "@/app/libs/data";
import { Project } from "@/app/libs/interfaces";
import TheHeader from "@/components/TheHeader";
import ItemList from "@/components/ItemList";
import ProjectItem from "./project-item";
import { Typography } from "@mui/material";
import { updatingMessage } from "@/shared/constants";

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

        {filteredProjects.length > 0 ? (
          <ItemList
            items={filteredProjects}
            renderItem={(project) => (
              <ProjectItem
                key={`${project.id}${project.name}`}
                project={project}
              />
            )}
          />
        ) : (
          <Typography>{updatingMessage}</Typography>
        )}
      </div>
    </>
  );
};

export default ProjectList;
