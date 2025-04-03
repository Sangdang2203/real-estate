"use client";

import React from "react";
import Image from "next/image";

import eaton_1BR from "@/images/eaton_park/eaton_1BR.webp";
import eaton_1BR_1b from "@/images/eaton_park/eaton_1BR_1b.png";
import eaton_2BR from "@/images/eaton_park/eaton_2BR.webp";
import eaton_2BR_conner from "@/images/eaton_park/eaton_2BR_conner.png";
import eaton_3BR from "@/images/eaton_park/eaton_3BR.webp";
import master_layout from "@/images/eaton_park/master_layout.jpg";
import master_landscape from "@/images/eaton_park/master_landscape.jpg";
import { Box, Tab, Tabs } from "@mui/material";
import CustomTabPanel, { tabPanel } from "@/components/custom-tabpanel";

const images = [
  {
    src: eaton_1BR,
    label: "1 BEDROOM",
    alt: "Eaton Park type 1 bedroom",
    title: "Eaton Park type 1 bedroom",
  },
  {
    src: eaton_1BR_1b,
    label: "1 BEDROOM",
    alt: "Eaton Park type 1 bedroom",
    title: "Eaton Park type 1 bedroom",
  },
  {
    src: eaton_2BR,
    label: "2 BEDROOMS",
    alt: "Eaton Park type 2 bedrooms",
    title: "Eaton Park type 2 bedrooms",
  },
  {
    src: eaton_2BR_conner,
    label: "2 BEDROOMS",
    alt: "Eaton Park type 2 bedrooms",
    title: "Eaton Park type 2 bedrooms",
  },
  {
    src: eaton_3BR,
    label: "3 BEDROOMS",
    alt: "Eaton Park type 3 bedrooms",
    title: "Eaton Park type 3 bedrooms",
  },
];
export default function EatonParkLayout() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <h2 className="text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose md:text-2xl">
        thiết kế căn hộ
      </h2>
      <div className="relative">
        <Image
          src={master_landscape}
          className="w-full h-auto rounded-t-lg"
          alt="eaton park layout"
          priority
          loading="eager"
        />
        <Image
          src={master_layout}
          className="w-full h-auto rounded-b-lg"
          alt="master_layout"
          priority
          loading="eager"
        />
      </div>
      <div className="w-full h-auto">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Eaton Park layout"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {images.map((image, index) => (
              <Tab key={index} label={image.label} {...tabPanel(index)} />
            ))}
          </Tabs>
        </Box>
        {images.map((image, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover min-w-[300px] h-auto md:min-w-[500px] rounded-lg"
              priority
              loading="eager"
            />
          </CustomTabPanel>
        ))}
      </div>
    </>
  );
}
