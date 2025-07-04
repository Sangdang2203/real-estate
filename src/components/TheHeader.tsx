"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Typography } from "@mui/material";
import { InputSearchProps, NavLink, Project } from "@/app/libs/interfaces";
import logo from "@/images/logo.png";
import MenuIcon from "@/icons/MenuIcon";
import CloseIcon from "@/icons/CLoseIcon";
import InputSearch from "@/components/InputSearch";
import { navLinks, projects } from "@/app/libs/data";
import PopupForm from "@/components/PopupForm";
import DarkModeToggle from "./ui/DarkMode";

const TheHeader: React.FC<InputSearchProps> = ({ onSearch }) => {
  const [navigation, setNavigation] = React.useState(false);
  const [showProjects, setShowProjects] = React.useState(false);

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  const closeNavigation = () => {
    setNavigation(false);
  };

  const handleShowProjects = () => {
    setShowProjects(true);
  };

  const handleHiddenProjects = () => {
    setShowProjects(false);
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

        <div className="flex items-center">
          <DarkModeToggle />
          <div
            className="z-50 flex items-center text-yellow-600"
            onClick={handleNavigation}
          >
            <Typography
              variant="body1"
              className="hidden md:block uppercase cursor-pointer font-medium pr-2"
            >
              menu
            </Typography>
            <div className="block hover:opacity-80 cursor-pointer z-50">
              {navigation ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-[80px] right-0 left-0 bottom-0 bg-[#F4F4F4] w-full min-h-screen ease-in duration-300 ${
          navigation ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4">
          {navLinks.length > 0 &&
            navLinks.map((link: NavLink) => (
              <div
                key={link.path}
                onMouseEnter={
                  link.path === "/projects" ? handleShowProjects : undefined
                }
                onMouseLeave={
                  link.path === "/projects" ? handleHiddenProjects : undefined
                }
              >
                <Link
                  href={link.path}
                  className="text-[#7D614B] text-center p-5 md:p-10"
                  onClick={closeNavigation}
                >
                  <Typography className="text-sm md:text-lg uppercase font-semibold hover:pl-3 ease-linear duration-200">
                    {link.name}
                  </Typography>
                </Link>
                {link.path === "/projects" && showProjects && (
                  <div className="w-full rounded-lg bg-white text-black shadow-lg p-10">
                    <div onClick={closeNavigation}>
                      {projects.length > 0 &&
                        projects.map((item: Project) => (
                          <Link
                            key={`${item.id}-${item.name}`}
                            href={item.projectUrl}
                            className="text-[#7D614B] uppercase"
                          >
                            <Typography
                              variant="body1"
                              className="hover:border-r-4 hover:bg-yellow-100 hover:border-[#7D614B] p-2"
                            >
                              {item.name}
                            </Typography>
                          </Link>
                        ))}
                    </div>
                  </div>
                )}
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
