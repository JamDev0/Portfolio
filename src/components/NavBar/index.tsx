'use client'

import Logo from '@/assets/images/Logo.svg';
import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { NavItem } from "./NavItem";

const paths = [
  ['Home', '/'],
  ['Projetos', '/projects'],
]

export function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  function onCollapseButtonClick() {
    setIsCollapsed(state  => !state)
  }

  const navItems = paths.map(path => (
    <NavItem key={path[0]} href={path[1]}>
      {path[0]}
    </NavItem>
  ))

  return (
    <div className="sticky top-0">
      <header className="flex justify-center bg-container-900 px-8 py-3 z-10 relative">
        <button onClick={onCollapseButtonClick} className="md:hidden">
          <CaretDown data-collapsed={isCollapsed} className="w-10 h-10 transition-transform duration-300 data-[collapsed=false]:rotate-180 " />
        </button>

        <nav className="hidden md:flex">
          {navItems}
        </nav>

        <Link href='/' className='absolute left-14 top-1/2 -translate-y-1/2 hidden md:block'>
          <Image src={Logo} alt="Juan Garcia'a logo" className="w-12 h-12 rounded-md" width={150} height={150} />
        </Link>
      </header>

      <nav data-collapsed={isCollapsed} className="flex flex-col items-stretch bg-container-800 absolute w-full transition-all duration-[400ms] ease-out data-[collapsed=true]:-translate-y-full md:hidden">
        {navItems}
      </nav>
    </div>
  )
}