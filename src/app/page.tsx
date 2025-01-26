import { Metadata } from "next";
import HomePage from "./(public)/home/page";

export const metadata: Metadata = {
  title: "Home Page",
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
