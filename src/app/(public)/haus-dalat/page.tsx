"use client";

import SideBar from "@/components/SideBar";
import { projects } from "@/shared/libs/data";
import { Typography } from "@mui/material";
import HausDalatProject from "./HausDalat";

export default function Page() {
  const project = projects.find(
    (project) => project.projectUrl === "/haus-dalat"
  );

  return (
    <>
      {project !== null ? (
        <div className="mb-14">
          <div className="flex justify-end">
            <SideBar />
          </div>
          <HausDalatProject />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Typography variant="body2" className="capitalize">
            đang cập nhật ...
          </Typography>
        </div>
      )}
    </>
  );
}
