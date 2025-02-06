"use client"
import Image from "next/image";
// import Button from "./components/ui/Button";
import { useState , useEffect} from "react";
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
import AOS from 'aos';
import "aos/dist/aos.css";


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
  // const [email, setEmail] = useState<string>("");
  const [flip, setFlip ] = useState<boolean>(false);
  // const [isLoading, setIsLoading] = useState<boolean>(false)
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
    <main className="space-y-48 w-full">
      <section className="flex flex-col jusitfy-center items-center gap-20  bg-secondary text-white h-[90vh]  md:p-10 py-10 px-5">

      <div className="flex  flex-col justify-center items-center  gap-10 ">
       
        <div className="w-full  flex flex-col justify-center items-center gap-6 text-center ">
          <div className="flex flex-col justify-center items-center gap-4" data-aos="fade-up">
            <h1 className="text-4xl md:text-[3.5rem] leading-[1.2] font-bold md:w-3/4 text-center" data-aos="fade-up">
             Supercharge QA engineering with AI <span className="text-primary"> {
              "{seconds > hours}"
             }
             </span>
            </h1>
            <p className="text-md subtext font-normal" data-aos="fade-up">
              Faster tests, precise results, unparalleled efficiency and much more
            </p>
          </div>
          
        

<form onSubmit={joinWaitlist} className="bg-white/30 border border-gray p-2 rounded-lg flex justify-between md:items-center w-full md:w-1/2" >
      <input
        value={email}
        placeholder="What&apos;s your email?"
        className="bg-transparent text-white font-medium outline-none border-none text-md px-3"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
      />
<button  className='bg-primary md:px-5 px-2 py-3 font-medium text-secondary rounded-md text-sm hover:bg-lightPrimary transition-colors' disabled={isLoading} type="submit">
{isLoading ? (
  <span className="loader"></span>
)
 : "Join the waitlist"}
    </button>
    </form>
        </div>

        
             </div>

             <div className="flex flex-col justify-center items-center gap-4">
              <div data-aos="fade-up ">
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

             <section className="flex flex-col justify-center items-center gap-10 md:p-10 py-10 px-5" id ="about">
              <h2 className=" text-4xl md:text-5xl font-semibold w-full md:w-1/2 text-center" data-aos="fade-up ">
              Get past the backend and QA testing bottleneck really fast
                </h2>
             {!flip ? (
              <div className="flex flex-col justify-center items-start gap-5 bg-[#e8eef7] p-5 w-full md:w-3/4 rounded-lg" data-aos="fade-up ">
                  <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-4 md:items-center w-full">
                    <span className="text-[#636363] text-3xl font-medium">Backend testing is broken</span>
                    <button className="bg-lighterPrimary py-2 px-4 rounded-lg group  transition-all hover:cursor-pointer  hover:bg-secondary hover:text-white flex justify-center items-center gap-3" onClick={()=> setFlip(!flip)}>
                    <Command/>
                    <span className="text-secondary text-sm font-medium group-hover:text-white">Resolve the issue</span>
                    </button>
</div>
<p className="text-lg font-medium">Engineers spend countless hours crafting test cases, running tests, troubleshooting failures and piecing together resolutions</p>

                    <div className="flex flex-wrap justify-between items-start gap-10">
                   
                      <Tag bgColor="secondary" color="white" tagName="Delayed releases" Icon={CircleAlert}/>
                      <Tag bgColor="secondary" color="white" tagName="Increased costs" Icon={CircleAlert}/>
                      <Tag bgColor="secondary" color="white" tagName="Stifled innovation" Icon={CircleAlert}/>
                      </div>
                  </div>
            
             ) : (
              <div className="flex flex-col justify-center items-start gap-7  bg-[#e8eef7] p-5  lg:w-3/4 rounded-lg" data-aos="fade-up ">
              <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-4 md:items-center w-full">
                <span className="text-[#636363] text-3xl font-medium">Integrion fixes it</span>
                <button className="bg-lighterPrimary py-2 px-4 rounded-lg group  transition-all hover:cursor-pointer  hover:bg-secondary hover:text-white flex justify-center items-center gap-3" onClick={()=> setFlip(!flip)}>
                <Command/>
                <span className="text-secondary text-sm font-medium group-hover:text-white">What&apos;s the problem ?</span>
                </button>
</div>
<p className="text-lg font-medium">With Integrion, you can <span className="text-secondary font-bold">slash QA times</span>, <span className="text-secondary font-bold">ship faster</span> and ensure <span className="text-secondary font-bold">rock solid backend performance</span>  - no more bottlenkecks just progress</p>

               <Timeline/>
              </div>
             )}
              </section>

              <section className="flex flex-col justify-center item-center md:p-10 py-10 px-5 gap-10" id="features">
              <div className="">
                <h2 className="text-4xl md:text-5xl font-semibold text-center" data-aos="fade-up ">
                  <span className="text-primary">Precision.Speed.Scalability.</span>
             All in One Platform
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5" data-aos="fade-up ">
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


                <section className="bg-secondary h-auto md:p-10 px-5 py-10" id="languages">
    <div className="p-10">
   
      {/* Header */}
      <div className="text-white text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white" data-aos="fade-up ">Built for every tech stack</h2>
        <p className="text-gray mt-2 subtext" data-aos="fade-up ">
          Seamlessly integrate Integrion into your workflow no matter what technologies you use
        </p>
       
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up ">
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
      <Link href="https://calendly.com/integrionhq/demo-request">
      Request a demo
      </Link>
         
        </button>
      </div>
  
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