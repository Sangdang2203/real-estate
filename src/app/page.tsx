import { Metadata } from "next";
import HomePage from "./(public)/home/page";

export const metadata: Metadata = {
  title: "Luxury Real Estate | 0907 014 116",
  keywords: [
    "real estate",
    "bat dong san",
    "can ho",
    "nha pho",
    "biet thu",
    "villa",
    "townhouse",
  ],
  description: "Welcome to our page and experience our services.",
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
