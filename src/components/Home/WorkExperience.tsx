import React from 'react'
import images from '@/constants/images'
import Image from 'next/image'
import { workExperience } from '@/constants/text'

function WorkExperience() {
    return (
        <div className='p-7 sm:pl-3 font-courier flex flex-col w-full sm:flex-row sm:items-end gap-5 sm:gap-0'>
            <div className='flex flex-1/3 flex-col gap-5 my-auto items-start '>
                <span className='bg-pink-300 text-xl font-bold drop-shadow-md font-handlee'>Work Experience</span>
                <span className='transform sm:rotate-240 rotate-290 sm:translate-x-20 transition-all duration-300'>
                    <Image src={images.arrow} alt='arrow' className='translate-y-[1rem]'></Image>
                </span>
                {/* <p className='font-inter'> Have been designing <br />
                    since my past 4 years </p> */}
            </div>
            <div className="border-none sm:p-12 sm:mx-auto relative text-wrap sm:w-9/12">
                <div className="space-y-6 sm:w-10/12 mx-auto">
                    {workExperience.map((exp) => (
                        <div key={exp.id} className="flex sm:items-center space-x-4 sm:space-x-8">
                            <div
                                className={`${exp.color} border ${exp.borderColor} w-12 h-12 rounded-md flex items-center justify-center text-xl font-bold p-5 sm:p-10 text-black`}
                            >
                                {exp.id}
                            </div>
                            <div>
                                <h3 className="font-semibold sm:text-lg">
                                    {exp.title} at <strong>{exp.company}</strong>
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">{exp.description}</p>
                                <p className="text-xs sm:text-sm text-gray-400 mt-1 italic">{exp.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Top and bottom border accents like in your screenshot */}
                <div className="hidden sm:block absolute top-0 left-0 right-0 h-1 border-t border-black " />
                <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-1 border-b border-black " />
                <div className="hidden sm:block absolute -top-10 bottom-5 left-10 border-l border-black h-[130%]" />
                <div className="hidden sm:block absolute -top-10 bottom-5 right-10 border-r border-black h-[130%]" />
            </div>
        </div>
    )
}

export default WorkExperience