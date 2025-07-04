"use client";
import UpIcon from "@/shared/assets/icons/UpIcon";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

export default function BackToTopButton() {
  function scrollToTop(duration: number) {
    const start = document.documentElement.scrollTop || document.body.scrollTop;
    const startTime = performance.now();

    function scrollStep(currentTime: number) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const newScrollTop = start * (1 - progress);
      window.scrollTo(0, newScrollTop);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
  return (
    <div>
      <Tooltip title="Back to top">
        <IconButton
          onClick={() => scrollToTop(200)}
          className="flex justify-center items-center"
        >
          <UpIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
