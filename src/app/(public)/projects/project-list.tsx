"use client";

import * as React from "react";
import { projects } from "@/app/libs/data";
import { Project } from "@/app/interfaces";
import { Typography } from "@mui/material";
import ProjectItem from "@/components/project-item";
import TheHeaderComponent from "@/components/the-header";
import ReturnButton from "@/components/return-button";
import PagingComponent from "@/components/pagination";

const ProjectList = () => {
  const [filteredProjects, setFilteredProjects] =
    React.useState<Project[]>(projects);
  const [isMobile, setIsMobile] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [desktopPerPage] = React.useState(8);
  const [mobilePerPage] = React.useState(5);

  const handleSearch = (result: Project[]) => {
    setFilteredProjects(result);
    setCurrentPage(1);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const indexOfLastProject =
    currentPage * (isMobile ? mobilePerPage : desktopPerPage);
  const indexOfFirstProject =
    indexOfLastProject - (isMobile ? mobilePerPage : desktopPerPage);
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  React.useEffect(() => {
    setFilteredProjects(projects);
  }, [isMobile]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <TheHeaderComponent onSearch={handleSearch} />

      <div className="min-h-screen">
        <TheHeaderComponent onSearch={handleSearch} />
        <div className="min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {currentProjects.length > 0 ? (
              currentProjects
                .slice(0, isMobile ? mobilePerPage : desktopPerPage)
                .map((project) => (
                  <ProjectItem key={project.id} project={project} />
                ))
            ) : (
              <Typography variant="body2" className="uppercase text-red-500">
                không tìm thấy kết quả phù hợp
              </Typography>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <PagingComponent
          data={filteredProjects}
          rowPerPage={isMobile ? mobilePerPage : desktopPerPage}
          page={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <ReturnButton />
    </div>
  );
};

export default ProjectList;
