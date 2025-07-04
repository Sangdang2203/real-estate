import { Typography } from "@mui/material";
import EatonParkIntroduction from "./eatonpark-intro";
import EatonParkLayout from "./eatonpark-layout";
import EatonParkLocation from "./eatonpark-location";
import ReturnButton from "@/components/ReturnButton";
import EatonParkFacilities from "./eatonpark-facilities";
const EatonParkProject = () => {
  return (
    <>
      {/* Giới thiệu dự án */}
      <section id="introdution" className="my-5">
        <EatonParkIntroduction />
      </section>

      {/* Vị trí dự án */}
      <section id="location" className="my-5">
        <EatonParkLocation />
      </section>

      {/* Tiện ích dự án */}
      <section id="facilities" className="my-5">
        <EatonParkFacilities />
      </section>

      {/* Layout */}
      <section id="layout" className="my-5">
        <EatonParkLayout />
      </section>

      {/* Thanh toán */}
      <section id="payment" className="my-5">
        <h2 className="text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose md:text-2xl">
          thanh toán hấp dẫn
        </h2>
        <div className="uppercase text-[#8b5a3e] text-center leading-loose">
          <h1 className="text-sm md:text-2xl py-1">
            Trả trước 5% ký Hợp Đồng Mua Bán.
          </h1>
          <Typography className="text-sm md:text-lg py-1">
            Thanh toán chỉ 0.83% mỗi tháng
          </Typography>
          <Typography className="text-sm md:text-lg py-1">
            Ngân hàng hỗ trợ vay. Gamuda Land hỗ trợ lãi vay cho khách hàng.
          </Typography>
        </div>
      </section>

      <ReturnButton />
    </>
  );
};

export default EatonParkProject;
