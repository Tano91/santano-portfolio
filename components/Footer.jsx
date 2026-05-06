import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const Footer = ({ id }) => {
  return (
    <div id={id} className="mt-12 scroll-mt-24 bg-[#131e27] bg-opacity-100 px-4 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#949ea5] sm:flex-row">
        <p className="text-center sm:text-left">
          © 2024 Santano McCalla - Made with ❤️ using React.js. All rights reserved.
        </p>
        <Link
          href={"mailto:santanomccalla@gmail.com"}
          className="flex items-center gap-2 underline transition ease-in-out hover:scale-105 active:scale-95"
        >
          <EnvelopeIcon className="h-5 text-yellow-500" />{" "}
          <p className="font-semibold">Contact Me!</p>
        </Link>
      </div>
    </div>
  );
};
