import SideBar from "@/components/SideBar";
import ElysianProject from "./ElysianProject";
import { Typography } from "@mui/material";
import { projects } from "@/app/libs/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elysian by Gamuda Land",
  keywords: ["Elysian", "Gamuda Land", "Elysian city", "can ho elysian"],
  description:
    "Về với Elysian, chúng ta tạm rời xa cuộc sống hối hả và ồn ào của đô thị để hòa mình cùng thiên nhiên đậm chất cây rợp bóng, cùng thưởng ngoạn cảnh sắc thiên nhiên yên bình, nơi ngồi thư giãn bên hồ bơi, hàn huyên cùng gia đình và bạn bè và hưởng thụ những tiện ích nội khu đa dạng và phong phú như: hồ bơi đạt tiêu chuẩn Olympic, vườn giữa tán khổng lồ, khu tập golf mini, sân thể thao chức năng, khu sân chơi trẻ em, “nông trại tại gia”, tổ hợp Shophouse, v.v...",
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
