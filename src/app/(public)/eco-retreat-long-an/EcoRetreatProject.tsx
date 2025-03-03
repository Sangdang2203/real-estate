import { Typography } from "@mui/material";
import EcoRetreatIntroduction from "./EcoRetreatIntro";
import EcoRetreatLayout from "./EcoRetreatLayout";
import EcoRetreatLocation from "./EcoRetreatLocation";
import EcoRetreatFacilities from "./EcoRetreatFacilities";
import ReturnButton from "@/components/ReturnButton";
export default function EcoRetreatProject() {
  return (
    <>
      {/* Giới thiệu dự án */}
      <section id="introdution" className="text-justify my-5">
        <EcoRetreatIntroduction />
      </section>

      {/* Vị trí dự án */}
      <section id="location" className="my-5">
        <EcoRetreatLocation />
      </section>

      {/* Tiện ích dự án */}
      <section id="facilities" className="my-5">
        <EcoRetreatFacilities />
      </section>

      {/* Layout */}
      <section id="layout" className="my-5">
        <EcoRetreatLayout />
      </section>

      {/* Thanh toán */}
      <section id="payment" className="my-5">
        <Typography
          variant="h5"
          className="text-[#8b5a3e] font-semibold uppercase text-center leading-loose"
        >
          thanh toán hấp dẫn
        </Typography>
        <div className="uppercase text-center leading-loose">
          sẽ công bố trong quý 1 năm 2025
        </div>
      </section>

      <ReturnButton />
    </>
  );
}
