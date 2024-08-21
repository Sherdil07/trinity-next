"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa"; // Importing Font Awesome phone icon
import Image from "next/image";
import Map from "@/Components/Map";

const ApplianceRemoval = () => {
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
            ApplianceRemoval
          </h1>

          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center">
              Home
              <FaLongArrowAltRight className="text-lg text-yellow-600" />
              ApplianceRemoval
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
            Appliance Removal
          </motion.span>

          <motion.h1
            className="text-3xl font-extrabold"
            variants={textVariants}
          >
            Appliance Removal In USA
          </motion.h1>

          <motion.p
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
            variants={textVariants}
          >
            We are your go-to partner for swift and efficient appliance removal
            service. Whether you’re upgrading or replacing appliances, our
            service is designed for your convenience. No matter used or new,
            appliances require careful handling. Our trained team specializes in
            safely removing appliances, ensuring no damage to your property or
            the items being replaced. We understand the urgency when it comes to
            appliance removal. Our prompt service ensures that your old
            appliances are removed quickly, allowing for seamless replacements.
            Disposing of appliances responsibly is our commitment. We follow
            environmentally friendly disposal practices, recycling materials
            whenever possible. Safety is a priority. Our team follows safety
            protocols during appliance removal to protect both your property and
            our team members. Transparent and competitive pricing is our
            guarantee. You only pay for the space your appliances occupy in our
            trucks, making our service affordable and fair.
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

export default ApplianceRemoval;
