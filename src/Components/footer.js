
"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Import necessary icons
import { FaTrash, FaBroom, FaCouch, FaTv, FaLeaf, FaHardHat, FaWarehouse } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCog, faMapMarkerAlt, faImages, faBlog } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  const year = new Date().getFullYear();
  const controls = useAnimation();
  const footerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-[#FCD34E] p-8 text-gray-800 overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div variants={itemVariants} className="flex justify-start">
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={192} 
            height={64} 
            className="w-24 md:w-64 h-auto" 
            quality={100} // Ensures high-quality rendering
          />
        </motion.div>

        <motion.div variants={itemVariants} className="text-left">
  <h3 className="font-semibold text-lg mb-4">Features</h3>
  <p className="mb-2">
    <FontAwesomeIcon icon={faHome} className="mr-2" />
    Home
  </p>
  <p className="mb-2">
    <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
    About Us
  </p>
  <p className="mb-2">
    <FontAwesomeIcon icon={faCog} className="mr-2" />
    Services
  </p>
  <p className="mb-2">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
    Service Areas
  </p>
  <p className="mb-2">
    <FontAwesomeIcon icon={faImages} className="mr-2" />
    Gallery
  </p>
  <p className="mb-2">
    <FontAwesomeIcon icon={faBlog} className="mr-2" />
    Blog
  </p>
</motion.div>


        <motion.div variants={itemVariants} className="text-left">
  <h3 className="font-semibold text-lg mb-4">Services</h3>
  
  <div className="mb-2 flex items-center">
    <FaTrash className="mr-2" />
    <span>Junk Removal</span>
  </div>
  
  <div className="mb-2 flex items-center">
    <FaBroom className="mr-2" />
    <span>Property Clean Up</span>
  </div>
  
  <div className="mb-2 flex items-center">
    <FaCouch className="mr-2" />
    <span>Furniture Removal</span>
  </div>
  
  <div className="mb-2 flex items-center">
    <FaTv className="mr-2" />
    <span>Appliance Removal</span>
  </div>
  
  <div className="mb-2 flex items-center">
    <FaLeaf className="mr-2" />
    <span>Yard Debris Removal</span>
  </div>
  
  <div className="mb-2 flex items-center">
    <FaHardHat className="mr-2" />
    <span>Construction Clean Up</span>
  </div>
  
  <div className="mb-2 flex items-center">
    <FaWarehouse className="mr-2" />
    <span>Hoarder House Clean Outs</span>
  </div>
</motion.div>

        <motion.div variants={itemVariants} className="text-left">
  <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
  
  <div className="mb-2 flex items-center">
    <FaPhone className="mr-2" /> {/* Phone Icon */}
    <span>+1234567890</span> {/* Replace with your actual phone number */}
  </div>
  
  <div className="mb-2 flex items-center">
    <FaEnvelope className="mr-2" /> {/* Email Icon */}
    <span>support@example.com</span> {/* Replace with your actual email address */}
  </div>
  
  <div className="mb-2 flex items-center">
    <FaClock className="mr-2" /> {/* Time Icon */}
    <span>Mon-Fri 9am-5pm</span> {/* Replace with your actual working hours */}
  </div>
  
  <div className="mb-2 flex items-center">
    <FaMapMarkerAlt className="mr-2" /> {/* Location Icon */}
    <span>1234 Main St, City, Country</span> {/* Replace with your actual location */}
  </div>

  <div className="flex space-x-4 mt-4">
    <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
    {/* Add more social icons as needed */}
  </div>
</motion.div>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <hr className="border-t border-gray-500 opacity-50" />
        <motion.div
          className="absolute bottom-[-25px] left-0 w-full flex justify-center items-center"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50px" height="50px" viewBox="0 0 476.669 476.669">
            <g>
              <path d="M469.668,269.394h-2.84V187.42c0-1.545-0.511-3.046-1.453-4.271l-48.377-62.835c-1.325-1.721-3.375-2.729-5.547-2.729h-96.752c-3.866,0-7,3.134-7,7v37.688h-3.934v-0.298c0-3.866-3.134-7-7-7h-26.459c-3.865,0-7,3.134-7,7v0.298h-5.615v-0.298c0-3.866-3.135-7-7-7h-26.459c-3.866,0-7,3.134-7,7v0.298h-5.615v-0.298c0-3.866-3.134-7-7-7h-26.459c-3.866,0-7,3.134-7,7v0.298h-5.615v-0.298c0-3.866-3.134-7-7-7h-26.459c-3.866,0-7,3.134-7,7v0.298h-5.617v-0.298c0-3.866-3.134-7-7-7H86.009c-3.866,0-7,3.134-7,7v0.298h-5.616v-0.298c0-3.866-3.134-7-7-7H39.934c-3.866,0-7,3.134-7,7v0.298H20.125c-3.866,0-7,3.134-7,7v100.121H7c-3.866,0-7,3.133-7,7v41.463c0,3.865,3.134,7,7,7h26.528c3.333,19.41,20.284,34.228,40.632,34.228c20.348,0,37.299-14.815,40.632-34.228h9.158c3.333,19.41,20.284,34.228,40.631,34.228c20.348,0,37.3-14.815,40.633-34.228h114.104c3.333,19.41,20.283,34.228,40.631,34.228s37.3-14.815,40.633-34.228h69.087c3.866,0,7-3.135,7-7v-41.463C476.668,272.528,473.534,269.394,469.668,269.394z M74.16,334.808c-9.346,0-16.948-7.604-16.948-16.951c0-9.345,7.603-16.947,16.948-16.947c9.345,0,16.949,7.604,16.949,16.947C91.109,327.204,83.505,334.808,74.16,334.808z M164.581,334.808c-9.347,0-16.947-7.604-16.947-16.951c0-9.345,7.601-16.947,16.947-16.947c9.345,0,16.949,7.604,16.949,16.947C181.53,327.204,173.926,334.808,164.581,334.808z M359.948,334.808c-9.346,0-16.947-7.604-16.947-16.951c0-9.345,7.603-16.947,16.947-16.947c9.344,0,16.95,7.604,16.95,16.947C376.898,327.204,369.293,334.808,359.948,334.808z M435.613,215.128l-99.028-0.043v-67.693h63.011l36.043,48.219L435.613,215.128z" fill="#000000" />
            </g>
          </svg>
        </motion.div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-start text-sm">
        <p className="font-semibold">Trinity Junk Removal</p>
        <p className="mt-2 md:mt-0 font-light">Copyright {year} page by Rank Orbit</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
