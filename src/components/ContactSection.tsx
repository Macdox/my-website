'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax animations
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large Circular Arc */}
        <motion.div
          className="absolute -left-1/4 top-1/2 w-96 h-96 border-2 border-gray-700 rounded-full"
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Diagonal Lines Pattern */}
        <motion.div
          className="absolute top-16 right-16 w-32 h-32"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-0.5 bg-gray-600"
              style={{
                top: `${i * 12}px`,
                transform: `rotate(45deg)`,
                opacity: 0.6 - i * 0.05
              }}
            />
          ))}
        </motion.div>

        {/* Floating Dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-500 rounded-full"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-8 max-w-4xl mx-auto"
        style={{ scale, y }}
      >
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's work together.
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I'm available for freelance work.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="mailto:tejasnajare@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <motion.button
              className="group relative px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-full transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                SAY HELLO
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            // { icon: 'fab fa-instagram', href: '#' },
            // { icon: 'fab fa-github', href: '' },
            { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/tejas-najare' },
            { icon: 'fab fa-discord', href: 'https://discord.com/users/664721063489568771' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-gray-800 hover:bg-white text-gray-300 hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <i className={`${social.icon} text-lg`}></i>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          © MADDOX 2025
        </motion.p>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </motion.section>
  );
}
