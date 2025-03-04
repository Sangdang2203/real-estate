import Image from "next/image";
import { Typography } from "@mui/material";
import elysian_map from "@/images/elysian/elysian_map.jpg";
import elysian_location from "@/images/elysian/elysian_location.webp";

export default function ElysianLocation() {
  return (
    <>
      <div className="flex-col justify-between">
        <div id="grad" className="p-4 rounded-t-lg opacity-95">
          <h2 className="md:text-2xl text-[#8b5a3e] font-semibold text-center py-2 uppercase leading-loose">
            VỊ TRÍ TRUNG TÂM THÀNH PHỐ THỦ ĐỨC
          </h2>
          <Typography className="text-white text-justify leading-loose text-sm md:text-lg">
            Tọa lạc trên Mặt tiền 170 Đường Lò Lu, phường Trường Thạnh, TP. Thủ
            Đức (trước đây là Quận 9), TP.HCM, cách trung tâm TP.HCM khoảng 30
            phút di chuyển. Khu vực xung quanh dự án có mật độ cư dân đông đúc
            và nhiều tiện ích như: chợ, trường học. Elysian còn nằm sát bên Khu
            Công Nghệ Cao và Vinhomes Grand Park, cạnh rạch Trau Trảu, mang đến
            cho cư dân không gian sống trong lành và thoáng mát.
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
              trung tâm thành phố qua huyết mạch Xa lộ Hà Nội, tuyến Metro số 1.
              Liền kề với đường Vành đai 3 và tuyến cao tốc Long Thành – Dầu
              Giây giúp việc di chuyển đến các tỉnh lân cận trở nên thuận tiện
              và nhanh chóng. Các hướng kết nối từ dự án:
            </Typography>
            <ul className="text-sm md:text-lg p-5">
              <li>Đường vành đai 3: 1km</li>
              <li>Khu công nghệ cao quận 9: 3km</li>
              <li>Trung tâm Quận 2: 10km </li>
              <li>Trung tâm Quận 1: 15km</li>
              <li>Sân bay Tân Sơn Nhất: 18km</li>
            </ul>
            <Typography className="text-sm md:text-lg text-justify">
              Trong bán kính 5 km từ tâm là dự án, cư dân của Elysian có thể dễ
              dàng tiếp cận những tiện ích giáo dục, y tế, thương mại, dịch vụ
              giải trí... hiện đại, quy mô đầu hoàn thiện ở khu vực này. Động
              thuận tiện và nhanh chóng di chuyển về trung tâm thành phố hoặc
              các tỉnh lân cận nhờ sự giao nhau của các mạng giao thông liên
              vùng.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
