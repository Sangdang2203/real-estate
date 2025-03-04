import { Metadata } from "next";
import { projects } from "@/app/libs/data";
import { Typography } from "@mui/material";
import image from "@/images/eco_retreat/EcoRetreat_image_21.jpg";
import SideBar from "@/components/SideBar";
import EcoRetreatProject from "./EcoRetreatProject";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Eco Retreat Long An - Ecopark Group",
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
        alt: "Hình ảnh mô tả Eco Retreat",
      },
    ],
  },

  description:
    "Cách trung tâm thành phố Hồ Chí Minh 18Km, Eco Treat là nơi trú ẩn lý tưởng cho những gia chủ kiếm tìm sự bình yên nơi thiên nhiên bên cạnh sự tiện lợi và phồn vinh nơi phố thị Eco Retreat lại càng đắc địa khi thuộc về Bến Lức – một trong những khu đô thị vệ tinh lớn nhất của Tp.HCM với cơ sở hạ tầng giao thông đồng bộ, thuận tiện. Từ đây, cư dân Eco Retreat có thể dễ dàng kết nối với mọi nơi và trải nghiệm cuộc sống đa sắc màu.",
};
export default function Page() {
  const project = projects.find(
    (project) => project.projectUrl === "/eco-retreat-long-an"
  );

  return (
    <>
      <Head>
        <link rel="canonical" href="/eco-retreat-long-an" />
      </Head>
      {project !== null ? (
        <div className="mb-14">
          <div className="flex justify-between items-center">
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
