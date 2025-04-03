import EcoRetreatIntroduction from "./ecoretreat-intro";
import EcoRetreatLayout from "./ecoretreat-layout";
import EcoRetreatLocation from "./ecoretreat-location";
import EcoRetreatFacilities from "./ecoretreat-facilities";
import ReturnButton from "@/components/return-button";
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
        <h2 className="text-[#8b5a3e] py-2 font-semibold uppercase text-center leading-loose md:text-2xl">
          thanh toán hấp dẫn
        </h2>
        <div className="uppercase text-center leading-loose">
          sẽ công bố trong quý 1 năm 2025
        </div>
      </section>

      <ReturnButton />
    </>
  );
}
