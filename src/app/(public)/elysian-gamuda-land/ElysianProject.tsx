"use client";

import Image from "next/image";
import { Typography } from "@mui/material";
import elysian_reasons from "@/images/elysian/elysian_reasons.webp";
import ReturnButton from "@/components/ReturnButton";
import ElysianIntroduction from "./ElysianIntro";
import ElysianLocation from "./ElysianLocation";
import ElysianFacilities from "./ElysianFacilities";
import ElysianLayout from "./ElysianLayout";

export default function ElysianProject() {
  return (
    <>
      {/* Giới thiệu dự án */}
      <section id="introdution" className="text-justify my-5">
        <ElysianIntroduction />
      </section>

      {/* Vị trí dự án */}
      <section id="location" className="my-5">
        <ElysianLocation />
      </section>

      {/* Tiện ích dự án */}
      <section id="facilities" className="my-5">
        <ElysianFacilities />
      </section>

      {/* Layout */}
      <section id="layout" className="my-5">
        <ElysianLayout />
      </section>

      {/* Thanh toán */}
      <section id="payment" className="my-5">
        <h2 className="text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose">
          thanh toán hấp dẫn
        </h2>
        <div className="uppercase text-[#8b5a3e] text-center leading-loose">
          <Typography className="text-sm md:text-xl py-1">
            Trả trước 5% ký Hợp Đồng Mua Bán.
          </Typography>
          <Typography className="text-sm md:text-xl py-1">
            Thanh toán tiến độ đến đủ 65% nhận nhà ở ngay | khai thác cho thuê
          </Typography>
          <Typography className="text-sm md:text-xl py-1">
            35% cuối thanh toán tiến độ trong 12 tháng.
          </Typography>
        </div>
        <Image
          className="rounded-lg w-full h-auto object-cover mt-3"
          src={elysian_reasons}
          alt="Elysian by Gamuda Land"
          title="Elysian by Gamuda Land"
          priority
          loading="eager"
        />
      </section>

      <ReturnButton />
    </>
  );
}
