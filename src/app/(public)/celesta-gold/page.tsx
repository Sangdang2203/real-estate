import { projects } from "@/app/libs/data";
import SideBar from "@/components/SideBar";
import { updatingMessage } from "@/shared/constants";
import { Typography } from "@mui/material";

const Page = () => {
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
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Typography>{updatingMessage}</Typography>
        </div>
      )}
    </>
  );
};

export default Page;
