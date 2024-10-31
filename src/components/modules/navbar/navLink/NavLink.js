import Link from 'next/link'

export default function NavLink({ path, text }) {
  return (
    <Link href={path}>
      <p>{text}</p>
    </Link>
  )
}
