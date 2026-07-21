'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Certification {
  name: string;
  provider: string;
  file: string;
  hasImage: boolean;
}

const certifications: Certification[] = [
  {
    name: 'Semrush SEO',
    provider: 'Semrush',
    file: 'https://drive.google.com/file/d/1Mn5azngFX2yZVmnq0apCmOiuhUZMFNxU/view?usp=sharing',
    hasImage: false,
  },
  {
    name: 'Google Analytics (GA4)',
    provider: 'Google',
    file: 'https://drive.google.com/file/d/13wojSm8sRqCjFvNlqJBc2RmqNUDHvkk-/view?usp=sharing',
    hasImage: false,
  },
  {
    name: 'Google Ads',
    provider: 'Google / Coursera',
    file: 'https://drive.google.com/file/d/1UrJsqg58AdMwR6f4HvQyRExUM7xeobip/view?usp=sharing',
    hasImage: false,
  },
  {
    name: 'AI-Powered Shopping Ads',
    provider: 'Google',
    file: 'https://drive.google.com/file/d/1jMrwCROGNU3SOw_ZGCGZ9juWhwnBjAex/view?usp=sharing',
    hasImage: false,
  },
  {
    name: 'DV360',
    provider: 'Google',
    file: 'https://drive.google.com/file/d/1t5qL_PVxfm74bpaALwPSmEFVpO00Dwy_/view?usp=sharing',
    hasImage: false,
  },
  {
    name: 'Digital Marketing',
    provider: 'HubSpot Academy',
    file: 'https://drive.google.com/file/d/1sXi08oMl-T4T52YGf1ABV2FaOxf-xiYP/view?usp=sharing',
    hasImage: false,
  },
  {
    name: 'Social Media Marketing',
    provider: 'HubSpot Academy',
    file: 'https://drive.google.com/file/d/13NAmlL9njke-zb5Xg-Gn3Bs4NIbmpNlB/view?usp=sharing',
    hasImage: false,
  },
  {
    name: 'AI Tools Workshop',
    provider: 'Workshop',
    file: 'https://drive.google.com/file/d/1VO0V4Z5j0IB9jxk7wKCAFMrSp_YQa18Y/view?usp=sharing',
    hasImage: false,
  },
  {
    name: 'Excel Using AI',
    provider: 'Workshop',
    file: 'https://drive.google.com/file/d/1RWFWjluCvIjLEeQYPl2LauMH3SzFgb7t/view?usp=sharing',
    hasImage: false,
  },
];

function CertCard({
  cert,
  index,
}: {
  cert: Certification;
  index: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: ((centerY - y) / centerY) * 6,
      y: ((x - centerX) / centerX) * 6,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass rounded-2xl overflow-hidden group"
    >
      {/* Preview area */}
      {cert.hasImage ? (
        <div className="relative h-48 bg-navy p-2 flex items-center justify-center">
          <Image
            src={cert.file}
            alt={cert.name}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="relative h-48 flex flex-col items-center justify-center bg-gradient-to-br from-[#3B82F615] via-navy to-[#60A5FA10]">
          {/* Certificate Icon SVG */}
          <svg
            className="w-16 h-16 text-copper/60 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span className="text-muted text-sm font-medium text-center px-4">
            {cert.name}
          </span>
          <span className="text-copper/40 text-xs mt-1">{cert.provider}</span>
        </div>
      )}

      {/* Body */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-dark-heading mb-1">{cert.name}</h3>
        <p className="text-copper text-sm mb-4">{cert.provider}</p>
        <a
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline text-sm inline-flex items-center gap-2 !py-2 !px-5"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          View Certificate
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading text-gradient">Certifications</h2>
        <div className="section-divider" />
        <p className="text-muted max-w-2xl mx-auto mt-4">
          Industry-recognized certifications validating expertise in digital
          marketing, analytics, and advertising platforms.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <CertCard key={cert.name} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
}
