import SideBar from "@/components/SideBar";
import { projects } from "@/shared/libs/data";
import { Typography } from "@mui/material";
import HausDalatProject from "./HausDalat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haus Dalat",
  description:
    "The One Destination, chủ đầu tư dự án Haus Da Lat hợp tác IHG Hotels & Resort đưa thương hiệu InterContinental về TP Đà Lạt, đặt tại dự án trước mặt hồ Xuân Hương. Đại diện chủ đầu tư The One Destination cho biết, khách sạn InterContinental sẽ nằm trong dự án Haus Da Lat rộng 5ha đặt ở trung tâm thành phố, trước mặt hồ Xuân Hương. Resort 5 sao này dự kiến hoạt động vào năm 2027.",
};

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
