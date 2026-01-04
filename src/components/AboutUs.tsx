"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Horizontal scroll animations for different elements
  const titleX = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]);
  const subtitleX = useTransform(scrollYProgress, [0, 0.3, 0.8], [300, 0, -300]);
  const descriptionX = useTransform(scrollYProgress, [0.2, 0.6, 1], [-400, 0, 400]);
  const skillsX = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [500, 0, -500]);

  const aboutContent = {
    title: "About Me",
    subtitle: "Passionate Developer & Designer",
    description: "I'm a creative developer who loves bringing ideas to life through code. With a passion for clean design and smooth user experiences, I create digital solutions that make a difference. I also explore game development to expand my expertise in creating engaging interactive experiences.",
    highlights: [
      "Full-Stack Developer",
      "UI/UX Enthusiast", 
      "Problem Solver",
      "Game Developer"
    ]
  };

  return (
    <section id="about" ref={containerRef} className="min-h-[80vh] bg-gradient-to-br from-gray-50 to-white relative overflow-hidden py-20">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Title */}
        <motion.div 
          style={{ x: titleX }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {aboutContent.title}
          </motion.h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div 
          style={{ x: subtitleX }}
          className="text-center mb-20"
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-light text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {aboutContent.subtitle}
          </motion.h3>
        </motion.div>

        {/* Description */}
        <motion.div 
          style={{ x: descriptionX }}
          className="text-center mb-20"
        >
          <motion.p 
            className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {aboutContent.description}
          </motion.p>
        </motion.div>

        {/* Highlights */}
        <motion.div 
          style={{ x: skillsX }}
          className="mb-20"
        >
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
            {aboutContent.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="bg-white bg-opacity-80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 font-medium text-center">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link href="/about">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </Link>
        </motion.div> */}

      </div>
    </section>
  );
}
