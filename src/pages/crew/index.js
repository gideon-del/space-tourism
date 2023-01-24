import  { useMemo,  } from 'react'
import bgMobile from '../../assets/crew/background-crew-mobile.jpg'
import bgDesk from '../../assets/crew/background-crew-desktop.jpg'
import bgTablet from '../../assets/crew/background-crew-tablet.jpg'
import { crew } from '@/data/data'
import Background from '@/components/Background'
import useChangeCurrent from '@/hooks/useChangeCurrent'
import Image from 'next/image'
const Crew = ({images}) => {
  const button = useMemo(() => [1,2,3,4], []);
  const { current, currentIndex, changeCurrent, fonts} = useChangeCurrent(images);
  const { barlow, bellefair, normalBarlow} = fonts
 
  return (
    <>
   

    <Background mobile={bgMobile} desk={bgDesk} tablet={bgTablet} />
    <section className='pb-6 lg:pb-0 crew flex-1'>
    <h1 className={`${barlow.variable} text-base tracking-md font-barlow font-normal text-white uppercase lg:text-3xl mb-6 md:text-start text-center crew-title `}><span className='font-bold text-[rgba(255,255,255,0.5)]'>02</span> meet your crew</h1>
  
         
        <article className='flex flex-col-reverse justify-center items-center  gap-6  flex-1 md:flex-col lg:items-start crew-info '>
          <div>

            <h2 className={`${bellefair.variable} font-belleFair text-[rgba(255,255,255,.5)] flex flex-col gap-1 uppercase font-normal text-base justify-center items-center md:text-2xl lg:justify-start lg:items-start`}> {current.role}
            <span className='text-white text-2xl leading-10 md:text-4xl'>{current.name}</span> </h2>
            <p className={`${normalBarlow.variable} font-normalBarlw lg:leading-8 mx-auto text-sm text-center ch leading-6 text-secondary lg:text-start lg:mx-0`}>{current.bio}</p>
          </div>
        </article>
            <div className='dots'>
                { button.map((btn, i)=> <button key={btn} className={`${i === currentIndex ? 'active':''}`} onClick={() => changeCurrent(i)}></button>)}
                
            </div>
        <div className='crew-img'>

        <Image src={current.images.png} alt={current.role}  />
        </div>
      
    </section>
  
    
    </>
  )
}
export const getStaticProps = () => {
  const prop = {
    images: crew,
  }
  return {
    props: prop
  }
}
export default Crew