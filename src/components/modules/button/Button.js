
export default function Button({children, onClick}) {
  return (
    <div className=" flex justify-center items-center bg-zinc-100 min-w-12 min-h-12 xl:min-w-14 xl:min-h-14 rounded-2xl cursor-pointer" onClick={onClick}>
        {children}
    </div>
  )
}
