import { useState } from "react";

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
const useChangeCurrent = (image) => {
 const [current,setCurrent] = useState(image[0]);
 const currentIndex = image.findIndex(img => img.name === current.name)
 const changeCurrent = (num) => {
    setCurrent(image[num])
 }

 return {
    current,
    changeCurrent,
    currentIndex,
    fonts: {
      barlow,
      bellefair,
      normalBarlow
    }
 }

}

export default useChangeCurrent