import Head from 'next/head'
import Image from 'next/image'
import { Bellefair, Barlow_Condensed, Barlow } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import bgMobile from '../assets/home/background-home-mobile.jpg'
import bgDesk from '../assets/home/background-home-desktop.jpg'
import bgTablet from '../assets/home/background-home-tablet.jpg'


import { useState } from 'react'

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

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <picture className='fixed w-screen h-screen -z-10'>
       <source srcSet={bgMobile.src} media="(max-width: 600px)" />
       <source srcSet={bgTablet.src} media="(max-width: 1200px)" />
       <img src={bgDesk.src} className='w-full h-full object-center' />

      </picture>
      
       <section className={`${barlow.variable} font-barlow  lg:my-auto text-3xl  flex justify-between  lg:px-12 lg:ml-20 px-6 flex-col lg:flex-row items-center  lg:gap text-secondary pb-11 gap-20 flex-1 lg:items-center`}>
        <div className='max-w-md  flex flex-col md:gap-6 flex-1'>
          
        <h1 className={` text-base lg:items-start items-center lg:text-300  uppercase flex flex-col lg:gap-6 gap-1  leading-md tracking-lg`}>
        SO, YOU WANT TO TRAVEL TO <br/>
          <span className={`font-belleFair ${bellefair.variable}  text-white lg:text-9xl md:text-8xl text-7xl lg:leading-lg leading-[150px]`}>space</span>
        </h1>
        <p className={`home-text font-normalBarlw ${normalBarlow.variable} leading-sm  lg:text-lg md:text-base text-sm lg:leading-8 lg:text-start text-center lg:width-max ch `}> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='flex-1 hidden lg:block'></div>
        <div className={` ${bellefair.variable} large-btn flex-1`}>Explore</div>
        <div className='hidden lg:block'></div>
       </section>

    </>
  )
}
