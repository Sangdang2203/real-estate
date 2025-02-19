"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import CarouselPhotos from "./CarouselPhotos";
import ProjectCarousel from "./ProjectCarousel";

export default function HomePage() {
  return (
    <Box>
      {/* Carousel section */}
      <section id="slideshow">
        <CarouselPhotos />
      </section>

      {/* Projects section  */}
      <section id="projects">
        <ProjectCarousel />
      </section>

      <div className="flex justify-center my-10 z-0">
        <Link href="/projects" className="uppercase readMore text-center">
          xem thêm...
        </Link>
      </div>

      <section id="contact"></section>
    </Box>
  );
}
