import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

// Wave animation component for the heading
const WaveText = ({ text, className }: { text: string; className: string }) => {
  const letters = text.split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      }
    }
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
          whileHover={{
            y: -5,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// Typing animation component for subheading
const TypingText = ({ text, className, onComplete }: { text: string; className: string; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  const startTyping = () => {
    if (animationStarted) return;
    
    setAnimationStarted(true);
    let index = 0;
    
    const typeChar = () => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
        setTimeout(typeChar, 20);
      } else {
        setIsComplete(true);
        if (onComplete) {
          setTimeout(() => onComplete(), 500);
        }
      }
    };
    
    setTimeout(typeChar, 300); // Start after 0.3 second delay
  };

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: { duration: 0.5, delay: 1.5 }
      }}
      onViewportEnter={startTyping}
      viewport={{ once: true }}
    >
      {displayText}
      {!isComplete && animationStarted && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          |
        </motion.span>
      )}
    </motion.p>
  );
};

export default function Project() {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title:"Full stack College Festival Website",
      description: "A comprehensive platform for managing college festivals, including event scheduling, ticketing, and user engagement features.(This project is live and Under Maintenance)",
      tech: ["NextJs", "Node.js", "Express", "MongoDB"],
      type: "Full Stack",
      category: "Event Management , registration",
      website: "http://pratistha.sakec.ac.in/"
    },
    {
      id: 2,
      title: "Physiotherapy Clinic",
      description: "Comprehensive clinic management system with appointment booking and patient management.",
      tech: ["React","TailwindCss", "API Integration"],
      type: "Frontend",
      category: "Healthcare",
      website: "https://physiocuro.com/"
    },
    {
      id: 3,
      title: "EdTech Platform",
      description: "Full-stack educational platform with course management, student tracking, and interactive learning.(This project is live and under Development phase)",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
      type: "Full Stack",
      category: "Education",
      website: "https://spiroedu.com/"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen pt-20 bg-white relative z-10"
      id="projectsection"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <WaveText 
          text="My Projects"
          className="text-4xl md:text-6xl font-bold text-center mb-8 text-black"
        />
        <TypingText 
          text="Explore my portfolio featuring consulting platforms, healthcare solutions, and educational technology. Each project demonstrates my expertise in modern web development and user-centered design."
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16"
          onComplete={() => setShowProjects(true)}
        />
        
        {/* Project grid with slide-in animation */}
        <motion.div 
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto scrollbar-hide md:overflow-visible"
          initial={{ opacity: 0, x: -100 }}
          animate={showProjects ? { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration: 0.8, 
              ease: "easeOut",
              staggerChildren: 0.2 
            }
          } : {}}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 h-auto border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-full md:w-auto"
              initial={{ opacity: 0, x: -50 }}
              animate={showProjects ? {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.3 + (index * 0.2),
                  ease: "easeOut"
                }
              } : {}}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project Type Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.type === 'Full Stack' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {project.type}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Button */}
              <Link href={project.website} target="_blank" rel="noopener noreferrer">
                <button className="w-full mt-4 bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                  View Project
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Swipe indicator for mobile */}
        <motion.div 
          className="md:hidden flex justify-center items-center gap-2 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </motion.svg>
          <p className="text-gray-500 text-sm font-medium">Swipe to see more</p>
        </motion.div>
      </div>
    </motion.div>
  );
}