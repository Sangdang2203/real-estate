import SideBar from "@/components/SideBar";
import ElysianProject from "./ElysianProject";
import { Typography } from "@mui/material";
import { projects } from "@/app/libs/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elysian by Gamuda Land",
  keywords: ["Elysian", "Gamuda Land", "Elysian city", "can ho elysian"],
  description: "",
};

export default function Page() {
  const project = projects.find(
    (project) => project.projectUrl === "/eaton-park"
  );

  return (
    <>
      {project !== null ? (
        <div className="mb-14">
          <div className="flex justify-end">
            <SideBar />
          </div>

          <ElysianProject />
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
