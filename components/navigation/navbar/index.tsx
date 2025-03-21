import Link from "next/link";
import Image from "next/image";
import React from "react";
import Theme from "./Theme";

function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
}

export default Navbar;
