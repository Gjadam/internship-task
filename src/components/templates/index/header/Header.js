import Image from "next/image";
// Icons
import { PiLineVertical } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import Button from "@/components/modules/button/Button";

export default function Header() {
    return (
        <div className=" flex justify-between items-center">
            <p className=" xl:hidden font-bold">آگهی های خرید خودرو</p>
            <div className=" hidden xl:flex  items-center gap-3 text-lg">
                <p className=" font-bold">همه آگهی های فروش خودرو فلان بیسار</p>
                <p>( ۱،۲۳۴ آگهی )</p>
            </div>
            <div className=" flex items-center gap-2">
                <div className=" xl:hidden">
                    <Button>
                        <Image
                            alt="clock"
                            src='/images/svgs/icons/time-dark.svg'
                            width={16}
                            height={16}
                        />
                    </Button>
                </div>
                <div className=" hidden xl:flex items-center gap-3">
                    <Image
                        alt="clock"
                        src='/images/svgs/icons/Time.svg'
                        width={16}
                        height={16}
                    />
                    <p className=" text-blue-500">جستوجو های اخیر من</p>
                </div>
                <PiLineVertical className=" hidden xl:block text-3xl text-zinc-300" />
                <div className=" flex items-center gap-5">
                    <Button>
                        <Image
                            alt="menu"
                            src='/images/svgs/icons/Menu.svg'
                            width={20}
                            height={20}
                        />
                    </Button>
                    <div className=" flex justify-between items-center gap-3 bg-zinc-100 xl:w-72 h-14 rounded-2xl p-5">
                        <span className=" hidden xl:block text-xs xl:text-base">ترتیب آگهی ها</span>
                        <span className=" xl:hidden text-xs xl:text-base">ترتیب آگهی</span>
                        <IoIosArrowDown className=" text-zinc-400 text-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
