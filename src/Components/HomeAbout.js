"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

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
        duration: 0.5, 
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
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
          {/* Button */}
          <motion.div
          className="pt-6 flex justify-start"
          variants={textVariants}
        >
          <Link href="/pages/aboutus">
          <button
            type="button"
            className="w-auto px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-[#FCD148] border border-transparent rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Learn More
          </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
