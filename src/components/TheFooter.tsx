"use client";

import CallCenter from "@/shared/assets/icons/CallCenter";
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Link from "next/link";

export default function TheFooterComponent() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 h-auto w-full text-white bg-slate-900">
        <div>
          <Typography variant="caption" className="text-justify italic">
            &quot; Với 10 năm kinh nghiệm trong lĩnh vực bất động sản, chúng tôi
            chuyên cung cấp sản phẩm từ các Chủ Đầu Tư uy tín như Keppel Land,
            Capitaland, GamudaLand, Eco Group, Khang Điền, Nam Long,... Khách
            hàng có thể an tâm tìm chọn cho mình những sản phẩm phù hợp để đầu
            tư sinh lợi cũng như là an cư lập nghiệp. &quot;
          </Typography>
        </div>

        <Tooltip title="Liên hệ tư vấn">
          <IconButton
            href="tel:0909751772"
            className="my-4 flex justify-end blinking-text text-green-600 md:hidden"
          >
            <CallCenter />
          </IconButton>
        </Tooltip>

        {/* Social media */}
        <Box className="hidden lg:flex justify-center">
          <Tooltip title="Twitter">
            <Link href="/" target="_blank" className="mx-1">
              <Twitter className="text-white" />
            </Link>
          </Tooltip>
          <Tooltip title="Facebook">
            <Link
              href="https://www.facebook.com/ecocloud.vn"
              target="_blank"
              className="mx-1"
            >
              <Facebook color="primary" />
            </Link>
          </Tooltip>
          <Tooltip title="Youtube">
            <Link
              href="https://www.youtube.com/@turbosolutions506"
              target="_blank"
              className="mx-1"
            >
              <YouTube color="error" />
            </Link>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <Link href="/" target="_blank" className="mx-1">
              <LinkedIn color="info" />
            </Link>
          </Tooltip>
        </Box>

        <Box>{}</Box>
      </div>
    </>
  );
}
