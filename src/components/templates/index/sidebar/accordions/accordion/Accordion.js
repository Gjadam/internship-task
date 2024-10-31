'use client'  

import { useState } from "react";  
// Icons  
import { IoIosArrowDown } from "react-icons/io";  

export default function Accordion({ text, isSelected }) {  
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);  

  return (  
    <div className="bg-white px-5 flex justify-center flex-col shadow-lg shadow-zinc-100 w-full rounded-2xl" onClick={() => setIsOpenAccordion(!isOpenAccordion)}>  
      <div className="flex justify-between items-center w-full py-5 cursor-pointer">  
        <div className="flex items-center gap-2">  
          <span className="font-bold">{text}</span>  
          {isSelected && <p className="bg-orange-400 w-1.5 h-1.5 rounded-full" />}  
        </div>  
        <IoIosArrowDown className={`text-zinc-400 text-2xl transition-transform duration-300 ${isOpenAccordion ? 'rotate-180' : 'rotate-0'}`} />  
      </div>  
      <div className={`flex flex-col w-full  transition-all duration-300 ease-in-out ${isOpenAccordion ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`} onClick={(e) => e.stopPropagation()}>  
      <p className="pb-5">محتوای مربوط به {text}</p>  
      </div>  
    </div>  
  );  
}