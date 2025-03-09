import * as React from "react";
import { Metadata } from "next";
import ProjectList from "./ProjectList";

export const metadata: Metadata = {
  title: "Real Estate List",
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
