"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [starPositions, setStarPositions] = useState<Array<{ left: number; top: number }>>([]);

  useEffect(() => {
    // Generate star positions on client side only
    setStarPositions(
      Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    );

    // Simulate website loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    // Also check if window is loaded
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1000); // Small delay after actual load
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  const ballVariants = {
    bounce: {
      y: [0, -40, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1] as const
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {starPositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center">
        {/* Bouncing balls */}
        <motion.div
          className="flex space-x-4 justify-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === 0 ? 'bg-blue-500' : 
                index === 1 ? 'bg-purple-500' : 'bg-pink-500'
              }`}
              variants={ballVariants}
              animate="bounce"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
              transition={{
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Loading Portfolio
          </h2>
          <motion.p
            className="text-gray-400 text-sm md:text-base"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Crafting your experience...
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-64 h-1 bg-gray-800 rounded-full mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>

        {/* Percentage counter */}
        <motion.div
          className="mt-4 text-white font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading...
          </motion.span>
        </motion.div>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-8 h-8 border-2 border-blue-500 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-purple-500 rounded"
        animate={{
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </motion.div>
  );
}
