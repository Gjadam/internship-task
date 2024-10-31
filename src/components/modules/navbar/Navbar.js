'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Database
import { navLinks } from "../../../../database/db";

// Components
import NavLink from "./navLink/NavLink";
import DarkMode from "./darkMode/DarkMode";
import Button from "../button/Button";
import MobileNavLink from "./mobileNavLink/MobileNavLink";

export default function Navbar() {

    const [isOpenNavbar, setIsOpenNavbar] = useState(false)
    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false)

    return (
        <>
            <div className=" container md:container-fluid mx-auto xl:container-none flex justify-between items-center px-5 py-3 border-b-1 mb-3">
                <div className=" hidden xl:flex justify-center items-center gap-10">
                    <Image
                        alt="logo"
                        src='/images/png/logos/logo.png'
                        width={117}
                        height={32}
                    />
                    <div className=" flex items-center gap-10">
                        {
                            navLinks.map(link => (
                                <div key={link.id}>
                                    <NavLink  {...link} />
                                </div>
                            ))
                        }
                    </div>
                    <DarkMode />
                    <div className=" group relative flex flex-row-reverse gap-3 border-r-2 pr-8">
                        <input type="text" placeholder="جست و جو..." className=" outline-none" />
                        <Image
                            alt="search"
                            src='/images/svgs/icons/Search.svg'
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
                <div className=" xl:hidden flex items-center gap-3">
                    <Button onClick={() => setIsOpenNavbar(true)}>
                        <Image
                            alt="menu"
                            src='/images/svgs/icons/bar.svg'
                            width={20}
                            height={20}
                        />
                    </Button>
                    <Button onClick={() => setIsOpenSearchBox(true)}>
                        <Image
                            alt="menu"
                            src='/images/svgs/icons/search-dark.svg'
                            width={20}
                            height={20}
                        />
                    </Button>
                </div>
                <Image
                    alt="logo"
                    src='/images/png/logos/logo-en.png'
                    width={120}
                    height={32}
                    className=" xl:hidden"
                />
                <div className=" hidden xl:flex justify-center items-center gap-10 ">
                    <Link href='/'>
                        <span className=" hover:text-blue-500 transition-colors cursor-pointer">ورود | ثبت نام</span>
                    </Link>
                    <div className=" bg-blue-500  text-white  py-3 px-12 rounded-xl transition-colors ease-in-out cursor-pointer">
                        <span>ثبت آگهی</span>
                    </div>
                </div>
            </div>
            <div className={` fixed z-50 ${isOpenNavbar ? ' xl:relative left-0 right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.5)] xl:bg-inherit ' : '-right-[40rem] '}  xl:right-0 xl:relative transition-all duration-500 ease-in-out`} onClick={() => setIsOpenNavbar(false)}>
                <div className={`fixed xl:relative ${isOpenNavbar ? 'right-0 ' : '-right-[40rem]'} xl:hidden top-0 bottom-0 w-80 xl:w-auto z-50 border-l-1 xl:border-none  xl:rounded-none shadow-xl xl:shadow-none bg-white xl:bg-inherit justify-center items-center flex-col xl:flex-row gap-10 transition-all duration-500 ease-in-out`} onClick={(e) => e.stopPropagation()}>
                    <div className=" flex justify-start flex-col gap-3 p-5">
                        <div className=" flex justify-between items-center border-b-1 pb-3">

                            <Image
                                alt="logo"
                                src='/images/png/logos/logo-en.png'
                                width={120}
                                height={32}
                                className=" xl:hidden"
                            />
                            <DarkMode />

                        </div>
                        <div className=" flex flex-col border-b-1 pb-3">
                            {
                                navLinks.map(link => (
                                    <div key={link.id}>
                                        <MobileNavLink  {...link} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={` fixed z-50 ${isOpenSearchBox ? '  opacity-100 visible left-0 right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.5)] xl:bg-inherit ' : 'invisible opacity-0 left-0 right-0 bottom-0 top-0'} flex justify-center items-center xl:hidden xl:relative transition-all duration-500 ease-in-out`} onClick={() => setIsOpenSearchBox(false)}>
                <div className=" relative flex justify-center items-center w-full " >
                    <input type="text" placeholder="جستوجو..." className="  w-full pt-10 pb-5 px-5 mx-10 bg-inherit border-b-1 outline-none placeholder:text-zinc-100 text-lg text-white" onClick={(e) => e.stopPropagation()} />
                    <Image
                        alt="logo"
                        src='/images/svgs/icons/Search.svg'
                        width={30}
                        height={32}
                        className="absolute left-10 top-10"
                    />
                </div>

            </div>
        </>
    )
}
