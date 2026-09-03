"use client";
import Image from "next/image";

import { ArrowRight } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <section className="min-h-screen bg-gray-800 px-6 py-20 text-white mt-4 md:mt-4 lg:mt-0 z-10">
        <div className="mx-auto flex min-h-[80vh] max-w-6xl items-center">
          <div className="grid w-full items-center gap-14 md:grid-cols-2">
            {/* Left Content */}
            <div className="order-2 text-center md:order-1 md:text-left" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              <p className="mb-3 text-lg font-medium text-blue-400">Hi, I'm</p>

              <h1 className="text-6xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Paras Singh
              </h1>

              <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-2xl md:text-3xl">
                Full Stack Developer
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-base md:text-lg">
                Full Stack Developer&nbsp; | &nbsp;Building Real-World Projects
                &nbsp; | &nbsp;Open to Opportunities&nbsp; | &nbsp;Let's Connect
                🚀
              </p>

              {/* Hire Button */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="group inline-flex items-center font-sans gap-2 rounded-lg bg-gradient-to-r from-purple-400  to-pink-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
                >
                  Hire Me
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Right Laptop */}
            <div className=" order-1 flex justify-center md:justify-end z-10" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
              <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[430px] lg:max-w-[500px]">
                {/* Glow */}
                <div className="absolute inset-10 rounded-full bg-blue-600/20 blur-3xl" />

                <Image
                  src="/laptop.png"
                  alt="Laptop"
                  width={600}
                  height={500}
                  priority
                  className="relative w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
