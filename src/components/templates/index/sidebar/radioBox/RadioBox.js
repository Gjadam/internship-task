
export default function RadioBox() {
    return (
        <div className="bg-white px-5 flex justify-center flex-col shadow-lg shadow-zinc-100 w-full rounded-2xl" >
            <div className="flex justify-between items-center flex-col gap-5 w-full py-5 cursor-pointer">
                <label htmlFor="has-image" className="flex justify-between items-center gap-2 w-full ">
                    <span className="font-bold">عکس دار</span>
                    <input type="checkbox" id="has-image" className=" scale-150"/>
                </label>
                <label htmlFor="has-price" className="flex justify-between items-center gap-2 w-full ">
                    <span className="font-bold">قیمت دار</span>
                    <input type="checkbox" id="has-price" className=" scale-150"/>
                </label>
            </div>

        </div>
    )
}
