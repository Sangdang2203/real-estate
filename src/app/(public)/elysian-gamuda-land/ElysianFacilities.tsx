import { Typography } from "@mui/material";
import CustomCarousel from "@/components/CustomCarousel";

import elysian_garden from "@/images/elysian/elysian_garden.jpg";
import elysian_facilities from "@/images/elysian/elysian_facilities.jpg";
import elysian_facilities_01 from "@/images/elysian/elysian_facilities_01.jpg";
import elysian_facilities_02 from "@/images/elysian/elysian_facilities_02.jpg";
import elysian_facilities_03 from "@/images/elysian/elysian_facilities_03.webp";
import elysian_facilities_04 from "@/images/elysian/elysian_facilities_04.jpg";
import elysian_facilities_05 from "@/images/elysian/elysian_facilities_05.webp";
import elysian_facilities_06 from "@/images/elysian/elysian_facilities_06.webp";
import elysian_facilities_07 from "@/images/elysian/elysian_facilities_07.jpg";
import elysian_facilities_08 from "@/images/elysian/elysian_facilities_08.jpg";

const images = [
  {
    src: elysian_facilities,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_01,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_02,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_garden,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_03,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_04,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_05,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_06,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_07,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_08,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
];

export default function ElysianFacilities() {
  return (
    <>
      <h2 className="md:text-2xl text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose">
        sống trọn cảm hứng
      </h2>
      <Typography className="text-sm md:text-lg text-justify">
        Về với Elysian, chúng ta tạm rời xa cuộc sống hối hả và ồn ào của đô thị
        để hòa mình cùng thiên nhiên đậm chất cây rợp bóng, cùng thưởng ngoạn
        cảnh sắc thiên nhiên yên bình, nơi ngồi thư giãn bên hồ bơi, hàn huyên
        cùng gia đình và bạn bè và hưởng thụ những tiện ích nội khu đa dạng và
        phong phú như: hồ bơi đạt tiêu chuẩn Olympic, vườn giữa tán khổng lồ,
        khu tập golf mini, sân thể thao chức năng, khu sân chơi trẻ em, “nông
        trại tại gia”, tổ hợp Shophouse, v.v...
      </Typography>
      <div className="my-5">
        <CustomCarousel images={images} />
      </div>
    </>
  );
}
