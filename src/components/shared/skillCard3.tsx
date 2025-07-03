'use client'
// import Image from 'next/image'
// import images from '@/constants/images'
import { File, Folder, Tree } from "@/components/magicui/file-tree";

const SkillCard1 = () => {
  return (
    <div className="w-56 h-72 sm:w-68 sm:h-96 ml-18 sm:ml-0 perspective-[1000px]">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full backface-hidden bg-fuchsia-200 rounded-md ring-4 ring-fuchsia-300 flex flex-col justify-center items-center">
          <h1 className="absolute -right-5 top-10 text-transform rotate-8 bg-yellow-200">Other</h1>
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
              <Folder element="UI Libraries" value="1">
                <File value="2">Tailwind</File>
                <File value="3">Vuetify</File>
                <File value="4">ShadCN</File>
              </Folder>
              <Folder element="Programming Languages" value="5">
                <File value="6">Python</File>
                <File value="7">C++</File>
              </Folder>
              <Folder element="Backend" value="8">
                <File value="9">
                  Node.js
                </File>
                <File value="10">
                  Express.js
                </File>
                <File value="11">
                  MongoDB/ Mongoose
                </File>
              </Folder>
              <Folder element="Other Tools" value="12">
                <File value="13">
                  Git/Github/Bitbucker
                </File>
                <File value="14">
                  Firebase
                </File>
                <File value="15">
                  Vercel/AWS Amplify
                </File>
              </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard1;
