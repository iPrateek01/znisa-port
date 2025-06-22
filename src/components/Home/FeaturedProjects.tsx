import React from 'react'
import images from '@/constants/images'
import Image from 'next/image'

function FeaturedProjects() {
  return (
    <div className='p-7 font-handlee flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-0'>
            <div className='flex flex-1/3 flex-col gap-5 my-auto items-start sm:ml-1'>
                <span className='bg-pink-300 text-xl font-bold drop-shadow-md'>Featured Projects</span>
                <span className='transform sm:rotate-240 rotate-290 sm:translate-x-20 transition-all duration-300'>
                    <Image src={images.arrow} alt='arrow' className='translate-y-[1rem]'></Image>
                </span>
                <p className='font-inter'> Have been designing <br />
                since my past 4 years </p>
            </div>
            <div>

            </div>
        </div>
  )
}

export default FeaturedProjects