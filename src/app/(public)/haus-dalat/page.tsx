"use client";

import SideBar from "@/components/Drawer";
import { projects } from "@/shared/libs/data";
import { Container, Typography } from "@mui/material";

export default function HausDalat() {
  const project = projects.find(
    (project) => project.projectUrl === "/haus-dalat"
  );

  return (
    <Container>
      {project ? (
        <div>
          <div className="flex justify-end">
            <SideBar />
          </div>
          <section id="introduction"></section>
          <section id="location"></section>
          <section id="facilities"></section>
          <section id="layout"></section>
        </div>
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
