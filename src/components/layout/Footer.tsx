import React from 'react';
import { DotPattern } from "@/components/magicui/dot-pattern";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { LucideSparkle } from 'lucide-react';


function Footer() {
    return (
        <div className=' relative overflow-none mx-auto w-9/12'>
            <DotPattern className="w-full h-full border border-t-0 border-l-3 border-b-0 border-r-0 border-black absolute -z-10 flex items-center justify-center overflow-none bg-background">
            </DotPattern>
            <div className="flex flex-col sm:flex-row items-start sm:justify-between p-7 w-full gap-10 sm:gap-0">
                <div className="flex justify-center items-center gap-2 font-handlee text-2xl">
                    <LucideSparkle fill='black' size={35} />
                    <span>Prateek</span>
                </div>
                <div className='flex flex-col sm:items-center gap-4 items-start'>
                    <div className="flex flex-row justify-center gap-5 text-black sm:text-2xl">
                        <ShimmerButton>GitHub</ShimmerButton>
                        <ShimmerButton>LinkedIn</ShimmerButton>
                        {/* <ShimmerButton>⌨️</ShimmerButton> */}
                    </div>
                    <div>Thanks to <a href="https://www.figma.com/@zainabnisa" className='text-black font-bold font-handlee tracking-wider'>@zainabnisa</a> for the UI/UX magic ✨</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
