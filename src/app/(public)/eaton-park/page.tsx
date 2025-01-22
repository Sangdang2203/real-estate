"use client";

import React from "react";
import { projects } from "@/shared/libs/data";
import { Typography } from "@mui/material";
import SideBar from "@/components/SideBar";
import EatonParkProject from "./EatonPark";

export default function Page() {
  const project = projects.find(
    (project) => project.projectUrl === "/eaton-park"
  );

  return (
    <div className="md:mx-[10%]">
      {project !== null ? (
        <div className="mb-14">
          <div className="flex justify-end">
            <SideBar />
          </div>

          <EatonParkProject />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Typography variant="body2" className="capitalize">
            đang cập nhật ...
          </Typography>
        </div>
      )}
    </div>
  );
}
