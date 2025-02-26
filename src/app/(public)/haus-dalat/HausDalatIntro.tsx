import Image from "next/image";
import { Typography } from "@mui/material";
import haus_dalat from "@/images/haus_dalat/haus_dalat.png";
import haus_continental from "@/images/haus_dalat/haus_continental.png";
import interContinental from "@/images/haus_dalat/haus_interContinental.png";
import interContinental_1 from "@/images/haus_dalat/haus_interContinental_1.png";

const haus_brands = [
  { title: "Kengo Kuma", link: "https://en.wikipedia.org/wiki/Kengo_Kuma" },
  { title: "Isometrix", link: "https://www.isometrix.co.uk/" },
  { title: "1508 London", link: "https://1508london.com" },
  {
    title: "Chiva-Som",
    link: "https://www.chivasom.com/en/chiva-som-hua-hin/",
  },
];
export default function HausDalatIntroduction() {
  return (
    <div className="text-justify">
      <Typography className="text-sm md:text-lg">
        The One Destination, chủ đầu tư{" "}
        <strong className="text-green-700">dự án Haus Da Lat</strong> hợp tác
        IHG Hotels & Resort đưa{" "}
        <strong>
          <a
            href="https://vnexpress.net/da-lat-sap-co-thuong-hieu-resort-5-sao-chuan-quoc-te-4834519.html"
            target="_blank"
            title="Đà Lạt sắp có thương hiệu resort 5 sao chuẩn quốc tế"
          >
            thương hiệu InterContinental{" "}
          </a>
        </strong>
        về TP Đà Lạt, đặt tại dự án trước mặt hồ Xuân Hương. Đại diện chủ đầu tư
        The One Destination cho biết, khách sạn InterContinental sẽ nằm trong dự
        án Haus Da Lat rộng 5ha đặt ở trung tâm thành phố, trước mặt hồ Xuân
        Hương. Resort 5 sao này dự kiến hoạt động vào năm 2027.
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
        <div>
          <Image
            className="rounded-lg h-full"
            src={haus_continental}
            alt="haus_continental"
            priority
            loading="eager"
          />
        </div>
        <div className="flex flex-col justify-between">
          <Typography className="text-sm md:text-lg leading-6">
            Việc hợp tác IHG Hotels & Resorts đưa InterContinental về TP Đà Lạt
            được The One Destination đánh giá là mảnh ghép giúp hoàn thiện hệ
            sinh thái tại dự án Haus Da Lat. Resort được thiết kế bởi{" "}
            <strong>kiến trúc sư Kengo Kuma và cộng sự (KKAA)</strong>, sẽ lồng
            ghép những yếu tố mang bản sắc, văn hoá của địa phương. &quot;
            <i>
              Bằng sự tinh tế trong cách sắp đặt vật liệu tự nhiên và nghệ thuật
              thị giác, Kuma đã tập trung vào hình ảnh rừng thông và quả thông -
              biểu tượng của Đà Lạt làm cảm hứng thiết kế, tạo nên biểu tượng
              kiến trúc giao thoa với thiên nhiên
            </i>
            &quot;, đại diện chủ đầu tư nói.
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1">
            <Image
              className="rounded-lg"
              src={interContinental}
              alt="haus_continental"
              priority
              loading="eager"
            />
            <Image
              className="rounded-lg"
              src={interContinental_1}
              alt="haus_continental"
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div>
        <Typography className="text-sm md:text-lg">
          <strong>
            <a
              href="https://baochinhphu.vn/du-an-bat-dong-san-esg-dau-tien-viet-nam-tai-da-lat-hut-truyen-thong-quoc-te-102241112112543785.htm"
              target="_blank"
              title="Dự án bất động sản ESG đầu tiên Việt Nam tại Đà Lạt 'hút' truyền thông quốc tế"
            >
              Ngay sau khi The One Destination công bố thỏa thuận hợp tác với
              liên doanh tập đoàn đầu tư đa ngành Terne Holdings (Singapore) và
              Quỹ đầu tư BTS Bernina trong việc phát triển dự án bất động sản
              tiêu chuẩn ESG đầu tiên tại Việt Nam, nhiều hãng thông tấn, báo
              chí quốc tế lập tức chia sẻ về thoả thuận hợp tác này. Thời báo,
              tạp chí hàng đầu Mỹ, Thái Lan cùng đưa tin và nhận định Haus Da
              Lat sớm trở thành dự án bất động sản tiêu chuẩn ESG tại Việt Nam
            </a>
            , điểm đến mới của toàn cầu khi hội tụ các thương hiệu lớn như:{" "}
            {haus_brands.length > 0 &&
              haus_brands.map((brand) => (
                <a
                  key={brand.link}
                  href={brand.link}
                  target="_blank"
                  title={brand.title}
                >
                  {brand.title + ", "}
                </a>
              ))}
          </strong>
        </Typography>
        <div className="grid grid-cols-2 my-5 text-left">
          <div>
            <Typography className="text-sm md:text-lg">
              Nhà sáng lập:
            </Typography>
            <Typography className="text-sm md:text-lg">Vị trí:</Typography>
            <Typography className="text-sm md:text-lg">Quy mô</Typography>
            <Typography className="text-sm md:text-lg">
              Loại hình sản phẩm:
            </Typography>
            <Typography className="text-sm md:text-lg">Pháp lý:</Typography>
            <Typography className="text-sm md:text-lg">
              Thời gian triển khai:
            </Typography>
          </div>
          <div>
            <Typography className="text-sm md:text-lg">
              The One Destination
            </Typography>
            <Typography className="text-sm md:text-lg">
              <strong>Thành phố Đà Lạt</strong>
            </Typography>
            <Typography className="text-sm md:text-lg">
              <strong>5 Hecta</strong>
            </Typography>
            <Typography className="text-sm md:text-lg">
              Căn hộ hạng sang{" "}
              <strong className="hidden md:block">
                (68 Sky Villas & Sky Mansions)
              </strong>
            </Typography>
            <Typography className="text-sm md:text-lg">
              Sở hữu lâu dài
            </Typography>
            <Typography className="text-sm md:text-lg">Quý 1/2025</Typography>
          </div>
        </div>
        <div>
          <Image
            className="rounded-lg"
            src={haus_dalat}
            alt="haus dalat"
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
