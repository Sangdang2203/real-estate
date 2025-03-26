"use client";

import Link from "next/link";
import { IconButton, Typography } from "@mui/material";
import ZaloIcon from "@/shared/assets/icons/ZaloIcon";
import EmailIcon from "@/shared/assets/icons/EmailIcon";
import LinkedIn from "@/shared/assets/icons/LinkedIn";
import PopupComponent from "./Popup";
import { projects } from "@/app/libs/data";

export const social_media = [
  { name: "zalo", href: "https://zalo.me/0909751772", icon: <ZaloIcon /> },
  { name: "linkedin", href: "tel:0909751772", icon: <LinkedIn /> },
  {
    name: "email",
    href: "mailto:sang.dangvan0501@gmail.com",
    icon: <EmailIcon />,
  },
];
const TheFooterComponent = () => {
  return (
    <div className="p-4 h-auto w-full text-white bg-slate-900">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <Typography className="w-full mx-auto text-justify italic text-sm md:text-lg leading-loose">
          &quot; Chúng tôi chuyên cung cấp sản phẩm từ các Chủ Đầu Tư uy tín như
          Keppel Land, CapitaLand, Gamuda Land, Ecopark Group, Khang Điền, Nam
          Long,... Khách hàng hoàn toàn an tâm tìm chọn cho mình những sản phẩm
          phù hợp để đầu tư sinh lợi cũng như an cư lập nghiệp. &quot;
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="md:flex flex-col justify-start items-center">
            <div className="hidden md:flex">
              <PopupComponent />
            </div>
            <div className="flex justify-center items-center mt-4">
              {social_media.length > 0 &&
                social_media.map((item) => {
                  return (
                    <IconButton
                      key={item.name}
                      href={item.href}
                      className="m-2"
                    >
                      {item.icon}
                    </IconButton>
                  );
                })}
            </div>
          </div>

          <div className="hidden w-[75%] mx-auto lg:block">
            {projects.length > 0 &&
              projects.slice(0, 5).map((project) => {
                return (
                  <div key={project.id} className="footer">
                    <Link
                      href={project.projectUrl}
                      key={project.id}
                      className="capitalize"
                    >
                      <Typography className="text-sm md:text-lg leading-loose text-right">
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
};

export default TheFooterComponent;
