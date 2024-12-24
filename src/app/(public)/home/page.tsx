"use client";
import * as React from "react";
import Link from "next/link";
import { projects } from "@/shared/libs/data";
import {
  Avatar,
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
// import haus from "../../assets/images/haus_dalat/haus_dalat.png";

export default function HomePage() {
  //const hotProjects = projects.filter((project) => project.type === "hot");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const handleSearch = (result: Project[]) => {
    setFilteredProjects(result);
  };

  return (
    <>
      <TheHeaderComponent onSearch={handleSearch} />

      {/* Carousel section */}
      <section id="slideshow">
        <CarouselImages />
        {/* <Image src={haus} alt="haus" width={1920} height={800} /> */}
      </section>

      {/* Projects section  */}
      <section
        id="projects"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-auto"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.slice(0, 8).map((project) => (
            <Card key={project.id}>
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
                className="text-red-800"
              />
              <Image
                alt={project.images[1]?.alt}
                src={project.images ? project.images[0].src : ""}
                width={500}
                height={300}
              />

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
                <IconButton aria-label="share" href={project.projectUrl}>
                  <ShareIcon />
                </IconButton>
                <IconButton
                  aria-label="read more"
                  title="Xem thêm"
                  href={project.projectUrl}
                >
                  <ReadMoreIcon />
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
      <div className="flex justify-center mt-10 z-0">
        <Link href="/projects" className="uppercase readMore text-center">
          xem thêm...
        </Link>
      </div>

      <section id="contact"></section>
    </>
  );
}
