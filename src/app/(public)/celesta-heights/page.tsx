import SideBar from "@/components/SideBar";
import { projects } from "@/app/libs/data";
import { Typography } from "@mui/material";
import CelestaHeightsProject from "./CelestaHeights";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celesta Heights by Keppel Land",
  keywords: [
    "Celesta Heights",
    "Keppel Land",
    "Celesta city",
    "Celesta",
    "can ho celesta",
    "căn hộ celesta",
  ],
  description: "Celesta Heights by Keppel Land",
};

export default function CelestaHeights() {
  const project = projects.find(
    (project) => project.projectUrl === "/celesta-heights"
  );

  return (
    <>
      {project !== null ? (
        <div className="mb-14">
          <div className="flex justify-end">
            <SideBar />
          </div>

          <CelestaHeightsProject />
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
