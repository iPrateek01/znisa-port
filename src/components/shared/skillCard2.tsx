'use client'
// import Image from 'next/image'
// import images from '@/constants/images'
import { File, Folder, Tree } from "@/components/magicui/file-tree";

const SkillCard1 = () => {
  return (
    <div className="w-56 h-72 sm:w-68 sm:h-96 ml-18 sm:ml-0 perspective-[1000px]">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full backface-hidden bg-amber-200 rounded-md ring-4 ring-yellow-300 flex flex-col justify-center items-center">
          <h1 className="absolute -right-5 top-10 text-transform rotate-8 bg-sky-200 z-10">
            Frontend Development
          </h1>
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-transparent w-full h-full">
            <Tree
              className="overflow-hidden rounded-md bg-transparent"
              initialExpandedItems={[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
              ]}
         
            >
              <Folder element="Front End Basics" value="1">
                <File value="2">HTML</File>
                <File value="3">CSS</File>
                <File value="4">Javascript</File>
              </Folder>
              <Folder element="Javascript Libraries" value="5">
                <Folder element="React.js" value="6">
                  <File value="7">Hooks</File>
                  <File value="8">Redux</File>
                  <File value="9">Context API</File>
                </Folder>
                <Folder element="Vue.js" value="10">
                  <File value="11">Options API/ Compostion API</File>
                  <File value="12">Pinia</File>
                </Folder>
              </Folder>
              <Folder element="Javascript Frameworks" value="13">
                <File value="14">Next.js</File>
                <File value="15">Nuxt</File>
              </Folder>

            </Tree>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard1;
