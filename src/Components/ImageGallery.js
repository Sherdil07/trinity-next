"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/junk-gallery-1.png",
  "/images/junk-gallery-2.png",
  "/images/junk-gallery-3.png",
  "/images/junk-gallery-4.png",
  "/images/junk-gallery-5.png",
  "/images/junk-gallery-6.png",
  "/images/junk-gallery-7.png",
  // Add more image paths if needed
];

const ImageGallery = ({ limit }) => {
  // Determine how many images to display
  const displayedImages = limit ? images.slice(0, limit) : images;

  // Assuming a grid layout with 3 columns; adjust the width as needed
  const imageWidth = 320; // Example width of each image in pixels
  const gap = 16; // Example gap between images in pixels
  const numOfImages = 3;
  const videoWidth = imageWidth * numOfImages + gap * (numOfImages - 1);
  const aspectRatio = 16 / 9; // Standard aspect ratio for YouTube videos
  const videoHeight = videoWidth / aspectRatio;

  return (
    <div className="p-6" style={{ backgroundColor: "white" }}>
      <div >
       
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "black" }} // Apply the custom color here
        >
          See in Pictures How We Transform Spaces
        </h2>
       
      </div>

      {/* Video Section */}
      <div className="mb-6 flex justify-center">
        <div
          className="overflow-hidden rounded-lg shadow-lg border-4 border-yellow-400"
          style={{ width: `${videoWidth}px`, height: `${videoHeight}px` }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5E_2RnPMDfY" // Embed link for the video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {displayedImages.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg border-4 border-yellow-400 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Show the "View All" button if a limit is set and it's not showing all images */}
      {limit && limit < images.length && (
        <div className="text-center">
          <a
            href="/pages/gallery" // Adjust this URL based on your routing setup
            className="inline-block px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            View All
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
