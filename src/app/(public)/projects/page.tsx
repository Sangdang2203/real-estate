import * as React from "react";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate List",
  description: "Danh sách bất động sản.",
  keywords: ["real estate", "bat dong san"],
};
export default function ProjectPage() {
  return (
    <>
      <ProjectCard />
    </>
  );
}
