import { projects } from "@/app/libs/data";
import { Typography } from "@mui/material";
import { Metadata } from "next";
import CelestaRiseProject from "./CelestaRise";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Celesta Rise by Keppel Land",
  keywords: [
    "Celesta Rise",
    "Keppel Land",
    "Celesta city",
    "Celesta",
    "can ho celesta",
    "căn hộ celesta",
  ],
  description: "Celesta Rise by Keppel Land",
};

export default function CelestaRise() {
  const project = projects.find(
    (project) => project.projectUrl === "/celesta-rise"
  );

  return (
    <>
      {project !== null ? (
        <div className="mb-14">
          <div className="flex justify-end">
            <SideBar />
          </div>
          <CelestaRiseProject />
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
