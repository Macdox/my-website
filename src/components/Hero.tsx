"use client";

import { motion } from "framer-motion";
import Link from "next/link";

    interface HeroProps {
  isScrolled?: boolean;
}

export default function Hero({ isScrolled = false }: HeroProps) {
  return (
    <motion.section 
      className="relative h-screen w-full flex flex-col-reverse md:flex-row items-center md:justify-between gap-5 md:bottom-0 bottom-24 max-w-6xl mx-auto px-6 pt-32 pb-24 overflow-hidden"
      animate={{
        opacity: isScrolled ? 0.3 : 1,
        y: isScrolled ? -100 : 0,
        scale: isScrolled ? 0.95 : 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut"
      }}
    >
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bottom-32 flex items-center justify-center -z-10">
          <img
            src="/Group 4.png"
            alt="Background Logo"
            className="w-96 h-96 object-contain opacity-85"
          />
        </div>
        {/* Large Circle */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-2 border-gray-200 opacity-50"></div>
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-gray-300 opacity-30"></div>

        {/* Blue Angular Shape */}
        <svg
          className="absolute top-1/4 right-0 w-80 h-80 text-blue-500 opacity-70"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M50 0 L200 0 L200 150 L100 200 L0 100 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="rgba(59, 130, 246, 0.05)"
          />
        </svg>

        {/* Small decorative elements */}
        <div className="absolute top-1/3 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>

        {/* Additional geometric lines */}
        <div className="absolute top-20 left-1/4 w-32 h-px bg-gradient-to-r from-blue-400 to-transparent opacity-50"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-px bg-gradient-to-l from-gray-400 to-transparent opacity-30"></div>
      </div>
      {/* Text content with stagger */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 relative z-10"
        >
          <span className="text-gray-900">ui/ux designer</span>
          <br />
          <span className="text-gray-900">& developer.</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg relative z-10"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.div variants={itemVariants} className="relative z-10">
          <Link href="#projectsection" className="inline-flex items-center group">
            {/* Gray Circle Background */}
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-400 transition-colors">
              <svg
                className="w-6 h-6 text-black transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <span className="text-black font-semibold text-lg tracking-wide uppercase">
              SEE MY WORKS
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Computer/Monitor Illustration with slide-in */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center relative z-10"
      >
        {/* Computer Monitor SVG */}
        <div className="relative">
          <svg
            width="300"
            height="200"
            viewBox="0 0 300 200"
            className="drop-shadow-lg"
          >
            {/* Monitor Screen */}
            <rect
              x="20"
              y="20"
              width="260"
              height="140"
              rx="8"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            <rect
              x="30"
              y="30"
              width="240"
              height="120"
              rx="4"
              fill="#f8fafc"
            />

            {/* Monitor Stand */}
            <rect x="140" y="160" width="20" height="25" fill="#6b7280" />
            <rect x="120" y="180" width="60" height="8" rx="4" fill="#6b7280" />

            {/* Black Label on Screen */}
            <rect x="80" y="80" width="140" height="30" rx="4" fill="#1f2937" />
            <text
              x="150"
              y="100"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              Maddox
            </text>
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
}

// Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
