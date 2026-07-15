'use client';

import { useState, useEffect } from 'react';
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
      className="gradient-bg min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Floating Circles */}
      <div className="floating-circle floating-circle-1" />
      <div className="floating-circle floating-circle-2" />
      <div className="floating-circle floating-circle-3" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">
        {/* Monogram */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-[120px] h-[120px] rounded-full border-2 border-copper flex items-center justify-center mb-8"
        >
          <span className="text-4xl font-bold text-gradient">US</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-cream mb-4"
        >
          Udit Sharma
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="h-8 md:h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-2xl text-copper font-medium">
            {displayText}
          </span>
          <span className="typing-cursor" />
        </motion.div>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-cream/70 max-w-2xl text-lg mt-6 text-center leading-relaxed"
        >
          I&apos;m Udit Sharma, a passionate Performance Marketing Specialist based in
          Delhi, India. I specialize in creating data-driven digital marketing
          campaigns across Meta Ads, Google Ads, Amazon Ads, and programmatic
          platforms like DV360. Through the Kraftshala Marketing Launchpad Program,
          I&apos;ve gained hands-on experience executing live campaigns, conducting SEO
          audits, and leveraging analytics tools like GA4 and Semrush to drive
          measurable results. My approach combines creative strategy with rigorous
          data analysis to maximize ROI and deliver impactful marketing outcomes.
          Let&apos;s connect and explore how I can bring value to your marketing team.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap gap-4 mt-10 justify-center"
        >
          <a href="#projects" className="btn-copper">
            <span>View My Work</span>
          </a>
          <a href="#contact" className="btn-outline">
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex gap-5 mt-10"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/udit-sharma-2217693a9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-copper transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:udit32329@gmail.com"
            className="text-cream/60 hover:text-copper transition-colors duration-300"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
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
          className="text-cream/40"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
