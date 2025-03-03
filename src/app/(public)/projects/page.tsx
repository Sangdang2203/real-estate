import * as React from "react";
import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import ReturnButton from "@/components/ReturnButton";

export const metadata: Metadata = {
  title: "Real Estate List",
  description: "Danh sách bất động sản.",
  keywords: ["real estate", "bat dong san"],
};
export default function Page() {
  return (
    <>
      <ProjectCard />
      <ReturnButton />
    </>
  );
}
