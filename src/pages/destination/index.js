import React from 'react'
import { Bellefair, Barlow_Condensed, Barlow } from '@next/font/google'
import bgMobile from '../../assets/destination/background-destination-mobile.jpg'
import bgDesk from '../../assets/destination/background-destination-desktop.jpg'
import bgTablet from '../../assets/destination/background-destination-tablet.jpg'
import Moon from '../../assets/destination/image-moon.webp'

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
const Destination = () => {
  return (
    <>
     <picture className='fixed w-screen h-screen -z-10'>
       <source srcSet={bgMobile.src} media="(max-width: 600px)" />
       <source srcSet={bgTablet.src} media="(max-width: 1200px)" />
       <img src={bgDesk.src} className='w-full h-full object-center' />

      </picture>
    <section className={`${barlow.variable} font-barlow pb-7 px-4 flex flex-col justify-center flex-1 `}>
        <h1 className={`${barlow.variable} text-base tracking-md font-barlow font-normal text-white uppercase lg:text-3xl mb-6 md:text-start text-center `}><span className='font-bold text-[rgba(255,255,255,0.5)] lg:ml-12 '>01</span> Pick your Destination</h1>

        <section className='flex items-center justify-around flex-col lg:flex-row gap-8'>
         <img src={Moon.src} className='max-w-[60%]' />
         <div className='flex flex-col gap-6 lg:items-start items-center'>
            <nav>
                <ul className='flex text-secondary tracking-md uppercase lg:text-base gap-8 underline-text'>
                    <li>Moon</li>
                    <li>Mars</li>
                    <li>Europa</li>
                    <li>Titan</li>
                </ul>
            </nav>
            <h2 className={`${bellefair.variable} lg:text-700 md:text-7xl text-white font-belleFair uppercase text-200`}>Moon</h2>
            <p className={`text-secondary  lg:text-lg md:text-base lg:text-start text-center border-b border-b-[rgba(56, 59, 75, 1)] lg:width-max lg:leading-8 md:max-w-xl font-normal lg:pb-9 md:pb-4 max-w-sm ${normalBarlow.variable} font-normalBarlw lg:leading-sm leading-6 pb-6 `}>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className={`${barlow.variable} font-barlow flex lg:gap-8 md:gap-20 flex-col md:flex-row  gap-5`}>
                <p className='uppercase text-secondary text-sm flex flex-col gap-3 items-center'>
                    avg. ditance
                    <span className={`${bellefair.variable} font-belleFair text-white lg:text-3xl text-300`}>384,400 km</span>
                </p>
                <p className='uppercase text-secondary text-sm flex flex-col gap-3 items-center'>
                    est. travle time
                    <span className={`${bellefair.variable} font-belleFair text-white lg:text-3xl text-300 `}>3 days</span>
                </p>
            </div>
         </div>
        </section>
    </section>
    </>
  )
}

export default Destination