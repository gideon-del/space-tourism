import React, { useMemo, useState } from 'react'
import bgMobile from '../../assets/crew/background-crew-mobile.jpg'
import bgDesk from '../../assets/crew/background-crew-desktop.jpg'
import bgTablet from '../../assets/crew/background-crew-tablet.jpg'
import img from '../../assets/crew/image-mark-shuttleworth.png'
import { Bellefair, Barlow_Condensed, Barlow } from '@next/font/google'
import data from '@/data/data'
import { crew } from '@/data/data'
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
  const [currentMember, setCurrentMember] = useState(crew[3]);
  const button = useMemo(() => [1,2,3,4], []);
  const indexofCurrentMember = crew.findIndex(crw => crw.images.png === currentMember.images.png)
  console.log(indexofCurrentMember);
  const changeMember = (member) => {
    setCurrentMember(crew[member])
  }
  return (
    <>
    <picture className='fixed w-screen h-screen -z-10'>
       <source srcSet={bgMobile.src} media="(max-width: 600px)" />
       <source srcSet={bgTablet.src} media="(max-width: 1200px)" />
       <img src={bgDesk.src} className='w-full h-full object-center' />

      </picture>
    <section className='pb-6 lg:pb-0 crew flex-1'>
    <h1 className={`${barlow.variable} text-base tracking-md font-barlow font-normal text-white uppercase lg:text-3xl mb-6 md:text-start text-center crew-title `}><span className='font-bold text-[rgba(255,255,255,0.5)]'>02</span> meet your crew</h1>
  
         
        <article className='flex flex-col-reverse justify-center items-center  gap-6  flex-1 md:flex-col lg:items-start crew-info '>
          <div>

            <h2 className={`${bellefair.variable} font-belleFair text-[rgba(255,255,255,.5)] flex flex-col gap-1 uppercase font-normal text-base justify-center items-center md:text-2xl lg:justify-start lg:items-start`}> {currentMember.role}
            <span className='text-white text-2xl leading-10 md:text-4xl'>{currentMember.name}</span> </h2>
            <p className={`${normalBarlow.variable} font-normalBarlw lg:leading-8 mx-auto text-sm text-center ch leading-6 text-secondary lg:text-start lg:mx-0`}>{currentMember.bio}</p>
          </div>
        </article>
            <div className='dots'>
                { button.map((btn, i)=> <button key={btn} className={`${i === indexofCurrentMember ? 'active':''}`} onClick={() => changeMember(i)}></button>)}
                
            </div>
        <div className='crew-img'>

        <img src={currentMember.images.webp} className='max-w-[100%]'  />
        </div>
      
    </section>
  
    </>
  )
}

export default Crew