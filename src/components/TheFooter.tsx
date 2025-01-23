"use client";

import Link from "next/link";
import { projects } from "@/shared/libs/data";
import { Typography } from "@mui/material";
import ZaloIcon from "@/shared/assets/icons/ZaloIcon";
import EmailIcon from "@/shared/assets/icons/EmailIcon";
import LinkedIn from "@/shared/assets/icons/LinkedIn";
import PopupComponent from "./Popup";

export default function TheFooterComponent() {
  const icons = [
    { id: 1, icon: <ZaloIcon /> },
    { id: 2, icon: <LinkedIn /> },
    { id: 3, icon: <EmailIcon /> },
  ];
  return (
    <div className="p-4 h-auto w-full text-white bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6">
        <Typography className="text-justify italic text-[14px] md:text-[16px] leading-loose">
          &quot; Với 10 năm kinh nghiệm trong lĩnh vực bất động sản, chúng tôi
          chuyên cung cấp sản phẩm từ các Chủ Đầu Tư uy tín như Keppel Land,
          Capitaland, GamudaLand, Eco Group, Khang Điền, Nam Long,... Khách hàng
          có thể an tâm tìm chọn cho mình những sản phẩm phù hợp để đầu tư sinh
          lợi cũng như là an cư lập nghiệp. &quot;
        </Typography>

        <div className="md:flex flex-col justify-start items-center">
          <div className="hidden md:flex">
            <PopupComponent />
          </div>
          <div className="flex justify-center items-center mt-4">
            {icons.length > 0 &&
              icons.map((item) => {
                return (
                  <div key={item.id} className="mx-2">
                    {item.icon}
                  </div>
                );
              })}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-3">
          <div>
            {projects.length > 0 &&
              projects.slice(0, 5).map((project) => {
                return (
                  <div key={project.id} className="footer">
                    <Link
                      href={project.projectUrl}
                      key={project.id}
                      className="capitalize"
                    >
                      <Typography className="text-[14px] md:text-[16px]">
                        {project.name}
                      </Typography>
                    </Link>
                  </div>
                );
              })}
          </div>
          <div>
            {projects.length > 0 &&
              projects.slice(0, 5).map((project) => {
                return (
                  <div key={project.id} className="footer">
                    <Link
                      href={project.projectUrl}
                      key={project.id}
                      className="capitalize"
                    >
                      <Typography className="text-[14px] md:text-[16px]">
                        {project.name}
                      </Typography>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Typography variant="body2">
          Copyright © 2024. All Right Reserved.
        </Typography>
      </div>
    </div>
  );
}
