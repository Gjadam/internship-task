'use client'

import Accordion from "./accordions/accordion/Accordion";
import Filters from "./filters/Filters";

// Database
import { accordions } from "../../../../../database/db";
import MultiAccordion from "./accordions/multiAccordion/MultiAccordion";
import Seller from "./seller/Seller";
import RadioBox from "./radioBox/RadioBox";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Sidebar() {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    const [isBottom, setIsBottom] = useState(false);  
    const handleScroll = () => {  
        if (  
          window.innerHeight + document.documentElement.scrollTop  
          !== document.documentElement.offsetHeight  
        ) {  
          setIsBottom(false);  
        } else {  
          setIsBottom(true);  
        }  
      };  
    
      useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  
        
        return () => {  
          window.removeEventListener('scroll', handleScroll);  
        };  
      }, []);  


    return (
        <>
        <div className={` fixed z-50 ${isOpenSidebar ? ' xl:relative left-0 right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.5)] xl:bg-inherit ' : '-right-[40rem] '}  xl:right-0 xl:relative transition-all duration-500 ease-in-out`} onClick={() => setIsOpenSidebar(false)}>
            <div className={` fixed xl:relative${isOpenSidebar ? 'right-0 ' : '-right-[40rem]'}  overflow-y-auto  xl:right-0 top-0 bottom-0 xl:relative  h-full  z-10 xl:z-0  bg-white xl:bg-inherit px-5 shadow-xl xl:shadow-none flex flex-col gap-5 min-w-80 max-w-80 transition-all  duration-500 ease-in-out` } onClick={(e) => e.stopPropagation()}>

                <Filters />
                {
                    accordions.slice(0, 3).map(accordion => (
                        Array.isArray(accordion) ?
                        <div key={accordion.id}>
                        <MultiAccordion accordion={accordion} />
                    </div>
                            :
                            <div key={accordion.id}>
                                <Accordion  {...accordion} />
                            </div>
                    ))
                }
                <Seller />
                {
                    accordions.slice(3, 4).map((accordion) => (
                        Array.isArray(accordion) ?
                        <div key={accordion.id}>
                            <MultiAccordion accordion={accordion} />
                        </div>
                            :
                            <div key={accordion.id}>
                                <Accordion   {...accordion} />
                            </div>
                    ))
                }
                <RadioBox />
                {
                    accordions.slice(4).map(accordion => (
                        Array.isArray(accordion) ?
                        <div key={accordion.id}>
                        <MultiAccordion accordion={accordion} />
                        </div>
                            :
                            <div key={accordion.id}>
                                <Accordion  {...accordion} />
                            </div>
                    ))
                }
            </div>
        </div>
        <div dir="ltr" className={` fixed bottom-2 left-5 right-5  sm:right-auto   xl:hidden z-50 cursor-pointer `} onClick={() => setIsOpenSidebar(true)}>
            <div className={` flex justify-center items-center gap-2 text-center bg-primary  h-14  overflow-hidden ${isBottom ? 'w-14' : "w-full sm:w-14"} text-white rounded-full transition-all duration-300`}>
                <p className={` sm:hidden  ${isBottom ? 'opacity-0 invisible absolute': 'opacity-100 transition-all delay-500 ease-out'} `}>اعمال فیلتر آگهی ها</p>
                <Image
                alt="icon"
                src='/images/png/icons/filter.png'
                width={16}
                height={20}
                />
                </div>
            </div>
                </>
    )
}
