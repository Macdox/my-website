"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
      className="flex flex-col items-center justify-center text-center px-6 py-20 min-h-screen"
    >
      <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut"
        }}
        className="text-6xl font-bold text-indigo-600 mb-4"
      >
        404
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 0.5,
          delay: 0.4,
          ease: "easeOut"
        }}
        className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
      >
        Page Not Found
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 0.5,
          delay: 0.6,
          ease: "easeOut"
        }}
        className="text-gray-600 mb-6"
      >
        Sorry, the page you are looking for does not exist or has been moved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: 0.8,
          ease: "easeOut"
        }}
      >
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          Go back home
        </Link>
      </motion.div>
    </motion.div>
  );
}
