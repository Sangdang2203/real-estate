"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextStep from "@/icons/NextStep";
import PreviousStep from "@/icons/PreviousStep";
import { ImageProp } from "@/app/interfaces";

interface CarouselProps {
  images: ImageProp[];
}

export default function CustomCarousel({ images = [] }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  React.useEffect(() => {
    setCurrentIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-auto block" data-carousel="slide">
      <div className="relative min-h-[220px] sm:min-h-[420px] lg:min-h-[580px] overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <Image
              src={image.src}
              className="absolute object-fill block w-full max-h-[600px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
              alt={image.alt}
              title={image.title}
              loading="eager"
              priority
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={index === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(currentIndex)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        title="Previous"
        className="z-0 absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <PreviousStep />
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        title="Next"
        className="z-0 absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <NextStep />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
