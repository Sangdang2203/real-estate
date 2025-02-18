import { projects } from "@/shared/libs/data";
import { Typography } from "@mui/material";
import SideBar from "@/components/SideBar";
import EatonParkProject from "./EatonPark";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eaton Park by Gamuda Land",
  keywords: ["Eaton Park", "Gamuda Land", "can ho eaton park"],
  description:
    "Eaton Park được Gamua Land định hướng phát triển nên dòng sản phẩm căn hộ cao cấp, tại đây sẽ được kiến tạo nên không gian sống tuyệt vời từ thiết kế chi tiết căn hộ đến hệ thống tiện ích vượt trội. Hơn cả một nơi an cư lý tưởng, tại Eaton Park quý cư dân sẽ cảm nhận được giá trị sống đẳng cấp, không gian xanh được đưa vào dự án sẽ mang lại sự thư thái cho tâm hồn. ",
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
