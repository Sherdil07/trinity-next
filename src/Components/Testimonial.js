"use client";
import React from "react";

const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-bold  text-[#FCD148] font-pj">
              Testimonials
            </p>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl xl:text-4xl font-pj">
              Our Success Stories Unveiled through Satisfied Clients
            </h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a
              href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LK5KyrEwMrIwYLRSNaiwsEg2SjE3MzZOSUxLMUk1tzKoME9LNk1MNTQzsjC0TDI0N_CSKCnKzMssqVTIKs3LVihKzc0vS8xRyMxLBgCYgBhw&q=trinity+junk+removal+inc&rlz=1C1CHZN_enPK1095PK1095&oq=trinity+junk+removal&gs_lcrp=EgZjaHJvbWUqDQgAEC4YrwEYxwEYgAQyDQgAEC4YrwEYxwEYgAQyDAgBEEUYORiABBiiBDIGCAIQIxgnMgcIAxAAGIAEMggIBBAAGBYYHjIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDcxMDVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#"
              title=""
              className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
            >
              {" "}
              Check all 478 reviews{" "}
            </a>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #FFD700 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {/** Testimonial 1 */}
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        “Espectacular servicio, rápido y profesional con
                        excelentes precios, para mí los mejores de Tampa.Estoy
                        feliz con mi patio!!.”
                      </p>
                    </blockquote>
                  </div>
                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="/images/testimonial-1.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900 font-pj">
                        Adis Torres
                      </p>
                      <p className="mt-0.5 text-sm font-pj text-gray-600">
                        2023-11-08
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/** Testimonial 2 */}
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        “Excelente servicio !”
                      </p>
                    </blockquote>
                  </div>
                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="/images/testimonial-2.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900 font-pj">
                        Rosmery Torres
                      </p>
                      <p className="mt-0.5 text-sm font-pj text-gray-600">
                        2023-11-08
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/** Testimonial 3 */}
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        “Great service provided ! Alberto was very courteous and
                        responsive . We will definitely be using their services
                        again !! ”
                      </p>
                    </blockquote>
                  </div>
                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="/images/testimonial-3.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900 font-pj">
                        Ydelmis Cutino
                      </p>
                      <p className="mt-0.5 text-sm font-pj text-gray-600">
                        2023-11-06
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
