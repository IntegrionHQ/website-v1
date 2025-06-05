"use client"
import { useState , useEffect} from "react"
import HoverBorderGradient from "@/app/components/ui/hover-border-gradient"
import Header from "@/app/components/ui/Header"
import {MoveUpRight, Command } from "lucide-react"
import FAQAccordion from "@/app/components/ui/Accordion"
import Link from "next/link"
import FeaturesGrid from "@/app/components/ui/FeatureGrid"
import AIFeatureCard from "@/app/components/ui/AIFeatureCard"
import AOS from 'aos'
import "aos/dist/aos.css"
import github from "@/public/GitHub.png"
import gitlab from "@/public/Gitlab.png"
import bitbucket from "@/public/bitbucket.png"
import Image from 'next/image'
import projectDemo from "@/public/product-demo.png"
import stack from "@/public/Stack.svg"
export default function Home() {
   useEffect(()=>
{
  AOS.init(
    {
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    }
  );
  AOS.refresh();
},[])
  // const [email,setEmail] = useState("")
  // const handleSubmit = (event: React.SyntheticEvent): void=>{
  //     event.preventDefault()
  // }
  // const handleChange = (event: React.SyntheticEvent): void=>{
  //         const target = event.target as HTMLInputElement
  //         setEmail(target.value)
  // }
   const productFAQs = [
    {
      question: "How does Integrion reduce QA and backend testing times?",
      answer: "Integrion leverages AI to generate, execute, and analyze test cases in real time, cutting down testing cycles from hours to minutes while maintaining accuracy and efficiency."
    },
    {
      question: "What types of tests does Integrion support ?",
      answer: "Our platform automates unit tests, integration tests, end-to-end (E2E) tests, and database testing, ensuring comprehensive coverage for backend systems."
    },
    {
      question: "Can Integrion integrate with my existing CI/CD pipeline?",
      answer: "Yes! Integrion seamlessly integrates with CI/CD pipelines, GitHub repositories, and various DBMS platforms to streamline automated testing and deployment."
    },
    {
      question: "How accurate are the AI-generated test cases ?",
      answer: "Our AI models are trained to optimize test accuracy, ensuring 99.9% precision in detecting issues while reducing false positives."
    }
  ]
  const AIFeatures = [
    {
      text:"Easily connect with your existing CI/CD pipelines, databases, and monitoring tools—no disruptions, just efficiency."
    },
    {
      text: "Gain real-time visibility into test results with detailed reports on API responses, database queries, and system logs."
    }
  ]
  // Resend wailtist subscription API
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const joinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // setError("");
    
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
      // setSuccess(true);
      setEmail("");
    } catch (err) {
      console.log(err)
      // setError("Failed to join waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" h-full w-full bg-neutral-900">
    <div className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
    <main className=" flex flex-col items-center space-y-24  px-6" id="home">
        <Header/>
      <div className="text-center space-y-5 max-w-2xl ">
        <p className="py-1 px-2 bg-zinc-700 backdrop-blur-sm font-light rounded-full text-white inline-block">sign up for early access</p>
        <div className="space-y-3">
          <h1 className=" text-3xl sm:text-7xl tracking-tight bg-clip-text   bg-gradient-to-r from-yellow-300 via-lime-400 to-green-400

 text-transparent font-semibold">Automate Backend QA With AI</h1>
        </div>
        <p className="text-gray-400 text-lg text-pretty">Faster tests, precise results, unparalleled efficiency and much more</p>
        <div className="space-y-3 flex justify-center">
        <HoverBorderGradient>
        <form onSubmit={joinWaitlist} className="relative  md:w-xs" >
      <input
        value={email}
        placeholder="Enter your email"
        className="text-gray-400 rounded-[100px] px-4 py-2 focus:outline-none placeholder:text-xs  md:placeholder:text-sm mr-2"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
      />
<button  className="bg-gradient-to-r from-yellow-300 via-lime-400 to-green-400 rounded-[100px] px-4 py-2 text-black font-medium absolute right-0 " disabled={isLoading} type="submit">
{isLoading ? (
  <span className="loader"></span>
)
 : "Join Now"}
    </button>
    </form>
        </HoverBorderGradient>
        </div>
      </div>
      <section className="flex flex-col justify-center items-center gap-24 md:px-10 md:py-0 py-10 px-5" id ="about">
             <div className="flex flex-col justify-center items-center gap-4">
              <div data-aos="fade-up ">
                <span className="text-gray-400">
                  Integrate with your favorite code repository tools
                  </span>
                </div>
                <div className="flex justify-between items-center gap-10">
                  <Image src={github} alt="Github" width={100} height={150} />    
                  <Image src={bitbucket} alt="Bitbucket" width={50}  height={150} />    
                  <Image src= {gitlab} alt="Gitlab" width={100}   height={150} />    
                   </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-auto" >
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4">
                <div className="flex justify-center items-center gap-2 px-2 py-2 border border-gray rounded-full">
                  <Image src="/wand_stars.png" alt="wand" width={15} height={15} />
                  <h2 className="text-sm font-normal  text-white" data-aos="fade-up">Fully powered with AI</h2>
                </div>
                <h2 className="text-3xl font-medium bg-clip-text bg-gradient-to-r from-yellow-300 via-lime-400 to-green-400 text-transparent">Get past the backend QA testing bottleneck really fast</h2>
                <p className="text-md md:text-xl text-gray-400 md:w-5/6 subtext">Set up backend tests in minutes, not hours—automate API testing, database validation, and log monitoring with scheduled or on-demand executions.</p>

                <button className="flex justify-center items-center gap-2 bg-[#eaff3b] text-black font-semibold text-sm px-4 py-3 rounded-full transition-all hover:opacity-80 hover:text-black hover:font-bold mt-3">
                  <Link href="https://calendly.com/integrionhq/demo-request" className="flex">
                  Request for Demo
                  < MoveUpRight size={15} />
                  </Link>
                </button>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
              <div className="w-full md:w-3/4 rounded-lg flex flex-col justify-start items-start gap-4 p-5 border border-gray">
                <div className ="flex justify-between items-center w-full">
                  <h3 className="text-white text-2xl font-semibold">Automated Execution</h3>
                  <Command size={35} className="text-black bg-white rounded-md p-2" />
                </div>
                <p className="text-gray-400 text-md w-full subtext">Say goodbye to manual backend testing—Integrion simplifies API, database, and log testing with AI-powered automation.</p>
                <div className="flex flex-wrap gap-5">
                  <p className="border border-gray rounded-full px-5 py-3 text-gray-400 text-sm font-normal">AI Powered Insights</p>
                  <p className="border border-gray rounded-full px-5 py-3 text-gray-400 text-sm font-normal">Reduce Cost</p>
                  <p className="border border-gray rounded-full px-5 py-3 text-gray-400 text-sm font-normal">Boost Efficiency</p>
                </div>
                </div>
                </div>
                </div>
         </section> 
         <section className="flex flex-col justify-center items-center gap-4 px-5" id="features">
  <div className="flex flex-col justify-center items-center gap-2">
  <div className="flex justify-center items-center gap-2 px-2 py-2 border border-gray rounded-full">
                  <Image src="/wand_stars.png" alt="wand" width={15} height={15} />
                  <h2 className="text-sm font-normal text-white" data-aos="fade-up">Experience Amazing Features</h2>
                </div>
                <h2 className="text-4xl font-medium md:w-3/4 md:text-center mt-6 bg-clip-text bg-gradient-to-r from-yellow-300 via-lime-400 to-green-400 text-transparent">Precision. Speed. Scalability. All In One Platform</h2>
  </div>
  <div className="">
    <FeaturesGrid/>
  </div>
</section>
<section className="flex flex-col md:flex-row justify-center items-center gap-5 bg-[url(/bg-bg.svg)] h-auto md:h-[60vh] w-full p-5 pb-0 md:p-10">
<div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-5">
<div className="flex flex-col justify-center items-start text-gray-400">
      <h2 className="text-2xl font-semibold">AI-Powered Insights, Smarter Debugging, Easy Fixes</h2>
        <p className="text-md font-normal subtext">Detect backend issues before they escalate with AI-driven anomaly detection, and optmization recommendations</p>
    </div>
    <div className="flex flex-col gap-2">
{AIFeatures.map((feature)=> (
  <AIFeatureCard key={feature.text} text={feature.text}/>
))}

    </div>

</div>
<div className="w-full md:w-1/2 flex flex-col justify-center items-center pb-6 sm:pb-0">
<Image src={projectDemo} width={350} height={350} alt="preject demo"/>
</div>
    
  </section> 
  <section className="flex flex-col md:flex-row justify-center items-center gap-16" id="languages">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3">
                <h2 className="font-semibold text-white text-4xl ">Built for every tech stack</h2>
                <p className="text-gray-400 text-lg font-normal">Seamlessly integrate Integrion into your workflow no matter what technologies you use</p>
                <button className="flex justify-center bg-[#eaff3b] items-center gap-2 border border-black text-black font-semibold text-sm px-4 py-3 rounded-full scale-[1]  hover:transition-all  hover:scale-[1.1] hover:text-black hover:font-bold mt-3">
                  <Link href="https://calendly.com/integrionhq/demo-request" className="flex items-center">
                  Request for Demo
                  < MoveUpRight size={15} />
                  </Link>
                  </button>
              </div>
              <div className="w-full md:w-1/2">
                <Image src={stack} width={400} height={400} alt="" className="animate-[spin_10s_linear_infinite]"/>
              </div>
           </section>

                <section className="flex flex-col justify-center items-center  gap-10 md:p-10 py-10 px-5 " id="faq" data-aos="fade-up ">
                  <h2 className=" text-4xl md:text-5xl font-semibold text-center text-white">All the A&apos;s to your QA&apos;s</h2>
                  <FAQAccordion faqs={productFAQs}/>

                  {/* <button className="font-semibold text-secondary hover:bg-lighterPrimary px-4 py-3 rounded-md underline">See All FAQs</button> */}
                  </section>   
    </main>
    </div>
    </div>
  );
}
