import CustomCarousel from "@/components/CustomCarousel";
import housing_model_01 from "@/images/elysian/housing_model_01.jpg";
import housing_model_02 from "@/images/elysian/housing_model_02.jpg";
import housing_model_03 from "@/images/elysian/housing_model_03.jpg";
import housing_model_04 from "@/images/elysian/housing_model_04.jpg";
import housing_model_05 from "@/images/elysian/housing_model_05.jpg";
import housing_model_06 from "@/images/elysian/housing_model_06.jpg";

const images = [
  {
    src: housing_model_01,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
  {
    src: housing_model_02,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
  {
    src: housing_model_03,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
  {
    src: housing_model_04,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
  {
    src: housing_model_05,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
  {
    src: housing_model_06,
    alt: "Nhà mẫu Elysian",
    title: "Nhà mẫu Elysian",
  },
];

export default function ElysianHousingModel() {
  return (
    <>
      <CustomCarousel images={images} />
    </>
  );
}
