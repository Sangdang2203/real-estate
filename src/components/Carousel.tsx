import { useState } from "react";
import PreviousStep from "@/shared/assets/icons/PreviousStep";
import NextStep from "@/shared/assets/icons/NextStep";
import Image from "next/image";
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

export default function CarouselImages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div
        id="photos-carousel"
        className="relative w-full h-auto block"
        data-carousel="slide"
      >
        <div className="relative min-h-[220px] md:min-h-[600px] overflow-hidden rounded-lg">
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
                className="absolute block w-full min-h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md"
                alt={image.alt}
                title={image.title}
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
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          title="Previous"
          className="z-0 absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
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
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <NextStep />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}
