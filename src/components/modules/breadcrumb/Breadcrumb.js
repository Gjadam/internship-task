import Image from "next/image";

// Icons
import { IoIosArrowBack } from "react-icons/io";

export default function Breadcrumb() {
    return (
        <div className=" flex items-center gap-3">
            <div className=" flex items-center gap-3">
                <Image
                    alt="home"
                    src='/images/png/icons/Home.png'
                    width={14}
                    height={14}
                />
                <span className=" text-sm pt-0.5">همکار</span>
                <div className="pt-0.5 text-zinc-400">
                <IoIosArrowBack />
                </div>
            </div>
            <div className=" flex items-center gap-3">
                <span className=" text-sm pt-0.5">همه آگهی ها</span>
                <div className="pt-0.5 text-zinc-400">
                <IoIosArrowBack />
                </div>
            </div>
            <div className=" flex items-center gap-3">
                <span className=" text-sm text-zinc-400 pt-0.5">خودرو</span>

            </div>
        </div>
    )
}
