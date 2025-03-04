import facilities from "@/images/eco_retreat/ecoretreat_longan_facilities.jpg";
import { Typography } from "@mui/material";
import Image from "next/image";
import EcoRetreatPhotos from "./EcoRetreatPhotos";

export default function EcoRetreatFacilities() {
  return (
    <>
      <h2 className="text-[#8b5a3e] font-semibold uppercase text-center leading-loose md:text-2xl">
        chuỗi tiện ích đỉnh cao
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Typography className="text-sm md:text-lg">
            Eco Retreat dưới sự quản lý và điều hành của một thương hiệu quản lý
            5 sao quốc tế, không chỉ đơn thuần là một nơi ở. Eco Retreat mang
            đến cho quý cư dân không gian sống phong cách resort, cùng trải
            nghiệm tận hưởng sự tiện nghi và dịch vụ chất lượng bậc nhất. Bố trí
            các tiện ích hoà cùng mảng sống xanh và không khí trong lành, tươi
            mới theo triết lý 5 chữ E gồm:
          </Typography>
          <ul className="px-10 text-[15px] md:text-lg py-2">
            <li>Eco (Sinh thái)</li>
            <li>Emotion (Cảm xúc) </li>
            <li>Edu-entertainment (Giải trí – Giáo dục) </li>
            <li>Economic (Kinh tế) </li>
            <li>Elite (Tinh hoa, đẳng cấp)</li>
          </ul>
        </div>

        <Image
          src={facilities}
          className="w-full h-auto object-cover rounded-md z-0"
          alt="eaton park banner"
          priority
          loading="eager"
        />
      </div>
      <div className="my-5">
        <EcoRetreatPhotos />
      </div>
    </>
  );
}
