'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineEntry {
  year: string;
  title: string;
  institution: string;
  description: string;
}

const TIMELINE_DATA: TimelineEntry[] = [
  {
    year: '2026',
    title: 'Marketing Launchpad Program',
    institution: 'Kraftshala',
    description:
      'Intensive performance marketing program covering Meta Ads, Google Ads, Amazon Ads, SEO, GA4 analytics, DV360 programmatic advertising, and AI-powered marketing tools. Hands-on project-based learning with live campaigns and industry simulations.',
  },
  {
    year: '2025–2028',
    title: 'B.Sc. Physics (Hons.)',
    institution: 'Patliputra University',
    description:
      'Pursuing a Bachelor of Science in Physics with Honours, developing strong analytical and problem-solving skills. The rigorous scientific curriculum builds a solid foundation in data analysis, critical thinking, and quantitative reasoning applicable to marketing analytics.',
  },
  {
    year: 'Class XII',
    title: 'Senior Secondary Education',
    institution: 'CBSE',
    description:
      'Completed Senior Secondary Education under the Central Board of Secondary Education (CBSE) with a focus on Science stream. Developed a strong academic foundation in mathematics and analytical subjects that support data-driven decision making.',
  },
  {
    year: 'Class X',
    title: 'Secondary Education',
    institution: 'CBSE',
    description:
      'Completed Secondary Education under CBSE, building a well-rounded academic base. Demonstrated consistent academic performance and developed essential skills in mathematics, science, and communication.',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="education" className="py-24 px-6" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-heading text-dark-heading">Education</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="timeline-line" />

          {/* Timeline Entries */}
          <div className="space-y-16">
            {TIMELINE_DATA.map((entry, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div
                    className="timeline-dot"
                    style={{ top: '2rem' }}
                  />

                  {/* Card - Desktop: alternating sides, Mobile: left-aligned */}
                  <div
                    className={`flex ${
                      isLeft
                        ? 'md:justify-start md:pr-[55%]'
                        : 'md:justify-end md:pl-[55%]'
                    } pl-12 md:pl-0`}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isLeft ? -60 : 60,
                      }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: isLeft ? -60 : 60 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + index * 0.15,
                        ease: 'easeOut' as const,
                      }}
                      className="glass rounded-2xl p-6 max-w-md w-full card-hover"
                    >
                      {/* Year Badge */}
                      <span className="inline-block bg-copper/20 text-copper text-sm font-semibold rounded-full px-4 py-1 mb-3">
                        {entry.year}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-dark-heading mb-1">
                        {entry.title}
                      </h3>

                      {/* Institution */}
                      <p className="text-copper-light text-sm font-medium mb-3 flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
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
                        {entry.institution}
                      </p>

                      {/* Description */}
                      <p className="text-muted text-sm leading-relaxed">
                        {entry.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
