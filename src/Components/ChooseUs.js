"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ChooseUs = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-10">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 lg:pr-10"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}  // Faster transition
        >
          <p className="text-lg font-semibold mt-6 mb-4 flex items-center">
            <i className="fa fa-mobile fa-lg me-1"></i>{" "}
            <b style={{ color: "#FCD34E" }}>Why Choose Us!</b>
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Excellence Redefined, Your Choice for Unmatched Cleaning Services
          </h2>

          <motion.p
            className="text-lg mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}  // Faster transition and reduced delay
          >
            Choosing us means opting for unparalleled excellence, innovation,
            and quality. We stand out in a crowded market for several compelling
            reasons. Our commitment to excellence is unwavering. We consistently
            strive to surpass industry standards, ensuring that our clients
            receive top-notch cleaning services.
          </motion.p>

          <motion.div
            className="bg-[#FCD34E] p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.8, translateZ: -100 }}
            animate={inView ? { opacity: 1, scale: 1, translateZ: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}  // Faster transition
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center mb-4">
              <i className="fa fa-check-circle text-green-600 text-3xl mr-3"></i>
              <h2 className="text-3xl font-bold">
                Your Satisfaction is Our Priority
              </h2>
            </div>
            <p className="text-black-600 text-sm mt-3">
              We adopt a customer-centric approach, tailoring our services to
              meet your unique requirements. We ensure a personalized experience
              for every client.
            </p>
          </motion.div>
        </motion.div>

        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg"
          >
            <source src="/images/junk-removal-services-up.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
