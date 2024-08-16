"use client";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function TopHeader() {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side with phone and email */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center group cursor-pointer">
            <motion.div
              whileHover={{ x: [0, -2, 2, -2, 2, 0], transition: { duration: 0.3 } }}
              className="pl-2 md:pl-0"
            >
              <FaPhoneAlt className="mr-1 text-[#EDA940] group-hover:text-white" />
            </motion.div>
            <span className="text-sm group-hover:underline group-hover:text-[#EDA940]">
              +1 234 567 890
            </span>
          </div>
          <div className="flex items-center group cursor-pointer">
            <motion.div
              whileHover={{ x: [0, -2, 2, -2, 2, 0], transition: { duration: 0.3 } }}
            >
              <FaEnvelope className="mr-1 text-[#EDA940] group-hover:text-white" />
            </motion.div>
            <span className="text-sm group-hover:underline group-hover:text-[#EDA940]">
              info@example.com
            </span>
          </div>
        </div>

        {/* Right side with social icons */}
        <div className="hidden lg:flex space-x-4">
          <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
