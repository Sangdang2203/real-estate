import model_housing from "@/images/eaton_park/model_housing.jpg";
import location from "@/images/eaton_park/location.png";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function EatonParkLocation() {
  return (
    <>
      <div className="flex-col justify-between">
        <div id="grad" className="p-4 rounded-t-lg opacity-95">
          <h2 className="text-[#8b5a3e] font-semibold py-2 uppercase leading-loose md:text-2xl">
            vị trí trung tâm
          </h2>
          <Typography className="text-white text-justify  leading-loose text-[12px] md:text-lg">
            Vị trí hoàn hảo của dự án đến từ sự kết nối các trục đường huyết
            mạch và loạt dự án hạ tầng trọng điểm như Ga metro số 1 Bến Thành –
            Suối Tiên, cao tốc TPHCM – Long Thành – Dầu Giây, xa lộ Hà Nội, nút
            giao 3 tầng An Phú… Đặc biệt, Eaton Park còn nắm giữ một địa thế độc
            tôn là dự án sát cạnh Trung tâm Thể dục thể thao Rạch Chiếc, nơi
            được quy hoạch trở thành địa điểm đăng cai tổ chức các giải thi đấu
            quốc tế của Việt Nam trong tương lai.
          </Typography>
        </div>
        <Image
          src={location}
          className="w-full h-full z-0 object-cover"
          alt="model housing"
          priority
          loading="eager"
        />
        <Image
          src={model_housing}
          className="w-full h-auto rounded-b-lg z-0 object-cover"
          alt="model housing"
          priority
          loading="eager"
        />
        <Typography className="py-4 text-sm md:text-lg">
          Nằm ngay mặt tiền đường Mai Chí Thọ, chỉ cách trung tâm quận 1 với 15
          phút di chuyển, Eaton Park sở hữu vị thế đắc địa bậc nhất khu vực
          phường An Phú, trung tâm của quận 2 cũ, nay là TP Thủ Đức. Đây là nơi
          giao thoa giữa sự sôi động, phồn hoa của quận 1 và nhịp sống hiện đại
          của khu vực mới phát triển với những tiện ích, cơ sở hạ tầng tiêu
          chuẩn quốc tế. Theo Báo cáo của Savills, đây là khu vực có tốc độ tăng
          trưởng giá trị căn hộ ở mức trên 10% theo năm và giá thuê dẫn đầu
          thành phố với tỷ lệ lấp đầy đạt gần 100%, mang đến cơ hội đầu tư hấp
          dẫn cho khách hàng.
        </Typography>
      </div>
    </>
  );
}
