import { Metadata } from "next";
import ResaleList from "./resale-list";

export const metadata: Metadata = {
  title: "Danh sách chuyển nhượng | 0909.751.772",
  description: "Danh sách bất động sản.",
  keywords: ["real estate", "bat dong san"],
};
const Page = () => {
  return (
    <>
      <ResaleList />
    </>
  );
};

export default Page;
