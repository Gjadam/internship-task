
// Components
import Box from "./Box";

export default function Filters() {
  return (
    <div className=" flex flex-col gap-3 shadow-lg shadow-zinc-100 p-5 rounded-2xl">
    <div className=" flex justify-between items-center">
        <span className=" font-bold">فیلترهای انتخاب شده</span>
        <button className=" text-red-500">حذف همه</button>
    </div>
    <div className="flex justify-start items-start flex-col gap-2">
    <Box text="فروشنده: شخصی"/>
    <Box text="برند: آلفارومئو"/>
    <Box text="شهر: چهارمحال بختیاری"/>
    <Box text="شاسی: سدان"/>
    </div>
</div>
  )
}
