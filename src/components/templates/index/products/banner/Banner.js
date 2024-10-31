import Image from "next/image";

export default function Banner() {
    return (
        <div className=" relative flex justify-center lg:justify-between items-center p-10 w-full  bg-banner-liner h-auto md:h-36  rounded-[18px] overflow-hidden -z-10 xl:z-0">
            <div className=" flex items-center flex-wrap gap-5">
                <Image
                    alt="logo"
                    src='/images/png/banner/logo.png'
                    width={245}
                    height={64}
                />
                <Image
                    alt="logo"
                    src='/images/png/banner/line.png'
                    width={1.2}
                    height={0}
                    className=" hidden md:block"
                />
                <div className=" font-bold text-center">
                    <p className=" text-2xl">همکار و همراه شما</p>
                    <p className=" text-lg">در خرید و فروش خودرو</p>
                </div>
            </div>
            <div className=" hidden lg:block">
                <Image
                    alt="logo"
                    src='/images/png/banner/banner.png'
                    width={404}
                    height={582}
                    className=" absolute left-0 -top-16"
                />
            </div>

        </div>
    )
}
