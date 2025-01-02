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
  Typography,
} from "@mui/material";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import CarouselImages from "@/components/Carousel";
import TheHeaderComponent from "@/components/TheHeader";
import { Project } from "@/app/interfaces";

import no_image from "../../../shared/assets/images/no_image.jpg";

export default function HomePage() {
  //const hotProjects = projects.filter((project) => project.type === "hot");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const handleSearch = (result: Project[]) => {
    setFilteredProjects(result);
  };

  return (
    <Box>
      <TheHeaderComponent onSearch={handleSearch} />

      {/* Carousel section */}
      <section id="slideshow">
        <CarouselImages />
      </section>

      {/* Projects section  */}
      <section
        id="projects"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-auto"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.slice(0, 8).map((project) => (
            <Card key={project.id} className="">
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
                className="text-red-800 card shadow-sm"
              />
              <Link href={project.projectUrl}>
                <Image
                  src={no_image}
                  alt={project.images[0]?.alt}
                  width={500}
                  height={300}
                  title="Press to explore more information."
                />
              </Link>

              <CardContent>
                <Typography
                  variant="body2"
                  className="text-slate-500 text-wrap line-clamp-4 text-justify"
                >
                  {project.description ? (
                    project.description
                  ) : (
                    <Typography variant="body2">Đang cập nhật</Typography>
                  )}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  title="Share"
                  aria-label="share"
                  href={project.projectUrl}
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
        {/* <ProjectPage /> */}
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
