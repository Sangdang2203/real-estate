import { Project } from "@/app/libs/interfaces";
import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

interface Props {
  data: Project[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const CarouselItems = ({ data, currentIndex, setCurrentIndex }: Props) => {
  return (
    <>
      <div className="flex justify-center items-center">
        {data.map((_, index) => (
          <FiberManualRecord
            onClick={() => setCurrentIndex(index)}
            key={index}
            fontSize="small"
            className={`${
              currentIndex === index
                ? "text-green-700 cursor-pointer"
                : "text-slate-300 cursor-pointer"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselItems;
