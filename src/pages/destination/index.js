import React, { useMemo, useState } from 'react'

import Image from 'next/image'
import { destination } from '@/data/data'
import useChangeCurrent from '@/hooks/useChangeCurrent'

const Destination = ({images}) => {

   const destinations = useMemo(() => ['Moon','Mars','Europa','Titan']);
 
  const {current,changeCurrent,currentIndex,fonts} = useChangeCurrent(images);
  const {barlow,bellefair,normalBarlow} = fonts
  return (
    <>
  
   

    <section className={`${barlow.variable} font-barlow pb-7 px-4 destination-layout flex-1 `}>
        <h1 className={`${barlow.variable} page-title text-white destination-title`}><span className='font-bold text-[rgba(255,255,255,0.5)]'>01</span> Pick your Destination</h1>

        
         <Image src={current.images.png} className='destination-img'   />
         <div className='flex flex-col gap-6 lg:items-start items-center destination-content'>
            <nav>
                <ul className='destination-tab'>
                    {destinations.map((dest,i) => <li key={dest} className={`${i === currentIndex ? 'active' : ''}`} onClick={() => changeCurrent(i)}> {dest}</li>)}
                </ul>
            </nav>
            <h2 className={`${bellefair.variable} lg:text-700 md:text-7xl text-white font-belleFair uppercase text-200`}>{current.name}</h2>
            <p className={` border-b border-b-[rgba(56, 59, 75, 1)] page-description ${normalBarlow.variable}  pb-6 `} style={{
              '--max':'45ch' 
            }}>{current.description}</p>
            <div className={`${barlow.variable} font-barlow flex lg:gap-16 md:gap-20 flex-col md:flex-row  gap-5 l`}>
                <p className='uppercase text-secondary text-sm flex flex-col gap-3 items-center lg:items-start'>
                    avg. ditance
                    <span className={`${bellefair.variable} font-belleFair text-white lg:text-3xl text-300`}>{current.distance}</span>
                </p>
                <p className='uppercase text-secondary text-sm flex flex-col lg:items-start gap-3 items-center'>
                    est. travle time
                    <span className={`${bellefair.variable} font-belleFair text-white lg:text-3xl text-300 `}>{current.travel}</span>
                </p>
            </div>
         </div>
        
    </section>
    </>
  )
}
export const getStaticProps = () => {
  const prop = {
    images: destination,
  }
  return {
    props: prop
  }
}
export default Destination