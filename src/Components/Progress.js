"use client";

import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Progress = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [team, setTeam] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
  
      const durationYears = 0.1 * 1000; // 1 second for "Years in business"
      const durationOthers = 7 * 1000; // 3 seconds for the other counters
  
      // Years in business (2241)
      const yearsInterval = setInterval(() => {
        setYears((prev) => {
          if (prev >= 2241) clearInterval(yearsInterval);
          return prev + 1;
        });
      }, durationYears / 2241);
  
      // Projects delivered (20)
      const projectsInterval = setInterval(() => {
        setProjects((prev) => {
          if (prev >= 20) clearInterval(projectsInterval);
          return prev + 1;
        });
      }, durationOthers / 20);
  
      // Team members (10)
      const teamInterval = setInterval(() => {
        setTeam((prev) => {
          if (prev >= 10) clearInterval(teamInterval);
          return prev + 1;
        });
      }, durationOthers / 10);
  
      // Customer satisfaction (3)
      const satisfactionInterval = setInterval(() => {
        setSatisfaction((prev) => {
          if (prev >= 3) clearInterval(satisfactionInterval);
          return prev + 1;
        });
      }, durationOthers / 3);
  
      // Clean up intervals on component unmount
      return () => {
        clearInterval(yearsInterval);
        clearInterval(projectsInterval);
        clearInterval(teamInterval);
        clearInterval(satisfactionInterval);
      };
    }
  }, [inView, controls]);
  
  

  

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24" ref={ref}>
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Our Competitive Edge
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Discover our competitive edge through cutting-edge solutions,
            unmatched expertise, and a commitment to redefining junk removal
            standards. We elevate your expectations with each completed task
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center sm:gap-x-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          <div>
            <h3 className="font-bold text-7xl">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD148] to-[#EDA940]"
                animate={controls}
                initial={{ opacity: 0 }}
                variants={{ visible: { opacity: 1 } }}
              >
                {years}+
              </motion.span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
            Satisfied Clients
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Creating the successful path
            </p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD148] to-[#EDA940]"
                animate={controls}
                initial={{ opacity: 0 }}
                variants={{ visible: { opacity: 1 } }}
              >
                {projects}+
              </motion.span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
            Industries Served
            </p>
            <p className="text-base mt-0.5 text-gray-500">In last years</p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD148] to-[#EDA940]"
                animate={controls}
                initial={{ opacity: 0 }}
                variants={{ visible: { opacity: 1 } }}
              >
                {team}+
              </motion.span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
            Years Of Experience
            </p>
            <p className="text-base mt-0.5 text-gray-500">
            Ensuring quality and success
            </p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD148] to-[#EDA940]"
                animate={controls}
                initial={{ opacity: 0 }}
                variants={{ visible: { opacity: 1 } }}
              >
                {satisfaction}+
              </motion.span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
            Professional Workers
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              
              Working for your success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
