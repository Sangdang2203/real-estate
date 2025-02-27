import React from "react";
import { Typography } from "@mui/material";

import HausDalatLayout from "./HausDalatLayout";
import HausDalatIntroduction from "./HausDalatIntro";

export default function HausDalatProject() {
  return (
    <>
      {/* Giới thiệu dự án */}
      <section id="introdution">
        <HausDalatIntroduction />
      </section>

      {/* Vị trí dự án */}
      <section id="location" className="my-5">
        <div className="flex-col justify-between">
          <div id="grad" className="p-4 rounded-lg opacity-95">
            <Typography className="text-white text-justify  leading-loose text-sm md:text-lg">
              Haus Da Lat tọa lạc trong khu vực trung tâm thành phố Đà Lạt, nổi
              tiếng với khí hậu mát mẻ, phong cảnh thiên nhiên tươi đẹp và nhiều
              điểm tham quan du lịch. Dự án nằm gần các tuyến đường chính, thuận
              tiện cho việc di chuyển đến các khu vực khác trong thành phố cũng
              như các tỉnh lân cận. Đà Lạt được biết đến với những cánh rừng
              thông xanh mướt, hồ nước trong lành và các khu vườn hoa rực rỡ. Vị
              trí của Haus Da Lat cho phép cư dân tận hưởng không khí trong lành
              và cảnh quan thiên nhiên tuyệt đẹp. Haus Da Lat gần các điểm du
              lịch nổi tiếng như Hồ Xuân Hương, Vườn hoa Đà Lạt, và các khu du
              lịch sinh thái khác, tạo điều kiện thuận lợi cho việc khám phá vẻ
              đẹp của thành phố.
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.3152631431976!2d108.43888497482341!3d11.942970288285727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31711300432aab6b%3A0x7fc54e95820384e2!2zSEFVUyDEkGHMgCBMYcyjdA!5e1!3m2!1svi!2s!4v1737560482900!5m2!1svi!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="my-2 rounded-lg w-full min-h-[200px] md:min-h-[550px]"
            ></iframe>
            <Typography className="text-white text-justify  leading-loose text-sm md:text-lg">
              Haus Da Lat không chỉ là một dự án bất động sản, mà còn là một nơi
              lý tưởng để sinh sống và tận hưởng cuộc sống. Vị trí đắc địa cùng
              với môi trường thiên nhiên tuyệt đẹp và các tiện ích xung quanh
              khiến Haus Da Lat trở thành một lựa chọn hấp dẫn cho những ai muốn
              tìm kiếm một không gian sống yên bình và đẳng cấp tại Đà Lạt.
            </Typography>
          </div>
        </div>
      </section>

      {/* Tiện ích dự án */}
      <section id="facilities" className="my-5">
        <video
          controls
          width="100%"
          height="auto"
          autoPlay
          className="rounded-lg object-cover"
          title="Video về dự án Haus Dalat"
          muted
        >
          <source src="/videos/haus_dalat.mp4" type="video/mp4" />
          Video về dự án Haus Dalat
        </video>
      </section>

      {/* Layout */}
      <section id="layout" className="my-5">
        <HausDalatLayout />
      </section>

      {/* Thanh toán */}
      <section id="payment">
        <Typography
          variant="h5"
          className="text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose"
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
