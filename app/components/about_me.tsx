"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";



function About_me() {

 useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);




  return (
    <div id="about">
      <section className="relative overflow-hidden bg-gray-100 px-5 py-20  text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Section Heading */}
          <div className="mb-14 text-center" >
            <h2 className="text-6xl font-sans mt-4 text-black font-black " data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              ABOUT ME
            </h2>

            <div className="mx-auto mt-3 h-1 w-30 rounded-full bg-gradient-to-r from-purple-400  to-pink-600" />
          </div>

          {/* Main Content */}
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
            {/* ================= IMAGE ================= */}
            <div className="flex justify-center" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
              <div className="relative">
                {/* Glow */}
                {/* <div className="absolute inset-0 rounded-2xl bg-blue-600/20 blur-3xl" /> */}

                <div className="relative h-[320px] w-[280px] overflow-hidden rounded-2xl border border-gray-700 bg-[#1a1a1a] sm:h-[380px] sm:w-[330px]">
                  <Image
                    src="/about.me.png"
                    alt="About Paras Singh" 
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="text-center  md:text-left" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
              {/* <h3 className="text-2xl font-bold sm:text-3xl">
              I'm <span className="text-blue-500">Paras Singh</span>
            </h3>

            <h4 className="mt-2 text-lg font-semibold text-gray-300 sm:text-xl">
              Full Stack Developer
            </h4> */}

              <p className="mt-1 font-sans lg:text-2xl lg:font-sans leading-7 text-black sm:text-base">
                I am a passionate Full Stack Developer who enjoys building
                modern, responsive, and user-friendly web applications. I love
                turning ideas into real-world projects and continuously
                improving my development skills.
              </p>

              <p className="mt-4  font-sans lg:text-2xl lg:font-sans leading-7 text-black sm:text-base">
                I work with technologies such as Java, Spring Boot, React,
                Next.js, Django, SQL, and PostgreSQL. I enjoy learning new
                technologies, solving problems, and creating applications that
                provide a great user experience.
              </p>

              {/* Resume Button */}
              <div className="mt-8">
                <a
                  href="https://drive.google.com/file/d/1I0t00VVl0zEYOyp2ZeJxtBfLKSdzmAzc/view?usp=sharing"
                  download
                  className="inline-flex items-center font-sans gap-2 rounded-lg bg-gradient-to-r from-purple-400  to-pink-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 sm:px-7 sm:py-3.5 sm:text-base"
                >
                  <Download size={19} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About_me;
