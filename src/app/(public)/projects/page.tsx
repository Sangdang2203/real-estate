"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import ShareIcon from "@mui/icons-material/Share";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { projects } from "@/shared/libs/data";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { Project } from "@/app/interfaces";
import TheHeaderComponent from "@/components/TheHeader";

export default function ProjectPage() {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  const handleSearch = (result: Project[]) => {
    setFilteredProjects(result);
  };
  return (
    <>
      <TheHeaderComponent onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-auto">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => {
            return (
              <Card key={project.id}>
                <CardHeader
                  avatar={
                    <Avatar className="bg-red-500 uppercase">
                      {project.name.slice(0, 1).toUpperCase()}
                    </Avatar>
                  }
                  title={project.name.toUpperCase()}
                  subheader={project.location ? project.location : ""}
                  className="text-red-800"
                />
                <Image
                  alt={project.images[1]?.alt}
                  src={
                    project.images[0].src || "/assets/images/unknown_photo.jpg"
                  }
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
                      <Typography variant="body2" className="md:mb-14">
                        Đang cập nhật
                      </Typography>
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
    </>
  );
}
