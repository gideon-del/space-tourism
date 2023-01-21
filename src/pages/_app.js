import '@/styles/globals.css'

import logo from '../assets/shared/logo.svg'
import harmburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { Bellefair, Barlow_Condensed } from '@next/font/google'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const barlow = Barlow_Condensed({
  subsets:['latin'],
  weight:'400',
  variable:'--font-barlow'
})
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [showNav,setShowNav] = useState(false)
  const toggleNav = () => {
    setShowNav(prev => !prev)
  }
  console.log(router.pathname);
  return <>
   <main className='w-full  min-h-screen  z-50 flex flex-col '>
      
       <header className='flex justify-between items-center lg:container w-[98%] md:mb-6 ml-auto md:pt-8 pt-3 px-4 mb-5 md:pr-0 gap-4 header'>
        
        <img src={logo.src} />
        <img src={harmburger.src} className='md:hidden' onClick={toggleNav} />
        <nav className={`nav-glass flex items-center justify-center  ${barlow.variable} font-barlow md:text-lg lg:text-xl text-base text-white md:relative fixed inset-y-0 right-0 md:w-auto w-3/4 md:h-auto z-50 ${showNav? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 transition-all ease-linear py-4 md:py-0`} >
          <ul className='nav-list'>
            <li className={`${router.pathname === '/' ? 'active' : ''}`}>
              <Link href='/'>
               <span>00</span> Home
              </Link>
               
               </li>
            <li className={`${router.pathname === '/destination' ? 'active' : ''}`} >
              <Link href='/destination'>
               <span>01</span> Destination
              </Link>
               </li>
            <li className={`${router.pathname === '/crew' ? 'active' : ''}`}>
              <Link href='/crew'>
            <span>02</span> Crew
            </Link> 
            </li>
            <li className={`${router.pathname === '/technology' ? 'active' : ''}`}>
              <Link href='/technology'>
               <span>03</span> Technology
              </Link>
               </li>
            
          </ul>
          <img src={close.src} className='md:hidden absolute w-7 h-7 top-2 right-5' onClick={toggleNav} />
        </nav>
       </header>
       <Component {...pageProps} />
      </main>
  
  </>
}
