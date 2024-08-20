"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ServiceAreaPage = () => {
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
                src="/images/Florida-USA-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Florida USA</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Trinity Junk Removal proudly serves the entire state of
                  Florida, USA. Our commitment to excellence extends to every
                  corner, ensuring residents and businesses receive top-notch
                  junk removal services.
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
                src="/images/Apollo-Beach-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Apollo Beach, FL
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  In Apollo Beach, FL, Trinity Junk Removal is your go-to
                  solution for efficient and affordable junk removal. Whether
                  residential or commercial, we handle it all.
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
                src="/images/Auburndale-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Auburndale</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Auburndale residents benefit from Trinity Junk Removals
                  comprehensive services. We specialize in prompt and
                  eco-friendly junk removal with professionalism, contributing
                  to a fully cleaner environment
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
                src="/images/Bartow-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Bartow</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Trinity Junk Removal extends its reliable services to Bartow,
                  ensuring the community has a trusted partner for clutter-free
                  living. Our expert team efficiently tackles all junk removal
                  needs.
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
                src="/images/Brandon-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Brandon, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Residents and businesses in Brandon, FL, count on Trinity Junk
                  Removal for seamless junk removal. We offer tailored
                  solutions, from large-scale cleanouts to small pickups,
                  ensuring a clutter-free space.
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
                src="/images/Clearwater-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Clearwater, FL
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Clearwater, FL, enjoys the expertise of Trinity Junk Removal
                  in hassle-free junk removal. Our dedicated team ensures a
                  smooth process, leaving you with a clutter-free environment.
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
                src="/images/Dade-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Dade, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Trinity Junk Removal serves Dade, FL, with unparalleled junk
                  removal services. We prioritize customer satisfaction,
                  offering timely and efficient solutions for both residential
                  and commercial needs.
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
                src="/images/Dover-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Dover, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Dover residents rely on Trinity Junk Removal for comprehensive
                  junk removal services. Our team handles every aspect, ensuring
                  a stress-free experience for a clutter-free space.
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
                src="/images/Gibsonton-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Gibsonton, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  In Gibsonton, FL, Trinity Junk Removal stands as the preferred
                  choice for junk removal. Our commitment to quality service
                  makes us the go-to for both residential and commercial
                  clients.
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
                src="/images/Lakeland-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Lakeland, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Trinity Junk Removal is the trusted partner for Lakeland, FL,
                  residents seeking reliable junk removal services. We
                  prioritize customer satisfaction, delivering efficient and
                  eco-friendly solutions.
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
                src="/images/Land-O-Lakes-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Land O' Lakes FL
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Land O' Lakes, FL, benefits from Trinity Junk Removal's
                  expertise in efficient junk removal. Our services cater to
                  residential and commercial needs, ensuring a clean and
                  organized space.
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
                src="/images/Lithia-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Lithia, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Lithia residents count on Trinity Junk Removal for top-notch
                  junk removal services. Our team excels in providing tailored
                  solutions, addressing the unique needs of each client.
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
                src="/images/Lutz-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Lutz, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  In Lutz, FL, Trinity Junk Removal is the go-to for reliable
                  and eco-friendly junk removal. We ensure a seamless process,
                  from scheduling to completion, for a clutter-free environment.
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
                src="/images/Plant-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Plant, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Trinity Junk Removal extends its services to Plant, FL,
                  offering comprehensive junk removal solutions. Our
                  professional team ensures a hassle-free experience for both
                  residential and commercial clients.
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
                src="/images/Riverview-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Riverview, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Riverview residents benefit from Trinity Junk Removal's
                  expertise in efficient and affordable junk removal. We
                  prioritize customer satisfaction, leaving behind a clean and
                  organized space.
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
                src="/images/St.-Petersburg-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  St. Petersburg, FL
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  St. Petersburg, FL, residents trust Trinity Junk Removal for
                  expert junk removal services. Our team is dedicated to
                  delivering prompt and efficient solutions for a clutter-free
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
                src="/images/Sun-City-Center-FL.png-trinity.webp"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Sun City Center, FL
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Trinity Junk Removal is the preferred choice for Sun City
                  Center, FL, residents seeking reliable junk removal services.
                  Our team ensures a seamless process, from start to finish.
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
                src="/images/Tampa-FL-trinity.webp"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Tampa, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Tampa, FL, residents and businesses choose Trinity Junk
                  Removal for professional junk removal. We handle all types of
                  junk efficiently, leaving our clients with a clean and
                  organized space.
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
                src="/images/Valrico-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Valrico, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Valrico residents rely on Trinity Junk Removal for efficient
                  and eco-friendly junk removal services. Our team ensures a
                  hassle-free process, addressing all your clutter removal
                  needs.
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
                src="/images/Balm-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Balm, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Balm, FL, residents trust Trinity Junk Removal for
                  comprehensive junk removal services. Our team excels in
                  providing tailored solutions for a clutter-free and organized
                  space.
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
        <motion.div className="relative" variants={textVariants}>
          <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
            <a
              href="#"
              title=""
              className="flex shrink-0 aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                src="/images/Ruskin-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Ruskin, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Ruskin residents benefit from Trinity Junk Removal's expertise
                  in efficient and affordable junk removal. We prioritize
                  customer satisfaction, leaving behind a clean and organized
                  space.
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
                src="/images/Bloomingdale-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">
                  Bloomingdale, FL
                </p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  In Bloomingdale, FL, Trinity Junk Removal is the go-to for
                  reliable and eco-friendly junk removal. We ensure a seamless
                  process, from scheduling to completion, for a clutter-free
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
                src="/images/Seffner-FL-trinity.png"
                alt="Service Image 1"
              />
            </a>
            <div className="flex-1 px-4 py-5 sm:p-6">
              <a href="#" title="">
                <p className="text-lg font-bold text-gray-900">Seffner, FL</p>
                <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                  Trinity Junk Removal serves Seffner, FL, with unparalleled
                  junk removal services. We prioritize customer satisfaction,
                  offering timely and efficient solutions for both residential
                  and commercial needs.
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
      </div>
    </div>
  );
};

export default ServiceAreaPage;
