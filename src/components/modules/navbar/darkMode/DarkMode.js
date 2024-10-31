'use client'

import Image from "next/image"
import { useState } from "react"

export default function DarkMode() {
  
    const [isDarkModeOn, setIsDarkModeOn] = useState(false)

    return (
    <div className=" relative bg-zinc-200 w-10 x h-6  rounded-2xl cursor-pointer" onClick={() => setIsDarkModeOn(!isDarkModeOn)}>
    <Image
        alt="logo"
        src='/images/svgs/icons/sun.svg'
        width={20}
        height={20}
        className={` absolute ${isDarkModeOn ? " right-[18px]": "right-0.5"}  bottom-0.5 transition-all `}
    />
    </div>
  )
}
