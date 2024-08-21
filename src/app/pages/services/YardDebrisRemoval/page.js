"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa"; // Importing Font Awesome phone icon
import Image from "next/image";
import Map from "@/Components/Map";

const YardDebrisRemoval = () => {
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
    <div>
      <div className="relative min-h-[60vh] bg-black bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-5xl font-bold">
            Yard Debris Removal
          </h1>

          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center">
              Home
              <FaLongArrowAltRight className="text-lg text-yellow-600" />
              Yard Debris Removal
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="min-h-[70vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] bg-white"
      >
        {/* Left Side */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="p-10 flex items-center justify-center"
        >
          <motion.img
            src="/images/service-1.png"
            alt="Service Image"
            className="w-full h-full object-cover border-4"
            style={{ borderColor: "#FCD148" }}
            variants={imageVariants}
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="bg-white text-black p-10 flex flex-col justify-start"
        >
          <motion.span
            className="inline-block text-2xl uppercase border-b-4 mb-6"
            style={{ width: "fit-content", borderColor: "#FCD148" }}
            variants={textVariants}
          >
            Yard Debris Removal
          </motion.span>

          <motion.h1
            className="text-3xl font-extrabold"
            variants={textVariants}
          >
            Yard Debris Removal In USA
          </motion.h1>

          <motion.p
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
            variants={textVariants}
          >
            Our team for yard debris removal service is your partner in
            rejuvenating outdoor spaces through professional services. Whether
            it’s leaves, branches, or general debris, we’ve got you covered. We
            tackle all types of yard debris. Our service covers leaves,
            branches, and any other debris cluttering your outdoor space,
            ensuring a comprehensive cleanup. Time is of the essence in outdoor
            projects. Our efficient yard debris removal ensures a quick
            turnaround, allowing you to enjoy your revitalized outdoor space
            sooner. We prioritize eco-friendly practices. Yard debris is sorted
            and disposed of responsibly, with recycling as a key component of
            our environmentally conscious approach. Our uniformed and
            professional team brings expertise to your yard debris removal
            project. We work with precision, leaving your outdoor space looking
            pristine. We understand your schedule varies. Our flexible
            scheduling options allow you to choose the most convenient and
            hassle free time for yard debris removal.
          </motion.p>

          <motion.button
            className="inline-flex w-auto rounded-xl mt-6 px-4 py-2 text-black font-semibold uppercase items-center bg-[#FCD34E] hover:bg-black hover:text-[#FCD34E] cursor-pointer z-40"
            variants={textVariants}
          >
            <FaPhoneAlt className="mr-2" /> {/* Call icon with margin */}
            (813) 426-9257
          </motion.button>
        </motion.div>
      </div>
      <Map />
    </div>
  );
};

export default YardDebrisRemoval;
