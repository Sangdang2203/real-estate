"use client";

import { projects } from "@/app/libs/data";
import { Container, Typography } from "@mui/material";

export default function CelestaHeights() {
  const project = projects.find((project) => project.projectUrl === "/");

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
