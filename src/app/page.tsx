// import Image from "next/image";
// import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import ContactHere from "@/components/Home/ContactHere";
import WorkExperience from "@/components/Home/WorkExperience";
import WhatIDo from "@/components/Home/WhatIDo";
import FeaturedProjects from "@/components/Home/FeaturedProjects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="relative w-9/12 mx-auto">
        <DotPattern className="fixed w-9/12 mx-auto h-screen inset-0 -z-10 bg-background border-l-3 border-black" />
          <div className="relative z-10 flex flex-col gap-10">
            <HeroSection />
            <hr className="w-8 h-[3px] bg-pink-500 mx-auto" />
            <WhatIDo />
            <hr className="w-8 h-[3px] bg-pink-500 mx-auto" />
            <FeaturedProjects />
            <hr className="w-8 h-[3px] bg-pink-500 mx-auto" />
            <WorkExperience />
            <hr className="w-8 h-[3px] bg-pink-500 mx-auto" />
            <ContactHere />
          </div>
      </main>
      <hr className="w-full border-[1.7px] border-black" />
      <Footer />
    </div >
  );
}

