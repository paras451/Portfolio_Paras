"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaSchool, FaGraduationCap } from "react-icons/fa";


function education() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
       <section
      id="education"
      className="bg-gray-800 px-5 py-20 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-6xl font-bold font-sans text-gray-100">
            My Education
          </h2>

        <div
              className="mx-auto mt-4 h-1 w-60 rounded-full bg-gradient-to-r from-purple-400  to-pink-600"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            ></div>
        </div>

        {/* Journey */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-gray-600 md:left-1/2 md:-translate-x-1/2"></div>

          {/* ================= 10th ================= */}
          <div
            className="relative mb-12 flex items-start md:justify-start"
            data-aos="fade-right"
          >
            {/* Circle */}
            <div className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-purple-400  to-pink-600 shadow-lg shadow-blue-500/30 md:left-1/2 md:-translate-x-1/2">
              <FaSchool />
            </div>

            {/* Card */}
            <div className="ml-16 w-full rounded-2xl border border-gray-700 bg-gray-800 p-6 transition duration-300 hover:-translate-y-1  md:mr-[52%] md:ml-0">
              <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400  to-pink-600 font-sans">
                10th Class
              </span>

              <h3 className="mt-2 text-2xl font-bold font-sans">
                Rose Academy Sr. Sec. School <br />
                Jaipur, Rajasthan
              </h3>

              <div className="mt-4 space-y-2 text-gray-400">
                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    Board:
                  </span>{" "}
                  RBSE
                </p>

                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    Duration:
                  </span>{" "}
                  2020 – 2021
                </p>

                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    Percentage:
                  </span>{" "}
                  85.50%
                </p>
              </div>
            </div>
          </div>

          {/* ================= 12th ================= */}
          <div
            className="relative mb-12 flex items-start md:justify-end"
            data-aos="fade-left"
          >
            {/* Circle */}
            <div className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-purple-400  to-pink-600 shadow-lg shadow-purple-500/30 md:left-1/2 md:-translate-x-1/2">
              <FaSchool />
            </div>

            {/* Card */}
            <div className="ml-16 w-full rounded-2xl border border-gray-700 bg-gray-800 p-6 transition duration-300 hover:-translate-y-1  md:ml-[52%]">
              <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400  to-pink-600 font-sans">
                12th Class
              </span>

              <h3 className="mt-2 text-2xl font-bold font-sans">
                Rose Academy Sr. Sec. School <br />
                Jaipur, Rajasthan
              </h3>

              <div className="mt-4 space-y-2 text-gray-400">
                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    Board:
                  </span>{" "}
                  RBSE
                </p>

                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    Stream:
                  </span>{" "}
                  Commerce
                </p>

                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    Duration:
                  </span>{" "}
                  2021 – 2022
                </p>

                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    Percentage:
                  </span>{" "}
                  69.40%
                </p>
              </div>
            </div>
          </div>

          {/* ================= Graduation ================= */}
          <div
            className="relative flex items-start md:justify-start"
            data-aos="fade-right"
          >
            {/* Circle */}
            <div className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-purple-400  to-pink-600 shadow-lg shadow-green-500/30 md:left-1/2 md:-translate-x-1/2">
              <FaGraduationCap />
            </div>

            {/* Card */}
            <div className="ml-16 w-full rounded-2xl border border-gray-700 bg-gray-800 p-6 transition duration-300 hover:-translate-y-1 md:mr-[52%] md:ml-0">
              <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400  to-pink-600 font-sans">
                Graduation
              </span>

              <h3 className="mt-2 text-2xl font-bold font-sans">
                BCA – Bachelor of Computer Applications
              </h3>

              <div className="mt-4 space-y-2 text-gray-400">
                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    College:
                  </span>{" "}
                  CITM, Jaipur
                </p>

                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    University:
                  </span>{" "}
                  Rajasthan University
                </p>

                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    Duration:
                  </span>{" "}
                  2023 – 2026
                </p>

                <p className="font-sans">
                  <span className="font-semibold text-gray-300">
                    CGPA:
                  </span>{" "}
                  7.79
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}

export default education;
