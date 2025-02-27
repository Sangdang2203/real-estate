import CustomCarousel from "@/components/CustomCarousel";
import { Typography } from "@mui/material";

import EcoRetreat_Categories from "@/images/eco_retreat/EcoRetreat_Categories.jpg";

import VillaTownhouse from "@/images/eco_retreat/VillaTownhouse.jpg";
import VillaTownhouse_Layout_01 from "@/images/eco_retreat/VillaTownhouse_layout_01.jpg";
import VillaTownhouse_Layout_02 from "@/images/eco_retreat/VillaTownhouse_layout_02.jpg";

import SemiVilla from "@/images/eco_retreat/SemiVilla.jpg";
import SemiVilla_Layout from "@/images/eco_retreat/SemiVilla_layout_01.jpg";

import SingleVilla from "@/images/eco_retreat/SingleVilla.jpg";
import SingleVilla_Layout from "@/images/eco_retreat/SingleVilla_layout.jpg";

import Shophouse from "@/images/eco_retreat/Shophouse.jpg";
import Shophouse_Layout from "@/images/eco_retreat/Shophouse_layout.jpg";
import Shophouse_Layout_01 from "@/images/eco_retreat/Shophouse_layout_01.jpg";
import Shophouse_Layout_02 from "@/images/eco_retreat/Shophouse_layout_02.jpg";

import ShopVilla from "@/images/eco_retreat/ShopVilla.jpg";
import ShopVilla_Layout from "@/images/eco_retreat/ShopVilla_layout.jpg";
import ShopVilla_Layout_01 from "@/images/eco_retreat/ShopVilla_layout_01.jpg";
import ShopVilla_Layout_02 from "@/images/eco_retreat/ShopVilla_layout_02.jpg";
import Image from "next/image";

const images = [
  {
    src: EcoRetreat_Categories,
    alt: "EcoRetreat Long An",
    title: "EcoRetreat Long An",
  },
  {
    src: VillaTownhouse,
    alt: "EcoRetreat Long An",
    title: "Villa Townhouse",
  },
  {
    src: VillaTownhouse_Layout_01,
    alt: "EcoRetreat Long An",
    title: "Villa Townhouse",
  },
  {
    src: VillaTownhouse_Layout_02,
    alt: "EcoRetreat Long An",
    title: "Villa Townhouse",
  },
  {
    src: SemiVilla,
    alt: "EcoRetreat Long An",
    title: "Villa Song Lập",
  },
  {
    src: SemiVilla_Layout,
    alt: "EcoRetreat Long An",
    title: "Villa Song Lập",
  },
  {
    src: SingleVilla,
    alt: "EcoRetreat Long An",
    title: "Villa Đơn Lập",
  },
  {
    src: SingleVilla_Layout,
    alt: "EcoRetreat Long An",
    title: "Villa Đơn Lập",
  },
  {
    src: Shophouse,
    alt: "EcoRetreat Long An",
    title: "Shophouse",
  },
  {
    src: Shophouse_Layout,
    alt: "EcoRetreat Long An",
    title: "Shophouse",
  },
  {
    src: Shophouse_Layout_01,
    alt: "EcoRetreat Long An",
    title: "Shophouse",
  },
  {
    src: Shophouse_Layout_02,
    alt: "EcoRetreat Long An",
    title: "Shophouse",
  },

  {
    src: ShopVilla,
    alt: "EcoRetreat Long An",
    title: "Shop Villa",
  },
  {
    src: ShopVilla_Layout,
    alt: "EcoRetreat Long An",
    title: "Shop Villa",
  },
  {
    src: ShopVilla_Layout_01,
    alt: "EcoRetreat Long An",
    title: "Shop Villa",
  },
  {
    src: ShopVilla_Layout_02,
    alt: "EcoRetreat Long An",
    title: "Shop Villa",
  },
];

export default function EcoRetreatLayout() {
  return (
    <>
      <Typography
        variant="h5"
        className="text-[#8b5a3e] font-semibold uppercase text-center leading-loose"
      >
        mặt bằng thiết kế
      </Typography>
      <div className="hidden sm:block">
        <CustomCarousel images={images} />
      </div>
      <div className="block sm:hidden">
        {images.length > 0 &&
          images.map((image) => {
            return (
              <Image
                key={image.alt}
                src={image.src}
                alt={image.alt}
                title={image.title}
                className="w-full h-auto object-cover"
                priority
                loading="eager"
              />
            );
          })}
      </div>
    </>
  );
}
