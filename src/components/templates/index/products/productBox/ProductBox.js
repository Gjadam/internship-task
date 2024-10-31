import Image from "next/image";

export default function ProductBox({ imgUrl, name, model, run, gearbox, isExist, location, price, advancePay, monthly }) {
    return (
        <div className="flex items-center flex-col gap-3 relative w-full md:h-56 md:p-5 shadow-lg bg-white shadow-zinc-100 rounded-2xl -z-10 xl:z-0">
            <div className=" flex items-start  gap-5 h-full w-full ">
                <div className="  rounded-tr-2xl rounded-bl-2xl md:rounded-2xl overflow-hidden h-36 md:h-full w-96 relative">

                    <Image
                        alt="product"
                        src={imgUrl}
                        width={0}
                        height={0}
                        sizes="100%"
                        className=" w-full h-full object-cover"
                    />
                    <div className="   absolute top-3 right-3 bg-white w-14 p-0.5 rounded-2xl hidden md:flex justify-center items-center gap-2">
                        <Image
                            alt="icon"
                            src='/images/svgs/icons/Camera.svg'
                            width={14}
                            height={14}
                        />
                        <span className=" text-sm pt-0.5 text-zinc-500">5</span>
                    </div>
                </div>
                <div className=" flex flex-col justify-between h-full w-full pl-5 md:pl-0">
                    <div className=" flex flex-col gap-5">
                        <div className=" flex items-center gap-5">
                            <p className="  text-sm md:text-lg font-bold">{name}</p>
                            <div className=" bg-zinc-100 text-zinc-500 px-3 py-1.5 text-xs md:text-sm rounded-lg">
                                <span>10 دقیقه پیش</span>
                            </div>
                        </div>
                        <div className=" flex items-center gap-3">
                            <span className=" text-xs md:text-sm border-r-2 first:border-none last:border-r-2 first:pr-0 pr-3">مدل {model}</span>
                            <span className=" text-xs md:text-sm border-r-2 first:border-none last:border-r-2 first:pr-0 pr-3">{run} کیلومتر</span>
                            <span className=" text-xs md:text-sm border-r-2 first:border-none last:border-r-2 first:pr-0 pr-3">{gearbox}</span>
                        </div>
                        <div className=" flex justify-start items-center">

                            {
                                isExist ? (
                                    <div className=" flex gap-2 bg-zinc-100 text-zinc-500 px-3 py-2 text-xs md:text-sm rounded-lg">
                                        <Image
                                            alt="icon"
                                            src='/images/svgs/icons/Shop.svg'
                                            width={16}
                                            height={16}
                                        />
                                        <span>نمایشگاه</span>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className=" hidden md:flex justify-between items-end">
                        <div className=" flex flex-col gap-5">
                            <div className=" flex items-center gap-2">
                                <Image
                                    alt="icon"
                                    src='/images/svgs/icons/Location.svg'
                                    width={16}
                                    height={16}
                                />
                                <span>{location}</span>
                            </div>
                        </div>
                        <div className=" flex items-end flex-col gap-2">
                            {
                                price ? (
                                    <div className=" flex gap-1">
                                        <span className=" font-bold text-lg">{price.toLocaleString()}</span>
                                        <div className="">تومان</div>
                                    </div>
                                ) : (
                                    <>
                                        <div className=" flex gap-1">
                                            <span className=" font-bold text-lg">{advancePay.toLocaleString()}</span>
                                            <div className="">پیش</div>
                                        </div>
                                        <div className=" flex gap-1">
                                            <span className=" font-bold text-lg">{monthly.toLocaleString()}</span>
                                            <div className="">ماهیانه</div>
                                        </div>
                                    </>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex md:hidden w-full justify-between items-end text-sm pb-5 px-3">
                <div className=" flex flex-col gap-5">
                    <div className=" flex items-center gap-2">
                        <Image
                            alt="icon"
                            src='/images/svgs/icons/Location.svg'
                            width={16}
                            height={16}
                        />
                        <span>{location}</span>
                    </div>
                </div>
                <div className=" flex items-end flex-col gap-2">
                    {
                        price ? (
                            <div className=" flex gap-1">
                                <span className=" font-bold  text-sm md:text-lg">{price.toLocaleString()}</span>
                                <div className="">تومان</div>
                            </div>
                        ) : (
                            <>
                                <div className=" flex gap-1">
                                    <span className=" font-bold  text-sm md:text-lg">{advancePay.toLocaleString()}</span>
                                    <div className="">پیش</div>
                                </div>
                                <div className=" flex gap-1">
                                    <span className=" font-bold text-sm md:text-lg">{monthly.toLocaleString()}</span>
                                    <div className="">ماهیانه</div>
                                </div>
                            </>
                        )
                    }

                </div>
            </div>
            <div className=" absolute left-0 top-5 flex items-center gap-1 md:gap-4">
                <Image
                    alt="badge"
                    src='/images/svgs/icons/verified-badge.svg'
                    width={36}
                    height={36}
                    sizes="100%"
                    className=" w-3 md:w-8"
                />
                <Image
                    alt="badge"
                    src='/images/svgs/icons/hamcar-badge.svg'
                    width={0}
                    height={96}
                    sizes="100%"
                    className=" w-3 md:w-8"
                />
            </div>
        </div>
    )
}
