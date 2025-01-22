"use client";

import { projects } from "@/shared/libs/data";
import { Typography } from "@mui/material";
import SideBar from "@/components/SideBar";
import EcoRetreatLongAnProject from "./EcoRetreat";

export default function Page() {
  const project = projects.find(
    (project) => project.projectUrl === "/eco-retreat-long-an"
  );

  return (
    <div className="md:mx-[10%]">
      {project !== null ? (
        <div className="mb-14">
          <div className="flex justify-end">
            <SideBar />
          </div>
          <EcoRetreatLongAnProject />
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
