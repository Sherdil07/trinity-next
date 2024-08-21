"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const HomeAbout = () => {
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
        duration: 0.5, // Faster animation
        staggerChildren: 0.2, // Faster sequence between animations
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Faster animation
        staggerChildren: 0.2, // Faster sequence between animations
      },
    },
  };

  return (
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
          />
          <motion.img
            src="/images/about-us-trinity-2.jpeg"
            alt="Service Image 2"
            className="h-full"
            variants={imageVariants}
          />
        </div>
        <motion.div className="w-full mt-4" variants={imageVariants}>
          <img src="/images/service-1.png" alt="Service Image 3" className="w-full" />
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
          className="inline-block mt-20 text-2xl uppercase border-b-4 border-yellow-600"
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
  );
};

export default HomeAbout;
