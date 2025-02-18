import { projects } from "@/shared/libs/data";
import { Typography } from "@mui/material";
import SideBar from "@/components/SideBar";
import EcoRetreatLongAnProject from "./EcoRetreat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eco Retreat Long An - Ecopark Group",
  keywords: [
    "Eco Retreat Long An",
    "Ecopark Group",
    "nha pho Ecopark",
    "biet thu Ecopark",
    "can ho Ecopark",
  ],
  description:
    "Nằm trên bờ sông Vàm Cỏ Đông thơ mộng, Tổ hợp dự án Eco Retreat tỏa sáng như một viên ngọc bên dòng nước xanh mát. Chỉ cách trung tâm thành phố Hồ Chí Minh 18Km, Eco Treat là nơi trú ẩn lý tưởng cho những gia chủ kiếm tìm sự bình yên nơi thiên nhiên bên cạnh sự tiện lợi và phồn vinh nơi phố thị Eco Retreat lại càng đắc địa khi thuộc về Bến Lức – một trong những khu đô thị vệ tinh lớn nhất của Tp.HCM với cơ sở hạ tầng giao thông đồng bộ, thuận tiện. Từ đây, cư dân Eco Retreat có thể dễ dàng kết nối với mọi nơi và trải nghiệm cuộc sống đa sắc màu.",
};
export default function Page() {
  const project = projects.find(
    (project) => project.projectUrl === "/eco-retreat-long-an"
  );

  return (
    <>
      {project !== null ? (
        <div className="mb-14">
          <div className="flex justify-end">
            <SideBar />
          </div>
          <EcoRetreatLongAnProject />
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
