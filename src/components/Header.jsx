"use client"
import './Header.css'
import { Kumbh_Sans } from 'next/font/google'
import LinksRouter from './LinksRouter'
import { useState } from 'react'

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  style: ['normal'],
})

export default function Header() {
  const [seccion, setSeccion ] = useState("Promociones")

  return (
    <header className={`header ${kumbhSans.className}`}>
      <div className='logo'>
        <a href='/'>
          <img src='/blife-logo.svg' width="166" height="50"/>
        </a>
      </div>
      <nav className="header-nav">
        <ul className="header-list-router">
          <LinksRouter nombre={["Productos","/"]} estado={seccion} />
          <LinksRouter nombre={["Promociones", "/promociones"]} estado={seccion} />
          <LinksRouter nombre={["Nosotros", "/"]} estado={seccion} />
        </ul>
        <ul className="header-list-admin">
          <li><img src='/search-interface-symbol 1.svg' width="25" height="25" /></li>
          <li><img src='/user 1.svg' width="25" height="25" /></li>
          <li>
            <img src='/shopping-bag 1.svg' width="25" height="25" />
            <span>0</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
