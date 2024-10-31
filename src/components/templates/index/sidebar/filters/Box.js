// Icons
import { FaTimes } from "react-icons/fa";

export default function Box({text}) {
  return (
    <div className="  flex justify-between items-center gap-5 py-1 px-2 border-1 border-blue-500 text-blue-500 bg-blue-100 rounded-2xl text-sm">
    <span>{text}</span>
    <FaTimes />
</div>
  )
}
