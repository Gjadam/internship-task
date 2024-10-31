import Image from "next/image";

export default function Box({ name, model, gearbox, priceSite, fluctuation, price }) {
    return (
        <>
            <div className=" hidden md:flex justify-between items-center gap-5">
                <div className=" flex items-center flex-wrap gap-1">
                    <p>{name}</p>
                    <p className=" text-zinc-400">{gearbox}،</p>
                    <p className=" text-zinc-400">{model}</p>
                </div>
                <div className="">
                    <p>قیمت {priceSite} - 3 روز پیش</p>
                </div>
                <div className=" flex items-center gap-5 ">
                    <Image
                        alt="icon"
                        src={fluctuation < 0 ? '/images/svgs/icons/descending.svg' : '/images/svgs/icons/ascending.svg'}
                        width={48}
                        height={20}
                        className=" hidden md:block"
                    />
                    <div className=" flex  items-center gap-2">
                        <span className={`${fluctuation < 0 ? "text-red-500" : "text-teal-500"} `}>{fluctuation < 0 ? -fluctuation : fluctuation}%</span>
                        <Image
                            alt="icon"
                            src={fluctuation < 0 ? '/images/svgs/icons/descending-arrow.svg' : '/images/svgs/icons/ascending-arrow.svg'}
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
                <div className=" flex items-center gap-1">
                    <span className=" font-bold">{price.toLocaleString()}</span>
                    <Image
                        alt="icon"
                        src='/images/svgs/icons/Toman.svg'
                        width={30}
                        height={24}
                    />
                </div>
            </div>
            <div className=" md:hidden flex flex-col gap-3 text-sm">
                <div className=" flex justify-between items-center flex-wrap gap-1">
                    <p>{name}</p>
                    <div className=" flex items-center gap-1">
                        <span className=" font-bold">{price.toLocaleString()}</span>
                        <Image
                            alt="icon"
                            src='/images/svgs/icons/Toman.svg'
                            width={30}
                            height={24}
                        />
                    </div>
                </div>
                <div className=" flex justify-between items-center flex-wrap gap-1">
                    <div className=" flex items-center gap-3">
                        <p className=" ">{gearbox}</p>
                        <span className="text-zinc-400">|</span>
                        <p className=" ">{model}</p>
                    </div>
                    <div className=" flex  items-center gap-2">
                        <span className={`${fluctuation < 0 ? "text-red-500" : "text-teal-500"} `}>{fluctuation < 0 ? -fluctuation : fluctuation}%</span>
                        <Image
                            alt="icon"
                            src={fluctuation < 0 ? '/images/svgs/icons/descending-arrow.svg' : '/images/svgs/icons/ascending-arrow.svg'}
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
                <div className=" flex justify-between items-center flex-wrap gap-1 text-zinc-400">
                    <p>8 ساعت پیش</p>
                    <p>قیمت {priceSite}</p>
                </div>
            </div>
        </>
    )
}
