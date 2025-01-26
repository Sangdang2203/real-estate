import Image from "next/image";
import ecopark from "../../../shared/assets/images/eco_retreat/Ecopark.jpg";
import ecoretreat_longan from "../../../shared/assets/images/eco_retreat/Ecoretreat_Longan_Landscape.jpg";
import location from "../../../shared/assets/images/eco_retreat/ecoretreat_longan_location.jpg";
import facilities from "../../../shared/assets/images/eco_retreat/ecoretreat_longan_facilities.jpg";
import { Typography } from "@mui/material";
const EcoRetreatLongAnProject = () => {
  return (
    <>
      {/* Giới thiệu dự án */}
      <section id="introdution" className="text-justify">
        <Typography className="text-[13px] md:text-[16px]">
          <strong className="text-green-700">Ecopark</strong> là một tập đoàn đa
          ngành, tập trung vào việc phát triển bền vững và đa dạng hóa đầu tư
          trong các lĩnh vực như giáo dục, y tế, nông nghiệp sạch, công nghệ
          cao, du lịch và vui chơi giải trí. Đồng thời Ecopark cũng giữ vững vị
          thế chủ chốt là một tập đoàn đầu tư và phát triển đô thị chuyên
          nghiệp, theo xu hướng Bất động sản Xanh, mở rộng và phát triển mô hình
          đô thị Ecopark trên khắp cả nước.
        </Typography>
        <div className="my-5 w-full h-auto">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/f6BpEkVE_1M?start=10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Ecopark Developer Documentation"
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 my-5">
          <Typography className="text-[13px] md:text-[16px]">
            Năm 2003, một nhóm nhà đầu tư, bằng tâm huyết và kinh nghiệm thành
            công trên nhiều lĩnh vực kinh doanh đã quyết định thành lập Công ty
            CP đầu tư và phát triển đô thị Việt Hưng (Vihajico). Sự ra đời của
            công ty gắn liền với sứ mệnh xây dựng một khu đô thị sinh thái chức
            năng đầu tiên ở Việt Nam theo xu hướng phát triển đô thị hiện đại
            của các quốc gia trên thế giới: khu đô thị Ecopark. Qua hơn hai thập
            kỷ phát triển và hoàn thiện, Ecopark đã trở thành một thành phố chức
            năng kiểu mẫu, tiên phong xác lập xu hướng Bất động sản Xanh với giá
            cả hợp lý, được quốc tế tôn vinh với nhiều giải thưởng danh giá. Ban
            lãnh đạo công ty đã quyết định thay đổi tên thành Công ty CP Tập
            đoàn Ecopark, hướng tới mục tiêu phát triển bền vững, đầu tư đa
            ngành vào các lĩnh vực như giáo dục, y tế, nông nghiệp sạch, công
            nghệ cao, du lịch, vui chơi giải trí…; đồng thời vẫn giữ vững vị thế
            chủ chốt là Tập đoàn đầu tư và phát triển đô thị chuyên nghiệp theo
            xu hướng Bất động sản Xanh, mở rộng phát triển mô hình đô thị
            Ecopark trên địa bàn cả nước.
          </Typography>

          <Image
            className="rounded-lg w-full"
            src={ecopark}
            alt="ecopark"
            priority
          />
        </div>

        <div>
          <Typography className="text-[13px] md:text-[16px]">
            <strong>
              Eco Retreat, nơi tâm hồn gia chủ tìm lại sự an nhiên giữa không
              gian thiên nhiên xanh mát, cùng hương vị khoáng nóng đẳng cấp
            </strong>
            . Dự án không chỉ mở ra cánh cửa hưởng thụ cuộc sống thượng lưu, mà
            còn là bức tranh tươi mới về một Long An đáng sống và đẳng cấp.
          </Typography>
          <div className="grid grid-cols-2 my-5 text-left">
            <div>
              <Typography variant="body2">Nhà sáng lập:</Typography>
              <Typography variant="body2">Vị trí:</Typography>
              <Typography variant="body2">Quy mô</Typography>
              <Typography variant="body2">Mật độ xây dựng:</Typography>
              <Typography variant="body2">Mật độ cây xanh:</Typography>
              <Typography variant="body2">Loại hình sản phẩm:</Typography>
              <Typography variant="body2">Pháp lý:</Typography>
              <Typography variant="body2">Thời gian triển khai:</Typography>
            </div>
            <div>
              <Typography variant="body2">Ecopark</Typography>
              <Typography variant="body2">Bến Lức, Long An</Typography>
              <Typography variant="body2">
                <strong>219 Hecta</strong>
              </Typography>
              <Typography variant="body2">
                <strong>21%</strong>
              </Typography>
              <Typography variant="body2">
                <strong>60%</strong>
              </Typography>
              <Typography variant="body2">Nhà phố, Căn hộ, Biệt thự</Typography>
              <Typography variant="body2">Sở hữu lâu dài</Typography>
              <Typography variant="body2">Quý 1/2025</Typography>
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={ecoretreat_longan}
              alt="ecoretreat_longan"
              priority
            />
          </div>
        </div>
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
            <Typography className="text-white text-justify  leading-loose text-[13px] md:text-[16px]">
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
            <Typography className="text-[13px] md:text-[16px]">
              Eco Retreat dưới sự quản lý và điều hành của một thương hiệu quản
              lý 5 sao quốc tế, không chỉ đơn thuần là một nơi ở. Eco Retreat
              mang đến cho quý cư dân không gian sống phong cách resort, cùng
              trải nghiệm tận hưởng sự tiện nghi và dịch vụ chất lượng bậc nhất.
              Bố trí các tiện ích hoà cùng mảng sống xanh và không khí trong
              lành, tươi mới theo triết lý 5 chữ E gồm:
            </Typography>
            <ul className="px-10 text-[15px] md:text-[16px] py-2">
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

      {/* Layout */}
      <section id="layout" className="my-5">
        <Typography
          variant="h5"
          className="text-[#dec4a7] py-2 uppercase text-center leading-loose"
        >
          mặt bằng thiết kế
        </Typography>
        <Typography variant="body1" className="uppercase text-center">
          đang cập nhật ...
        </Typography>
      </section>
    </>
  );
};

export default EcoRetreatLongAnProject;
