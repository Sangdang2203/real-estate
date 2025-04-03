import { projects } from "@/app/libs/data";
import { Typography } from "@mui/material";
import CelestaGoldProject from "./celesta-gold-project";
import SideBar from "@/components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celesta Gold by Keppel Land",
  keywords: [
    "Celesta Gold",
    "Keppel Land",
    "Celesta city",
    "Celesta",
    "can ho celesta",
    "căn hộ celesta",
  ],
  description: "Celesta Gold by Keppel Land",
};

export default function Page() {
  const project = projects.find(
    (project) => project.projectUrl === "/celesta-gold"
  );

  return (
    <>
      {project !== null ? (
        <div className="mb-14">
          <div className="flex justify-end">
            <SideBar />
          </div>

          <CelestaGoldProject />
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
