import React from 'react'
import images from '@/constants/images'
import Image from 'next/image'
import SkillCard1 from '../shared/skillCard1'
import SkillCard2 from '../shared/skillCard2'
import SkillCard3 from '../shared/skillCard3'

function WhatIDo() {
  return (
    <div className='p-7 font-handlee flex flex-col gap-5 sm:gap-0'>
      <div className='flex flex-1/3 flex-col gap-5 my-auto items-start sm:ml-10'>
        <span className='bg-pink-300 text-xl font-bold drop-shadow-md'>What i do?</span>
        <span className='transform rotate-290 transition-all duration-300'>
          <Image src={images.arrow} alt='arrow' className='translate-y-[1rem]'></Image>
        </span>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-12 mt-5'>

      <div className='transform -rotate-6 -translate-x-8'>
        <SkillCard2 />
      </div>
      <div className='transform rotate-6 -translate-x-8'>
        <SkillCard1 />
      </div>
      <div className='transform -rotate-6 -translate-x-8'>
        <SkillCard3 />
      </div>
      </div>
    </div>
  )
}

export default WhatIDo