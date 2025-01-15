"use client";
import { projects } from "@/shared/libs/data";
import { Container, Typography } from "@mui/material";

export default function CelestaGold() {
  const project = projects.find(
    (project) => project.projectUrl === "/celesta-gold"
  );

  return (
    <Container>
      {project !== null ? (
        <h1 className="capitalize">{project!.name}</h1>
      ) : (
        <div className="flex justify-center items-center">
          <Typography variant="body2" className="capitalize">
            đang cập nhật ... aaa
          </Typography>
        </div>
      )}
    </Container>
  );
}
