import React from 'react'
import bgMobile from '../assets/technology/background-technology-mobile.jpg'
import bgDesk from '../assets/technology/background-technology-desktop.jpg'
import bgTablet from '../assets/technology/background-technology-tablet.jpg'
import img from '../assets/technology/image-launch-vehicle-landscape.jpg'
import imgPort from '../assets/technology/image-launch-vehicle-portrait.jpg'


import { Bellefair, Barlow_Condensed, Barlow } from '@next/font/google'

const bellefair = Bellefair({
    weight:'400',
    subsets:['latin'],
    variable:'--font-bellefair'
  })
  const barlow = Barlow_Condensed({
    subsets:['latin'],
    weight:'400',
    variable:'--font-barlow'
  })
   const normalBarlow = Barlow({
    subsets:['latin'],
    weight: '400',
    variable:'--font-normalBarlow'
  })
const Technology = () => {
  return (
    <>
     <picture className='fixed w-screen h-screen -z-10'>
       <source srcSet={bgMobile.src} media="(max-width: 600px)" />
       <source srcSet={bgTablet.src} media="(max-width: 1200px)" />
       <img src={bgDesk.src} className='w-full h-full object-center' />

      </picture>
    <section className='technology flex-1 w-screen'>
    <h1 className={`${barlow.variable} text-base tracking-md font-barlow font-normal technology-title text-white uppercase lg:text-3xl mb-6 md:text-start text-center `}><span className='font-bold text-[rgba(255,255,255,0.5)]'>03</span> SPACE LAUNCH 101</h1>
    <div className='technology-img'>
        <picture>
   <source srcSet={imgPort.src} media="(min-width: 1024px)" />
  <img src={img.src} className='' />
        </picture>
    </div>
    <div className='technology-content lg:flex lg:flex-col lg:justify-center lg:gap-5'>
   

<h2 className={`${bellefair.variable} font-belleFair text-[rgba(255,255,255,.5)] flex flex-col gap-1 uppercase font-normal text-base justify-center items-center md:text-2xl lg:justify-start lg:items-start`}> Mission Specialist
<span className='text-white text-2xl leading-10 md:text-4xl'>MARK SHUTTLEWORTH</span> </h2>
<p className={`${normalBarlow.variable} font-normalBarlw lg:leading-8 mx-auto text-sm text-center ch leading-6 text-secondary lg:text-start lg:mx-0`}>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>

    </div>
    <ul className={`${bellefair.variable} font-belleFair technology-tab`}>
      <li className='active'>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    </section>
    </>
  )
}

export default Technology