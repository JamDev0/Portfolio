'use client'

import PointersPng from '@/assets/images/Pointers.svg';
import { HandPointing } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useMemo, useState } from 'react';

export function FeedbackCounter() {
  const [animateIncrease, setAnimateIncrease] = useState(false)

  const [animateDecrease, setAnimateDecrease] = useState(false)

  const [counter, setCounter] = useState(0)
  
  const [animateIncreaseBack, setAnimateIncreaseBack] = useState(false)

  const counterAbsolute = useMemo(() => Math.abs(counter), [counter])

  const isZero = useMemo(() => counter === 0, [counter])

  const isPositive = useMemo(() => counter > 0, [counter])

  const intensity = useMemo(() => {
    switch(true) {
      case counterAbsolute >= 3:
        return 1
        
      case counterAbsolute >= 2:
        return 0.65;
        
      case counterAbsolute >= 1:
        return 0.45;
    }
  }, [counterAbsolute])

  const highlightColor = useMemo(() => isPositive ? `rgb(12, 233, 12, ${intensity})` : `rgb(233, 71, 12, ${intensity})`, [isPositive, intensity])

  const counterBackCounter = useMemo(() => ''.padStart(String(counterAbsolute).length, '8'), [counterAbsolute]) 

  function increase() {
    setCounter(state => state + 1)
    setAnimateIncrease(true)
  }

  function decrease() {
    setCounter(state => state - 1)
    setAnimateDecrease(true)
  }

  return (
    <div className="relative flex flex-col items-center justify-center px-2 gap-y-2 md:gap-y-4">
      <div className='absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 h-full aspect-[741/172] opacity-50'>
        <Image alt="A messy collection of pointing hands on green and orange colors" src={PointersPng} className=" w-full h-full" />
      </div>

      <div className='absolute right-0 translate-x-full top-1/2 -translate-y-1/2 h-full aspect-[741/172] scale-x-[-1] opacity-50'>
        <Image alt="A messy collection of pointing hands on green and orange colors" src={PointersPng} className=" w-full h-full" />
      </div>

      <div className='relative'>
        <button 
          disabled={animateIncrease || animateDecrease} 
          data-animate={animateIncrease} 
          className="relative z-10 block data-[animate=true]:animate-counter-increase transition-transform" 
          onAnimationEnd={() => setAnimateIncrease(false)} 
          onClick={increase}
        >
          <HandPointing 
            className="w-10 h-10 transition-colors md:w-14 md:h-14" 
            style={{ 
              color: (isZero || !isPositive) ? 'rgb(12, 233, 12, 0.45)' : highlightColor 
            }} 
          />
        </button>

        <div 
          className='top-0 absolute hidden data-[animate=true]:block data-[animate=true]:animate-counter-increase-slow'
          data-animate={animateIncreaseBack} 
          onAnimationEnd={() => setAnimateIncreaseBack(false)} 
        >
          <span className='py-1 px-2 text-sm md:text-base w-[9.5rem] text-background absolute -top-1 font-semibold -translate-y-full bg-tertiary-400/90 text-center left-1/2 rounded -translate-x-1/2' >São Paulo - SP</span>

          <HandPointing 
            className="w-10 h-10 md:w-14 md:h-14 text-tertiary-400/30"
          />
        </div>
      </div>

      <div 
        style={{ 
          borderColor: isZero ? 'transparent' : highlightColor 
        }} 
        className="bg-container-800 relative p-1 md:p-2 pl-[clamp(4px,0.2em,9px)] md:pl-[clamp(4px,0.2em,9px)] md:border-2 h-12 md:h-[4.5rem] text-4xl md:text-6xl font-digital-dismay border border-transparent flex justify-center items-center w-fit rounded-md leading-[0px]"
      >
        <span 
          data-is-zero={isZero} 
          className="text-text relative transition-colors z-10 data-[is-zero=true]:text-[#5C6063]"
        >
          {counterAbsolute}
        </span>

        <span className="text-container-700/60 absolute left-[clamp(4px,0.2em,9px)] md:left-[clamp(4px,0.2em,9px)]">
          {counterBackCounter}
        </span>
      </div>


      <div className='relative'>
        <button 
          disabled={animateIncrease || animateDecrease} 
          data-animate={animateDecrease} 
          className="relative block data-[animate=true]:animate-counter-decrease" 
          onAnimationEnd={() => setAnimateDecrease(false)} 
          onClick={decrease}
        >
          <HandPointing 
            className="w-10 h-10 rotate-180 transition-colors md:w-14 md:h-14" 
            style={{ color: (isZero || isPositive) ? 'rgb(233, 71, 12, 0.45)' : highlightColor }} 
          />
        </button>

        <div 
          className='top-0 absolute hidden data-[animate=true]:block data-[animate=true]:animate-counter-decrease-slow'
          data-animate={animateIncreaseBack} 
          onAnimationEnd={() => setAnimateIncreaseBack(false)} 
        >
          <HandPointing 
            className="w-10 h-10 md:w-14 md:h-14 rotate-180 text-secondary-400/30"
          />

          <span className='py-1 px-2 text-sm md:text-base w-[9.5rem] text-background absolute -bottom-1 font-semibold translate-y-full bg-secondary-400/90 text-center left-1/2 rounded -translate-x-1/2' >São Paulo - SP</span>
        </div>
      </div>


      <button onClick={() => setAnimateIncreaseBack(true)}>Teste</button>
    </div>
  )
}