import PreviousStep from "@/shared/assets/icons/PreviousStep";
import NextStep from "@/shared/assets/icons/SkipNext";
import Image from "next/image";
import haus from "../shared/assets/images/haus_dalat/haus_dalat_1.jpg";

export default function CarouselImages() {
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full z-50"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              layout="responsive"
              src={haus}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              layout="responsive"
              src={haus}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="z-0 absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <NextStep />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="z-0 absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <PreviousStep />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}
