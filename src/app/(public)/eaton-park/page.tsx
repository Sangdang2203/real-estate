import { projects } from "@/app/libs/data";
import { Typography } from "@mui/material";
import SideBar from "@/components/SideBar";
import EatonParkProject from "./EatonParkProject";
import { Metadata } from "next";
import image from "@/images/eaton_park/model_housing.jpg";

export const metadata: Metadata = {
  title: "Eaton Park by Gamuda Land - Khu phức hợp căn hộ hạng sang.can",
  authors: { name: "Gamuda Land" },
  robots: "index, follow",
  creator: "Gamuda Land",
  publisher: "Eaton Park",
  keywords: [
    "Eaton Park",
    "Gamuda Land",
    "can ho eaton park",
    "căn hộ eaton park",
    "du an eaton park",
    "dự án eaton park",
    "eaton park gamuda land",
  ],
  openGraph: {
    images: [
      {
        url: image.src,
        width: 1200,
        height: 630,
        alt: "Dự án eaton park gamuda land",
      },
    ],
  },
  description:
    "Lấy cảm hứng từ nhịp điệu chuyển động của những con sóng và ngôn ngữ điêu khắc, Eaton Park mang đến một biểu tượng kiến trúc sang trọng và đẳng cấp.",
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

          <EatonParkProject />
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
