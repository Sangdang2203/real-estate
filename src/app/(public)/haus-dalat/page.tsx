import { Metadata } from "next";
import SideBar from "@/components/SideBar";
import { projects } from "@/app/libs/data";
import { Typography } from "@mui/material";
import HausDalatProject from "./HausDalatProject";
import image from "@/images/haus_dalat/haus_dalat_1.jpg";

export const metadata: Metadata = {
  title: "Haus Dalat - bất động sản tiêu chuẩn ESG đầu tiên tại Việt Nam",
  authors: { name: "The One Destination" },
  robots: "index, follow",
  creator: "One ",
  publisher: "Haus Dalat",
  keywords: [
    "hausdalat",
    "Haus Dalat",
    "the one destination",
    "hồ xuân hương",
    "Kengo Kuma",
    "Isometrix",
    "1508 London",
    "Chiva-Som",
    "mension villas",
    "sky villas",
  ],
  openGraph: {
    images: [
      {
        url: image.src,
        width: 1200,
        height: 630,
        alt: "Haus Dalat",
      },
    ],
  },
  description:
    "The One Destination, chủ đầu tư dự án Haus Da Lat hợp tác IHG Hotels & Resort đưa thương hiệu InterContinental về TP Đà Lạt.",
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
