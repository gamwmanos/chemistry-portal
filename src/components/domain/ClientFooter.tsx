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

  return <FooterSection />;
}
