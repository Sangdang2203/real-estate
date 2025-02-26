import CustomCarousel from "@/components/CustomCarousel";
import banner from "@/images/eaton_park/banner.jpg";
import { Typography } from "@mui/material";
import Image from "next/image";

import eaton_facilities_01 from "@/images/eaton_park/eaton_facilities_01.jpg";
import eaton_facilities_02 from "@/images/eaton_park/eaton_facilities_02.jpg";
import eaton_facilities_03 from "@/images/eaton_park/eaton_facilities_03.jpg";
import eaton_facilities_04 from "@/images/eaton_park/eaton_facilities_04.jpg";
import eaton_facilities_05 from "@/images/eaton_park/eaton_facilities_05.jpg";
import eaton_facilities_06 from "@/images/eaton_park/eaton_facilities_06.jpg";
import eaton_facilities_07 from "@/images/eaton_park/eaton_facilities_07.jpg";
import eaton_facilities_08 from "@/images/eaton_park/eaton_facilities_08.jpg";
import eaton_facilities_09 from "@/images/eaton_park/eaton_facilities_09.jpg";
import eaton_facilities_10 from "@/images/eaton_park/eaton_facilities_10.jpg";

const images = [
  {
    src: eaton_facilities_01,
    alt: "Tiện ích dự án Eaton Park",
    title: "Tiện ích dự án Eaton Park",
  },
  {
    src: eaton_facilities_02,
    alt: "Tiện ích dự án Eaton Park",
    title: "Tiện ích dự án Eaton Park",
  },
  {
    src: eaton_facilities_03,
    alt: "Tiện ích dự án Eaton Park",
    title: "Tiện ích dự án Eaton Park",
  },
  {
    src: eaton_facilities_04,
    alt: "Tiện ích dự án Eaton Park",
    title: "Tiện ích dự án Eaton Park",
  },
  {
    src: eaton_facilities_05,
    alt: "Tiện ích dự án Eaton Park",
    title: "Tiện ích dự án Eaton Park",
  },
  {
    src: eaton_facilities_06,
    alt: "Tiện ích dự án Eaton Park",
    title: "Tiện ích dự án Eaton Park",
  },
  {
    src: eaton_facilities_07,
    alt: "Tiện ích dự án Eaton Park",
    title: "Tiện ích dự án Eaton Park",
  },
  {
    src: eaton_facilities_08,
    alt: "Tiện ích dự án Eaton Park",
    title: "Tiện ích dự án Eaton Park",
  },
  {
    src: eaton_facilities_09,
    alt: "Tiện ích dự án Eaton Park",
    title: "Tiện ích dự án Eaton Park",
  },
  {
    src: eaton_facilities_10,
    alt: "Tiện ích dự án Eaton Park",
    title: "Tiện ích dự án Eaton Park",
  },
];

export default function EatonParkPhotos() {
  return (
    <div className="text-justify">
      <Typography
        variant="h5"
        className="text-[#8b5a3e] font-semibold uppercase text-center"
      >
        sống đẳng cấp
      </Typography>
      <Image
        src={banner}
        className="w-full h-auto rounded-md z-0 my-2"
        alt="eaton park banner"
        priority
      />
      <Typography className="text-sm md:text-lg py-1">
        <strong className="text-red-700">Eaton Park</strong> không chỉ nổi bật
        bởi vị trí vàng mà còn thu hút cư dân bởi hệ thống tiện ích nội khu đa
        dạng, đẳng cấp và phong phú, đáp ứng mọi nhu cầu sinh hoạt, vui chơi
        giải trí của cư dân thuộc mọi lứa tuổi. Hơn 100 tiện ích tại Eaton Park
        được thiết kế theo tiêu chuẩn quốc tế, mang đến cho cư dân trải nghiệm
        sống thượng lưu, tiện nghi và trọn vẹn. Hệ thống tiện ích tại Eaton Park
        đều được chủ đầu tư Gamuda Land thực hiện với mục đích đem đến những
        trải nghiệm sống hoàn hảo, không gian sống tinh tế, an toàn và sự riêng
        tư được đặt lên hàng đầu nhưng vẫn hòa quyện cùng với hơi thở của thiên
        nhiên trong lành.
      </Typography>

      <div className="my-2">
        <CustomCarousel images={images} />
      </div>

      <Typography className="text-sm md:text-lg py-1">
        Sau những ngày dài với những áp lực vô hình, không gian sống tại Eaton
        Park được ví như một liều thuốc bổ tinh thần, giúp tái tạo nguồn năng
        lượng tích cực và cân bằng cuộc sống hiện hữu. Hàng loạt hệ thống tiện
        ích đã được đưa vào dự án với mong muốn kết nối giữa thiên nhiên với con
        người nơi đây. Quanh khu vực dự án là các được dạo bộ ven bờ sông dưới
        những tán cây xanh mát bên cạnh đó, còn có hệ thống vườn nhiệt đới, cùng
        thảm thực vật thơ mộng giúp thanh lọc không khí đem đến một không gian
        vô cùng tươi mới.
      </Typography>
      <Typography className="text-sm md:text-lg py-1">
        Bên cạnh đó, rất nhiều không gian được dành cho con trẻ như khu vui chơi
        cát, sân bóng rổ, khu vui chơi liên hoàn hay khu leo núi. Tất cả nhằm
        mục đích đem đến sự phát triển toàn diện nhất cho trẻ Eaton Park. Tổ hợp
        hồ bơi tràn bờ nhìn ra dòng sông thơ mộng, với chiều dài đạt chuẩn
        Olympic, cùng với đó là các bồn sục, sàn tắm nắng, giường thư giãn được
        đặt quanh khu vực hồ bơi. Với mỗi phân khu sẽ được thiết kế tổ hợp hồ
        bơi riêng biệt, góp phần làm thỏa mãn niềm đam mê bơi lội, cũng như nâng
        cao các giá trị sức khỏe dành cho cộng đồng cư dân tinh hoa.
      </Typography>
    </div>
  );
}
