"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnDarkSection, setIsOnDarkSection] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect if we're on a dark section (contact section)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Contact section is at the bottom part of the page
      const contactSectionStart = documentHeight - windowHeight * 1.5;
      
      setIsOnDarkSection(scrollY >= contactSectionStart);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#projectsection" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full sm:px-[72px] px-[5%] flex items-center justify-between py-4 z-50 bg-transparent">
        <Link href="/" className="">
          <img src="/logo.svg" alt="Logo" className="h-16" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="md:flex hidden items-center gap-8 relative">
          <div className={`flex items-center gap-6 text-2xl font-medium transition-colors duration-300 ${
            isOnDarkSection ? 'text-white' : 'text-black'
          }`}>
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 transition-colors duration-200 ${
                  isOnDarkSection ? 'text-white hover:text-gray-300' : 'text-black hover:text-black'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className={`absolute bottom-[8px] left-0 right-0 w-20 place-self-center h-1 rounded-full ${
                      isOnDarkSection ? 'bg-white' : 'bg-black'
                    }`}
                    layoutId="underline"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          {/* Resume Button */}
          <Link href="/Tejas Najare Resume.pdf" download>
            <motion.button
              className={`px-6 py-2 border-2 font-semibold rounded-lg transition-all duration-300 ${
                isOnDarkSection
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button and Resume */}
        <div className="md:hidden flex items-center gap-4">
          {/* Resume Button for Mobile */}
          <Link href="/Tejas Najare Resume.pdf" download>
            <motion.button
              className={`px-4 py-2 border-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                isOnDarkSection
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
          </Link>
          
          {/* Hamburger Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className={`flex items-center justify-center w-10 h-10 text-2xl transition-colors duration-300 ${
              isOnDarkSection ? 'text-white' : 'text-black'
            }`}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed top-20 left-0 right-0 w-full bg-white shadow-lg overflow-hidden z-40"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="flex flex-col items-center gap-4 py-6 text-xl font-medium text-black"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1 + index * 0.1,
                    ease: "easeOut" 
                  }}
                  whileHover={{ scale: 1.05, color: "#000000" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href}
                    onClick={toggleMenu}
                    className={`block transition-colors duration-200 ${
                      pathname === item.href ? 'text-black font-semibold' : 'text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
