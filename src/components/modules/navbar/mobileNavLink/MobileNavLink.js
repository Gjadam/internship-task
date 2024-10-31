import Link from "next/link";

export default function MobileNavLink({ path, text }) {
    return (
        <Link href={path}>
            <p className=" bg-white hover:bg-blue-500 hover:text-white  p-2  rounded w-full transition-colors duration-300">{text}</p>
        </Link>
    )
}
