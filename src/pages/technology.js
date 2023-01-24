import React, { useState } from 'react'
import bgMobile from '../assets/technology/background-technology-mobile.jpg'
import bgDesk from '../assets/technology/background-technology-desktop.jpg'
import bgTablet from '../assets/technology/background-technology-tablet.jpg'
import { technology } from '@/data/data'
import Background from '@/components/Background'
import useChangeCurrent from '@/hooks/useChangeCurrent'


  const numbers = [1,2,3]
const Technology = () => {
  const {current,currentIndex, changeCurrent, fonts} = useChangeCurrent(technology);
   const {barlow, bellefair,normalBarlow } = fonts
  return (
    <>
    <section className='technology flex-1 w-full'>
    <h1 className={`${barlow.variable} text-base tracking-md font-barlow font-normal technology-title text-white uppercase lg:text-3xl mb-6 md:text-start text-center `}><span className='font-bold text-[rgba(255,255,255,0.5)]'>03</span> SPACE LAUNCH 101</h1>
    <div className='technology-img'>
        <picture className=''>
   <source srcSet={current.images.portrait.src} media="(min-width: 1024px)" />
  <img src={current.images.landscape.src} className='' />
        </picture>
    </div>
    <div className='technology-content lg:flex lg:flex-col lg:justify-center lg:gap-5'>
   

<h2 className={`${bellefair.variable} font-belleFair text-[rgba(255,255,255,.5)] flex flex-col gap-1 uppercase font-normal text-base justify-center items-center md:text-2xl lg:justify-start lg:items-start`}>
<span className='text-white text-2xl leading-10 md:text-4xl'>{current.name}</span> </h2>
<p className={`${normalBarlow.variable} font-normalBarlw lg:leading-8 mx-auto text-sm text-center ch leading-6 text-secondary lg:text-start lg:mx-0`}>{current.description}</p>

    </div>
    <ul className={`${bellefair.variable} font-belleFair technology-tab`}>
      {numbers.map((num,i) => <li key={i} className={`${currentIndex === i ? 'active' : ''} cursor-pointer`} onClick={() => changeCurrent(i)}>{num}</li>)}
    </ul>
    </section>
    </>
  )
}

export default Technology