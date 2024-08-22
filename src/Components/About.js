"use client";
import { FaLongArrowAltRight } from 'react-icons/fa'
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';

function About() {
  const controls = useAnimation();
  const textControls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      textControls.start("visible");
    }
  }, [controls, textControls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // Slower animation
        staggerChildren: 0.5, // Increased delay between animations
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5, // Slower animation
        staggerChildren: 0.5, // Increased delay between animations
      },
    },
  };
  return (
    <div>
      {/* hero section  */}
      <div className="relative min-h-[60vh] bg-black bg-center bg-no-repeat bg-cover  z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1
            className="text-white mt-32 text-5xl font-bold"
          >
            About Us
          </h1>

          <div
            className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow"
          >
            <div className="flex gap-2 items-center">
              Home
              <FaLongArrowAltRight className="text-lg text-yellow-600" />
              About Us
            </div>
          </div>
        </div>
      </div>

      {/* about us  */}
      <div ref={ref} className="min-h-[70vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] bg-white">
      {/* Left Side */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        className="p-10"
      >
        <div className="grid grid-cols-[1fr_1fr] gap-4">
          <motion.img
            src="/images/about-us-trinity-1.png"
            alt="Service Image 1"
            variants={imageVariants}
            className="w-full h-full border-4 border-[#FCD148] rounded-lg object-cover"
          />
          <motion.img
            src="/images/about-us-trinity-2.jpeg"
            alt="Service Image 2"
            variants={imageVariants}
            className="w-full h-full border-4 border-[#FCD148] rounded-lg object-cover"
          />
        </div>

        {/* Card Component */}
        <motion.div
          className="flex items-center p-6 bg-[#FCD148] rounded-lg shadow-lg mt-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-shrink-0">
            <span className="text-black text-4xl animate-bounce">
              <i className="fas fa-star"></i>
            </span>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold">
              <span>10+</span>
            </h3>
            <p className="text-gray-600">Years Of Experience</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial="hidden"
        animate={textControls}
        variants={textVariants}
        className="bg-white text-black p-10"
      >
        <motion.span
          className="inline-block text-2xl uppercase border-b-4 border-[#FCD148]"
          variants={textVariants}
        >
          About Us
        </motion.span>

        <motion.h1 className="mt-10 text-3xl font-extrabold" variants={textVariants}>
          Reclaiming Spaces, Removing Clutter, Transforming Lives with Care
        </motion.h1>

        <motion.p
          className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
          variants={textVariants}
        >
          We are dedicated to revitalizing spaces with efficient junk removal
          and cleanup services. Our experienced team specializes in removing
          clutter, whether it’s old furniture, appliances, yard debris, or
          assisting with construction cleanup. Beyond the ordinary, we excel in
          compassionate hoarder house cleanouts and special cleanup,
          understanding the unique challenges these situations pose. Our
          commitment extends beyond removal; we believe in transforming
          environments, creating organized, welcoming spaces. With a focus on
          professionalism and reliability, Trinity ensures a seamless experience
          for every client. Choose Trinity for a trusted partner in reclaiming
          spaces and transforming lives with care. With green practices we make
          sure that your environment is also safe and healthy.
        </motion.p>
      
      </motion.div>
    </div>
    </div>
  )
}

export default About
