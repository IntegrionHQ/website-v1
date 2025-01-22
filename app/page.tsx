"use client"
import Image from "next/image";
import Button from "./components/ui/Button";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>("");

  return (
    <main className="">
      <div className="flex flex-col jusitfy-center items-center gap-10   bg-secondary text-white h-screen py-10 px-10">

      <section className="flex justify-center items-center  gap-10 ">
       
        <div className="w-1/2 flex flex-col gap-6 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-[3.25rem] leading-[1.2]">
              Re-imagining <span className="text-primary">backend & QA engineering</span> from  hours to minutes
            </h1>
            <p className="text-md subtext font-normal">
              Faster tests, precise results, unparalleled efficiency and much more
            </p>
          </div>
          
          <div className="bg-white/30 border border-gray p-2 rounded-lg flex justify-between items-center w-3/4">
            <input
                    placeholder="What's your email?"
              className="bg-transparent text-white font-medium outline-none border-none text-md px-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              linkTag="Join the waitlist"
              callback={() => console.log("Hello World")}
            />
          </div>
        </div>

        <div className="w-1/2">
          <Image src="/ui.png" alt="" width={500} height={500} />
        </div>
        
             </section>

             <section className="flex flex-col justify-center items-center gap-4">
              <div>
                <span className="text-gray">
                  Integrate with youtr favourite code repository tools
                  </span>
                </div>
                <div className="flex justify-between items-center gap-10">
                  <Image src="/Github.png" alt="Github" width={100}    height={150} />    
                  <Image src="/bitbucket.png" alt="Github" width={50}    height={150} />    
                  <Image src="/Gitlab.png" alt="Github" width={100}    height={150} />    
                   </div>
              </section>
             </div>
    </main>
  );
}