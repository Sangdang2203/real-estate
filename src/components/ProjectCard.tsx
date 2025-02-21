"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { projects } from "@/shared/libs/data";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { Project } from "@/app/interfaces";
import { handleShare } from "@/shared/method/methods";
import TheHeaderComponent from "@/components/TheHeader";
import no_image from "@/images/no_image.jpg";
import ReadmoreIcon from "@/icons/ReadmoreIcon";
import ShareIcon from "@/icons/ShareIcon";

export default function ProjectCard() {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [visibleProjects, setVisibleProjects] = React.useState(3);
  const [isMobile, setIsMobile] = React.useState(false);

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

  const handleSearch = (result: Project[]) => {
    setFilteredProjects(result);
  };

  const handleLoadMore = () => {
    setVisibleProjects((pre) => pre + visibleProjects);
  };

  return (
    <Box>
      <TheHeaderComponent onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects
            .slice(0, isMobile ? visibleProjects : filteredProjects.length)
            .map((project) => {
              return (
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
                    subheader={project.location ? project.location : ""}
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
              );
            })
        ) : (
          <div className="grid grid-cols-1">
            <Typography variant="body2" className="uppercase text-red-500">
              không tìm thấy kết quả phù hợp
            </Typography>
          </div>
        )}
      </div>
      {isMobile && filteredProjects.length > visibleProjects && (
        <div className="flex justify-center my-4">
          <Button
            onClick={handleLoadMore}
            className="text-[#dec4a7] border-[#dec4a7] border-[2px]"
            variant="outlined"
          >
            Xem thêm
          </Button>
        </div>
      )}
    </Box>
  );
}
