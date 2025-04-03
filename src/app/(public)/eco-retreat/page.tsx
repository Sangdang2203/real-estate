import { Metadata } from "next";
import { projects } from "@/app/libs/data";
import { Typography } from "@mui/material";
import image from "@/images/eco_retreat/EcoRetreat_image_21.jpg";
import SideBar from "@/components/sidebar";
import EcoRetreatProject from "./ecoretreat-project";

export const metadata: Metadata = {
  title: "Eco Retreat Long An - Viên ngọc bên sông Vàm Cỏ",
  authors: { name: "Ecopark Group" },
  robots: "index, follow",
  creator: "Ecopark Group",
  publisher: "Ecopark Retreat",
  keywords: [
    "Eco Retreat Long An",
    "Ecopark Group",
    "nha pho Ecopark",
    "biet thu Ecopark",
    "can ho Ecopark",
    "nhà phố eco retreat",
    "shophouse eco retreat",
    "biệt thự eco retreat",
  ],

  openGraph: {
    images: [
      {
        url: image.src,
        width: 1200,
        height: 630,
        alt: "Eco Retreat Long An",
      },
    ],
  },

  description:
    "Eco Retreat, viên ngọc bên sông Vàm Cỏ Đông thơ mộng, cách trung tâm TP.HCM 18km. Vị trí đắc địa tại Bến Lức, khu đô thị vệ tinh lớn, giao thông thuận tiện. Nơi an cư lý tưởng, kết nối dễ dàng, tận hưởng tiện nghi phố thị và thiên nhiên bình yên.",
};
export default function Page() {
  const project = projects.find(
    (project) => project.projectUrl === "/eco-retreat-long-an"
  );

  return (
    <>
      {project !== null ? (
        <div className="mb-14">
          <div className="flex justify-end items-center">
            <SideBar />
          </div>
          <EcoRetreatProject />
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
