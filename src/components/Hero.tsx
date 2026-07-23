'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TITLES = [
  'Performance Marketing Specialist',
  'Digital Marketing Enthusiast',
  'SEO & Paid Media Practitioner',
  'Programmatic Advertising Learner',
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[currentTitleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section
      id="home"
      className="gradient-bg min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Floating Circles */}
      <div className="floating-circle floating-circle-1" />
      <div className="floating-circle floating-circle-2" />
      <div className="floating-circle floating-circle-3" />

      {/* Split Layout: Text Left + Image Right */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text Content */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#B8860B20] border border-[#B8860B40] rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
            <span className="text-copper text-sm font-semibold tracking-wide">Available for Opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-black text-[#F8F4EE] mb-2 leading-[1.1]"
          >
            Udit<br />
            <span className="text-gradient">Sharma</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="h-8 md:h-10 flex items-center mb-6 mt-2"
          >
            <span className="text-lg md:text-xl text-copper font-medium">
              {displayText}
            </span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-[#F8F4EEa0] max-w-xl text-base leading-relaxed mb-8"
          >
            Fresher with hands-on experience through live marketing projects,
            campaign simulations, and industry certifications completed during
            the Kraftshala Marketing Launchpad Program. Specializing in Meta Ads,
            Google Ads, Amazon Ads, SEO, and DV360 programmatic advertising.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a href="#projects" className="btn-copper">
              <span>View My Work</span>
            </a>
            <a href="#contact" className="btn-outline border-[#F8F4EE40] text-[#F8F4EE] hover:bg-[#F8F4EE15] hover:border-[#F8F4EE80]">
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex gap-4"
          >
            <a
              href="https://www.linkedin.com/in/udit-sharma-2217693a9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#F8F4EE30] flex items-center justify-center text-[#F8F4EE80] hover:text-copper hover:border-copper transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:udit32329@gmail.com"
              className="w-10 h-10 rounded-full border border-[#F8F4EE30] flex items-center justify-center text-[#F8F4EE80] hover:text-copper hover:border-copper transition-all duration-300"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' as const }}
          className="hidden lg:flex items-center justify-center relative"
        >
          {/* Decorative ring behind image */}
          <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-dashed border-[#B8860B25] animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-[480px] h-[480px] rounded-full border border-[#B8860B10]" />

          {/* Glow behind image */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-[#B8860B] blur-[120px] opacity-[0.08]" />

          {/* Image container */}
          <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-[#B8860B40] shadow-[0_0_60px_rgba(184,134,11,0.2)]">
            <Image
              src="/images/profile.png"
              alt="Udit Sharma"
              fill
              className="object-cover object-top"
              sizes="350px"
              priority
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A141040] via-transparent to-transparent" />
          </div>

          {/* Floating stat badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute -bottom-2 left-4 bg-[#1A1410e6] backdrop-blur-md border border-[#B8860B30] rounded-xl px-4 py-3 shadow-lg"
          >
            <p className="text-copper text-2xl font-black">9+</p>
            <p className="text-[#F8F4EE99] text-xs">Certifications</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="absolute -top-2 right-4 bg-[#1A1410e6] backdrop-blur-md border border-[#B8860B30] rounded-xl px-4 py-3 shadow-lg"
          >
            <p className="text-copper text-2xl font-black">7+</p>
            <p className="text-[#F8F4EE99] text-xs">Projects</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#F8F4EE66]"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
