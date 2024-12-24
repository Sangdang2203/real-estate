"use client";

import React from "react";
import Link from "next/link";
import {
  Close,
  MenuRounded,
  KeyboardArrowDownRounded,
  HomeRounded,
  ContactPhoneRounded,
  ModelTrainingRounded,
  InfoRounded,
} from "@mui/icons-material";
// import Image from "next/image";
import { Button, Menu, MenuItem } from "@mui/material";
import { projects } from "@/shared/libs/data";
import Image from "next/image";
import logo from "../shared/assets/images/logo.png";
import InputSearch from "./InputSearch";
import { InputSearchProps } from "@/app/interfaces";

const TheHeaderComponent: React.FC<InputSearchProps> = ({ onSearch }) => {
  const [navigation, setNavigation] = React.useState(false);
  const [seletcted, setSeletcted] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openSubLinks = Boolean(anchorEl);

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  const handleSelected = () => {
    setSeletcted(seletcted);
  };

  const handleOpenSubLinks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSubLinks = () => {
    setAnchorEl(null);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white shadow-lg">
      <nav className="h-[10vh] flex justify-between items-center px-4 py-10 ">
        <div className=" font-bold text-3xl text-amber-400 hover:text-amber-200">
          <Link href="/">
            <Image
              src={logo}
              className="w-24 h-24 text-amber-500"
              title="Trang chủ"
              alt="logo"
            />
          </Link>
        </div>

        {/* navbar for PC */}
        <div className="hidden text-[1rem] lg:flex justify-between items-center ">
          <Button
            href="/"
            color="warning"
            className="navLink px-[1rem] hover:ease-linear hover:duration-500"
            onClick={handleSelected}
          >
            trang chủ
          </Button>

          <Button
            href="/gioi-thieu"
            color="warning"
            className="navLink px-[1rem]"
          >
            giới thiệu
          </Button>

          <Button
            color="warning"
            onClick={handleOpenSubLinks}
            endIcon={<KeyboardArrowDownRounded />}
            className="navLink px-[1rem]"
          >
            dự án
          </Button>

          <Menu
            id="projects"
            anchorEl={anchorEl}
            open={openSubLinks}
            onClose={handleOpenSubLinks}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            {projects.map((project) => {
              return (
                <MenuItem
                  key={project.projectUrl}
                  onClick={() => {
                    handleCloseSubLinks();
                    handleNavigation();
                    handleSelected();
                  }}
                >
                  <Link href={project.projectUrl} className="subLink">
                    {project.name}
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>

          <Button
            href="/tin-tuc"
            color="warning"
            className={seletcted ? `text-red-600` : `navLink px-[1rem]`}
            onClick={handleSelected}
          >
            tin tức
          </Button>

          <Button
            href="/lien-he"
            color="warning"
            className="navLink px-[1rem]"
            onClick={handleSelected}
          >
            liên hệ
          </Button>
          <div className="hidden mx-4 lg:block">
            <InputSearch onSearch={onSearch} />
          </div>
        </div>

        {/* Handle the menu icon */}
        <div className="flex lg:hidden z-50" onClick={handleNavigation}>
          {navigation ? (
            <Close
              fontSize="medium"
              className="text-[#002D62] hover:opacity-80 cursor-pointer z-50"
            />
          ) : (
            <MenuRounded
              fontSize="large"
              className="text-[#002D62] hover:opacity-80 cursor-pointer z-50"
            />
          )}
        </div>

        {/* Smaller screen: IPAD, PHONE */}
        <div
          className={
            navigation
              ? "lg:hidden absolute top-[10vh] right-0 left-0 bottom-0 bg-slate-200 w-full h-screen ease-in duration-300"
              : "lg:hidden absolute top-[10vh] right-0 left-[-100%] bottom-0 bg-slate-200 w-full h-screen ease-in duration-300"
          }
        >
          {/* navbar links */}
          <ul className="text-center text-[1rem] fond-bold mt-6">
            <li className="text-[1rem] flex flex-col justify-center items-start w-full mx-[35%] md:mx-[40%] lg:mx-0">
              <Button
                startIcon={
                  <HomeRounded className="opacity-60" fontSize="small" />
                }
                href="/home"
                className="navLink "
              >
                trang chủ
              </Button>
              <Button
                startIcon={
                  <InfoRounded className="opacity-60" fontSize="small" />
                }
                href="/gioi-thieu"
                className="navLink"
              >
                giới thiệu
              </Button>

              <Button
                startIcon={
                  <ModelTrainingRounded
                    className="opacity-60"
                    fontSize="small"
                  />
                }
                onClick={handleOpenSubLinks}
                className="navLink"
              >
                dự án
              </Button>
              <Menu
                id="projects"
                anchorEl={anchorEl}
                open={openSubLinks}
                onClick={handleCloseSubLinks}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                {projects.map((project) => {
                  return (
                    <MenuItem
                      key={project.projectUrl}
                      onClick={() => {
                        handleCloseSubLinks();
                        handleNavigation();
                      }}
                    >
                      <Link href={project.projectUrl} className="subLink">
                        {project.name}
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>

              <Button
                startIcon={
                  <ContactPhoneRounded
                    className="opacity-60"
                    fontSize="small"
                  />
                }
                href="/contact"
                className="navLink"
              >
                liên hệ
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default TheHeaderComponent;
