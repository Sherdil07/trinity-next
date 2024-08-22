"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CustomHeader = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleLinkClick = () => {
    setIsServicesOpen(false); // Close the submenu when a link is clicked
  };

  return (
    <div className="bg-base-100 relative z-10">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <div className="lg:hidden">
            <button
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
              <ul className="p-4">
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/" onClick={handleLinkClick}>Home</Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/aboutus" onClick={handleLinkClick}>About Us</Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={toggleServicesDropdown}
                  >
                    <Link href="/pages/services" onClick={handleLinkClick}>Services</Link>
                    <span
                      className={`transform transition-transform duration-200 ${
                        isServicesOpen ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      &gt;
                    </span>
                  </div>
                  {/* Sub-menu */}
                  {isServicesOpen && (
                    <ul className="mt-2 pl-4 space-y-2">
                      <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                        <Link href="/pages/services/JunkRemoval" onClick={handleLinkClick}>
                          Junk Removal
                        </Link>
                      </li>
                      <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                        <Link href="/pages/services/PropertyCleanUp" onClick={handleLinkClick}>
                          Property Clean Up
                        </Link>
                      </li>
                      <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                        <Link href="/pages/services/FurnitureRemoval" onClick={handleLinkClick}>
                          Furniture Removal
                        </Link>
                      </li>
                      <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                        <Link href="/pages/services/ApplianceRemoval" onClick={handleLinkClick}>
                          Appliance Removal
                        </Link>
                      </li>
                      <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                        <Link href="/pages/services/YardDebrisRemoval" onClick={handleLinkClick}>
                          Yard Debris Removal
                        </Link>
                      </li>
                      <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                        <Link href="/pages/services/ConstructionCleanUp" onClick={handleLinkClick}>
                          Construction Clean Up
                        </Link>
                      </li>
                      <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                        <Link href="/pages/services/HoarderHouseCleanOuts" onClick={handleLinkClick}>
                          Hoarder House Clean Outs
                        </Link>
                      </li>
                      <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                        <Link href="/pages/services/HoarderHouseSpecialCleanUp" onClick={handleLinkClick}>
                          Hoarder House Special Cleanup
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/serviceareas" onClick={handleLinkClick}>Service Areas</Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/gallery" onClick={handleLinkClick}>Gallery</Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/blog" onClick={handleLinkClick}>Blog</Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/contactus" onClick={handleLinkClick}>Contact Us</Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/booking" onClick={handleLinkClick}>Booking</Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={128}
              height={48}
              className="h-auto w-auto"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:space-x-6 bg-[#FCD148] px-6 py-2 rounded-lg shadow-lg">
          <Link
            href="/"
            className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/pages/aboutus"
            className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <div className="relative group">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={toggleServicesDropdown}
            >
              <Link
                href="/pages/services"
                className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <span
                className={`transform transition-transform duration-200 ml-1 ${
                  isServicesOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                &gt;
              </span>
            </div>
            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg space-y-2">
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/services/JunkRemoval" onClick={handleLinkClick}>
                    Junk Removal
                  </Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/services/PropertyCleanUp" onClick={handleLinkClick}>
                    Property Clean Up
                  </Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/services/FurnitureRemoval" onClick={handleLinkClick}>
                    Furniture Removal
                  </Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/services/ApplianceRemoval" onClick={handleLinkClick}>
                    Appliance Removal
                  </Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/services/YardDebrisRemoval" onClick={handleLinkClick}>
                    Yard Debris Removal
                  </Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/services/ConstructionCleanUp" onClick={handleLinkClick}>
                    Construction Clean Up
                  </Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/services/HoarderHouseCleanOuts" onClick={handleLinkClick}>
                    Hoarder House Clean Outs
                  </Link>
                </li>
                <li className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded">
                  <Link href="/pages/services/HoarderHouseSpecialCleanUp" onClick={handleLinkClick}>
                    Hoarder House Special Cleanup
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            href="/pages/serviceareas"
            className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded"
            onClick={handleLinkClick}
          >
            Service Areas
          </Link>
          <Link
            href="/pages/gallery"
            className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded"
            onClick={handleLinkClick}
          >
            Gallery
          </Link>
          <Link
            href="/pages/blog"
            className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded"
            onClick={handleLinkClick}
          >
            Blog
          </Link>
          <Link
            href="/pages/contactus"
            className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
          <Link
            href="/pages/booking"
            className="hover:bg-black hover:text-[#FCD148] hover:font-bold p-2 rounded"
            onClick={handleLinkClick}
          >
            Booking
          </Link>
        </div>

        <a className="hidden lg:flex items-center justify-center btn bg-yellow-400 text-black hover:bg-black hover:text-[#FCD148] cursor-pointer px-4 py-2">
          Call Now
        </a>
      </div>
    </div>
  );
};

export default CustomHeader;
