"use client";
import NotFoundPage from "./(public)/not-found/page";
import { navLinks } from "./libs/data";

export default function Home() {
  const isValidPath = (path: string) => {
    return navLinks.some((link) => link.path === path);
  };
  const currentPath = window.location.pathname;

  if (!isValidPath(currentPath)) {
    return <NotFoundPage />;
  }
  return <></>;
}
