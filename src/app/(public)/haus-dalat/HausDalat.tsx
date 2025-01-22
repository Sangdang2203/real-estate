import { Typography } from "@mui/material";
import Image from "next/image";
import haus_continental from "../../../shared/assets/images/haus_dalat/haus_continental.png";
import interContinental from "../../../shared/assets/images/haus_dalat/haus_interContinental.png";
import interContinental_1 from "../../../shared/assets/images/haus_dalat/haus_interContinental_1.png";
import haus_dalat from "../../../shared/assets/images/haus_dalat/haus_dalat.png";

const HausDalatProject = () => {
  const haus_brands = [
    { title: "Kengo Kuma", link: "https://en.wikipedia.org/wiki/Kengo_Kuma" },
    { title: "Isometrix", link: "https://www.isometrix.co.uk/" },
    { title: "1508 London", link: "https://1508london.com" },
    {
      title: "Chiva-Som",
      link: "https://www.chivasom.com/en/chiva-som-hua-hin/",
    },
  ];
  return (
    <>
      {/* Giới thiệu dự án */}
      <section id="introdution" className="text-justify">
        <Typography className="text-[13px] md:text-[16px]">
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
          về TP Đà Lạt, đặt tại dự án trước mặt hồ Xuân Hương. Đại diện chủ đầu
          tư The One Destination cho biết, khách sạn InterContinental sẽ nằm
          trong dự án Haus Da Lat rộng 5ha đặt ở trung tâm thành phố, trước mặt
          hồ Xuân Hương. Resort 5 sao này dự kiến hoạt động vào năm 2027.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
          <div>
            <Image
              className="rounded-lg h-full"
              src={haus_continental}
              alt="haus_continental"
              priority
            />
          </div>
          <div>
            <Typography className="text-[13px] md:text-[16px]">
              Việc hợp tác IHG Hotels & Resorts đưa InterContinental về TP Đà
              Lạt được The One Destination đánh giá là mảnh ghép giúp hoàn thiện
              hệ sinh thái tại dự án Haus Da Lat. Resort được thiết kế bởi{" "}
              <strong>kiến trúc sư Kengo Kuma và cộng sự (KKAA)</strong>, sẽ
              lồng ghép những yếu tố mang bản sắc, văn hoá của địa phương.
              &quot;
              <i>
                Bằng sự tinh tế trong cách sắp đặt vật liệu tự nhiên và nghệ
                thuật thị giác, Kuma đã tập trung vào hình ảnh rừng thông và quả
                thông - biểu tượng của Đà Lạt làm cảm hứng thiết kế, tạo nên
                biểu tượng kiến trúc giao thoa với thiên nhiên
              </i>
              &quot;, đại diện chủ đầu tư nói.
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1">
              <Image
                className="rounded-lg"
                src={interContinental}
                alt="haus_continental"
                priority
              />
              <Image
                className="rounded-lg"
                src={interContinental_1}
                alt="haus_continental"
                priority
              />
            </div>
          </div>
        </div>

        <div>
          <Typography className="text-[13px] md:text-[16px]">
            <strong>
              <a
                href="https://baochinhphu.vn/du-an-bat-dong-san-esg-dau-tien-viet-nam-tai-da-lat-hut-truyen-thong-quoc-te-102241112112543785.htm"
                target="_blank"
                title="Dự án bất động sản ESG đầu tiên Việt Nam tại Đà Lạt 'hút' truyền thông quốc tế"
              >
                Ngay sau khi The One Destination công bố thỏa thuận hợp tác với
                liên doanh tập đoàn đầu tư đa ngành Terne Holdings (Singapore)
                và Quỹ đầu tư BTS Bernina trong việc phát triển dự án bất động
                sản tiêu chuẩn ESG đầu tiên tại Việt Nam, nhiều hãng thông tấn,
                báo chí quốc tế lập tức chia sẻ về thoả thuận hợp tác này. Thời
                báo, tạp chí hàng đầu Mỹ, Thái Lan cùng đưa tin và nhận định
                Haus Da Lat sớm trở thành dự án bất động sản tiêu chuẩn ESG tại
                Việt Nam
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
              <Typography variant="body2">Nhà sáng lập:</Typography>
              <Typography variant="body2">Vị trí:</Typography>
              <Typography variant="body2">Quy mô</Typography>
              <Typography variant="body2">Loại hình sản phẩm:</Typography>
              <Typography variant="body2">Pháp lý:</Typography>
              <Typography variant="body2">Thời gian triển khai:</Typography>
            </div>
            <div>
              <Typography variant="body2">The One Destination</Typography>
              <Typography variant="body2">
                <strong>Thành phố Đà Lạt</strong>
              </Typography>
              <Typography variant="body2">
                <strong>5 Hecta</strong>
              </Typography>
              <Typography variant="body2">
                Căn hộ hạng sang{" "}
                <strong className="hidden md:block">
                  (68 Sky Villas & Sky Mansions)
                </strong>
              </Typography>
              <Typography variant="body2">Sở hữu lâu dài</Typography>
              <Typography variant="body2">Quý 1/2025</Typography>
            </div>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={haus_dalat}
              alt="haus dalat"
              priority
            />
          </div>
        </div>
      </section>

      {/* Vị trí dự án */}
      <section id="location" className="my-5">
        <div className="flex-col justify-between">
          <div id="grad" className="p-4 rounded-lg opacity-95">
            <Typography className="text-white text-justify  leading-loose text-[13px] md:text-[16px]">
              Haus Da Lat tọa lạc trong khu vực trung tâm thành phố Đà Lạt, nổi
              tiếng với khí hậu mát mẻ, phong cảnh thiên nhiên tươi đẹp và nhiều
              điểm tham quan du lịch. Dự án nằm gần các tuyến đường chính, thuận
              tiện cho việc di chuyển đến các khu vực khác trong thành phố cũng
              như các tỉnh lân cận. Đà Lạt được biết đến với những cánh rừng
              thông xanh mướt, hồ nước trong lành và các khu vườn hoa rực rỡ. Vị
              trí của Haus Da Lat cho phép cư dân tận hưởng không khí trong lành
              và cảnh quan thiên nhiên tuyệt đẹp. Haus Da Lat gần các điểm du
              lịch nổi tiếng như Hồ Xuân Hương, Vườn hoa Đà Lạt, và các khu du
              lịch sinh thái khác, tạo điều kiện thuận lợi cho việc khám phá vẻ
              đẹp của thành phố.
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.3152631431976!2d108.43888497482341!3d11.942970288285727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31711300432aab6b%3A0x7fc54e95820384e2!2zSEFVUyDEkGHMgCBMYcyjdA!5e1!3m2!1svi!2s!4v1737560482900!5m2!1svi!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="my-2 rounded-lg w-full min-h-[300px]"
            ></iframe>
            <Typography className="text-white text-justify  leading-loose text-[13px] md:text-[16px]">
              Haus Da Lat không chỉ là một dự án bất động sản, mà còn là một nơi
              lý tưởng để sinh sống và tận hưởng cuộc sống. Vị trí đắc địa cùng
              với môi trường thiên nhiên tuyệt đẹp và các tiện ích xung quanh
              khiến Haus Da Lat trở thành một lựa chọn hấp dẫn cho những ai muốn
              tìm kiếm một không gian sống yên bình và đẳng cấp tại Đà Lạt.
            </Typography>
          </div>
        </div>
      </section>

      {/* Tiện ích dự án */}
      <section id="facilities" className="my-5">
        {/* <Typography
          variant="h5"
          className="text-[#dec4a7] py-2 uppercase text-center leading-loose"
        >
          chuỗi tiện ích đỉnh cao
        </Typography> */}
        <div className="w-full h-auto">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/WeHCTwg79_E"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Haus Dalat Facilites"
            className="rounded-lg"
          ></iframe>
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

export default HausDalatProject;
