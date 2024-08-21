"use client";
import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Is It Possible to Donate Office Furniture After Removal?",
    image: "/images/blog-1.webp",
    description:
      "Donating office furniture removal is a practical and beneficial option that supports charitable organizations, reduces environmental impact.",
    category: "August 7, 2024",
    readTime: "No Comments",
    link: "#",
  },
  {
    title: "How Can I Find a Reliable Construction Debris Dump Facility?",
    image: "/images/blog-2-up.png",
    description:
      "Finding a reliable construction debris dump facility is critical for effective waste management and keeping an easy worksite. Construction projects generate a large quantity of",
    category: "July 20, 2024 ",
    readTime: "No Comments",
    link: "#",
  },
  {
    title: "What Documents Are Required for Junk Car Removal?",
    image: "/images/blog-3.jpg",
    description:
      "This article will stroll you through the crucial documents wanted for junk car removal and provide recommendations.",
    category: "July 8, 2024",
    readTime: "No Comments",
    link: "#",
  },
  {
    title: "Why is proper Yard Waste pickup Crucial for Local Sustainability?",
    image: "/images/blog-4.jpg",
    description:
      "One aspect that is often neglected in our efforts to promote sustainability within our communities is the correct yard waste pickup. The seemingly trivial task.",
    category: "July 1, 2024 ",
    readTime: "No Comments",
    link: "#",
  },
  {
    title: "How Does Hoarder Clean Out Contribute to a Safer and Healthier Home?",
    image: "/images/blog-5.webp",
    description:
      "Hoarder cleanouts are transformative processes that go beyond surface-level decluttering. They address the profound impacts of hoarding disorder on safety, health, and quality of life.",
    category: "June 24, 2024",
    readTime: "No Comments",
    link: "#",
  },
  {
    title: "Can Construction Waste Removal Help Keep My Project on Schedule?",
    image: "/images/blog-6.jpg",
    description:
      "Construction waste removal is important for keeping project timelines and productivity on track. Construction teams can improve operations and increase site safety by utilizing efficient.",
    category: "June 17, 2024",
    readTime: "No Comments",
    link: "#",
  },
  {
    title: "What Are the Health Benefits of Properly Disposing of Old Furniture?",
    image: "/images/blog-7.webp",
    description:
      "Chuck out that old couch the right way, and health perks could come your way. By doing so, not only are you looking out for",
    category: "May 25, 2024 ",
    readTime: "No Comments",
    link: "#",
  },
  {
    title: "How Regular Garage Cleaning Promotes a Greener Lifestyle?",
    image: "/images/blog-8.webp",
    description:
      "Keeping our living areas tidy goes beyond the house. You might not think about it, but your garage counts too. A routine cleaning in the",
    category: "May 20, 2024 ",
    readTime: "5 Mins Read",
    link: "#",
  },
  {
    title: "Is Your Home Showing Signs that It Needs Clean Outs?",
    image: "/images/blog-9.jpg",
    description:
      "Keeping a neat house is key to a healthy, stress-free life. Yet, junk can stack up, making places in your home feel too full. Recognizing",
    category: "May 15, 2024",
    readTime: "No Comments",
    link: "#",
  },
  {
    title: "How Can Commercial Property Cleaning Upgrade Your Business Operations?",
    image: "/images/blog-10.jpg",
    description:
      "Kee­ping a tidy and orderly business site is ke­y to a company’s winning streak and productivity. It can wow customers at first visit and foster",
    category: "April 25, 2024",
    readTime: "No Comments",
    link: "#",
  },
  // Add more blog posts as needed
];

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.div className="relative" variants={cardVariants} key={index}>
              <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border-2 border-[#FCD148] rounded-xl shadow-[0_4px_6px_-1px_rgba(252,209,72,0.4),0_2px_4px_-1px_rgba(252,209,72,0.2)] hover:shadow-lg hover:-translate-y-1">
                {/* Blog Tag */}
                <span className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded-md z-10">
                  Blog
                </span>
                <a href={post.link} title={post.title} className="flex shrink-0 aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src={post.image}
                    alt={`thumbnail-${index + 1}`}
                  />
                </a>
                <div className="flex-1 px-4 py-5 sm:p-6">
                  <a href={post.link} title={post.title}>
                    <p className="text-lg font-bold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#FCD148]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.link} title={post.category}>
                          {post.category}
                        </a>
                      </p>
                      <span className="text-sm font-medium text-gray-900">•</span>
                      <p className="text-sm font-medium text-gray-900">{post.readTime}</p>
                    </div>
                    <a href={post.link} title="" className="" role="button">
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
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
