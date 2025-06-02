"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle
} from "@/app/components/ui/resizable-navbar";
import React from 'react'
import {useState} from "react"
const Header = () => {
    const navItems = [
    {
        name: "Home",
        link: "#home"
    },
    {
        name: "Features",
        link: "#features"
    },
    {
        name: "About",
        link: "#about"
    },
    {
        name: "FAQ",
        link: "#faq"
    },
]
const [menuOpen,setMenuOpen] = useState(false)
  return (
   <Navbar>
    <NavBody>
        <NavbarLogo/>
        <NavItems items={navItems} />
        <NavbarButton href="https://calendly.com/integrionhq/demo-request">See a demo</NavbarButton>
    </NavBody>
    <MobileNav>
        <MobileNavHeader>
            <NavbarLogo/>
            <MobileNavToggle isOpen={menuOpen} onClick={()=>setMenuOpen(value=>!value)}/>
        </MobileNavHeader>
        <MobileNavMenu isOpen={menuOpen} onClose={()=>setMenuOpen(false)}>
            <NavItems items={navItems} onItemClick={() => setMenuOpen(false)} mobile={true} />
            <NavbarButton href="https://calendly.com/integrionhq/demo-request">See a demo</NavbarButton>    
        </MobileNavMenu>
    </MobileNav>
   </Navbar>
  )
}

export default Header