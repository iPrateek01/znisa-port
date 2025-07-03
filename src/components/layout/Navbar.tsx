import React from 'react'
import { LucideSparkle } from 'lucide-react'
// import { cn } from "@/lib/utils";
import { DotPattern } from '../magicui/dot-pattern';
import Link from 'next/link';
import { navbar } from '@/constants/text';
import clsx from 'clsx';

function Navbar() {

    return (
        <div className='relative overflow-none p-7 font-handlee mx-auto w-9/12'>
            <DotPattern className="w-full h-full absolute inset-0 -z-10 flex items-center justify-center overflow-none bg-background">
            </DotPattern>
            <div className='pt-6 sm:pt-0 sm:w-1/2 flex flex-row items-center gap-13 sm:gap-0 justify-between sm:ml-auto'>
                <div className='flex flex-row items-center gap-2 sm:text-2xl font-bold'>
                    <LucideSparkle fill='black' size={35} />
                    <span>Prateek</span>
                </div>
                <div className='flex flex-row items-center gap-2 sm:gap-5 sm:text-xl font-inter'>
                    {navbar.links.map((item, index) => (
                        <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={clsx(
                            "inline-block transition-all duration-300",
                            item.name === "Resume" &&
                            "bg-gradient-to-t from-pink-300 from-30% to-transparent to-70% hover:from-pink-500 hover:to-transparent hover:from-0%"
                        )}>{item.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar