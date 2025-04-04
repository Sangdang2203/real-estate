import CustomCarousel from "@/components/CustomCarousel";

import concept_1BR from "@/images/haus_dalat/concept_1BR.jpg";
import concept_2BR from "@/images/haus_dalat/concept_2BR.jpg";
import concept_2BR_01 from "@/images/haus_dalat/concept_2BR_01.jpg";
import concept_2BR_02 from "@/images/haus_dalat/concept_2BR_02.jpg";
import concept_2BR_03 from "@/images/haus_dalat/concept_2BR_03.jpg";
import concept_2BR_04 from "@/images/haus_dalat/concept_2BR_04.jpg";
import concept_2BR_05 from "@/images/haus_dalat/concept_2BR_05.jpg";

import concept_3BR from "@/images/haus_dalat/concept_3BR.jpg";
import concept_3BR_01 from "@/images/haus_dalat/concept_3BR_01.jpg";
import concept_3BR_02 from "@/images/haus_dalat/concept_3BR_02.jpg";
import concept_3BR_03 from "@/images/haus_dalat/concept_3BR_03.jpg";
import concept_3BR_04 from "@/images/haus_dalat/concept_3BR_04.jpg";
import concept_3BR_05 from "@/images/haus_dalat/concept_3BR_05.jpg";
import concept_3BR_06 from "@/images/haus_dalat/concept_3BR_06.jpg";

import concept_4BR from "@/images/haus_dalat/concept_4BR.jpg";
import concept_4BR_01 from "@/images/haus_dalat/concept_4BR_01.jpg";
import concept_4BR_02 from "@/images/haus_dalat/concept_4BR_02.jpg";
import concept_4BR_03 from "@/images/haus_dalat/concept_4BR_03.jpg";
import concept_4BR_04 from "@/images/haus_dalat/concept_4BR_04.jpg";
import concept_4BR_05 from "@/images/haus_dalat/concept_4BR_05.jpg";
import concept_4BR_06 from "@/images/haus_dalat/concept_4BR_06.jpg";

const images = [
  {
    src: concept_1BR,
    alt: "Haus concept 1 bedroom",
    title: "Haus concept 1 bedroom",
  },
  {
    src: concept_2BR,
    alt: "Haus concept 2 bedrooms",
    title: "Haus concept 2 bedrooms",
  },
  {
    src: concept_2BR_01,
    alt: "Haus concept 2 bedrooms",
    title: "Haus concept 2 bedrooms",
  },
  {
    src: concept_2BR_02,
    alt: "Haus concept 2 bedrooms",
    title: "Haus concept 2 bedrooms",
  },
  {
    src: concept_2BR_03,
    alt: "Haus concept 2 bedrooms",
    title: "Haus concept 2 bedrooms",
  },
  {
    src: concept_2BR_04,
    alt: "Haus concept 2 bedrooms",
    title: "Haus concept 2 bedrooms",
  },
  {
    src: concept_2BR_05,
    alt: "Haus concept 2 bedrooms",
    title: "Haus concept 2 bedrooms",
  },
  {
    src: concept_3BR,
    alt: "Haus concept 3 bedrooms",
    title: "Haus concept 3 bedrooms",
  },
  {
    src: concept_3BR_01,
    alt: "Haus concept 3 bedrooms",
    title: "Haus concept 3 bedrooms",
  },
  {
    src: concept_3BR_02,
    alt: "Haus concept 3 bedrooms",
    title: "Haus concept 3 bedrooms",
  },
  {
    src: concept_3BR_03,
    alt: "Haus concept 3 bedrooms",
    title: "Haus concept 3 bedrooms",
  },
  {
    src: concept_3BR_04,
    alt: "Haus concept 3 bedrooms",
    title: "Haus concept 3 bedrooms",
  },
  {
    src: concept_3BR_05,
    alt: "Haus concept 3 bedrooms",
    title: "Haus concept 3 bedrooms",
  },
  {
    src: concept_3BR_06,
    alt: "Haus concept 3 bedrooms",
    title: "Haus concept 3 bedrooms",
  },
  {
    src: concept_4BR,
    alt: "Haus concept 4 bedrooms",
    title: "Haus concept 4 bedrooms",
  },
  {
    src: concept_4BR_01,
    alt: "Haus concept 4 bedrooms",
    title: "Haus concept 4 bedrooms",
  },
  {
    src: concept_4BR_02,
    alt: "Haus concept 4 bedrooms",
    title: "Haus concept 4 bedrooms",
  },
  {
    src: concept_4BR_03,
    alt: "Haus concept 4 bedrooms",
    title: "Haus concept 4 bedrooms",
  },
  {
    src: concept_4BR_04,
    alt: "Haus concept 4 bedrooms",
    title: "Haus concept 4 bedrooms",
  },
  {
    src: concept_4BR_05,
    alt: "Haus concept 4 bedrooms",
    title: "Haus concept 4 bedrooms",
  },
  {
    src: concept_4BR_06,
    alt: "Haus concept 4 bedrooms",
    title: "Haus concept 4 bedrooms",
  },
];

export default function HausDalatPhotos() {
  return (
    <div className="my-5">
      <CustomCarousel images={images} />
    </div>
  );
}
