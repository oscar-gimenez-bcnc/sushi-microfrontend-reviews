"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div id="header" className="flex flex-col gap-4 ">
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          console.log("Javascript is working");
        }}
      >
        Click me
      </button>
    </div>
  );
}
