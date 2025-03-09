import NextIcon from "@/shared/assets/icons/NextIcon";
import PreviousIcon from "@/shared/assets/icons/PreviousIcon";
import { projects } from "@/app/libs/data";
import { Typography, IconButton } from "@mui/material";
import React from "react";
import { Project } from "@/app/interfaces";
import TheHeaderComponent from "@/components/TheHeader";
import ProjectItem from "@/components/ProjectItem";

export default function ProjectCarousel() {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  const nextSlide = () => {
    const newIndex = currentSlide + (isMobile ? 1 : 4);
    if (newIndex < filteredProjects.length) {
      setCurrentSlide(newIndex);
    }
  };

  const prevSlide = () => {
    const newIndex = currentSlide - (isMobile ? 1 : 4);
    if (newIndex >= 0) {
      setCurrentSlide(newIndex);
    }
  };

  const isNextDisabled =
    currentSlide + (isMobile ? 1 : 4) >= filteredProjects.length;
  const isPrevDisabled = currentSlide === 0;

  const handleSearch = (result: Project[]) => {
    setFilteredProjects(result);
    setCurrentSlide(0);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div>
        <TheHeaderComponent onSearch={handleSearch} />
      </div>

      <div className="my-6 flex justify-center items-center">
        <h1 className="text-[#8b5a3e] font-semibold text-center uppercase text-2xl">
          quan tâm nhiều nhất
        </h1>
      </div>
      <div id="project-carousel" className="flex justify-between items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects
              .filter((item) => {
                return item.type === "hot";
              })
              .slice(currentSlide, currentSlide + (isMobile ? 1 : 4))
              .map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))
          ) : (
            <div className="w-full grid grid-cols-1">
              <Typography variant="body2" className="uppercase text-red-500">
                không tìm thấy kết quả phù hợp.
              </Typography>
            </div>
          )}
        </div>
      </div>
      {isMobile ? (
        <div id="carousel-btn" className="flex justify-center my-3">
          <IconButton
            title="Previous"
            onClick={prevSlide}
            className={`${
              isPrevDisabled
                ? "z-0 mx-[2px] cursor-not-allowed"
                : "z-0 mx-[2px]"
            }`}
          >
            <PreviousIcon />
          </IconButton>
          <IconButton
            title="Previous"
            onClick={nextSlide}
            className={`${
              isNextDisabled
                ? "z-0 mx-[2px] cursor-not-allowed"
                : "z-0 mx-[2px]"
            }`}
          >
            <NextIcon />
          </IconButton>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
