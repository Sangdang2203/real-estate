"use client";

import { projects } from "@/shared/libs/data";
import { Typography } from "@mui/material";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function TheFooterComponent() {
  return (
    <div className="p-4 h-auto w-full text-white bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
        <Typography className="text-justify italic text-[14px] md:text-[16px] leading-loose">
          &quot; Với 10 năm kinh nghiệm trong lĩnh vực bất động sản, chúng tôi
          chuyên cung cấp sản phẩm từ các Chủ Đầu Tư uy tín như Keppel Land,
          Capitaland, GamudaLand, Eco Group, Khang Điền, Nam Long,... Khách hàng
          có thể an tâm tìm chọn cho mình những sản phẩm phù hợp để đầu tư sinh
          lợi cũng như là an cư lập nghiệp. &quot;
        </Typography>

        <div className="hidden lg:block">
          <ContactForm />
        </div>

        <div className="hidden lg:block">
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
      <div className="flex justify-center mt-4">
        <Typography variant="body2">
          Copyright © 2024. All Right Reserved.
        </Typography>
      </div>
    </div>
  );
}
