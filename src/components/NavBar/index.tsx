'use client'

import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown";
import { useState } from 'react';
import { NavItem } from "./NavItem";

export function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  function onCollapseButtonClick() {
    setIsCollapsed(state  => !state)
  }

  return (
    <div className="sticky top-0">
      <header className="flex justify-center bg-container-900 px-8 py-3 z-10 relative">
        <button onClick={onCollapseButtonClick}>
          <CaretDown data-collapsed={isCollapsed} className="w-10 h-10 transition-transform duration-300 data-[collapsed=false]:rotate-180 " />
        </button>
      </header>

      <nav data-collapsed={isCollapsed} className="flex flex-col items-stretch bg-container-800 absolute w-full transition-all duration-[400ms] ease-out data-[collapsed=true]:-translate-y-full">
        <NavItem href="">
          Home
        </NavItem>
        <NavItem href="">
          Projetos
        </NavItem>
      </nav>
    </div>
  )
}