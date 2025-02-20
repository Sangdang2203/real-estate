import { Typography } from "@mui/material";

import eaton_location from "@/images/eaton_park/eaton_location.jpg";
import Image from "next/image";

export default function EatonParkIntroduction() {
  return (
    <div className="text-justify">
      <Typography className="text-sm md:text-lg">
        <strong className="text-red-700 blinking-text">Dự án Eaton Park</strong>{" "}
        là khu phức hợp căn hộ hạng sang kết hợp không gian thương mại dịch vụ
        và tiện ích giải trí đẳng cấp. Được đầu tư và phát triển bởi Gamuda Land
        – Tập đoàn bất động sản số 1 Malaysia. Lấy cảm hứng từ nhịp điệu chuyển
        động của những con sóng và ngôn ngữ điêu khắc của sự hình thành địa
        chất, Eaton Park mang đến một biểu tượng kiến trúc sang trọng và đẳng
        cấp tại cửa ngõ phía Đông thành phố.
      </Typography>
      <Image
        src={eaton_location}
        className="w-full h-auto rounded-lg my-2"
        alt="Vị trí dự án Eaton Park"
        title="Vị trí dự án Eaton Park"
        priority
      />
      <Typography className="text-sm md:text-lg">
        Eaton Park được Gamua Land định hướng phát triển nên dòng sản phẩm căn
        hộ cao cấp, tại đây sẽ được kiến tạo nên không gian sống tuyệt vời từ
        thiết kế chi tiết căn hộ đến hệ thống tiện ích vượt trội. Hơn cả một nơi
        an cư lý tưởng, tại Eaton Park quý cư dân sẽ cảm nhận được giá trị sống
        đẳng cấp, không gian xanh được đưa vào dự án sẽ mang lại sự thư thái cho
        tâm hồn. Nơi đây tràn ngập hy vọng và niềm tin về cuộc sống hạnh phúc
        yên bình, Eaton Park sẽ là nơi chào quý cư dân và những người thân yêu
        đến chốn bình yên nơi phong cách nghỉ dưỡng hòa quyện cùng loạt tiện ích
        đa dạng tại thành phố Thủ Đức.
      </Typography>
    </div>
  );
}
