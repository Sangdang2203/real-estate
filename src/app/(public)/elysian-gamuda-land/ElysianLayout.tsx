"use client";
import CustomTabPanel, { tabPanel } from "@/components/CustomTabPanel";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import elysian_1bedroom from "@/images/elysian/elysian_1bedroom.webp";
import elysian_2bedrooms from "@/images/elysian/elysian_2bedroom_2.webp";
import elysian_3bedrooms from "@/images/elysian/elysian_3bedrooms.webp";
import ElysianHousingModel from "./ElysianHousingModel";

const images = [
  {
    src: elysian_1bedroom,
    label: "1 BEDROOM",
    alt: "elysian 1 bedroom",
    title: "elysian 1 bedroom",
  },
  {
    src: elysian_2bedrooms,
    label: "2 BEDROOMS",
    alt: "elysian 2 bedrooms",
    title: "elysian 2 bedrooms",
  },
  {
    src: elysian_3bedrooms,
    label: "3 BEDROOMS",
    alt: "elysian 3 bedrooms",
    title: "elysian 3 bedrooms",
  },
];

export default function ElysianLayout() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full h-auto">
      <h2 className="text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose">
        thiết kế căn hộ - nhà mẫu
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="text-justify flex flex-col justify-center">
          <Typography className="text-sm md:text-lg">
            Lấy cảm hứng từ các tầng sinh học của rừng, Elysian không chỉ tập
            trung vào cây xanh ở tầng trệt và tầng thượng, dự án còn đưa thiên
            nhiên len lỏi vào ban công vào các tầng giữa, tạo nên một mặt tiền
            xanh đột phá, dưa cuộc sống hằng ngày của cư dân chạm gần hơn với
            thiên.
          </Typography>
          <ul className="text-sm md:text-lg p-5">
            <li>Số căn hộ trên mỗi tầng: 20</li>
            <li>Số thang máy: 4 thang máy & 1 thang tải</li>
            <li>Căn hộ 1 phòng ngủ: 6 căn/tầng</li>
            <li>Căn hộ 2 phòng ngủ: 11 căn/tầng </li>
            <li>Căn hộ 3 phòng ngủ: 3 căn/tầng</li>
          </ul>
          <Typography className="text-sm md:text-lg">
            Elysian cung cấp nhiều loại hình căn hộ khác nhau, từ căn hộ studio
            cho đến căn hộ 1 – 2 – 3 phòng ngủ và các căn Sky Villa có diện tích
            hơn 300m2, phù hợp với nhu cầu đa dạng của người dân.
          </Typography>
        </div>
        <ElysianLayout />
      </div>
      <ElysianHousingModel />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="Elysian images">
          {images.map((image, index) => (
            <Tab key={index} label={image.label} {...tabPanel(index)} />
          ))}
        </Tabs>
      </Box>
      {images.map((image, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <Image
            src={image.src}
            alt={image.alt}
            title={image.title}
            className="min-w-[300px] h-auto md:min-w-[500px] object-cover"
            priority
            loading="eager"
          />
        </CustomTabPanel>
      ))}
    </div>
  );
}
