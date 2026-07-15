'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RESPONSIBILITIES = [
  'Managed and optimized Meta Ads campaigns across Facebook and Instagram, including audience targeting, A/B testing, and budget allocation',
  'Created and managed Google Ads search and display campaigns with keyword research, ad copy optimization, and bid strategy implementation',
  'Developed Amazon Ads sponsored product and brand campaigns to drive e-commerce sales and improve product visibility',
  'Conducted comprehensive SEO audits using Semrush and implemented on-page and technical SEO improvements',
  'Set up and configured Google Analytics 4 (GA4) for conversion tracking, event monitoring, and custom reporting',
  'Executed programmatic advertising campaigns using DV360, including audience segmentation and bid optimization',
  'Performed competitive analysis and market research to identify growth opportunities and inform campaign strategies',
  'Created detailed campaign performance reports with actionable insights and data-driven recommendations',
  'Collaborated with cross-functional teams to align marketing strategies with business objectives and KPIs',
  'Utilized AI-powered tools (ChatGPT, Claude) for content ideation, ad copy generation, and workflow automation',
];

const ACHIEVEMENTS = [
  'Successfully executed end-to-end marketing campaigns across multiple digital platforms with measurable results',
  'Achieved proficiency in industry-standard tools including GA4, Semrush, Google Ads, Meta Ads Manager, and DV360',
  'Completed hands-on projects simulating real-world marketing scenarios with demonstrated ROI improvements',
  'Earned multiple industry certifications validating expertise in digital marketing and analytics platforms',
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#2A221A]"
      ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-cream">Professional Experience</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl p-8 max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-cream">
                Performance Marketing Trainee
              </h3>
              <p className="text-copper text-lg mt-1">
                Kraftshala Marketing Launchpad
              </p>
            </div>
            <span className="bg-copper/20 text-copper rounded-full px-4 py-1 text-sm font-medium whitespace-nowrap self-start">
              Fresher | Practical Experience
            </span>
          </div>

          {/* Details Row */}
          <div className="flex flex-wrap gap-4 text-cream/60 text-sm mb-8">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              January 2026 – Present
            </span>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5" />
              </svg>
              Project-Based Learning
            </span>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Delhi, India
            </span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent mb-8" />

          {/* Two Columns: Responsibilities & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Responsibilities */}
            <div>
              <h4 className="text-lg font-semibold text-cream mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper" />
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {RESPONSIBILITIES.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -15 }
                    }
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
                    className="flex gap-3 text-cream/70 text-sm leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-cream mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {ACHIEVEMENTS.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 15 }
                    }
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                    className="flex gap-3 text-cream/70 text-sm leading-relaxed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold shrink-0 mt-0.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
