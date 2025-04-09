/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import "@/styles/popup.css";
import { Button } from "@mui/material";
import Link from "next/link";

const PopupForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOpen(true);
  //   }, 45000);
  //   return () => clearTimeout(timer);
  // });

  return (
    <>
      <Button onClick={handleClickOpen} className="fancy hover:opacity-80">
        <span className="top-key"></span>
        <Link
          href="https://forms.gle/bjKMAmmwJs3NCXkn9"
          target="_blank"
          className="text"
        >
          Đăng ký nhận thông tin
        </Link>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </Button>
    </>
  );
};
export default PopupForm;
