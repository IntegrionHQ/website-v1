"use client"
import Image from "next/image";
import Button from "./components/ui/Button";
import { useState } from "react";
import {Command, CircleAlert,Wifi, Database, Zap, ChartSpline} from "lucide-react"
import { FaNodeJs, FaJava, FaPhp, FaPython, FaRust} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {TbBrandCSharp} from "react-icons/tb"
import Tag from "./components/ui/Tag";
import Timeline from "./components/ui/Timeline";
import Card from "./components/ui/Card"
import TechStack from "./components/ui/TechStack";
import FAQAccordion from "./components/ui/Accordion";
import Link from "next/link"


export default function Home() {
  // const [email, setEmail] = useState<string>("");
  const [flip, setFlip ] = useState<boolean>(false);
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  const productFAQs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery."
    },
    {
      question: "Do you offer returns?",
      answer: "Yes, we offer a 30-day return policy for unused items in their original packaging."
    },
    {
      question: "Is my data secure?",
      answer: "We use industry-standard encryption and follow strict data protection guidelines to ensure your personal information remains confidential."
    }
  ];

 
  // Resend wailtist subscription API
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const joinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email:email,
          audienceId: "3608ecd8-d5ae-4102-8ffb-85bd9af1f8e8"
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      const data = await response.json();
      console.log(data)
      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Failed to join waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)
     
    // resend.contacts.create({
    //   email:email,
    //   audienceId: "3608ecd8-d5ae-4102-8ffb-85bd9af1f8e8",
    //   unsubscribed: false,
    // })

  

  return (
    <main className="space-y-48">
      <section className="flex flex-col jusitfy-center items-center gap-20  bg-secondary text-white h-auto p-10">

      <div className="flex justify-center items-center  gap-10 ">
       
        <div className="w-1/2 flex flex-col gap-6 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-[3.25rem] leading-[1.2]">
              Re-imagining <span className="text-primary">backend & QA engineering</span> from  hours to minutes
            </h1>
            <p className="text-md subtext font-normal">
              Faster tests, precise results, unparalleled efficiency and much more
            </p>
          </div>
          
          {/* <div className="bg-white/30 border border-gray p-2 rounded-lg flex justify-between items-center w-3/4">
            <input
            value={email}
                    placeholder="What's your email?"
              className="bg-transparent text-white font-medium outline-none border-none text-md px-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              linkTag="Join the waitlist"
              callback={() => joinWaitlist()}
            />
          </div> */}

<form onSubmit={joinWaitlist} className="bg-white/30 border border-gray p-2 rounded-lg flex justify-between items-center w-3/4">
      <input
        value={email}
        placeholder="What's your email?"
        className="bg-transparent text-white font-medium outline-none border-none text-md px-3"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
      />
<button  className='bg-primary px-5 py-3 font-medium text-secondary rounded-md text-sm hover:bg-lightPrimary transition-colors' disabled={isLoading} type="submit">
{isLoading ? "Joining..." : "Join the waitlist"}
    </button>
    </form>
        </div>

        <div className="w-1/2">
          <Image src="/ui.png" alt="" width={500} height={500} />
        </div>
        
             </div>

             <div className="flex flex-col justify-center items-center gap-4">
              <div>
                <span className="text-gray">
                  Integrate with your favorite code repository tools
                  </span>
                </div>
                <div className="flex justify-between items-center gap-10">
                  <Image src="/Github.png" alt="Github" width={100}    height={150} />    
                  <Image src="/bitbucket.png" alt="Github" width={50}    height={150} />    
                  <Image src="/Gitlab.png" alt="Github" width={100}    height={150} />    
                   </div>
              </div>
             </section>

             <section className="flex flex-col justify-center items-center gap-10 p-10">
              <h2 className="text-5xl font-semibold w-1/2 text-center">
              Get past the backend and QA testing bottleneck really fast
                </h2>
             {!flip ? (
              <div className="flex flex-col justify-center items-start gap-5 bg-[#e8eef7] p-5 w-3/4 rounded-lg">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[#636363] text-3xl font-medium">Backend testing is broken</span>
                    <button className="bg-lighterPrimary py-2 px-4 rounded-lg group  transition-all hover:cursor-pointer  hover:bg-secondary hover:text-white flex justify-center items-center gap-3" onClick={()=> setFlip(!flip)}>
                    <Command/>
                    <span className="text-secondary text-sm font-medium group-hover:text-white">Resolve the issue</span>
                    </button>
</div>
<p className="text-lg font-medium">Engineers spend countless hours crafting test cases, running tests, troubleshooting failures and piecing together resolutions</p>

                    <div className="flex justify-between items-start gap-10">
                   
                      <Tag bgColor="secondary" color="white" tagName="Delayed releases" Icon={CircleAlert}/>
                      <Tag bgColor="secondary" color="white" tagName="Increased costs" Icon={CircleAlert}/>
                      <Tag bgColor="secondary" color="white" tagName="Stifled innovation" Icon={CircleAlert}/>
                      </div>
                  </div>
            
             ) : (
              <div className="flex flex-col justify-center items-start gap-7  bg-[#e8eef7] p-5  lg:w-3/4 rounded-lg">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#636363] text-3xl font-medium">Integrion fixes it</span>
                <button className="bg-lighterPrimary py-2 px-4 rounded-lg group  transition-all hover:cursor-pointer  hover:bg-secondary hover:text-white flex justify-center items-center gap-3" onClick={()=> setFlip(!flip)}>
                <Command/>
                <span className="text-secondary text-sm font-medium group-hover:text-white">What's the problem ?</span>
                </button>
</div>
<p className="text-lg font-medium">With Integrion, you can <span className="text-secondary font-bold">slash QA times</span>, <span className="text-secondary font-bold">ship faster</span> and ensure <span className="text-secondary font-bold">rock solid backend performance</span>  - no more bottlenkecks just progress</p>

               <Timeline/>
              </div>
             )}
              </section>

              <section className="flex flex-col justify-center item-center p-10 gap-10" id="features">
              <div className="text-center ">
                <h2 className="text-5xl font-semibold text-center">
                  <span className="text-primary">Precision.</span>
                  <span className="text-primary">Speed.</span>
                  <span className="text-primary">Scalability. </span>
             All in One Platform
                </h2>
              </div>

              <div className="grid grid-cols-2 place-items-center gap-5">
              <Card 
    featureName="AI-powered test case generation" 
    Icon={CircleAlert} 
    desc="Create unit, integration, and E2E test cases automatically with a very wide coverage"
  />

  <Card 
    featureName="Instant test execution" 
    Icon={Zap} 
    desc="Run tests seamlessly with lightning speed , across multiple environments."
  />
  <Image 
    src="/img-1.png" 
    alt="team-integration" 
    width={600} 
    height={200} 
  />

 
  <Card 
    featureName="Detailed failure insights" 
    Icon={ChartSpline} 
    desc="Receive pinpointed logs and AI-driven solutions for every failed test"
  />
  
 
  <div className="row-span-2 flex justify-center">
    <Image 
      src="/img-2.png" 
      alt="team-integration" 
      width={600} 
      height={400} 
      className="object-cover"
    />
  </div>
  <Card 
    featureName="Comprehensive database testing" 
    Icon={Database} 
    desc="Ensure robust backend-database integration with your other backend services"
  />
  <Card 
    featureName="Full QA coverage" 
    Icon={Wifi} 
    desc="From simple unit tests to complete system-level integrations, your entire QA process is fully covered"
  />
  

  

</div>

                </section>


                <section className="bg-secondary h-auto p-10" id="languages">
    <div className="p-10">
   
      {/* Header */}
      <div className="text-white text-center mb-10">
        <h2 className="text-5xl font-bold text-white">Built for every tech stack</h2>
        <p className="text-gray mt-2 subtext">
          Seamlessly integrate Integrion into your workflow no matter what technologies you use
        </p>
       
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-4">
        <TechStack Icon={FaNodeJs} language="NodeJS" />
        <TechStack Icon={FaPython} language="Python" />
        <TechStack Icon={FaJava} language="Java" />
        <TechStack Icon={FaRust} language="Ruby" />
        <TechStack Icon={FaGolang} language="Go" />
        <TechStack Icon={TbBrandCSharp} language="C#" />
        <TechStack Icon={FaPhp} language="PHP" />
    </div>
    <div className="flex flex-col justify-center items-center">
    <button className="mt-4 bg-primary px-4 py-3 rounded-md text-sm text-black font-semibold">
      <Link href="mailto:integrionhq@gmail.com">
      Request a demo
      </Link>
         
        </button>
      </div>
  
    </div>
 

                </section>

                <section className="flex flex-col justify-center items-center  gap-10 p-10 ">
                  <h2 className="text-5xl font-semibold text-center text-secondary">All the A's to your Q's</h2>
                  <FAQAccordion faqs={productFAQs}/>

                  <button className="font-semibold text-secondary hover:bg-lighterPrimary px-4 py-3 rounded-md underline">See All FAQs</button>
                  </section>
    </main>
  );
}