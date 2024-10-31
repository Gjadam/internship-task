import Image from "next/image";

// Icons
import { IoIosArrowBack ,IoIosArrowDown } from "react-icons/io";
// Components
import Box from "./Box";

// DataBase 
import { dailyPrice } from "../../../../../../database/db";

export default function Header() {
    return (
        <div className=" group relative flex flex-col gap-5 p-5 shadow-lg bg-zinc-100 md:bg-inherit  shadow-zinc-100 rounded-2xl overflow-hidden -z-10 xl:z-0">
            <div className=" flex justify-between items-center">
                <div className=" flex justify-between md:justify-normal flex-row-reverse md:flex-row w-full md:w-auto  items-center gap-3">
                    <Image
                        alt="logo"
                        src='/images/png/logos/amico.png'
                        width={48}
                        height={26}
                    />
                    <span className=" font-bold">قیمت روز خودرو های آمیگو</span>
                </div>
                <div className=" hidden md:flex items-center gap-3 text-blue-500 cursor-pointer">
                    <span>مشاهده لیست قیمت</span>
                    <IoIosArrowBack className=" text-sm" />
                </div>
            </div>
            <div className=" flex flex-col gap-3 max-h-24 group-hover:max-h-screen transition-all duration-500">
                {
                    dailyPrice.map(item => (
                        <div key={item.id}>
                            <Box  {...item} />
                        </div>
                    ))
                }
            </div>
            <div className=" opacity-100 group-hover:opacity-0 md:hidden absolute bottom-0 left-0 flex justify-center items-center bg-zinc-100 w-full py-2 transition-opacity duration-300">
            <IoIosArrowDown/>
                </div>
        </div>
    )
}
