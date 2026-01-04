"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoaderOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide after 2.5 seconds
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[999] bg-white flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={overlayContainer}
            className="relative w-full h-full flex flex-col items-center justify-center"
          >
            {/* Large black X */}
            <motion.div
              variants={barVariant}
              className="absolute w-2/3 h-2 bg-black rotate-45"
            />
            <motion.div
              variants={barVariant}
              className="absolute w-2/3 h-2 bg-black -rotate-45"
            />

            {/* Horizontal bars */}
            <motion.div
              variants={barVariant}
              className="absolute top-1/4 w-1/2 h-4 bg-black"
            />
            <motion.div
              variants={barVariant}
              className="absolute bottom-1/4 w-1/2 h-4 bg-black"
            />

            {/* Vertical bar on right */}
            <motion.div
              variants={barVariant}
              className="absolute right-10 h-1/2 w-3 bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const overlayContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const barVariant = {
  hidden: { opacity: 1, scaleX: 1 },
  visible: {
    opacity: 0,
    scaleX: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};
