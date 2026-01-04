'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';

export default function ProjectTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Generate stable star positions with reduced count for better performance
  const starPositions = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({ // Reduced from 50 to 30 stars
      id: i,
      left: (i * 7.3) % 100,
      top: (i * 13.7) % 100,
      delay: (i * 0.03) % 0.5,
      duration: 0.8 + (i % 2) * 0.3,
    }));
  }, []);

  // Transform values for zoom effect - optimized for smoother performance
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.5, 3, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const backgroundColor = useTransform(
    scrollYProgress, 
    [0, 0.7, 1], 
    ["rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(255, 255, 255)"]
  );
  const whiteOverlay = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <motion.div 
      ref={containerRef} 
      className="h-[200vh] flex items-center justify-center overflow-hidden sticky top-0"
      style={{ 
        backgroundColor,
        willChange: 'transform, opacity' // Optimize for GPU acceleration
      }}
    >
      {/* White overlay for transition to white screen */}
      <motion.div 
        className="absolute inset-0 bg-white"
        style={{ opacity: whiteOverlay }}
      />
      
      {/* Starry background - optimized for performance */}
      <div className="absolute inset-0 will-change-transform">
        {starPositions.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: useTransform(scrollYProgress, [0, 0.7], [0.8, 0]),
              willChange: 'opacity, transform'
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1], // Reduced scale animation for smoother performance
            }}
            transition={{
              duration: star.duration * 0.5,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main quote text - optimized */}
      <motion.div
        className="text-center fixed inset-0 flex items-center justify-center px-12 md:px-20 lg:px-32 z-20 mx-12 md:mx-20 lg:mx-32"
        style={{
          scale,
          opacity: textOpacity,
          willChange: 'transform, opacity'
        }}
      >
        <motion.h1 
          className="text-sm md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-wide select-none text-center leading-relaxed max-w-2xl mx-auto my-12"
          style={{
            willChange: 'transform'
          }}
        >
          "Design is not just what it looks like — design is how it works"
        </motion.h1>
      </motion.div>

      {/* Corner decoration - optimized */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-2 border-gray-600 rounded-full"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.7], [1, 0]),
          willChange: 'transform, opacity'
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
