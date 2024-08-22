"use client";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useForm } from "react-hook-form";

function ContactUs() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Clear the form fields after submission
    reset();
    console.log(data);
  };

  return (
    <div className="bg-white ">
      {/* hero section  */}
      <div className="relative min-h-[60vh] bg-black bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/truck-driver-pointing-the-issue-to-his-mechanic.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white text-5xl font-bold">Contact Us</h1>

          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center">
              Home
              <FaLongArrowAltRight className="text-lg text-[#FCD148]" />
              Contact Us
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black flex flex-col items-center gap-2 pb-5">
        <span className="inline-block mt-20 text-2xl uppercase border-b-4 border-[#FCD148]">
          Contact Us
        </span>

        <p className="mt-2 text-md text-opacity-85 font_barlow text-center md:w-[35%]">
        Connect with Us, Your Journey Starts Here
        </p>
      </div>

      {/* book now  */}
      <div className="min-h-[70vh] rounded-3xl grid grid-cols-1 md:grid-cols-[1fr_1fr] bg-[#f4f4f4] m-5 md:m-20 pb-24">
        {/* left side  */}
        <div className="text-black p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className={`mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FCD148] focus:border-[#FCD148] sm:text-sm ${
                  errors.name ? "border-[#FCD148]" : ""
                }`}
              />
              {errors.name && (
                <p className="text-[#FCD148] text-xs mt-2">Name is required</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: true })}
                className={`mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FCD148] focus:border-[#FCD148] sm:text-sm ${
                  errors.phone ? "border-[#FCD148]" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-[#FCD148] text-xs mt-2">Phone is required</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className={`mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FCD148] focus:border-[#FCD148] sm:text-sm ${
                  errors.email ? "border-[#FCD148]" : ""
                }`}
              />
              {errors.email && (
                <p className="text-[#FCD148] text-xs mt-2">Email is required</p>
              )}
            </div>

            {/* Subject Field */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: true })}
                className={`mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FCD148] focus:border-[#FCD148] sm:text-sm ${
                  errors.subject ? "border-[#FCD148]" : ""
                }`}
              />
              {errors.subject && (
                <p className="text-[#FCD148] text-xs mt-2">Subject is required</p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows="4"
                className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FCD148] focus:border-[#FCD148] sm:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FCD148] text-white p-4 mt-10 rounded-md hover:bg-[#FCD148] focus:outline-none focus:ring-2 focus:ring-[#FCD148] focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* right side  */}
        <div className="w-full">
          <img
            src="/images/ceramic-coating-for-cars.jpg"
            alt=""
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
