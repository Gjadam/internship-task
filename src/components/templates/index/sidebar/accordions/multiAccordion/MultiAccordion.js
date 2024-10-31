'use client'
import { useState } from "react";  
import { IoIosArrowDown } from "react-icons/io";  

export default function MultiAccordion({ accordion }) {  
  const [openIndex, setOpenIndex] = useState(null); // برای ردیف باز شده فعلی  

  const toggleAccordion = (index) => {  
    if (openIndex === index) {  
      setOpenIndex(null); // اگر روی ردیف باز شده کلیک شود، آن را ببندید  
    } else {  
      setOpenIndex(index); // ردیف جدید را باز کنید  
    }  
  };  

  return (  
    <div className="bg-white px-5 flex justify-center flex-col shadow-lg shadow-zinc-100 w-full rounded-2xl">  
      {accordion.map((item, index) => (  
        <div key={item.id} className="border-t-1 first:border-none last:border-t-1 py-5">  
          <div className="flex justify-between items-center w-full cursor-pointer" onClick={() => toggleAccordion(index)}>  
            <div className="flex items-center gap-2">  
              <span className="font-bold">{item.text}</span>  
              {item.isSelected && (  
                <p className="bg-orange-400 w-1.5 h-1.5 rounded-full" />  
              )}  
            </div>  
            <IoIosArrowDown className={`text-zinc-400 text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />  
          </div>  
          <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>  
            <p className="py-5">محتوای مربوط به {item.text}</p>  
          </div>  
        </div>  
      ))}  
    </div>  
  );  
}