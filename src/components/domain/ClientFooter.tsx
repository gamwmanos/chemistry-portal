"use client";

import { usePathname } from "next/navigation";
import FooterSection from "./FooterSection";

export default function ClientFooter() {
  const pathname = usePathname();

  // Define paths where the footer should NOT be displayed
  const hideFooterPaths = ["/a-lykeiou", "/b-gymnasiou", "/g-gymnasiou"];

  // Check if the current path starts with any of the hidden paths
  const shouldHideFooter = hideFooterPaths.some((path) =>
    pathname?.startsWith(path)
  );

  if (shouldHideFooter) {
    return null;
  }

  // Determine the background color based on the current page to ensure seamless transitions
  let bgClass = "bg-[#05050C] text-white"; // default very dark background

  if (pathname === "/") {
    // The homepage ends with a light blue gradient (#38bdf8 / tailwind sky-400)
    bgClass = "bg-[#38bdf8] text-white";
  } else if (pathname === "/katigites") {
    // The teachers page ends with a dark slate/blue background
    bgClass = "bg-slate-900 text-white";
  } else if (pathname === "/authors") {
    // The authors page ends with a blue-600 background
    bgClass = "bg-blue-600 text-white";
  }

  return (
    <div className={bgClass}>
      <FooterSection />
    </div>
  );
}
