import CustomCarousel from "@/components/CustomCarousel";
import haus_dalat from "@/images/haus_dalat/haus_dalat.png";
import eaton_park from "@/images/eaton_park/eaton_park.webp";
import celesta_city from "@/images/celesta/celesta_heights.webp";
import ecoretreat_longan from "@/images/eco_retreat/Ecoretreat_Longan_Landscape.jpg";

const images = [
  { src: haus_dalat, alt: "haus dalat", title: "dự án haus dalat" },
  {
    src: ecoretreat_longan,
    alt: "eco retreat long an",
    title: "eco retreat long an",
  },
  { src: eaton_park, alt: "eaton park", title: "căn hộ eaton park" },
  { src: celesta_city, alt: "celesta city", title: "căn hộ celesta" },
];
export default function CarouselPhotos() {
  return (
    <>
      <CustomCarousel images={images} />
    </>
  );
}
