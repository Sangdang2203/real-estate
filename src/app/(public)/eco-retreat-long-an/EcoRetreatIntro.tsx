import Image from "next/image";
import { Typography } from "@mui/material";
import ecopark from "@/images/eco_retreat/master_layout.png";

export default function EcoRetreatIntroduction() {
  return (
    <>
      <Typography className="text-sm md:text-lg">
        <strong className="text-green-700">Ecopark</strong> là một tập đoàn đa
        ngành, tập trung vào việc phát triển bền vững và đa dạng hóa đầu tư
        trong các lĩnh vực như giáo dục, y tế, nông nghiệp sạch, công nghệ cao,
        du lịch và vui chơi giải trí. Đồng thời Ecopark cũng giữ vững vị thế chủ
        chốt là một tập đoàn đầu tư và phát triển đô thị chuyên nghiệp, theo xu
        hướng Bất động sản Xanh, mở rộng và phát triển mô hình đô thị Ecopark
        trên khắp cả nước.
      </Typography>

      <div className="w-full my-5">
        <video
          controls
          width="100%"
          height="auto"
          autoPlay
          className="rounded-lg"
          title="Video về dự án Eco Retreat"
          muted
        >
          <source src="/videos/EcoRetreatLongAn_Present.mp4" type="video/mp4" />
          Video về dự án Eco Retreat
        </video>
      </div>

      <Typography className="text-sm md:text-lg">
        Năm 2003, một nhóm nhà đầu tư, bằng tâm huyết và kinh nghiệm thành công
        trên nhiều lĩnh vực kinh doanh đã quyết định thành lập Công ty CP đầu tư
        và phát triển đô thị Việt Hưng (Vihajico). Sự ra đời của công ty gắn
        liền với sứ mệnh xây dựng một khu đô thị sinh thái chức năng đầu tiên ở
        Việt Nam theo xu hướng phát triển đô thị hiện đại của các quốc gia trên
        thế giới: khu đô thị Ecopark. Qua hơn hai thập kỷ phát triển và hoàn
        thiện, Ecopark đã trở thành một thành phố chức năng kiểu mẫu, tiên phong
        xác lập xu hướng Bất động sản Xanh với giá cả hợp lý, được quốc tế tôn
        vinh với nhiều giải thưởng danh giá. Ban lãnh đạo công ty đã quyết định
        thay đổi tên thành Công ty CP Tập đoàn Ecopark, hướng tới mục tiêu phát
        triển bền vững, đầu tư đa ngành vào các lĩnh vực như giáo dục, y tế,
        nông nghiệp sạch, công nghệ cao, du lịch, vui chơi giải trí…; đồng thời
        vẫn giữ vững vị thế chủ chốt là Tập đoàn đầu tư và phát triển đô thị
        chuyên nghiệp theo xu hướng Bất động sản Xanh, mở rộng phát triển mô
        hình đô thị Ecopark trên địa bàn cả nước.
      </Typography>

      <Image
        className="rounded-lg w-full object-cover my-5"
        src={ecopark}
        alt="ecopark"
        priority
        loading="eager"
      />

      <div>
        <Typography className="text-sm md:text-lg">
          <strong>
            Eco Retreat, nơi tâm hồn gia chủ tìm lại sự an nhiên giữa không gian
            thiên nhiên xanh mát, cùng hương vị khoáng nóng đẳng cấp
          </strong>
          . Dự án không chỉ mở ra cánh cửa hưởng thụ cuộc sống thượng lưu, mà
          còn là bức tranh tươi mới về một Long An đáng sống và đẳng cấp.
        </Typography>
        <div className="grid grid-cols-2 my-5 text-left">
          <div>
            <Typography className="text-sm md:text-lg">
              Nhà sáng lập:
            </Typography>
            <Typography className="text-sm md:text-lg">Vị trí:</Typography>
            <Typography className="text-sm md:text-lg">Quy mô</Typography>
            <Typography className="text-sm md:text-lg">
              Mật độ xây dựng:
            </Typography>
            <Typography className="text-sm md:text-lg">
              Mật độ cây xanh:
            </Typography>
            <Typography className="text-sm md:text-lg">
              Loại hình sản phẩm:
            </Typography>
            <Typography className="text-sm md:text-lg">Pháp lý:</Typography>
            <Typography className="text-sm md:text-lg">
              Thời gian triển khai:
            </Typography>
          </div>
          <div>
            <Typography className="text-sm md:text-lg">Ecopark</Typography>
            <Typography className="text-sm md:text-lg">
              Bến Lức, Long An
            </Typography>
            <Typography className="text-sm md:text-lg">
              <strong>219 Hecta</strong>
            </Typography>
            <Typography className="text-sm md:text-lg">
              <strong>21%</strong>
            </Typography>
            <Typography className="text-sm md:text-lg">
              <strong>60%</strong>
            </Typography>
            <Typography className="text-sm md:text-lg">
              Nhà phố, Căn hộ, Biệt thự
            </Typography>
            <Typography className="text-sm md:text-lg">
              Sở hữu lâu dài
            </Typography>

            <Typography className="text-sm md:text-lg">Quý 1/2025</Typography>
          </div>
        </div>
        <div className="w-full my-5">
          <video
            controls
            width="100%"
            height="auto"
            autoPlay
            playsInline
            className="rounded-lg object-cover"
            title="Video về dự án Eco Retreat"
            muted
          >
            <source src="/videos/EcoRetreatLongAn.mp4" type="video/mp4" />
            Video về dự án Eco Retreat
          </video>
        </div>
      </div>
    </>
  );
}
