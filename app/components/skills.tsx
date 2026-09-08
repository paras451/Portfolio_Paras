"use client";
import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaRing,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaServer,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSpringboot,
  SiPostman,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiFastapi,
} from "react-icons/si";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


import { VscVscode } from "react-icons/vsc";

import { SiDjango } from "@icons-pack/react-simple-icons";

import { IoGlobeOutline } from "react-icons/io5";

import { Code2, Server, Wrench } from "lucide-react";

function skills() {

 useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);


  return (
    <div id="skills">
      <section className="relative overflow-hidden bg-gray-800 px-5 py-20  sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-14 text-center">
            <h2 className="font-sans  text-gray-100 font-black text-6xl " data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" >
              My Skills
            </h2>

            <div className="mx-auto mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {/* ================= FRONTEND ================= */}
            <div className="rounded-2xl border  bg-[#181818] p-7 transition duration-300 hover:-translate-y-2  hover:shadow-xl hover:shadow-blue-500/10" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <Code2 size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white font-sans">
                    Frontend
                  </h3>

                  {/* <p className="text-sm text-white">
                  Development
                </p> */}
                </div>
              </div>

              {/* <div className="mb-5 h-px bg-blue-500/30"></div> */}

              {/* React */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <FaReact size={24} className="text-cyan-400" />
                    <span className="font-medium text-white font-sans ">
                      React
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">80%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-800" >
                  <div className="h-2 w-[80%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"  ></div>
                </div>
              </div>

              {/* JavaScript */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <FaJs size={24} className="text-yellow-400" />
                    <span className="font-medium text-white font-sans">
                      JavaScript
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">70%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-800">
                  <div className="h-2 w-[70%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>

              {/* HTML */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <FaHtml5 size={24} className="text-orange-500" />

                    <span className="font-medium text-white font-sans">
                      HTML
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">90%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-800">
                  <div className="h-2 w-[90%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>

              {/* Tailwind */}
              <div>
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <SiTailwindcss size={24} className="text-blue-500" />
                    <span className="font-medium text-white font-sans">
                      Tailwind CSS
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">85%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-800">
                  <div className="h-2 w-[85%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>
            </div>

            {/* ================= BACKEND ================= */}
            <div className="rounded-2xl border  bg-[#181818] p-7 transition duration-300 hover:-translate-y-2  hover:shadow-xl hover:shadow-purple-500/10" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                  <Server size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-sans">
                    Backend
                  </h3>

                  {/* <p className="text-sm text-gray-500">Development</p> */}
                </div>
              </div>

              {/* <div className="mb-5 h-px bg-purple-500/30"></div> */}

              {/* Django */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <SiDjango size={24} className="text-green-500" />
                    <span className="font-medium text-white font-sans">
                      Django & DRF
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">85%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-700">
                  <div className="h-2 w-[85%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>

              {/* Python */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <SiPython size={24} className="text-blue-500" />
                    <span className="font-medium text-white font-sans">
                      Python
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">80%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-700">
                  <div className="h-2 w-[80%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>

              {/* PostgreSQL */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <SiPostgresql size={24} className="text-blue-500" />
                    <span className="font-medium text-white font-sans">
                      PostgreSQL
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">80%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-700">
                  <div className="h-2 w-[90%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>

              {/* Rest api */}
              <div>
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <IoGlobeOutline size={24} className="text-cyan-500" />
                    <span className="font-medium text-white font-sans">
                      REST API
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">80%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-700">
                  <div className="h-2 w-[80%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>
            </div>

            {/* ================= TOOLS ================= */}
            <div className="rounded-2xl border  bg-[#181818] p-7 transition duration-300 hover:-translate-y-2  hover:shadow-xl hover:shadow-orange-500/10" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <Wrench size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-sans">
                    Tools & Others
                  </h3>

                  {/* <p className="text-sm text-gray-500">Technologies</p> */}
                </div>
              </div>

              {/* <div className="mb-5 h-px bg-orange-500/30"></div> */}

              {/* Git */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <FaGitAlt size={24} className="text-orange-500" />
                    <span className="font-medium text-white font-sans">
                      Git
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">85%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-700">
                  <div className="h-2 w-[85%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>

              {/* GitHub */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <FaGithub size={24} className="text-gray-400" />

                    <span className="font-medium text-white font-sans">
                      GitHub
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">90%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-700">
                  <div className="h-2 w-[90%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>

              {/* Postman */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <SiPostman size={24} className="text-orange-500" />
                    <span className="font-medium text-white font-sans">
                      Postman
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">85%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-700">
                  <div className="h-2 w-[85%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>

              {/*vs code */}
              <div>
                <div className="mb-2 flex justify-between">
                  <div className="flex items-center gap-3">
                    <VscVscode size={24} className="text-blue-500" />
                    <span className="font-medium text-white font-sans">
                      VS Code
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">90%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-700">
                  <div className="h-2 w-[90%] rounded-full bg-gradient-to-r from-purple-400  to-pink-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default skills;


