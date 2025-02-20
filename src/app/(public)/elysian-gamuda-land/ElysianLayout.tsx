"use client";
import CustomTabPanel, { tabPanel } from "@/components/CustomTabPanel";
import { Box, Tabs, Tab } from "@mui/material";
import React from "react";
import Image from "next/image";
import elysian_1bedroom from "@/images/elysian/elysian_1bedroom.webp";
import elysian_2bedrooms from "@/images/elysian/elysian_2bedroom_2.webp";
import elysian_3bedrooms from "@/images/elysian/elysian_3bedrooms.webp";

const images = [
  {
    src: elysian_1bedroom,
    label: "1 BEDROOM",
    alt: "elysian 1 bedroom",
    title: "elysian 1 bedroom",
  },
  {
    src: elysian_2bedrooms,
    label: "2 BEDROOMS",
    alt: "elysian 2 bedrooms",
    title: "elysian 2 bedrooms",
  },
  {
    src: elysian_3bedrooms,
    label: "3 BEDROOMS",
    alt: "elysian 3 bedrooms",
    title: "elysian 3 bedrooms",
  },
];

export default function ElysianLayout() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full h-auto">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="Elysian images">
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
            className="min-w-[300px] h-auto md:min-w-[500px]"
          />
        </CustomTabPanel>
      ))}
    </div>
  );
}
