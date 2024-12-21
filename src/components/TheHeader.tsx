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
import EcoCloud from "@/images/logoTurbo.png";
import Image from "next/image";
import { Button, Menu, MenuItem } from "@mui/material";
import { projects } from "@/app/libs/data";

export default function TheHeaderComponent() {
  const [navigation, setNavigation] = React.useState(false);

  function handleNavigation() {
    setNavigation(!navigation);
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openSubLinks = Boolean(anchorEl);

  const handleOpenSubLinks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseSubLinks = () => {
    setAnchorEl(null);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white shadow-lg">
      <nav className="h-[10vh] flex justify-between items-center p-4 ">
        <div className=" font-bold text-3xl text-amber-400 hover:text-amber-200">
          <Link href="/">
            <Image
              src={EcoCloud}
              className="w-28 h-10"
              title="Trang chủ"
              alt="logo_turbo_solutions"
            />
          </Link>
        </div>

        {/* navbar for PC */}
        <div className="hidden text-[1rem] lg:flex justify-between items-center ">
          <Button href="/trang-chu" className="navLink">
            trang chủ
          </Button>
          <Button href="/gioi-thieu" className=" navLink active">
            giới thiệu
          </Button>

          <Button
            onClick={handleOpenSubLinks}
            endIcon={<KeyboardArrowDownRounded />}
            className="navLink py-3"
          >
            dịch vụ
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
                  key={project.url}
                  onClick={() => {
                    handleCloseSubLinks();
                    handleNavigation();
                  }}
                >
                  <Link href={project.url} className="navSubLink">
                    {project.name}
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>

          <Button href="/tin-tuc" className=" navLink ">
            tin tức
          </Button>
          <Button href="/lien-he" className=" navLink ">
            liên hệ
          </Button>
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
            <li className="text-[1rem] flex flex-col justify-center items-start px-[25%]">
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
                className="navLink "
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
                className="navLink "
              >
                dịch vụ
              </Button>
              <Menu
                id="services"
                anchorEl={anchorEl}
                open={openSubLinks}
                onClick={handleCloseSubLinks}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                {projects.map((project) => {
                  return (
                    <MenuItem
                      key={project.url}
                      onClick={() => {
                        handleCloseSubLinks();
                        handleNavigation();
                      }}
                    >
                      <Link href={project.url} className="navSubLink">
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
                href="/lien-he"
                className="navLink "
              >
                liên hệ
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
