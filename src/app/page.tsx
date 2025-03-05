import { Metadata } from "next";
import HomePage from "./(public)/home/page";

export const metadata: Metadata = {
  title: "Luxury Real Estate | 0907 014 116",
  robots: "index, follow",
  creator: "Luxury Real Estate",
  publisher: "Luxury Real Estate",
  keywords: [
    "real estate",
    "bat dong san",
    "bất động sản",
    "can ho",
    "căn hộ",
    "nha pho",
    "nhà phố",
    "biet thu",
    "biệt thự",
    "villa",
    "townhouse",
  ],
  description:
    "Chúng tôi chuyên cung cấp sản phẩm từ các Chủ Đầu Tư uy tín như Keppel Land, CapitaLand, Gamuda Land, Ecopark Group, Khang Điền, Nam Long,...",
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
