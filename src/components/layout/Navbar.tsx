import React from 'react'
import { LucideSparkle } from 'lucide-react'
// import { cn } from "@/lib/utils";
import { DotPattern } from '../magicui/dot-pattern';
import Link from 'next/link';

function Navbar() {
    return (
        <div className=' relative overflow-none p-7 font-handlee ml-auto w-10/12'>
            <DotPattern className="w-full h-full border border-b-0 border-l-3 border-r-0 border-t-0 border-black absolute inset-0 -z-10 flex items-center justify-center overflow-none bg-background">
            </DotPattern>
            <div className='pt-6 sm:pt-0 sm:w-1/2 flex flex-row items-center justify-between sm:ml-auto'>
                <div className='flex flex-row items-center gap-2 sm:text-2xl font-bold'>
                    <LucideSparkle fill='black' size={35} />
                    <span>Prateek</span>
                </div>
                <div className='flex flex-row items-center gap-5 text-xl font-inter'>
                    <Link href='/'>Portfolio</Link>
                    <Link href='/' className='bg-gradient-to-t from-pink-300 from-30% to-transparent to-70%  inline-block hover:from-pink-500 hover:to-transparent hover:from-0% transition-all duration-300'>Hire Me</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar