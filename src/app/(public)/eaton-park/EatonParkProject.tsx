import Image from "next/image";
import model_housing from "@/images/eaton_park/model_housing.jpg";
import location from "@/images/eaton_park/location.png";
import { Typography } from "@mui/material";
import EatonParkIntroduction from "./EatonParkIntro";
import EatonParkLayout from "./EatonParkLayout";
import EatonParkPhotos from "./EatonParkPhotos";
const EatonParkProject = () => {
  return (
    <>
      {/* Giới thiệu dự án */}
      <section id="introdution">
        <EatonParkIntroduction />
      </section>

      {/* Vị trí dự án */}
      <section id="location" className="my-5">
        <div className="flex-col justify-between">
          <div id="grad" className="p-4 rounded-t-lg opacity-95">
            <Typography
              variant="h5"
              className="text-[#dec4a7] font-semibold py-2 uppercase leading-loose"
            >
              vị trí trung tâm
            </Typography>
            <Typography className="text-white text-justify  leading-loose text-[12px] md:text-lg">
              Vị trí hoàn hảo của dự án đến từ sự kết nối các trục đường huyết
              mạch và loạt dự án hạ tầng trọng điểm như Ga metro số 1 Bến Thành
              – Suối Tiên, cao tốc TPHCM – Long Thành – Dầu Giây, xa lộ Hà Nội,
              nút giao 3 tầng An Phú… Đặc biệt, Eaton Park còn nắm giữ một địa
              thế độc tôn là dự án sát cạnh Trung tâm Thể dục thể thao Rạch
              Chiếc, nơi được quy hoạch trở thành địa điểm đăng cai tổ chức các
              giải thi đấu quốc tế của Việt Nam trong tương lai.
            </Typography>
          </div>
          <Image
            src={location}
            className="w-full h-full z-0"
            alt="model housing"
            priority
          />
          <Image
            src={model_housing}
            className="w-full h-auto rounded-b-lg z-0"
            alt="model housing"
            priority
          />
          <Typography className="py-4 text-sm md:text-lg">
            Nằm ngay mặt tiền đường Mai Chí Thọ, chỉ cách trung tâm quận 1 với
            15 phút di chuyển, Eaton Park sở hữu vị thế đắc địa bậc nhất khu vực
            phường An Phú, trung tâm của quận 2 cũ, nay là TP Thủ Đức. Đây là
            nơi giao thoa giữa sự sôi động, phồn hoa của quận 1 và nhịp sống
            hiện đại của khu vực mới phát triển với những tiện ích, cơ sở hạ
            tầng tiêu chuẩn quốc tế. Theo Báo cáo của Savills, đây là khu vực có
            tốc độ tăng trưởng giá trị căn hộ ở mức trên 10% theo năm và giá
            thuê dẫn đầu thành phố với tỷ lệ lấp đầy đạt gần 100%, mang đến cơ
            hội đầu tư hấp dẫn cho khách hàng.
          </Typography>
        </div>
      </section>

      {/* Tiện ích dự án */}
      <section id="facilities" className="my-5">
        <EatonParkPhotos />
      </section>

      {/* Layout */}
      <section id="layout" className="my-5">
        <EatonParkLayout />
      </section>

      {/* Thanh toán */}
      <section id="payment">
        <Typography
          variant="h5"
          className="text-[#dec4a7] font-semibold py-2 uppercase text-center leading-loose"
        >
          thanh toán hấp dẫn
        </Typography>
        <div className="uppercase text-[#cd3545] text-center leading-loose">
          <Typography className="text-sm md:text-lg py-1">
            Trả trước 5% ký Hợp Đồng Mua Bán.
          </Typography>
          <Typography className="text-sm md:text-lg py-1">
            Thanh toán chỉ 0.83% mỗi tháng
          </Typography>
          <Typography className="text-sm md:text-lg py-1">
            Ngân hàng hỗ trợ vay. Gamuda Land hỗ trợ lãi vay cho khách hàng.
          </Typography>
        </div>
      </section>
    </>
  );
};

export default EatonParkProject;
