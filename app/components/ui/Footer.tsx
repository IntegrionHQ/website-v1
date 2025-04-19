"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import { Command, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string>("");
  // const [success, setSuccess] = useState<boolean>(false);

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
        throw new Error("Failed to join waitlist");
        }
        } catch (error) {
          // setError("Failed to join waitlist");
          console.log(error)
        } finally {
          setIsLoading(false);
        }
      };

  return (
    <footer className="bg-[#efefef] py-12 px-6 flex flex-col justify-center items-center gap-6 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-20 max-w-[1200px] w-full">
        {/* Left Content */}
        <div className="flex flex-col gap-6 w-full md:w-2/3 bg-secondary p-10 rounded-xl">
        <div className="flex justify-between items-center gap-10">
          <div className="w-2/3">
          <h3 className="text-3xl md:text-4xl font-medium text-white leading-snug">
          Don&apos;t test the old way - Join the revolution
          </h3>
          </div>
       <div className="w-1/3 flex justify-end items-end">
       <Command size={35} className="text-black bg-white rounded-md p-2" />

       </div>
        </div>
         
          <p className="text-lg subtext text-[#aaa]">
            Be among the first to experience Integrion&apos;s groundbreaking capabilities.
          </p>

          {/* Input + Button */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
            <input
              type="email"
              placeholder="example@waitlist.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white  p-3 border border-gray text-black rounded-full outline-none"
            />
            <button
              className="bg-primary text-secondary hover:bg-lightPrimary py-3 px-5 rounded-full text-sm font-medium hover:bg-primary-dark transition-all"
              onClick={joinWaitlist}
            >
             {isLoading ? (
  <span className="loader"></span>
)
 : "Signup for early access"}
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image src="/img-3.png" alt="Integrion Preview" width={350} height={250} className="rounded-lg" />
        </div>
      </div>
    <hr className="text-[#333]/10 h-2 w-full"/>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 max-w-[1200px] w-full">
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between md:items-center items-start gap-6 md:gap-0">
      <div className="flex flex-col justify-between items-start gap-4">
<span className="font-bold text-md text-[#636363]">
          Product
          </span>
          <div className="flex flex-col justify-center items-start gap-3">
      <Link href="/#features" className="text-sm font-medium text-[#636363] hover:font-bold hover:text-secondary">
      <span>Features</span>
      </Link>
      <Link href="https://calendly.com/integrionhq/demo-request" target="_blank" className="text-sm font-medium text-[#636363] space-x-2 hover:font-bold hover:text-secondary">
     <span>
     Pricing 
      </span>
      <span className="bg-primary text-secondary font-semibold text-xs rounded-md px-2 py-1"> Speak to sales </span>
      </Link>
      <Link href="https://calendly.com/integrionhq/demo-request" target="_blank" className="text-sm font-medium text-[#636363] hover:font-bold hover:text-secondary">
      <span>Speak to engineering</span>
      </Link>
          </div>
      </div>
      <div className="flex flex-col justify-between items-start gap-4">
<span className="font-bold text-md text-[#636363]">
          Company
          </span>
          <div className="flex flex-col justify-center items-start gap-3">
      <Link href="/#about" className="text-sm font-medium text-[#636363] hover:font-bold hover:text-secondary">
      <span>About Us</span>
      </Link>
      <Link href="mailto:integrionhq@gmail.com" target="_blank" className="text-sm font-medium text-[#636363] space-x-2 hover:font-bold hover:text-secondary">
     <span>
     Emerging Talents 
      </span>
      <span className="bg-primary text-secondary font-semibold text-xs rounded-md px-2 py-1"> Speak to sales </span>
      </Link>
      <Link href="mailto:integrionhq@gmail.com" target="_blank" className="text-sm font-medium text-[#636363] hover:font-bold hover:text-secondary">
      <span>Careers</span>
      </Link>
          </div>
      </div>
        
      </div>
      <div className="flex flex-col justify-between items-start">
        <Image src="/logo.svg" alt="" width={150} height={150}/>
        <Link href="mailto:integrionhq@gmail.com">
        <span className="text-sm text-[#636363] hover:font-bold hover:text-secondary">
          integrionhq@gmail.com
        </span>
        </Link>
        <div className="flex justify-center items-center gap-2">
          <Instagram size= "16" className="bg-black text-white rounded-full"/>
          <Linkedin size="16" className=""/>
        </div>
        <span className="text-sm text-[#636363] hover:font-bold hover:text-secondary">
          We are a full remote team, with team members across the globe .
        </span>
       
      
      </div>
    </div>
    </footer>
  );
};

export default Footer;
