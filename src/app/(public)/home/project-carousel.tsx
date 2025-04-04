import React from "react";
import { projects } from "@/app/libs/data";
import { Typography } from "@mui/material";
import { Project } from "@/app/interfaces";
import ProjectItem from "@/components/ProjectItem";
import TheHeaderComponent from "@/components/TheHeader";
import CarouselItems from "@/components/CarouselItem";

export default function ProjectCarousel() {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const [startTouch, setStartTouch] = React.useState(0);

  const visibleProjects: Project[] = filteredProjects.filter(
    (p) => p.type === "hot"
  );

  const nextSlide = () => {
    const newIndex = currentSlide + 1;
    const lastIndex = filteredProjects.filter(
      (item) => item.type === "hot"
    ).length;
    if (newIndex < lastIndex) {
      setCurrentSlide(newIndex);
    }
  };

  const prevSlide = () => {
    const newIndex = currentSlide - 1;
    if (newIndex >= 0) {
      setCurrentSlide(newIndex);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentTouch = e.touches[0].clientX;
    if (startTouch - currentTouch > 50) {
      console.log(startTouch - currentTouch);
      nextSlide();
    } else if (currentTouch - startTouch > 50) {
      prevSlide();
    }
  };

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
      <div
        id="project-carousel"
        className="flex justify-between items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects
              .filter((item) => item.type === "hot")
              .slice(currentSlide, currentSlide + (isMobile ? 1 : 4))
              .map((project) => (
                <div key={project.id}>
                  <ProjectItem project={project} />
                </div>
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
      {isMobile && (
        <div id="carousel-btn" className="flex justify-center my-3">
          <CarouselItems
            data={visibleProjects}
            currentIndex={currentSlide}
            setCurrentIndex={setCurrentSlide}
          />
        </div>
      )}
    </>
  );
}
