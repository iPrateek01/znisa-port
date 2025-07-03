import React from 'react'
import images from '@/constants/images'
import Image from 'next/image'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { heroSection } from '@/constants/text'
import Link from 'next/link'


function HeroSection() {
  return (
    <div className='p-7 font-handlee flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-0'>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center justify-start sm:gap-3 translate-x-[-1rem] sm:translate-x-0'>
          `<Image src={images.avatar} alt='avatar' className='w-26 h-26 sm:h-'></Image>
          <Image src={images.arrow} alt='arrow' className='translate-y-[1rem]'></Image>
          <span className='bg-pink-300 text-xl font-bold translate-y-[-1rem] transform rotate-[-10deg] drop-shadow-md text-nowrap'>{heroSection.title}</span>
        </div>
        <div className='font-inter text-3xl sm:text-[3rem] font-bold mt-5 tracking-wider'>
          I <span className='bg-gradient-to-t from-pink-300 from-30% to-transparent to-70%  inline-block hover:from-pink-500 hover:to-transparent hover:from-0% transition-all duration-300'>develop</span> top <br />
          notch websites
        </div>

      </div>
      <div className='sm:w-6/12 mb-2'>
          <p className='font-inter text-[1.2rem] text-wrap '>{heroSection.description}</p>
          <Link href='/#contact'>
          <ShimmerButton className=' mt-5 text-2xl w-32'>{heroSection.cta}</ShimmerButton>
          </Link>
      </div>

    </div>
  )
}

export default HeroSection