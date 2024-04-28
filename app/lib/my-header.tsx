import Image from "next/image";
import Link from 'next/link'
import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

export default function MyHeader() {

    const [isToggled, setIsToggled] = React.useState(false);

    function toggleMenu() {
        setIsToggled(!isToggled);
    }
0
    return (
        <>{ isToggled ? (
            <header className="flex w-screen flex-col justify-between fixed inset-0 z-50 bg-background-rgb primary-ff">

                {/* Original header */}
                <div className="flex flex-none justify-between h-14 px-10">
                    <div className="flex invisible items-center text-4xl"><MdOutlineClose /></div>
                    <div className="flex justify-center items-center">
                        <Link className="flex h-full items-center" href="/">
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
                    <button className="flex items-center text-4xl transition-opacity duration-300 hover:opacity-80" onClick={toggleMenu}><MdOutlineClose /></button>
                </div>

                {/* Menu */}
                <div className="flex flex-grow justify-center text-5xl">
                    <ul>
                        <li className="flex m-6 justify-center highlight-on-hover"><Link href="/about">ABOUT</Link></li>
                        {/* <li className="flex m-6 justify-center highlight-on-hover"><Link href="/tech">TECH</Link></li> */}
                        <li className="flex m-6 justify-center highlight-on-hover"><Link href="/photos">PHOTOS</Link></li>
                        {/* <li className="flex m-6 justify-center highlight-on-hover"><Link href="/film">FILM</Link></li> */}
                    </ul>
                </div>
            </header>
        ) : (
            <header className="flex flex-none justify-between h-14 px-10 lg:px-0 primary-ff">
                {/* Dummy element to get correct positioning */}
                <div className="flex  invisible items-center text-4xl"><IoMenuSharp /></div>

                {/* Logo */}
                <div className="flex items-center">
                    <Link className="flex w-full h-full justify-center items-center" href="/">
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

                {/* Menu */}
                <button className="flex items-center text-4xl transition-opacity duration-300 hover:opacity-80 lg:hidden" onClick={toggleMenu}><IoMenuSharp /></button>
                <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center space-x-14">
                    <div className="flex highlight-on-hover"><Link href="/about">ABOUT</Link></div>
                    {/* <div className="flex highlight-on-hover"><Link href="/tech">TECH</Link></div> */}
                    <div className="flex highlight-on-hover"><Link href="/photos">PHOTOS</Link></div>
                    {/* <div className="flex highlight-on-hover"><Link href="/film">FILM</Link></div> */}
                </div>
            </header>
        )}</>
        
    )
}