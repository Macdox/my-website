'use client';

import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Project from "@/components/Project";
import ProjectTransition from "@/components/ProjectTransition";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Hide after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      
      {/* Social Media Icons - Left Side */}
      <div className={`fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'opacity-0 -translate-x-8 pointer-events-none' : 'opacity-100 translate-x-0'
      }`}>
        <a 
          href="https://github.com/macdox" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#363636] hover:text-black transition-colors duration-300 bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:shadow-xl"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
        <a 
          href="https://linkedin.com/in/tejas-najare" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#363636] hover:text-blue-600 transition-colors duration-300 bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:shadow-xl"
        >
          <i className="fab fa-linkedin text-xl"></i>
        </a>
      </div>

      {/* Scroll Down Indicator - Right Side */}
      <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'opacity-0 translate-x-8 pointer-events-none' : 'opacity-100 translate-x-0'
      }`}>
        <span className="text-gray-800 text-sm font-medium writing-mode-vertical transform rotate-180 mb-4">
          Scroll down
        </span>
        <div className="w-0.5 h-16 bg-gray-800 opacity-50"></div>
        <i className="fas fa-arrow-down text-gray-800 text-lg animate-bounce"></i>
      </div>
      
      {/* Home page content */}
      <Hero isScrolled={isScrolled}/>
      <AboutUs />
      <ProjectTransition />
      <Project/>
      <ContactSection />
    </div>
  );
}
