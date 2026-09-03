import React from "react";

import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-grey" id="footer">
        <div className="mx-auto max-w-6xl px-6 py-16">
          {/* //footer */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* about */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white font-sans">
                Paras Singh Chilwal
              </h2>
              <p className="max-w-lg text-[15px] leading-6 text-[#9ca9bb] font-sans">
                A passionate Full Stack Developer focused on creating beautiful
                and functional web applications. Always eager to learn and
                explore new technologies.
              </p>
              {/* social icons */}
              <div className="mt-6 flex gap-5">
                <a
                  href="https://github.com/paras451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aab4c2] transition hover:text-white"
                  aria-label="github"
                >
                  <FaGithub size={24} strokeWidth={2.5} />
                </a>
                <a
                  href="https://www.linkedin.com/in/paras-singh-chilwal-9091ab330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aab4c2] transition hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={24} strokeWidth={2.5} />
                </a>
              </div>
            </div>
            {/* contact */}
            <div >
              <h2 className="mb-6 text-3xl font-bold text-white ">
                Get in Touch
              </h2>
              <div className="space-y-5">
                {/* email */}
                <div className="flex items-center gap-4">
                  <Mail size={22} className="shrink=0 text-[#aab4c2]" />
                  <a
                    href=""
                    className="text-[15px] text-[#9ca9bc] transition font-sans hover:text-white"
                  >
                    paraschilwal4@gmail.com
                  </a>
                </div>
                {/* phone */}
                <div className="flex items-center gap-4">
                  <Phone size={22} className="shrink-0 text-[#aab4c2]" />
                  <a
                    href=""
                    className="text-[15px] font-sans text-[#9ca9bb] transition font-sans hover:text-white"
                  >
                    {" "}
                    +91 9876543210
                  </a>
                </div>
                {/* location */}
                <div className="flex items-center gap-4 ">
                  <MapPin size={22} className="shrink-0 text-[#aab4c2]" />

                  <span className="text-[15px] text-[#9ca9bb] transition font-sans hover:text-white">
                    Jaipur ,Rajasthan ,India
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* divider */}
          <div className="my-10 h-px bg-[#29313b]" />

          {/* Bottom */}
          <div className="text-center">
            <p className="text-[15px] text-[#718096] font-sans">
              © 2026 Paras Singh Chilwal. All rights reserved.
            </p>

            <p className="mt-3 flex items-center justify-center gap-1 text-[14px] text-[#718096] font-sans">
              Built with
              <Heart size={15} fill="#1d20ef"  />
              by Paras Singh Chilwal.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
