import CustomCarousel from "@/components/CustomCarousel";
import elysian_garden from "@/images/elysian/elysian_garden.jpg";
import elysian_facilities from "@/images/elysian/elysian_facilities.jpg";
import elysian_facilities_01 from "@/images/elysian/elysian_facilities_01.jpg";
import elysian_facilities_02 from "@/images/elysian/elysian_facilities_02.jpg";
import elysian_facilities_03 from "@/images/elysian/elysian_facilities_03.webp";
import elysian_facilities_04 from "@/images/elysian/elysian_facilities_04.jpg";
import elysian_facilities_05 from "@/images/elysian/elysian_facilities_05.webp";
import elysian_facilities_06 from "@/images/elysian/elysian_facilities_06.webp";
import elysian_facilities_07 from "@/images/elysian/elysian_facilities_07.jpg";
import elysian_facilities_08 from "@/images/elysian/elysian_facilities_08.jpg";

const images = [
  {
    src: elysian_facilities,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_01,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_02,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_garden,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_03,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_04,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_05,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_06,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_07,
    alt: "Elysian facilities",
    title: "Elysian facilities",
  },
  {
    src: elysian_facilities_08,
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
