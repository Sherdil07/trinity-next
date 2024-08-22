"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ topRef }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1, // Further reduced delay
        staggerChildren: 0.1, // Further reduced stagger
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }, // Further reduced duration
    },
  };

  const imageVariants = {
    animate: {
      y: [0, -20, 0], // Moving up, down, and back to the original position
      transition: {
        duration: 3, // Adjust duration as needed
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop
      },
    },
  };

  return (
    <div ref={topRef} className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image on top for small screens */}
        <motion.div
          className="relative md:order-2"
          variants={imageVariants}
          animate="animate"
        >
          <Image
            className="w-full h-auto max-h-[475px] rounded-lg"
            src="/images/truck1.png"
            alt="Truck Image"
            width={475}
            height={475}
          />
        </motion.div>

        <motion.div
          className="px-4 md:order-1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="font-russo text-3xl md:text-4xl text-gray-800 mb-4"
            variants={itemVariants}
          >
            WELCOME TO <span className="font-petit text-4xl md:text-5xl font-bold">Trinity</span> Junk
            Removal Inc
          </motion.h1>
          <motion.p
            className="font-inter text-lg text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Clearing Clutter, Creating Space, Transforming Environments
          </motion.p>
          <motion.p
            className="font-inter text-base text-gray-600 leading-relaxed mt-2"
            variants={itemVariants}
          >
            We are the best junk removal company in Riverview, FL. Our best junk
            removers are transforming spaces with professional cleaning and junk
            removal, property cleanup, furniture and appliance removal, yard
            debris cleanup etc.
          </motion.p>
          <motion.div className="mt-8" variants={itemVariants}>
            <Link href='/pages/services'>
            <button
            type="button"
            className="w-auto px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-[#FCD148] border border-transparent rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Explore More
          </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
