"use client";
import * as React from "react";
import Link from "next/link";
import { projects } from "@/shared/libs/data";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
  Divider,
} from "@mui/material";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import CarouselImages from "@/components/Carousel";
import TheHeaderComponent from "@/components/TheHeader";
import { Project } from "@/app/interfaces";

import no_image from "../../../shared/assets/images/no_image.jpg";

export default function HomePage() {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const handleSearch = (result: Project[]) => {
    setFilteredProjects(result);
  };

  const handleShare = (url: string) => {
    const zaloShareUrl = `https://zalo.me/share?link=${encodeURIComponent(
      url
    )}`;
    window.open(zaloShareUrl, "_blank");
  };

  return (
    <Box>
      <TheHeaderComponent onSearch={handleSearch} />

      {/* Carousel section */}
      <section id="slideshow" className="">
        <CarouselImages />
      </section>

      {/* Projects section  */}
      <section id="projects">
        <div className="flex justify-center items-center my-6">
          <Divider className="md:w-1/3 text-[#dec4a7]" />
          <Typography
            className="text-[#dec4a7] text-center uppercase"
            variant="h5"
          >
            quan tâm nhiều nhất
          </Typography>
          <Divider className="md:w-1/3 text-[#dec4a7]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.slice(0, 5).map((project) => (
              <Card key={project.id} className="hover:scale-105">
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
                    <ShareIcon fontSize="small" color="info" />
                  </IconButton>
                  <IconButton
                    aria-label="read more"
                    title="Read more"
                    href={project.projectUrl}
                  >
                    <ReadMoreIcon fontSize="medium" color="info" />
                  </IconButton>
                </CardActions>
              </Card>
            ))
          ) : (
            <div className="grid grid-cols-1">
              <Typography variant="body2" className="uppercase text-red-500">
                không tìm thấy kết quả phù hợp
              </Typography>
            </div>
          )}
        </div>
      </section>

      <div className="flex justify-center my-10 z-0">
        <Link href="/projects" className="uppercase readMore text-center">
          xem thêm...
        </Link>
      </div>

      <section id="contact"></section>
    </Box>
  );
}
