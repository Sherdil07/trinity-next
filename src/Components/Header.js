import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="navbar bg-base-100 relative z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="w-[21rem] menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 max-w-xs p-2 shadow"
            style={{
              boxShadow: '0 20px 25px -5px rgba(252, 211, 78, 0.5), 0 8px 10px -6px rgba(252, 211, 78, 0.5)',
            }}
          >
            <li className="cursor-pointer" style={{ backgroundColor: '#FCD34E', color: 'black' }}>
              <a>Home</a>
            </li>
            <li className="cursor-pointer">
              <a>About Us</a>
            </li>
            <li className="cursor-pointer">
              <a>Services</a>
              <ul
                className="p-2 w-full lg:w-[20rem] hidden lg:block z-50"
                style={{
                  boxShadow: '0 20px 25px -5px rgba(252, 211, 78, 0.5), 0 8px 10px -6px rgba(252, 211, 78, 0.5)',
                }}
              >
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Junk Removal</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Property Clean Up</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Furniture Removal</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Appliance Removal</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Yard Debris Removal</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Construction Clean Up</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Hoarder House Clean Outs</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Hoarder House Special Cleanup</a>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer">
              <a>Service Areas</a>
            </li>
            <li className="cursor-pointer">
              <a>Gallery</a>
            </li>
            <li className="cursor-pointer">
              <a>Blog</a>
            </li>
            <li className="cursor-pointer">
              <a>Contact Us</a>
            </li>
            <li className="cursor-pointer">
              <a>Booking</a>
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0 p-2 z-40">
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
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-50">
          <li className="cursor-pointer">
            <a>Home</a>
          </li>
          <li className="cursor-pointer">
            <a>About Us</a>
          </li>
          <li className="cursor-pointer">
            <details>
              <summary>Services</summary>
              <ul
                className="p-2 w-[20rem] hidden lg:block z-50"
                style={{
                  boxShadow: '0 20px 25px -5px rgba(252, 211, 78, 0.5), 0 8px 10px -6px rgba(252, 211, 78, 0.5)',
                }}
              >
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Junk Removal</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Property Clean Up</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Furniture Removal</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Appliance Removal</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Yard Debris Removal</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Construction Clean Up</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Hoarder House Clean Outs</a>
                </li>
                <li className="cursor-pointer">
                  <a className="whitespace-nowrap">Hoarder House Special Cleanup</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="cursor-pointer ">
            <a>Service Areas</a>
          </li>
          <li className="cursor-pointer">
            <a>Gallery</a>
          </li>
          <li className="cursor-pointer">
            <a>Blog</a>
          </li>
          <li className="cursor-pointer">
            <a>Contact Us</a>
          </li>
          <li className="cursor-pointer">
            <a>Booking</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#FCD34E] text-black hover:bg-black hover:text-[#FCD34E] cursor-pointer z-40">
          Button
        </a>
      </div>
    </div>
  );
};

export default Header;
