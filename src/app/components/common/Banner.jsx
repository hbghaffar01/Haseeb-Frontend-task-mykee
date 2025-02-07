"use client";
import Image from "next/image";
import { SearchInput } from "./SearchInput";
import Button from "./Button";
import { motion } from "framer-motion";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 md:min-h-[600px] h-full">
        <Image src="/banner_img.jpg" alt="Banner Background" fill priority />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              variants={itemVariants}
            >
              Buy / Sell Property
              <br />
              on the Go.
              <br />
              Anywhere, Anytime.
            </motion.h1>
            
            <motion.p 
              className="text-lg text-white leading-tight"
              variants={itemVariants}
            >
              Register now and get Fitout in rewards.
            </motion.p>

            <motion.div 
              className="flex flex-col md:flex-row gap-4 my-8 w-full max-w-xl"
              variants={itemVariants}
            >
              <div className="flex-1">
                <SearchInput
                  placeholder="Email Address"
                  className="bg-transparent border-white"
                />
              </div>
              <Button color="bg-red-500 hover:bg-red-600">Get Started</Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full max-w-md lg:w-1/3 hidden md:block"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/big_logo.png"
              alt="Makyee Logo"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;