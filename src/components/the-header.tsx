"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Typography } from "@mui/material";
import { InputSearchProps, NavLink } from "@/app/interfaces";
import logo from "@/images/logo.png";
import MenuIcon from "@/icons/MenuIcon";
import CloseIcon from "@/icons/CLoseIcon";
import InputSearch from "@/components/input-search";
import { navLinks } from "@/app/libs/data";
import PopupForm from "@/components/popup-form";

const TheHeader: React.FC<InputSearchProps> = ({ onSearch }) => {
  const [navigation, setNavigation] = React.useState(false);

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  const closeNavigation = () => {
    setNavigation(false);
  };

  return (
    <nav className="w-full h-[80px] px-3 md:px-[64px] fixed top-0 left-0 z-30 bg-white shadow-lg">
      <div className="flex justify-between items-center">
        <Link rel="canonical" href="/">
          <Image
            src={logo}
            alt="logo"
            className="max-w-[80px] max-h-[80px]"
            priority
            loading="eager"
          />
        </Link>

        <div className="hidden md:block">
          <InputSearch onSearch={onSearch} />
        </div>

        <div
          className="block z-50 md:flex items-center"
          onClick={handleNavigation}
        >
          <div className="block w-[35.36px] h-[85.71px] hover:opacity-80 cursor-pointer z-50 mr-4">
            {navigation ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>

      <div
        className={`absolute top-[80px] right-0 left-0 bottom-0 bg-[#F4F4F4] w-full min-h-screen ease-in duration-300 ${
          navigation ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-[669px] h-[295px]">
          {navLinks.length > 0 &&
            navLinks
              .reduce<NavLink[][]>((acc, link, index) => {
                if (index % 2 === 0) acc.push([]);
                acc[acc.length - 1].push(link);
                return acc;
              }, [])
              .map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col px-[64px] py-[32px]"
                >
                  {group.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="text-[#7D614B] w-[315px] h-[77px]"
                      onClick={closeNavigation}
                    >
                      <Typography
                        variant="body1"
                        className="uppercase font-semibold hover:pl-3 ease-linear duration-200"
                      >
                        {link.name}
                      </Typography>
                    </Link>
                  ))}
                </div>
              ))}
        </div>
        <div className="w-full fixed flex justify-center items-center bottom-0 right-0 bg-white py-2 sm:hidden">
          <PopupForm />
        </div>
      </div>
    </nav>
  );
};
export default TheHeader;
