"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Sparkles, Globe} from 'lucide-react';

interface SubItemType {
    name: string;
    url: string;
    icon: React.JSX.Element;
    subtext: string;
}

interface ItemType {
    name: string;
    url: string;
    subitems?: SubItemType[];
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const navItems = [
        {
            name: "Product",
            url: "/",
            subitems: [
                { 
                    name: "Features", 
                    url: "/#features",
                    icon: <Sparkles className="w-5 h-5 text-primary" />,
                    subtext: "Explore our powerful features and capabilities"
                },
                { 
                    name: "Language Support", 
                    url: "/#languages",
                    icon: <Globe className="w-5 h-5 text-primary" />,
                    subtext: "Available languages and translation options"
                }
            ]
        },
        { name: "About", url: "/#about" },
        { name: "FAQ", url: "/#faq" },
    ];

    const toggleDropdown = (index:number) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    const handleItemClick = (item:ItemType, index: number = -1) => {
        // If the item has no subitems, close the mobile menu
        if (!item.subitems) {
            setIsOpen(false);
        }
        
        // If the item has subitems, toggle the dropdown
        if (item.subitems) {
            toggleDropdown(index);
        }
    };
    return (
        <section className="bg-white text-black relative">
            <nav className="mx-auto">
                <div className="flex justify-between items-center py-5 px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image src="/logo.svg" alt="logo" width={150} height={150} priority />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md hover:bg-secondary-dark focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:gap-x-8">
                        {navItems.map((item, index) => (
                            <div 
                                key={index} 
                                className="relative"
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <button
                                    className={`flex items-center gap-1 px-3 py-2 rounded-md hover:bg-lighterPrimary hover:text-black hover:font-medium transition-all duration-200 text-sm relative group
                                        ${hoveredItem === index ? 'bg-white/10' : ''}`}
                                    onClick={() => item.subitems && toggleDropdown(index)}
                                >
                                    {item.name}
                                    {item.subitems && (
                                        <ChevronDown 
                                            size={16} 
                                            className={`transform transition-transform duration-200
                                                ${hoveredItem === index ? 'rotate-180' : ''}`}
                                        />
                                    )}
                                </button>
                                
                                {/* Desktop Dropdown */}
                                {item.subitems && hoveredItem === index && (
                                    <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white text-gray-800 overflow-hidden">
                                        {item.subitems.map((subitem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={subitem.url}
                                                className="block p-4 hover:bg-gray-50 transition-colors duration-200 text-black relative group"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1 transition-transform duration-200 group-hover:scale-110">
                                                        {subitem.icon}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {subitem.name}
                                                        </div>
                                                        <div className="text-xs font-medium text-gray-500 mt-1">
                                                            {subitem.subtext}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                  
                  
                    </div>
                    <div className="space-x-5 hidden md:block">
                        {/* CTA Buttons */}
                        <Link
                            href="https://calendly.com/integrionhq/demo-request"
                            className="text-sm px-5 py-3 bg-primary text-secondary rounded-full font-medium hover:bg-lightPrimary transition-all duration-200"
                        >
                            See a demo
                        </Link>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="px-4 pt-2 pb-3 space-y-1">
                            {navItems.map((item, index) => (
                                <div key={index} className="w-full">
                                    {item.subitems ? (
                                        // Item with subitems
                                        <button
                                            className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/10 transition-colors duration-200"
                                            onClick={() => handleItemClick(item, index)}
                                        >
                                            {item.name}
                                            <ChevronDown 
                                                size={16} 
                                                className={`transform transition-transform duration-200
                                                    ${activeDropdown === index ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    ) : (
                                        // Item without subitems
                                        <Link
                                            href={item.url}
                                            className="block w-full px-3 py-2 rounded-md hover:bg-white/10 transition-colors duration-200"
                                            onClick={() => handleItemClick(item)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                    
                                    {/* Mobile Dropdown */}
                                    {item.subitems && activeDropdown === index && (
                                        <div className="ml-4 space-y-1">
                                            {item.subitems.map((subitem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={subitem.url}
                                                    className="block p-3 rounded-md hover:bg-white/10 transition-colors duration-200"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="flex-shrink-0 mt-1">
                                                            {subitem.icon}
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium">
                                                                {subitem.name}
                                                            </div>
                                                            <div className="text-xs text-gray-300 mt-1">
                                                                {subitem.subtext}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            {/* Mobile CTA Buttons */}
                            <div className="space-y-2 pt-4">
                               
                                <Link
                                    href="https://calendly.com/integrionhq/demo-request"
                                    className="block w-full px-4 py-2 text-center text-sm bg-primary text-secondary rounded-full font-medium hover:bg-lightPrimary transition-all duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                   See a demo
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </section>
    );
};

export default Navbar;
