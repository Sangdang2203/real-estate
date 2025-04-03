import { Metadata } from "next";
import SideBar from "@/components/sidebar";
import ElysianProject from "./elysian-project";
import { Typography } from "@mui/material";
import { projects } from "@/app/libs/data";
import image from "@/images/elysian/elysian.jpg";

export const metadata: Metadata = {
  title: "Elysian by Gamuda Land - Dự án bất động sản xanh",
  authors: { name: "Gamuda Land" },
  robots: "index, follow",
  creator: "Gamuda Land",
  publisher: "Elysian",
  keywords: [
    "Elysian",
    "Gamuda Land",
    "Elysian city",
    "can ho elysian",
    "căn hộ elysian",
    "dự án elysian",
    "du an elysian",
    "elysian gamuda land",
  ],
  openGraph: {
    images: [
      {
        url: image.src,
        width: 1200,
        height: 630,
        alt: "Elysian by Gamuda Land",
      },
    ],
  },
  description:
    "Về với Elysian, chúng ta tạm rời xa cuộc sống hối hả và ồn ào của đô thị để hòa mình, cùng thưởng ngoạn cảnh sắc thiên nhiên yên bình.",
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
