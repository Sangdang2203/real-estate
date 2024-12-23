"use client";

import { projects } from "@/app/libs/data";
import { Container, Typography } from "@mui/material";

export default function EcoRetreat() {
  const project = projects.find(
    (project) => project.projectUrl === "/eco-retreat-long-an"
  );

  return (
    <Container>
      {project ? (
        <h1 className="capitalize">{project.name}</h1>
      ) : (
        <div className="flex justify-center items-center">
          <Typography variant="body2" className="capitalize">
            đang cập nhật ...
          </Typography>
        </div>
      )}
    </Container>
  );
}
