import React from 'react'
import bgMobile from '../../assets/crew/background-crew-mobile.jpg'
import bgDesk from '../../assets/crew/background-crew-desktop.jpg'
import bgTablet from '../../assets/crew/background-crew-tablet.jpg'
import img from '../../assets/crew/image-mark-shuttleworth.png'
import { Bellefair, Barlow_Condensed, Barlow } from '@next/font/google'
const bellefair = Bellefair({
    weight:['400'],
    subsets:['latin'],
    variable:'--font-bellefair'
  })
  const barlow = Barlow_Condensed({
    subsets:['latin'],
    weight:['400','700'],
    variable:'--font-barlow'
  })
  const normalBarlow = Barlow({
    subsets:['latin'],
    weight: '400',
    variable:'--font-normalBarlow'
  })
const Crew = () => {
  return (
    <>
    <picture className='fixed w-screen h-screen -z-10'>
       <source srcSet={bgMobile.src} media="(max-width: 600px)" />
       <source srcSet={bgTablet.src} media="(max-width: 1200px)" />
       <img src={bgDesk.src} className='w-full h-full object-center' />

      </picture>
    <section className='flex-1 flex flex-col lg:overflow-hidden pb-6 lg:pb-0'>
    <h1 className={`${barlow.variable} text-base tracking-md font-barlow font-normal text-white uppercase lg:text-3xl mb-6 md:text-start text-center `}><span className='font-bold text-[rgba(255,255,255,0.5)] lg:ml-12 '>02</span> meet your crew</h1>
    <section className='gap-4 justify-center  lg:px-10 flex flex-col-reverse items-center md:flex-col  lg:grid lg:grid-cols-2 lg:content-evenly'>
         
        <div className='flex flex-col-reverse justify-center items-center  gap-6  flex-1 md:flex-col lg:items-start '>
          <div>

            <h2 className={`${bellefair.variable} font-belleFair text-[rgba(255,255,255,.5)] flex flex-col gap-1 uppercase font-normal text-base justify-center items-center md:text-2xl lg:justify-start lg:items-start`}> Mission Specialist
            <span className='text-white text-2xl leading-10 md:text-4xl'>MARK SHUTTLEWORTH</span> </h2>
            <p className={`${normalBarlow.variable} font-normalBarlw lg:leading-8 mx-auto text-sm text-center ch leading-6 text-secondary lg:text-start lg:mx-0`}>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
          </div>
            <div className='dots'>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
        <div className='flex-1 md:border-b-0 border-b border-b-underline md:w-auto w-[90%]'>

        <img src={img.src} className='max-w-[60%] mx-auto object-contain'  />
        </div>
      
    </section>
        </section>
    </>
  )
}

export default Crew