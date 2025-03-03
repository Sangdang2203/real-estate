"use client";
import BackIcon from "@/shared/assets/icons/BackIcon";
import { Button } from "@mui/material";

export default function ReturnButton() {
  return (
    <div className="flex justify-end items-center mt-10">
      <Button
        onClick={() => window.history.back()}
        className="rounded-full px-5"
        variant="outlined"
        color="inherit"
      >
        <BackIcon /> <strong className="px-1">return</strong>
      </Button>
    </div>
  );
}
