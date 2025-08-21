"use client";

import SectionFifth from "@/components/SectionFifth";
import SectionFirst from "@/components/SectionFirst";
import SectionFourth from "@/components/SectionFourth";
import SectionSecond from "@/components/SectionSecond";
import SectionSixth from "@/components/SectionSixth";
import SectionThird from "@/components/SectionThird";
import useLenis from "@/lib/useLenis";
import { Bebas_Neue } from "next/font/google";

const bebas_Neue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  if (typeof window !== "undefined") {
    useLenis();
  }
  return (
    <div
      className={`${bebas_Neue.className}`}
      id="smooth-wrapper"
      style={{
        inset: "0px",
        width: "100%",
        height: "100%",
        // position: "fixed",
        overflow: "hidden",
      }}
    >
      <div
        id="smooth-content"
        style={{
          // transform:
          //   "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -4359, 0, 1)",
          boxSizing: "border-box",
          width: "100%",
          overflow: "visible",
        }}
      >
        <div>
          <main className="page-content full" style={{ opacity: 1 }}>
            <SectionFirst />
            <SectionSecond />
            <SectionThird />
            <SectionFourth />
            <SectionFifth />
            <SectionSixth />
            {/* Other sections would follow here - I've only fixed the first section for demonstration */}
          </main>
        </div>
      </div>
    </div>
  );
}
