import Image from "next/image";
import { Typography } from "@mui/material";

import location from "@/images/eco_retreat/ecoretreat_longan_location.jpg";
import facilities from "@/images/eco_retreat/ecoretreat_longan_facilities.jpg";
import EcoRetreatIntroduction from "./EcoRetreatIntro";
import EcoRetreatLayout from "./EcoRetreatLayout";
export default function EcoRetreatProject() {
  return (
    <>
      {/* Giới thiệu dự án */}
      <section id="introdution" className="text-justify">
        <EcoRetreatIntroduction />
      </section>

      {/* Vị trí dự án */}
      <section id="location" className="my-5">
        <div className="flex-col justify-between">
          <div id="grad" className="p-4 rounded-t-lg opacity-95">
            <Typography
              variant="h5"
              className="text-[#dec4a7] py-2 uppercase leading-loose"
            >
              vị trí giao lộ hoàn kim
            </Typography>
            <Typography className="text-white text-justify  leading-loose text-sm md:text-lg">
              Nằm trên bờ sông Vàm Cỏ Đông thơ mộng, Tổ hợp dự án Eco Retreat
              tỏa sáng như một viên ngọc bên dòng nước xanh mát. Chỉ cách trung
              tâm thành phố Hồ Chí Minh 18Km, Eco Treat là nơi trú ẩn lý tưởng
              cho những gia chủ kiếm tìm sự bình yên nơi thiên nhiên bên cạnh sự
              tiện lợi và phồn vinh nơi phố thị Eco Retreat lại càng đắc địa khi
              thuộc về Bến Lức – một trong những khu đô thị vệ tinh lớn nhất của
              Tp.HCM với cơ sở hạ tầng giao thông đồng bộ, thuận tiện. Từ đây,
              cư dân Eco Retreat có thể dễ dàng kết nối với mọi nơi và trải
              nghiệm cuộc sống đa sắc màu.
            </Typography>
          </div>
          <Image
            src={location}
            className="w-full h-full z-0 rounded-b-lg"
            alt="ecoretreat long an location"
            priority
          />
        </div>
      </section>

      {/* Tiện ích dự án */}
      <section id="facilities" className="my-5">
        <Typography
          variant="h5"
          className="text-[#dec4a7] py-2 uppercase text-center leading-loose"
        >
          chuỗi tiện ích đỉnh cao
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Typography className="text-sm md:text-lg">
              Eco Retreat dưới sự quản lý và điều hành của một thương hiệu quản
              lý 5 sao quốc tế, không chỉ đơn thuần là một nơi ở. Eco Retreat
              mang đến cho quý cư dân không gian sống phong cách resort, cùng
              trải nghiệm tận hưởng sự tiện nghi và dịch vụ chất lượng bậc nhất.
              Bố trí các tiện ích hoà cùng mảng sống xanh và không khí trong
              lành, tươi mới theo triết lý 5 chữ E gồm:
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
            className="w-full h-auto rounded-md z-0"
            alt="eaton park banner"
            priority
          />
        </div>
      </section>

      {/* Layout */}
      <section id="layout" className="my-5">
        <EcoRetreatLayout />
      </section>

      {/* Thanh toán */}
      <section id="payment">
        <Typography
          variant="h5"
          className="text-[#dec4a7] py-2 uppercase text-center leading-loose"
        >
          thanh toán hấp dẫn
        </Typography>
        <div className="uppercase text-center leading-loose">
          sẽ công bố trong quý 1 năm 2025
        </div>
      </section>
    </>
  );
}
