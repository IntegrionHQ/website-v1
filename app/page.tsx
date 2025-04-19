"use client"
import Image from "next/image";
// import Button from "./components/ui/Button";
import { useState , useEffect} from "react";
import {MoveUpRight, Command } from "lucide-react"
import FAQAccordion from "./components/ui/Accordion";
import Link from "next/link"
import AOS from 'aos';
import "aos/dist/aos.css";
import FeaturesGrid from "./components/ui/FeatureGrid";
import AIFeatureCard from "./components/ui/AIFeatureCard";


export default function Home() {


  //Initialize AOS
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
  ];
 
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
  };// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)
     
    // resend.contacts.create({
    //   email:email,
    //   audienceId: "3608ecd8-d5ae-4102-8ffb-85bd9af1f8e8",
    //   unsubscribed: false,
    // })

  

  return (
    <main className="space-y-24 w-full md:px-20 px-5">
      <section className="flex flex-col justify-center items-center gap-20  bg-[#F2F4F7] text-black h-[90vh]  md:p-10 py-10 px-5 rounded-3xl">

      <div className="flex  flex-col justify-center items-center  gap-10 ">
       
        <div className="w-full  flex flex-col justify-center items-center gap-6 text-center ">
          <div className="flex flex-col justify-center items-center gap-4" data-aos="fade-up">
            <h1 className="text-4xl md:text-[3rem] leading-[1.2] font-normal md:w-full text-center" data-aos="fade-up">
           Automate Backend QA with <span className="font-bold">AI</span>
           </h1>
            <p className="text-md subtext font-normal md:w-4/5" data-aos="fade-up">
              Faster tests, precise results, unparalleled efficiency and much more
            </p>
          </div>
          
        

<form onSubmit={joinWaitlist} className="bg-white/30 border border-gray px-2 py-2 rounded-full flex justify-between md:items-center w-full md:w-full relative" >
      <input
        value={email}
        placeholder="What&apos;s your email?"
        className="bg-white text-black w-full font-medium outline-none border-none text-sm  p-4 rounded-full "
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
      />
<button  className='bg-primary md:px-5 px-3 py-3 font-medium text-secondary rounded-full  text-sm hover:bg-lightPrimary transition-colors absolute top-auto right-3' disabled={isLoading} type="submit">
{isLoading ? (
  <span className="loader"></span>
)
 : "Join the waitlist"}
    </button>
    </form>
        </div>

      
             </div>

            
             </section>

             <section className="flex flex-col justify-center items-center gap-24 md:px-10 md:py-0 py-10 px-5" id ="about">
             <div className="flex flex-col justify-center items-center gap-4">
              <div data-aos="fade-up ">
                <span className="text-[#9A9A9A]">
                  Integrate with your favorite code repository tools
                  </span>
                </div>
                <div className="flex justify-between items-center gap-10">
                  <Image src="/Github.png" alt="Github" width={100}    height={150} />    
                  <Image src="/bitbucket.png" alt="Github" width={50}    height={150} />    
                  <Image src="/Gitlab.png" alt="Github" width={100}    height={150} />    
                   </div>
              </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-auto" >
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4">
                <div className="flex justify-center items-center gap-2 px-2 py-2 border border-gray rounded-full">
                  <Image src="/wand_stars.png" alt="wand" width={15} height={15} />
                  <h2 className="text-sm font-normal text-secondary" data-aos="fade-up">Fully powered with AI</h2>
                </div>
                <h2 className="text-3xl font-medium">Get past the backend QA testing bottleneck really fast</h2>
                <p className="text-md md:text-xl text-black/50 md:w-5/6 subtext">Set up backend tests in minutes, not hours—automate API testing, database validation, and log monitoring with scheduled or on-demand executions.</p>

                <button className="flex justify-center items-center gap-2 border border-black text-black font-semibold text-sm px-4 py-3 rounded-full hover:bg-primary hover:text-black hover:font-bold mt-3">
                  <Link href="https://calendly.com/integrionhq/demo-request" className="flex">
                  Request for Demo
                  < MoveUpRight size={15} />
                  </Link>
                
                 
                </button>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
              <div className="w-full md:w-3/4 bg-[#000000] rounded-lg flex flex-col justify-start items-start gap-4 p-5">
                <div className ="flex justify-between items-center w-full">
                  <h3 className="text-white text-2xl font-semibold">Automated Execution</h3>
                  <Command size={35} className="text-black bg-white rounded-md p-2" />
                </div>
                <p className="text-gray text-md w-full subtext">Say goodbye to manual backend testing—Integrion simplifies API, database, and log testing with AI-powered automation.</p>
                <div className="flex flex-wrap gap-5">
                  <p className="border border-gray rounded-full px-5 py-3 text-white text-sm font-normal">AI Powered Insights</p>
                  <p className="border border-gray rounded-full px-5 py-3 text-white text-sm font-normal">Reduce Cost</p>
                  <p className="border border-gray rounded-full px-5 py-3 text-white text-sm font-normal">Boost Efficiency</p>
                </div>
                </div>  
            </div>
            </div>
                </section>


<section className="flex flex-col justify-center items-center gap-4 px-5">
  <div className="flex flex-col justify-center items-center gap-2">
  <div className="flex justify-center items-center gap-2 px-2 py-2 border border-gray rounded-full">
                  <Image src="/wand_stars.png" alt="wand" width={15} height={15} />
                  <h2 className="text-sm font-normal text-secondary" data-aos="fade-up">Experience Amazing Features</h2>
                </div>
                <h2 className="text-4xl font-medium md:w-3/4 text-center">Precision. Speed. Scalability. All In One Platform</h2>
  </div>
  <div className="">
    <FeaturesGrid/>
  </div>
</section>

<section className="flex flex-col md:flex-row justify-center items-center gap-5 bg-[url(/bg-bg.svg)] h-auto md:h-[60vh] w-full p-5 pb-0 md:p-10">
<div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-5">
<div className="flex flex-col justify-center items-start text-white">
      <h2 className="text-2xl font-semibold">AI-Powered Insights, Smarter Debugging, Easy Fixes</h2>
        <p className="text-md font-normal subtext">Detect backend issues before they escalate with AI-driven anomaly detection, and optmization recommendations</p>
    </div>
    <div className="flex flex-col gap-2">
{AIFeatures.map((feature)=> (
  <AIFeatureCard key={feature.text} text={feature.text}/>
))}

    </div>

</div>
<div className="w-full md:w-1/2 flex flex-col justify-center items-center">
<Image src="/product-demo.png" width={350} height={350} alt=""/>
</div>
    
  </section>

           <section className="flex flex-col md:flex-row justify-center items-center gap-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3">
                <h2 className="font-semibold text-4xl ">Built for every tech stack</h2>
                <p className="text-black-500/50 text-lg font-normal">Seamlessly integrate Integrion into your workflow no matter what technologies you use</p>
                <button className="flex justify-center items-center gap-2 border border-black text-black font-semibold text-sm px-4 py-3 rounded-full hover:bg-primary hover:text-black hover:font-bold mt-3">
                  <Link href="https://calendly.com/integrionhq/demo-request" className="flex">
                  Request for Demo
                  < MoveUpRight size={15} />
                  </Link>
                  </button>
              </div>
              <div className="w-full md:w-1/2">
                <Image src="/Stack.svg" width={400} height={400} alt="" className="animate-[spin_10s_linear_infinite]"/>
              </div>
           </section>

                <section className="flex flex-col justify-center items-center  gap-10 md:p-10 py-10 px-5 " id="faq" data-aos="fade-up ">
                  <h2 className=" text-4xl md:text-5xl font-semibold text-center text-secondary">All the A&apos;s to your QA&apos;s</h2>
                  <FAQAccordion faqs={productFAQs}/>

                  {/* <button className="font-semibold text-secondary hover:bg-lighterPrimary px-4 py-3 rounded-md underline">See All FAQs</button> */}
                  </section>
    </main>
  );
}
