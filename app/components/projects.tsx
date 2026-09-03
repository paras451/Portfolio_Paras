"use client";

import React from "react";

import { ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div id="projects">
      <section className="relative overflow-hidden bg-gray-200 px-5 py-20  sm:px-8 lg:px-12" >
        <div className="mx-auto max-w-6xl  ">
          {/* heading */}

          <div className="mb-14 text-center">
            <h2
              className="font-sans  text-gray-800 font-black text-6xl"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              My Projects
            </h2>
            <div
              className="mx-auto mt-4 h-1 w-60 rounded-full bg-gradient-to-r from-purple-400  to-pink-600"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            ></div>
          </div>

          {/* Project 1 */}

          <div
            className="mb-10 grid overflow-hidden rounded-2xl bg-gray-800 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            {/* project image */}
            <div className="group relative  overflow-hidden sm:min-h-[320px]">
              <img
                src="/project1.png"
                alt="Project 1"
                className="h-full w-full object-contain transition duration-500 md:pl-2 group-hover:scale-105"
              />

              {/* image overlay */}

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:bg-transparent" /> */}
            </div>

            {/* project details */}
            <div className="flex flex-col justify-center p-7 font-sans sm:p-9">
              <p className="mb-2 text-sm font-medium text-gray-300 ">
                Featured Project
              </p>

              <h3 className="text-2xl font-semibold text-gray-300 sm:text-3xl">
                Go To Marketing Application (AI Integrated)
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                A full-stack Marketing Application that Build, launch plans,
                target the right audience and scale faster with data-driven
                go-to-market strategies.
              </p>

              {/* Technologies */}
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-gray-300">
                  Built With
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 rounded-lg  bg-[#202020] px-3 py-2 text-sm text-gray-300">
                    Next.js
                  </span>

                  <span className="flex items-center gap-2 rounded-lg  bg-[#202020] px-3 py-2 text-sm text-gray-300">
                    Python
                  </span>

                  <span className="flex items-center gap-2 rounded-lg  bg-[#202020] px-3 py-2 text-sm text-gray-300">
                    Django
                  </span>

                  <span className="flex items-center gap-2 rounded-lg  bg-[#202020] px-3 py-2 text-sm text-gray-300">
                    PostgreSql
                  </span>
                </div>
              </div>

              {/* buttons */}

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="https://go-to-marketing-application-fronten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer "
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold transition "
                >
                  <ExternalLink size={22} />
                  Live Demo
                </a>

                <a
                  href="https://github.com/paras451/GO-TO-MARKETING-APPLICATION-FRONTEND"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-white transition  "
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* project 2*/}

          <div
            className="mb-10 grid overflow-hidden rounded-2xl bg-gray-800 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            {/* project image */}
            <div className="group relative  overflow-hidden sm:min-h-[320px]">
              <img
                src="/project2.png"
                alt="Project 2"
                className="h-full w-full object-contain transition duration-500 md:pl-2 group-hover:scale-105"
              />

              {/* image overlay */}

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:bg-transparent" /> */}
            </div>

            {/* project details */}
            <div className="flex flex-col justify-center p-7 font-sans sm:p-9">
              <p className="mb-2 text-sm font-medium text-gray-300 ">
                Featured Project
              </p>

              <h3 className="text-2xl font-semibold text-gray-300 sm:text-3xl">
              Pan India Food Platform
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                A full-stack e-commerce web application delivering authentic regional dishes from across India.
              </p>

              {/* Technologies */}
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-gray-300">
                  Built With
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 rounded-lg  bg-[#202020] px-3 py-2 text-sm text-gray-300">
                    Next.js
                  </span>

                  <span className="flex items-center gap-2 rounded-lg  bg-[#202020] px-3 py-2 text-sm text-gray-300">
                    Python
                  </span>

                  <span className="flex items-center gap-2 rounded-lg  bg-[#202020] px-3 py-2 text-sm text-gray-300">
                    Django
                  </span>

                  <span className="flex items-center gap-2 rounded-lg  bg-[#202020] px-3 py-2 text-sm text-gray-300">
                    PostgreSql
                  </span>

                  <span className="flex items-center gap-2 rounded-lg  bg-[#202020] px-3 py-2 text-sm text-gray-300">
                    Payment Gateway Integration
                  </span>
                </div>
              </div>

              {/* buttons */}

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="https://pan-india-food.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer "
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold transition "
                >
                  <ExternalLink size={22} />
                  Live Demo
                </a>

                <a
                  href="https://github.com/paras451/Food_App_Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-white transition  "
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default projects;
