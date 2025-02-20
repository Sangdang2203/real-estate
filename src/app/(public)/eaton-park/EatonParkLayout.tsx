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
import { Box, Tab, Tabs, Typography } from "@mui/material";
import CustomTabPanel, { tabPanel } from "@/components/CustomTabPanel";

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
      <Typography
        variant="h5"
        className="text-[#dec4a7] py-2 uppercase text-center leading-loose"
      >
        thiết kế căn hộ
      </Typography>
      <div className="relative">
        <Image
          src={master_landscape}
          className="w-full h-auto rounded-t-lg"
          alt="eaton park layout"
          priority
        />
        <Image
          src={master_layout}
          className="w-full h-auto rounded-b-lg"
          alt="master_layout"
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
            aria-label="Elysian images"
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
              className="min-w-[300px] h-auto md:min-w-[500px] rounded-lg"
            />
          </CustomTabPanel>
        ))}
      </div>
    </>
  );
}
