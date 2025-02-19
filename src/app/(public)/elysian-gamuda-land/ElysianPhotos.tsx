import CustomCarousel from "@/components/CustomCarousel";
import elysian_garden from "@/images/elysian/elysian_garden.jpg";
import elysian_facilities from "@/images/elysian/elysian_facilities.jpg";
import elysian_facilities_01 from "@/images/elysian/elysian_facilities_01.jpg";
import elysian_facilities_02 from "@/images/elysian/elysian_facilities_02.jpg";
import elysian_facilities_03 from "@/images/elysian/elysian_facilities_03.jpg";
import elysian_facilities_04 from "@/images/elysian/elysian_facilities_04.webp";

const images = [
  {
    src: elysian_facilities,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_02,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_03,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_garden,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_01,
    alt: "Elysian facilities",
    title: "căn hộ eaton park",
  },
  {
    src: elysian_facilities_04,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
];

export default function ElysianPhotos() {
  return (
    <>
      <CustomCarousel images={images} />
    </>
  );
}
