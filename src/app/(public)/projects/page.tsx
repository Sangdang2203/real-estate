import * as React from "react";
import { Metadata } from "next";
import ProjectList from "./project-list";

export const metadata: Metadata = {
  title: "Danh sách bất động sản",
  description: "Danh sách bất động sản.",
  keywords: ["real estate", "bat dong san"],
};
export default function Page() {
  return (
    <>
      <ProjectList />
    </>
  );
}
