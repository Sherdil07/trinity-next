"use client";

import React, { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

            const duration = 2.5;

            // Years in business
            const yearsInterval = setInterval(() => {
                setYears((prev) => {
                    if (prev >= 6) clearInterval(yearsInterval);
                    return prev + 1;
                });
            }, (duration * 1000) / 6);

            // Projects delivered
            const projectsInterval = setInterval(() => {
                setProjects((prev) => {
                    if (prev >= 4821) clearInterval(projectsInterval);
                    return prev + 40;
                });
            }, (duration * 1000) / (4821 / 40));

            // Team members
            const teamInterval = setInterval(() => {
                setTeam((prev) => {
                    if (prev >= 37) clearInterval(teamInterval);
                    return prev + 1;
                });
            }, (duration * 1000) / 37);

            // Customer satisfaction
            const satisfactionInterval = setInterval(() => {
                setSatisfaction((prev) => {
                    if (prev >= 100) clearInterval(satisfactionInterval);
                    return prev + 5;
                });
            }, (duration * 1000) / (100 / 5));
        }
    }, [inView, controls]);

    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24" ref={ref}>
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Numbers tell our story
                    </h2>
                    <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
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
                        <p className="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                        <p className="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <motion.span 
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD148] to-[#EDA940]"
                                animate={controls}
                                initial={{ opacity: 0 }}
                                variants={{ visible: { opacity: 1 } }}
                            >
                                {projects}
                            </motion.span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
                        <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
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
                        <p className="mt-4 text-xl font-medium text-gray-900">Team members</p>
                        <p className="text-base mt-0.5 text-gray-500">Working for your success</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <motion.span 
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD148] to-[#EDA940]"
                                animate={controls}
                                initial={{ opacity: 0 }}
                                variants={{ visible: { opacity: 1 } }}
                            >
                                {satisfaction}%
                            </motion.span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Customer satisfaction</p>
                        <p className="text-base mt-0.5 text-gray-500">Ensuring quality and success</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Progress;
