'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const QUICK_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="about" className="py-24 px-6" ref={sectionRef}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl"
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-heading text-dark-heading">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-copper/20 to-gold/10 blur-xl" />
              <Image
                src="/images/profile.png"
                alt="Udit Sharma - Performance Marketing Specialist"
                width={400}
                height={500}
                className="relative rounded-2xl border-4 border-copper/30 object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Summary Text */}
          <motion.div variants={itemVariants}>
            <p className="text-coffee text-lg leading-relaxed">
              I am a driven and ambitious fresher with a deep passion for
              Performance Marketing, currently honing my skills through the
              Kraftshala Marketing Launchpad Program. My expertise spans across
              Meta Ads campaign management, Google Ads search and display
              advertising, Amazon Ads e-commerce strategies, and SEO optimization
              using industry-leading tools. I am proficient in leveraging analytics
              platforms like GA4 and Semrush to derive actionable insights that fuel
              campaign performance. My hands-on experience with DV360 programmatic
              advertising has given me a strong foundation in programmatic buying
              and audience targeting. I actively utilize AI tools including ChatGPT
              and Claude to enhance productivity and develop innovative marketing
              strategies. With a data-driven mindset and creative approach, I am
              committed to delivering measurable results that drive business growth.
              My goal is to become a leading performance marketing professional who
              transforms data into impactful marketing outcomes.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-copper/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-copper"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-heading">Mission</h3>
            </div>
            <p className="text-muted leading-relaxed">
              To leverage data-driven insights and cutting-edge marketing tools to
              create high-impact campaigns that deliver measurable business results
              and exceptional ROI.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-heading">Vision</h3>
            </div>
            <p className="text-muted leading-relaxed">
              To become a leading performance marketing professional who bridges
              the gap between creative strategy and analytical excellence in the
              digital marketing landscape.
            </p>
          </motion.div>
        </div>

        {/* Quick Navigation Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          {QUICK_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="btn-outline">
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
