"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomSwiper({ currentIndex, children, itemsToShow }) {
  const [containerWidth, setContainerWidth] = useState("100%");

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setContainerWidth("100%");
      } else if (width < 768) {
        setContainerWidth("90%");
      } else {
        setContainerWidth("100%");
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const totalItems = React.Children.count(children);

  if (totalItems === 0) {
    return <div>No items available</div>;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-full transition-all duration-300 ease-in-out"
        style={{
          width: containerWidth,
        }}
      >
        <AnimatePresence mode="wait">
          <div className="flex flex-wrap md:items-start xs:items-center md:justify-start xs:justify-center md:flex-nowrap md:gap-24 xs:gap-6 w-full">
            {React.Children.toArray(children)
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((child, index) => (
                <motion.div
                  key={index}
                  className={`
                    w-full 
                    xs:w-full 
                    sm:w-[calc(50%-8px)] 
                    md:w-[calc(${100 / itemsToShow}%-${
                    ((itemsToShow - 1) * 16) / itemsToShow
                  }px)]
                  `}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {child}
                </motion.div>
              ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
