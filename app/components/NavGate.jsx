"use client";

import { usePathname } from "next/navigation";
import Navbar from "../navbar";

export default function NavGate() {
  const pathname = usePathname();
  if (pathname?.startsWith("/chat")) return null;

  return (
    <div className="navbar">
      <Navbar />
    </div>
  );
}
