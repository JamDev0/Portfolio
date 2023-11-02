'use client'

import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from 'react';
import { TechBadge } from "../TechBadge";

interface Tech {
  title: string
  icon: React.ReactNode
  background: string
  color?: string
}

interface ExperienceCardProps {
  title: string
  image: StaticImageData | string
  period: string
  position: string
  description: string
  techs: Tech[]
  responsibilities: string[]
}

export function ExperienceCard({ title, description, image, period, position, techs, responsibilities }: ExperienceCardProps) {
  const [isTechsOpen, setIsTechsOpen] = useState(false)

  const techsContainerRef = useRef<HTMLDivElement | null>(null)

  const techsContainerHeight = techsContainerRef.current?.scrollHeight

  const [isResponsibilitiesOpen, setIsResponsibilitiesOpen] = useState(false)

  const responsibilitiesContainerRef = useRef<HTMLUListElement | null>(null)

  const responsibilitiesContainerHeight = responsibilitiesContainerRef.current?.scrollHeight

  function toggleTechs() {
    setIsTechsOpen(state => !state)
  }

  function toggleResponsibilities() {
    setIsResponsibilitiesOpen(state => !state)
  }

  return (
    <section className="flex flex-col items-center">
      <h4 className="heading-4 mb-4 md:heading-3">{title}</h4>

      <Image alt="Logo JDG" src={image} className="w-[9.375rem] h-[9.375rem] rounded-md mb-2 md:w-[12.5rem] md:h-[12.5rem]" />

      <p className="text-3 border-b border-primary-400 mb-4 md:text-2">{period}</p>

      <section className="flex flex-col gap-y-3">
        <section className="flex flex-col gap-y-2">
          <h5 className="heading-5 md:heading-4">Posição: {position}</h5>

          <p className="text-3 first-letter:pl-4 md:text-2">{description}</p>
        </section>

        <section className="flex flex-col">
          <button className="flex items-center gap-x-2 w-fit p-1" onClick={toggleTechs}>
            <h5 className="heading-5 md:heading-4">Tecnologias</h5>

            <CaretDown data-show={isTechsOpen} className="h-5 w-5 transition-transform duration-300 ease-in-out md:h-6 md:w-6 data-[show=true]:rotate-180" weight="bold" />
          </button>

          <div 
            ref={techsContainerRef} 
            data-show={isTechsOpen} 
            className="px-4 flex gap-x-2 transition-[height] duration-300 ease-in flex-wrap overflow-y-hidden [&>*]:first-of-type:mt-2" 
            style={{ 
              height: isTechsOpen ? techsContainerHeight : 0 
            }}
          >
            {
              techs.map(({ background, icon, title, color }) => (
                <TechBadge background={background} icon={icon} tech={title} color={color} key={title} />
              ))
            }
          </div>
        </section>

        <section className="flex flex-col">
          <button className="flex items-center gap-x-2 w-fit p-1" onClick={toggleResponsibilities}>
            <h5 className="heading-5 md:heading-4">Responsabilidades</h5>

            <CaretDown data-show={isResponsibilitiesOpen} className="h-5 w-5 transition-transform duration-300 ease-in-out md:h-6 md:w-6 data-[show=true]:rotate-180" weight="bold" />
          </button>

          <ul 
            ref={responsibilitiesContainerRef} 
            data-show={isResponsibilitiesOpen} 
            className="px-4 flex flex-col gap-y-1 transition-[height] duration-300 ease-in overflow-y-hidden text-3 md:text-2 [&>*]:first-of-type:mt-2" 
            style={{ 
              height: isResponsibilitiesOpen ? responsibilitiesContainerHeight : 0 
            }}
          >
            {
              responsibilities.map(responsibility => (
                <li className='flex gap-x-2' key={responsibility}>
                  <span>
                    🞄
                  </span>

                  <span>
                    {responsibility};
                  </span>
                </li>
              ))
            }
          </ul>
        </section>
      </section>
    </section>
  )
}