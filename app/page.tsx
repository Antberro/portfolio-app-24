"use client"

import Image from "next/image";
import Link from 'next/link';
import MyHeader from "./lib/my-header";
import MyFooter from "./lib/my-footer";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen">
      {/* Header */}
      <div className="lg:hidden"><MyHeader /></div>
      <header className="hidden lg:flex lg:h-14">
        <div className="flex w-1/2"></div>
        <div className="flex w-1/2">
          <Link className="flex w-full h-full items-center justify-center" href="/">
            <Image 
                src="logo-bw.svg" 
                alt="Logo"
                width="200" 
                height="200"
                style={{ width: "auto", height: "40%" }}
                priority
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      {/* Set height to 100vh - [height of header (3.5rem) + height of footer(6rem)] */}
      <div className="flex flex-grow flex-col lg:flex-row lg:h-[calc(100vh-9.5rem)]">
        {/* Column A */}
        <div className="flex justify-center px-10 md:px-16 lg:px-0 lg:py-8 lg:w-1/2">
          <Image
              src="/headshot-annotated.png"
              alt="Antonio Berrones"
              width={3805}
              height={5708}
              style={{ width: "auto", height: "100%" }}
              priority
          />
        </div>

        {/* Column B */}
        <div className="flex flex-grow lg:justify-end lg:items-end px-10 md:px-16 py-10 lg:p-16 primary-ff">
          <ul className="text-3xl md:text-5xl lg:text-7xl">
              <li className="mb-2 highlight-on-hover"><Link href="/about">ABOUT</Link></li>
              {/* <li className="mb-2 highlight-on-hover"><Link href="/">TECH</Link></li> */}
              <li className="mb-2 highlight-on-hover"><Link href="/photos">PHOTOS</Link></li>
              {/* <li className="mb-2 highlight-on-hover"><Link href="/film">FILM</Link></li> */}
            </ul>
        </div>
      </div>

      {/* Footer */}
      <MyFooter />
    </main>
  );
}
