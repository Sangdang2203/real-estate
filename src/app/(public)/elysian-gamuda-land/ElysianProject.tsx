"use client";

import Image from "next/image";
import { Typography } from "@mui/material";
import elysian_map from "@/images/elysian/elysian_map.jpg";
import elysian_location from "@/images/elysian/elysian_location.webp";
import elysian_landscape from "@/images/elysian/elysian_landscape.jpg";
import elysian_reasons from "@/images/elysian/elysian_reasons.webp";
import elysian_banner from "@/images/elysian/elysian_banner.jpg";

import ElysianLayout from "./ElysianLayout";
import ElysianPhotos from "./ElysianPhotos";
import ElysianHousingModel from "./ElysianHousingModel";

export default function ElysianProject() {
  return (
    <>
      {/* Giới thiệu dự án */}
      <section id="introdution" className="text-justify">
        <Typography className="py-2 text-sm md:text-lg">
          <strong className="text-green-700 ">Dự án Elysian</strong> là một một
          bộ sưu tập các ngôi nhà tinh tế nằm giữa khu rừng đô thị sinh thái,
          mang đến cuộc sống xanh bền vững, với thiết kế Biophilic đầy cảm hứng
          tạo nên một cộng đồng thịnh vượng. Dự án tọa lạc tại đường Lò Lu,
          phường Trường Thạnh,Thành Phố Thủ Đức, được Chủ đầu tư Gamuda Land
          phát triển có quy mô 4 block cung ứng 1396 căn hộ chuẩn xanh.
        </Typography>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              className="rounded-lg w-full h-auto"
              src={elysian_banner}
              alt="căn hộ elysian by Gamuda Land"
              priority
              loading="eager"
            />
            <div className="h-auto">
              <Typography className="text-sm md:text-lg">
                <strong className="text-green-700 ">Elysian</strong> là một một
                bộ sưu tập các ngôi nhà tinh tế nằm giữa khu rừng đô thị sinh
                thái, mang đến cuộc sống xanh bền vững với thiết kế Biophilic
                đầy cảm hứng tạo nên một cộng đồng thịnh vượng. Không gian sống
                tại Elysian là nơi ưu tiên tính kết nối, có thể cân bằng được sự
                tiện nghi hiện đại và vẫn trong lành yên ả, nơi chăm chút từng
                trải nghiệm sống, nâng niu thỏa mãn mọi giác quan.
              </Typography>
              <div className="grid grid-cols-2 gap-6 my-5">
                <div>
                  <Typography className="text-sm md:text-lg">
                    Chủ đầu tư:
                  </Typography>
                  <Typography className="text-sm md:text-lg">
                    Vị trí:
                  </Typography>
                  <Typography className="text-sm md:text-lg">Quy mô</Typography>

                  <Typography className="text-sm md:text-lg">
                    Loại hình sản phẩm:
                  </Typography>
                  <Typography className="text-sm md:text-lg">
                    Cơ cấu diện tích:
                  </Typography>

                  <Typography className="text-sm md:text-lg">
                    Pháp lý:
                  </Typography>
                  <Typography className="text-sm md:text-lg">
                    Hiện trạng:
                  </Typography>
                </div>
                <div>
                  <Typography className="text-sm md:text-lg">
                    Gamuda Land
                  </Typography>
                  <Typography className="text-sm md:text-lg">
                    TP. Thủ Đức, HCM
                  </Typography>
                  <Typography className="text-sm md:text-lg">
                    <strong>28,412 m2</strong>
                  </Typography>
                  <Typography className="text-sm md:text-lg">Căn hộ</Typography>{" "}
                  <Typography className="text-sm md:text-lg">
                    <strong>36 - 115 m2</strong>
                  </Typography>
                  <Typography className="text-sm md:text-lg">
                    Sở hữu lâu dài
                  </Typography>
                  <Typography className="text-sm md:text-lg">
                    Đã xây tới tầng 4
                  </Typography>
                </div>
              </div>

              <Typography className="text-sm md:text-lg">
                Chủ đầu tư Gamuda Land cam kết xây dựng Elysian với thiết kế đặc
                trưng độc đáo, tập trung chính vào bảo vệ toàn diện không gian
                sống hòa quyện với thiên nhiên và đa dạng sinh học. Công ty sẽ
                không ngừng cải tiến sản phẩm để nâng cao chất lượng các dự án
                thiết kế xanh cho các dự án ra mắt sắp tới. Trong tương lai gần,
                khách hàng sẽ thấy nhiều dự án mang phong cách Biophilic của
                Gamuda Land, với sự quy hoạch tổng thể để tạo ra nhiều “rừng
                trong phố” hơn và trồng cây nhiều hơn.
              </Typography>
              <Image
                className="rounded-lg w-full h-auto mt-3"
                src={elysian_landscape}
                alt="Elysian by Gamuda Land"
                title="Elysian by Gamuda Land"
                priority
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vị trí dự án */}
      <section id="location" className="my-5">
        <div className="flex-col justify-between">
          <div id="grad" className="p-4 rounded-t-lg opacity-95">
            <Typography
              variant="h5"
              className="text-[#8b5a3e] font-semibold text-center py-2 uppercase leading-loose"
            >
              VỊ TRÍ TRUNG TÂM THÀNH PHỐ THỦ ĐỨC
            </Typography>
            <Typography className="text-white text-justify leading-loose text-sm md:text-lg">
              Tọa lạc trên Mặt tiền 170 Đường Lò Lu, phường Trường Thạnh, TP.
              Thủ Đức (trước đây là Quận 9), TP.HCM, cách trung tâm TP.HCM
              khoảng 30 phút di chuyển. Khu vực xung quanh dự án có mật độ cư
              dân đông đúc và nhiều tiện ích như: chợ, trường học. Elysian còn
              nằm sát bên Khu Công Nghệ Cao và Vinhomes Grand Park, cạnh rạch
              Trau Trảu, mang đến cho cư dân không gian sống trong lành và
              thoáng mát.
            </Typography>
          </div>
          <Image
            src={elysian_location}
            className="w-full h-auto rounded-b-lg z-0"
            alt="Elysian Location"
            title="Elysian Location"
            priority
            loading="eager"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <Image
              src={elysian_map}
              className="w-full h-full z-0 rounded-lg"
              alt="model housing"
              priority
              loading="eager"
            />
            <div>
              <Typography className="text-sm md:text-lg text-justify">
                Vị trí chiến lược với kết nối tuyệt vời, dễ dàng di chuyển đến
                trung tâm thành phố qua huyết mạch Xa lộ Hà Nội, tuyến Metro số
                1. Liền kề với đường Vành đai 3 và tuyến cao tốc Long Thành –
                Dầu Giây giúp việc di chuyển đến các tỉnh lân cận trở nên thuận
                tiện và nhanh chóng. Các hướng kết nối từ dự án:
              </Typography>
              <ul className="text-sm md:text-lg p-5">
                <li>Đường vành đai 3: 1km</li>
                <li>Khu công nghệ cao quận 9: 3km</li>
                <li>Trung tâm Quận 2: 10km </li>
                <li>Trung tâm Quận 1: 15km</li>
                <li>Sân bay Tân Sơn Nhất: 18km</li>
              </ul>
              <Typography className="text-sm md:text-lg text-justify">
                Trong bán kính 5 km từ tâm là dự án, cư dân của Elysian có thể
                dễ dàng tiếp cận những tiện ích giáo dục, y tế, thương mại, dịch
                vụ giải trí... hiện đại, quy mô đầu hoàn thiện ở khu vực này.
                Động thuận tiện và nhanh chóng di chuyển về trung tâm thành phố
                hoặc các tỉnh lân cận nhờ sự giao nhau của các mạng giao thông
                liên vùng.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Tiện ích dự án */}
      <section id="facilities" className="my-5">
        <Typography
          variant="h5"
          className="text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose"
        >
          sống trọn cảm hứng
        </Typography>
        <Typography className="text-sm md:text-lg text-justify">
          Về với Elysian, chúng ta tạm rời xa cuộc sống hối hả và ồn ào của đô
          thị để hòa mình cùng thiên nhiên đậm chất cây rợp bóng, cùng thưởng
          ngoạn cảnh sắc thiên nhiên yên bình, nơi ngồi thư giãn bên hồ bơi, hàn
          huyên cùng gia đình và bạn bè và hưởng thụ những tiện ích nội khu đa
          dạng và phong phú như: hồ bơi đạt tiêu chuẩn Olympic, vườn giữa tán
          khổng lồ, khu tập golf mini, sân thể thao chức năng, khu sân chơi trẻ
          em, “nông trại tại gia”, tổ hợp Shophouse, v.v...
        </Typography>
        <div className="my-5">
          <ElysianPhotos />
        </div>
      </section>

      {/* Layout */}
      <section id="layout" className="my-5">
        <Typography
          variant="h5"
          className="text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose"
        >
          thiết kế căn hộ - nhà mẫu
        </Typography>
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
              Elysian cung cấp nhiều loại hình căn hộ khác nhau, từ căn hộ
              studio cho đến căn hộ 1 – 2 – 3 phòng ngủ và các căn Sky Villa có
              diện tích hơn 300m2, phù hợp với nhu cầu đa dạng của người dân.
            </Typography>
          </div>
          <ElysianLayout />
        </div>
        <ElysianHousingModel />
      </section>

      {/* Thanh toán */}
      <section id="payment">
        <Typography
          variant="h5"
          className="text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose"
        >
          thanh toán hấp dẫn
        </Typography>
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
          className="rounded-lg w-full h-auto mt-3"
          src={elysian_reasons}
          alt="Elysian by Gamuda Land"
          title="Elysian by Gamuda Land"
          priority
          loading="eager"
        />
      </section>
    </>
  );
}
