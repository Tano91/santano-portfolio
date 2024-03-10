import React from "react";
import { HeartIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const Footer = ({ id }) => {
  return (
    <div
      id={id}
      className='mt-10 className="fixed bot-0 left-0 right-0 z-10 bg-[#131e27] bg-opacity-100 px-5 py-3'
    >
      <div className="text-[#949ea5] text-sm flex flex-col sm:flex-row justify-evenly items-center">
        <p className="flex text-center mb-5 sm:mb-0">
          {" "}
          © 2024 Santano McCalla - Made with ❤️ using React.js
        </p>
        <Link
          href={"mailto:santanomccalla@gmail.com"}
          className="flex underline space-x-2 hover:scale-110 active:scale-95 transform transition ease-in-out"
        >
          <EnvelopeIcon className="h-5 text-yellow-500" />{" "}
          <p className="font-semibold">Contact Me!</p>
        </Link>
      </div>
    </div>
  );
};
