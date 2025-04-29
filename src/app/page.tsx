// import Image from "next/image";
// import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import ContactHere from "@/components/Home/ContactHere";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="relative  h-screen w-10/12 ml-auto">
        <DotPattern className="absolute inset-0 -z-10 border-t-0 border-l-3 border-b-0 border-black flex flex-col items-center justify-center overflow-hidden bg-background" />
        <HeroSection />
        <hr className="w-8 h-[3px] bg-pink-300 mx-auto"/>
        <ContactHere />
      </div>
      <hr className="w-full border-[1.7px] border-black" />
      <Footer />
    </div >
  );
}
