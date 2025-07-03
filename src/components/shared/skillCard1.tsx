'use client'
import { OrbitingCircles } from '../magicui/orbiting-circles'
import Image from 'next/image'
import images from '@/constants/images'

const SkillCard1 = () => {
  return (
    <div className="w-56 h-72 sm:w-68 sm:h-96 ml-18 sm:ml-0 perspective-[1000px]">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full backface-hidden bg-sky-200 rounded-md ring-4 ring-sky-300 flex flex-col justify-center items-center p-4">
          <h1 className="absolute right-5 -top-3 text-transform -rotate-8 bg-fuchsia-200">Tech Stack</h1>
          <OrbitingCircles radius={100} iconSize={20}>
            <Image src={images.tailwind} alt="Skill Image" className="rounded-full" />
            <Image src={images.nodejs} alt="Skill Image" className="rounded-full" />
            <Image src={images.express} alt="Skill Image" className="rounded-full" />
            <Image src={images.vuetify} alt="Skill Image" className="rounded-full" />
            <Image src={images.pinia} alt="Skill Image" className="rounded-full" />
            <Image src={images.mongodb} alt="Skill Image" className="rounded-full" />
          </OrbitingCircles>
          <OrbitingCircles radius={50} reverse iconSize={20}>
            <Image src={images.react} alt="Skill Image" className="rounded-full" />
            <Image src={images.next} alt="Skill Image" className="rounded-full" />
            <Image src={images.vue} alt="Skill Image" className="rounded-full" />
            <Image src={images.nuxt} alt="Skill Image" className="rounded-full" />
            <Image src={images.github} alt="Skill Image" className="rounded-full" />
            <Image src={images.git} alt="Skill Image" className="rounded-full" />
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
};

export default SkillCard1;
