"use client";

import CustomTabPanel, { tabPanel } from "@/components/CustomTabPanel";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import haus_1bedroom from "@/images/haus_dalat/haus_1bedroom.jpg";
import haus_2bedrooms_01 from "@/images/haus_dalat/haus_2bedrooms_01.jpg";
import haus_2bedrooms_02 from "@/images/haus_dalat/haus_2bedrooms_02.jpg";
import haus_2bedrooms_03 from "@/images/haus_dalat/haus_2bedrooms_03.jpg";
import haus_3bedrooms from "@/images/haus_dalat/haus_3bedrooms.jpg";
import haus_3bedrooms_conner from "@/images/haus_dalat/haus_3bedrooms_conner.jpg";
import haus_4bedrooms from "@/images/haus_dalat/haus_4bedrooms.jpg";

const images = [
  {
    src: haus_1bedroom,
    label: "1 BEDROOM",
    alt: "Haus Dalat 1 bedroom",
    title: "Haus Dalat 1 bedroom",
  },
  {
    src: haus_2bedrooms_01,
    label: "2 BEDROOMS",
    alt: "Haus Dalat 2 bedrooms",
    title: "Haus Dalat 2 bedrooms",
  },
  {
    src: haus_2bedrooms_02,
    label: "2 BEDROOMS",
    alt: "Haus Dalat 2 bedrooms",
    title: "Haus Dalat 2 bedrooms",
  },
  {
    src: haus_2bedrooms_03,
    label: "2 BEDROOMS",
    alt: "Haus Dalat 2 bedrooms",
    title: "Haus Dalat 2 bedrooms",
  },
  {
    src: haus_3bedrooms,
    label: "3 BEDROOMS",
    alt: "Haus Dalat 3 bedrooms",
    title: "Haus Dalat 3 bedrooms",
  },
  {
    src: haus_3bedrooms_conner,
    label: "3 BEDROOMS",
    alt: "Haus Dalat 3 bedrooms",
    title: "Haus Dalat 3 bedrooms",
  },
  {
    src: haus_4bedrooms,
    label: "4 BEDROOMS",
    alt: "Haus Dalat 4 bedrooms",
    title: "Haus Dalat 4 bedrooms",
  },
];

export default function HausDalatLayout() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography className="text-sm md:text-lg text-justify py-5">
        Mỗi Sky Villa, Sky Mansion tại Haus Da Lat là một độc bản thiết kế cả về
        mặt ngoài lẫn nội thất bên trong, những tòa nhà được lấy hình tượng là
        quả thông - 1 phần của cây thông biểu tượng của Đà Lạt, mỗi ban công nhà
        là một vỏ quả thông được thiết kế với hình dạng, kích thước khác nhau
        cho cảm giác &quot;tự nhiên nhất&quot;. Hầu hết các căn 3 phòng ngủ và
        tất cả 4 phòng ngủ có thang máy từ hầm đỗ xe đến tận cửa nhà, vô cùng
        riêng tư và đẳng cấp, lần đầu tiên có tại Thành phố ngàn thông.
      </Typography>
      <Box>
        <Box
          sx={{
            flex: "0 0 200px",
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            orientation="horizontal"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            aria-label="Haus Dalat images"
          >
            {images.map((image, index) => (
              <Tab key={index} label={image.label} {...tabPanel(index)} />
            ))}
          </Tabs>
        </Box>
        <Box sx={{ flex: 1 }}>
          {images.map((image, index) => (
            <CustomTabPanel key={index} value={value} index={index}>
              <Image
                src={image.src}
                alt={image.alt}
                className="w-[90%] h-auto"
              />
            </CustomTabPanel>
          ))}
        </Box>
      </Box>
    </>
  );
}
