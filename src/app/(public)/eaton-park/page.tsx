"use client";

import React from "react";
import { projects } from "@/shared/libs/data";
import { Typography } from "@mui/material";
import Image from "next/image";
import eaton_park from "../../../shared/assets/images/eaton_park/landscape.jpg";
import model_housing from "../../../shared/assets/images/eaton_park/model_housing.jpg";
import banner from "../../../shared/assets/images/eaton_park/banner.jpg";
import location from "../../../shared/assets/images/eaton_park/location.png";
import master_layout from "../../../shared/assets/images/eaton_park/master_layout.jpg";
import alpin_layout from "../../../shared/assets/images/eaton_park/alpine.png";
import forest_layout from "../../../shared/assets/images/eaton_park/forest.png";
import master_landscape from "../../../shared/assets/images/eaton_park/master_landscape.jpg";
import SideBar from "@/components/Drawer";

export default function EatonPark() {
  const project = projects.find(
    (project) => project.projectUrl === "/eaton-park"
  );

  return (
    <div className="md:mx-[10%]">
      {project ? (
        <div className="mb-14">
          <div className="flex justify-end">
            <SideBar />
          </div>

          {/* Giới thiệu dự án */}
          <section id="introdution" className="text-justify">
            <Image
              src={eaton_park}
              className="w-full h-full rounded-lg"
              alt="eaton park"
            />
            <Typography className="py-2 text-[14px] md:text-[16px]">
              <strong className="text-red-700 blinking-text">
                Dự án Eaton Park
              </strong>{" "}
              là khu phức hợp căn hộ hạng sang kết hợp không gian thương mại
              dịch vụ và tiện ích giải trí đẳng cấp. Được đầu tư và phát triển
              bởi Gamuda Land – Tập đoàn bất động sản số 1 Malaysia. Lấy cảm
              hứng từ nhịp điệu chuyển động của những con sóng và ngôn ngữ điêu
              khắc của sự hình thành địa chất, Eaton Park mang đến một biểu
              tượng kiến trúc sang trọng và đẳng cấp tại cửa ngõ phía Đông thành
              phố.
            </Typography>
            <Typography className="text-[14px] md:text-[16px]">
              Eaton Park được Gamua Land định hướng phát triển nên dòng sản phẩm
              căn hộ cao cấp, tại đây sẽ được kiến tạo nên không gian sống tuyệt
              vời từ thiết kế chi tiết căn hộ đến hệ thống tiện ích vượt trội.
              Hơn cả một nơi an cư lý tưởng, tại Eaton Park quý cư dân sẽ cảm
              nhận được giá trị sống đẳng cấp, không gian xanh được đưa vào dự
              án sẽ mang lại sự thư thái cho tâm hồn. Nơi đây tràn ngập hy vọng
              và niềm tin về cuộc sống hạnh phúc yên bình, Eaton Park sẽ là nơi
              chào quý cư dân và những người thân yêu đến chốn bình yên nơi
              phong cách nghỉ dưỡng hòa quyện cùng loạt tiện ích đa dạng tại
              thành phố Thủ Đức.
            </Typography>
          </section>

          {/* Vị trí dự án */}
          <section id="location" className="my-5">
            <div className="flex-col justify-between">
              <div id="grad" className="p-4 rounded-t-lg opacity-95">
                <Typography
                  variant="h4"
                  className="text-[#dec4a7] uppercase leading-loose"
                >
                  vị trí trung tâm
                </Typography>
                <Typography className="text-white text-justify  leading-loose text-[12px] md:text-[16px]">
                  Vị trí hoàn hảo của dự án đến từ sự kết nối các trục đường
                  huyết mạch và loạt dự án hạ tầng trọng điểm như Ga metro số 1
                  Bến Thành – Suối Tiên, cao tốc TPHCM – Long Thành – Dầu Giây,
                  xa lộ Hà Nội, nút giao 3 tầng An Phú… Đặc biệt, Eaton Park còn
                  nắm giữ một địa thế độc tôn là dự án sát cạnh Trung tâm Thể
                  dục thể thao Rạch Chiếc, nơi được quy hoạch trở thành địa điểm
                  đăng cai tổ chức các giải thi đấu quốc tế của Việt Nam trong
                  tương lai.
                </Typography>
              </div>
              <Image
                src={location}
                className="w-full h-full z-0"
                alt="model housing"
              />
              <Image
                src={model_housing}
                className="w-full h-auto rounded-b-lg z-0"
                alt="model housing"
              />
              <Typography className="py-4 text-[14px] md:text-[16px]">
                Nằm ngay mặt tiền đường Mai Chí Thọ, chỉ cách trung tâm quận 1
                với 15 phút di chuyển, Eaton Park sở hữu vị thế đắc địa bậc nhất
                khu vực phường An Phú, trung tâm của quận 2 cũ, nay là TP Thủ
                Đức. Đây là nơi giao thoa giữa sự sôi động, phồn hoa của quận 1
                và nhịp sống hiện đại của khu vực mới phát triển với những tiện
                ích, cơ sở hạ tầng tiêu chuẩn quốc tế. Theo Báo cáo của Savills,
                đây là khu vực có tốc độ tăng trưởng giá trị căn hộ ở mức trên
                10% theo năm và giá thuê dẫn đầu thành phố với tỷ lệ lấp đầy đạt
                gần 100%, mang đến cơ hội đầu tư hấp dẫn cho khách hàng.
              </Typography>
            </div>
          </section>

          {/* Tiện ích dự án */}
          <section id="facilities" className="my-5">
            <Typography
              variant="h4"
              className="text-[#dec4a7] uppercase text-center leading-loose"
            >
              sống đẳng cấp
            </Typography>
            <Image
              src={banner}
              className="w-full h-auto rounded-md z-0"
              alt="eaton park banner"
            ></Image>
          </section>

          {/* Thanh toán */}
          <section id="payment">
            <Typography
              variant="h4"
              className="text-[#dec4a7] uppercase text-center leading-loose"
            >
              thanh toán hấp dẫn
            </Typography>
            <div className="blinking-text text-[#cd3545] text-center leading-loose">
              <Typography className="text-[14px] md:text-[25px]">
                Trả trước 5% ký Hợp Đồng Mua Bán.
              </Typography>
              <Typography className="text-[14px] md:text-[25px]">
                Thanh toán chỉ 0.83% mỗi tháng
              </Typography>
              <Typography className="text-[14px] md:text-[25px]">
                Ngân hàng hỗ trợ vay. Gamuda Land hỗ trợ lai vay cho khách hàng.
              </Typography>
            </div>
          </section>

          {/* Layout */}
          <section id="layout" className="my-5">
            <Typography
              variant="h4"
              className="text-[#dec4a7] uppercase text-center leading-loose"
            >
              thiết kế căn hộ
            </Typography>
            <div className="relative">
              <Image
                src={master_landscape}
                className="w-full h-auto rounded-lg z-0"
                alt="eaton park layout"
              />
              <Image
                src={master_layout}
                className="w-full h-auto rounded-b-lg"
                alt="master_layout"
              />
              <div className="absolute inset-0 flex justify-center items-center ">
                <div className="grid grid-cols-2 gap-0">
                  <Image
                    src={alpin_layout}
                    className="w-full h-[80%] z-10"
                    alt="alpine layout"
                  />
                  <Image
                    src={forest_layout}
                    className="w-full h-[80%] z-10"
                    alt="forest layout"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Typography variant="body2" className="capitalize">
            đang cập nhật ...
          </Typography>
        </div>
      )}
    </div>
  );
}
