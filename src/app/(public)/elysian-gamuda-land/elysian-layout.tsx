"use client";

import React from "react";
import Image from "next/image";
import { Box, Tabs, Tab, Typography } from "@mui/material";

import CustomCarousel from "@/components/custom-carousel";
import CustomTabPanel, { tabPanel } from "@/components/custom-tabpanel";

import elysian_1bedroom from "@/images/elysian/elysian_1bedroom.webp";
import elysian_2bedrooms from "@/images/elysian/elysian_2bedroom_2.webp";
import elysian_3bedrooms from "@/images/elysian/elysian_3bedrooms.webp";

import housing_model_01 from "@/images/elysian/housing_model_01.jpg";
import housing_model_02 from "@/images/elysian/housing_model_02.jpg";
import housing_model_03 from "@/images/elysian/housing_model_03.jpg";
import housing_model_04 from "@/images/elysian/housing_model_04.jpg";
import housing_model_05 from "@/images/elysian/housing_model_05.jpg";
import housing_model_06 from "@/images/elysian/housing_model_06.jpg";

const unit_types = [
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

const images = [
  {
    src: housing_model_01,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
  {
    src: housing_model_02,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
  {
    src: housing_model_03,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
  {
    src: housing_model_04,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
  {
    src: housing_model_05,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
  {
    src: housing_model_06,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
];

export default function ElysianLayout() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <h2 className="md:text-2xl text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose">
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
        <div className="w-full h-auto">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Elysian images"
            >
              {unit_types.map((item, index) => (
                <Tab key={index} label={item.label} {...tabPanel(index)} />
              ))}
            </Tabs>
          </Box>
          {unit_types.map((item, index) => (
            <CustomTabPanel key={index} value={value} index={index}>
              <Image
                src={item.src}
                alt={item.alt}
                title={item.title}
                className="min-w-[300px] h-auto md:min-w-[500px] object-cover"
                priority
                loading="eager"
              />
            </CustomTabPanel>
          ))}
        </div>
      </div>

      <CustomCarousel images={images} />
    </>
  );
}
