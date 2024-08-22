"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
      <h2 className="text-xl font-semibold text-gray-700 mt-4">
        What We Offer
      </h2>
      <p className="text-gray-600 mt-2 mb-8">
        We provide a wide range of services to meet your needs. Browse through
        our offerings below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div className="relative" variants={textVariants}>
          <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
            <a
              href="#"
              title=""
              className="flex shrink-0 aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/images/Junk-Removal-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Junk Removal</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Efficient removal of unwanted items, ensuring a clutter-free
                  environment. We can handle all types of junk, from furniture
                  to appliances, with affordable and eco-friendly disposal
                  methods.
                </p>
              </a>
            </div>
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#FCD148]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2  ">
                  <p className="text-sm font-medium text-gray-900">
                    <Link href="/pages/services/JunkRemoval" title="">
                    Learn More
                    </Link>
                  </p>
                  <span className="text-sm font-medium text-gray-900"></span>
                  <p className="text-sm font-medium text-gray-900">
                    
                  </p>
                </div>
                <Link href="/pages/services/JunkRemoval" title="" className="" role="button">
                  <svg
                    className="w-5 h-5 text-[#006400] transition-all duration-200 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="relative" variants={textVariants}>
          <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
            <a
              href="#"
              title=""
              className="flex shrink-0 aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/images/Property-Clean-Up-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Property Clean Up
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Thorough cleaning services to enhance the overall appearance
                  and functionality of your property. Our team ensures a
                  pristine environment for you and your loved ones.
                </p>
              </a>
            </div>
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#FCD148]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2  ">
                  <p className="text-sm font-medium text-gray-900">
                    <Link href="/pages/services/PropertyCleanUp" title="">
                      Learn More
                    </Link>
                  </p>
                  <span className="text-sm font-medium text-gray-900"></span>
                  <p className="text-sm font-medium text-gray-900">
                    
                  </p>
                </div>
                <Link href="/pages/services/PropertyCleanUp" title="" className="" role="button">
                  <svg
                    className="w-5 h-5 text-[#006400] transition-all duration-200 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="relative" variants={textVariants}>
          <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
            <a
              href="#"
              title=""
              className="flex shrink-0 aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/images/Furniture-Removal-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Furniture Removal
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Expert removal of old, bulky furniture, creating space and
                  promoting a more functional living or working area. We handle
                  furniture removal with care and efficiency.
                </p>
              </a>
            </div>
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#FCD148]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2  ">
                  <p className="text-sm font-medium text-gray-900">
                    <Link href="/pages/services/FurnitureRemoval" title="">
                      Learn More
                    </Link>
                  </p>
                  <span className="text-sm font-medium text-gray-900"></span>
                  <p className="text-sm font-medium text-gray-900">
                    
                  </p>
                </div>
                <Link href="/pages/services/FurnitureRemoval" title="" className="" role="button">
                  <svg
                    className="w-5 h-5 text-[#006400] transition-all duration-200 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="relative" variants={textVariants}>
          <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
            <a
              href="#"
              title=""
              className="flex shrink-0 aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/images/Appliance-Removal-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Appliance Removal
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Safe and responsible removal of outdated or unwanted
                  appliances. We dispose of appliances in an environmentally
                  friendly manner, promoting sustainability and cleanliness
                  without any loss.
                </p>
              </a>
            </div>
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#FCD148]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2  ">
                  <p className="text-sm font-medium text-gray-900">
                    <Link href="/pages/services/ApplianceRemoval" title="">
                      Learn More
                    </Link>
                  </p>
                  <span className="text-sm font-medium text-gray-900"></span>
                  <p className="text-sm font-medium text-gray-900">
                    
                  </p>
                </div>
                <Link href="/pages/services/ApplianceRemoval" title="" className="" role="button">
                  <svg
                    className="w-5 h-5 text-[#006400] transition-all duration-200 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="relative" variants={textVariants}>
          <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
            <a
              href="#"
              title=""
              className="flex shrink-0 aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/images/Yard-Debris-Removal-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Yard Debris Removal
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Specialized service for clearing and disposing of yard debris,
                  including branches, leaves, and other green waste. We leave
                  your yard rejuvenated with a new look.
                </p>
              </a>
            </div>
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#FCD148]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2  ">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" title="">
                      Category
                    </a>
                  </p>
                  <span className="text-sm font-medium text-gray-900">•</span>
                  <p className="text-sm font-medium text-gray-900">
                    7 Mins Read
                  </p>
                </div>
                <a href="#" title="" className="" role="button">
                  <svg
                    className="w-5 h-5 text-[#006400] transition-all duration-200 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="relative" variants={textVariants}>
          <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
            <a
              href="#"
              title=""
              className="flex shrink-0 aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/images/Construction-Clean-Up-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Construction Clean Up
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Comprehensive cleanup services after construction projects. We
                  remove debris, materials, and ensure a safe and organized
                  construction site or renovated space for a pleasant
                  environment.
                </p>
              </a>
            </div>
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#FCD148]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2  ">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" title="">
                      Category
                    </a>
                  </p>
                  <span className="text-sm font-medium text-gray-900">•</span>
                  <p className="text-sm font-medium text-gray-900">
                    7 Mins Read
                  </p>
                </div>
                <a href="#" title="" className="" role="button">
                  <svg
                    className="w-5 h-5 text-[#006400] transition-all duration-200 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="relative" variants={textVariants}>
          <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
            <a
              href="#"
              title=""
              className="flex shrink-0 aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/images/Hoarder-House-Clean-Outs-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Hoarder House Clean Outs
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Compassionate and discreet cleanout services for hoarder
                  houses. Our team handles clutter removal with sensitivity,
                  creating a healthier living space for all your loved ones.
                </p>
              </a>
            </div>
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#FCD148]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2  ">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" title="">
                      Category
                    </a>
                  </p>
                  <span className="text-sm font-medium text-gray-900">•</span>
                  <p className="text-sm font-medium text-gray-900">
                    7 Mins Read
                  </p>
                </div>
                <a href="#" title="" className="" role="button">
                  <svg
                    className="w-5 h-5 text-[#006400] transition-all duration-200 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="relative" variants={textVariants}>
          <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
            <a
              href="#"
              title=""
              className="flex shrink-0 aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/images/Hoarder-House-Special-Cleanup-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Hoarder House Special Cleanup
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Specialized cleanup for extreme hoarding situations, providing
                  a thorough and sensitive approach to transform hoarder houses
                  into organized, habitable and peaceful spaces to reside.
                </p>
              </a>
            </div>
            <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#FCD148]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2  ">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" title="">
                      Category
                    </a>
                  </p>
                  <span className="text-sm font-medium text-gray-900">•</span>
                  <p className="text-sm font-medium text-gray-900">
                    7 Mins Read
                  </p>
                </div>
                <a href="#" title="" className="" role="button">
                  <svg
                    className="w-5 h-5 text-[#006400] transition-all duration-200 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="8 7 17 7 17 16"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Repeat the card structure for more services */}
      </div>
    </div>
  );
};

export default ServicePage;
