import { useState } from 'react'
import Link from "next/link"

export default function LinksRouter({ nombre, estado }) {
  const [active, setActive] = useState(nombre[0] == estado ? "active" : "")
  return (
    <li className={active}>
      <Link href={nombre[1]}>{ nombre[0] }</Link>
    </li>
  )
}
