'use client'
import { OrbitingCircles } from '../magicui/orbiting-circles'
import Image from 'next/image'
import images from '@/constants/images'

const SkillCard = () => {
  return (
    <div className="w-86 h-86 perspective-[1000px]">
      <div className="relative w-full h-full transition-transform duration-700 transform-3d group hover:rotate-x-180 hover:rotate-y-360">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-amber-200 rounded-md ring-4 ring-yellow-300 flex flex-col justify-center items-center p-4">
          <h1 className="absolute -right-15 top-10 text-transform rotate-8 bg-sky-300 px-5 py-2">I Build Websites</h1>
          <OrbitingCircles radius={100} iconSize={20}>
            <Image src={images.react} alt="Skill Image" className="rounded-full" />
            <Image src={images.next} alt="Skill Image" className="rounded-full" />
            <Image src={images.vue} alt="Skill Image" className="rounded-full" />
            <Image src={images.nuxt} alt="Skill Image" className="rounded-full" />
            <Image src={images.github} alt="Skill Image" className="rounded-full" />
            <Image src={images.git} alt="Skill Image" className="rounded-full" />
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

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden  bg-gray-100 rounded-md flex flex-col justify-center items-center p-4 rotate-x-180">
          <h1 className="text-2xl font-bold mb-4">Frontend Development</h1>
          <p className="text-center text-gray-700">
            Building interactive UIs with React, Next.js, Vue, Nuxt.
          </p>
          <h1 className="text-2xl font-bold mt-6 mb-2">Backend Development</h1>
          <p className="text-center text-gray-700">
            Familiar with APIs, databases and integrations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
