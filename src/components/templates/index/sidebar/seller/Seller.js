'use client'
import { useState } from "react"

export default function Seller() {

    const [isSelected, setIsSelected] = useState('all')

    return (
        <div className="bg-white px-5 flex justify-center flex-col shadow-lg shadow-zinc-100 w-full rounded-2xl" >
            <div className="flex justify-between items-center w-full py-5 cursor-pointer">
                <div className="flex items-center gap-2">
                    <span className="font-bold">فروشنده</span>
                    <p className="bg-orange-400 w-1.5 h-1.5 rounded-full" />
                </div>
            </div>
            <div className=" pb-5">
                <div className=" flex justify-between items-center border-1 border-stone-200 h-12 rounded-xl overflow-hidden">
                    <p className={` h-full flex justify-center items-center first:border-l-1 last:border-r-1 w-32 transition-all cursor-pointer ${isSelected === 'all' && 'bg-stone-200'}`} onClick={() => setIsSelected('all')}>همه</p>
                    <p className={` h-full flex justify-center items-center first:border-l-1 last:border-r-1 w-32 transition-all cursor-pointer ${isSelected === 'personal' && 'bg-stone-200'}`} onClick={() => setIsSelected('personal')}>شخصی</p>
                    <p className={` h-full flex justify-center items-center first:border-l-1 last:border-r-1 w-32 transition-all cursor-pointer ${isSelected === 'exhibition' && 'bg-stone-200'}`} onClick={() => setIsSelected('exhibition')}>نمایشگاه</p>
                </div>
            </div>
        </div>
    )
}
