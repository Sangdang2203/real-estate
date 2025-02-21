import NextIcon from "@/shared/assets/icons/NextIcon";
import PreviousIcon from "@/shared/assets/icons/PreviousIcon";
import ReadmoreIcon from "@/shared/assets/icons/ReadmoreIcon";
import ShareIcon from "@/shared/assets/icons/ShareIcon";
import { projects } from "@/shared/libs/data";
import { handleShare } from "@/shared/method/methods";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Tooltip,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import no_image from "@/images/no_image.jpg";
import { Project } from "@/app/interfaces";
import TheHeaderComponent from "@/components/TheHeader";

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
      setIsMobile(window.innerWidth < 768);
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

      <div className="my-6 flex justify-center items-center ">
        <Typography
          className="text-[#dec4a7] font-semibold text-center uppercase"
          variant="h5"
        >
          quan tâm nhiều nhất
        </Typography>
      </div>
      <div
        id="project-carousel"
        className="flex justify-between items-center slide-in-right"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects
              .slice(currentSlide, currentSlide + (isMobile ? 1 : 4))
              .map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-2xl cursor-pointer"
                >
                  <CardHeader
                    avatar={
                      <Avatar className="bg-red-500 uppercase">
                        {project.name.slice(0, 1).toUpperCase()}
                      </Avatar>
                    }
                    title={project.name.toUpperCase()}
                    subheader={
                      project.location ? project.location : "Đang cập nhật"
                    }
                    className="text-red-800 shadow-sm bg-slate-200"
                  />

                  <CardContent className="grid grid-cols-1">
                    <Link href={project.projectUrl}>
                      <Image
                        src={
                          project.images.length > 0
                            ? project.images[0].src
                            : no_image
                        }
                        alt={project.images[0].alt}
                        width={500}
                        height={300}
                        title="Press to explore more information."
                        className="pb-3 max-h-[180px] md:max-h-[130px]"
                      />
                    </Link>
                    <Tooltip title={project.description}>
                      <Typography
                        variant="body2"
                        className="text-slate-500 text-wrap line-clamp-4 text-justify text-[14px]"
                      >
                        {project.description ? (
                          project.description
                        ) : (
                          <Typography variant="body2" className="md:mb-14">
                            Đang cập nhật
                          </Typography>
                        )}
                      </Typography>
                    </Tooltip>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      title="Share"
                      aria-label="share"
                      onClick={() => handleShare(project.projectUrl)}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="read more"
                      title="Read more"
                      href={project.projectUrl}
                    >
                      <ReadmoreIcon />
                    </IconButton>
                  </CardActions>
                </Card>
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
