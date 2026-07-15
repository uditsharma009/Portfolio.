'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  image: string;
  description: string;
  metrics: string[];
  tools: string[];
  link: string | null;
}

const projects: Project[] = [
  {
    title: 'Meta Ads Campaign — Unleavables',
    image: '/projects/meta-ads.jpg',
    description:
      'Executed a live Meta Ads campaign for Unleavables, optimizing ad creatives, targeting, and budget allocation to maximize conversions and ROI.',
    metrics: ['Optimized CTR', 'Improved Conversions', 'Budget Efficiency'],
    tools: ['Meta Ads Manager', 'Canva', 'GA4'],
    link: '/achievements/M45_ET_Meta_live project unleavables_A4 (2)-compressed.pdf',
  },
  {
    title: 'Google Ads Search Campaign',
    image: '/projects/google-ads.jpg',
    description:
      'Designed and managed a Google Search Ads campaign with keyword research, ad copy testing, and quality score optimization for peak performance.',
    metrics: ['Keyword Optimization', 'Quality Score', 'Cost Efficiency'],
    tools: ['Google Ads', 'GA4', 'GSC'],
    link: '/achievements/Google Search ads Live Campaign project M45ET Team A4 (1)-compressed.pdf',
  },
  {
    title: 'Amazon Ads — Homecrust',
    image: '/projects/amazon-ads.jpg',
    description:
      'Managed Amazon Sponsored Ads for Homecrust, focusing on ACOS optimization, product visibility, and sales growth through strategic bidding.',
    metrics: ['ACOS Optimization', 'Sales Growth', 'Visibility Boost'],
    tools: ['Amazon Ads', 'Helium 10', 'Excel'],
    link: '/achievements/ECOM LIVE PROJECT M45 ET TEAM A4-compressed.pdf',
  },
  {
    title: 'SEO Project — Unleavables',
    image: '/projects/seo.jpg',
    description:
      'Conducted a comprehensive SEO audit and optimization for Unleavables, improving technical health, content strategy, and organic rankings.',
    metrics: ['Ranking Improvement', 'Technical Score', 'Content Optimization'],
    tools: ['Semrush', 'Screaming Frog', 'GSC', 'GA4'],
    link: '/achievements/Seo Live Project M45ET Team A4-compressed.pdf',
  },
  {
    title: 'DV360 Programmatic Strategy',
    image: '/projects/dv360.jpg',
    description:
      'Developed a programmatic advertising strategy using DV360, focusing on audience segmentation, impression share, and CPM optimization.',
    metrics: ['Audience Reach', 'Impression Share', 'CPM Optimization'],
    tools: ['DV360', 'Google Ads', 'CM360'],
    link: null,
  },
  {
    title: 'Organic Content Marketing',
    image: '/projects/content-marketing.jpg',
    description:
      'Created and executed organic content marketing strategies to boost brand awareness, engagement rates, and content reach across platforms.',
    metrics: ['Engagement Rate', 'Content Reach', 'Brand Awareness'],
    tools: ['WordPress', 'Canva', 'GA4'],
    link: '/achievements/Content Proof of Work Udit-3MB.pdf',
  },
  {
    title: 'Snitch Content Marketing Blog',
    image: '/projects/snitch-blog.jpg',
    description:
      'Wrote and optimized blog content for Snitch, driving organic traffic, improving read time, and increasing social media shares.',
    metrics: ['Blog Traffic', 'Read Time', 'Social Shares'],
    tools: ['WordPress', 'Canva', 'SEMrush', 'ChatGPT'],
    link: '/achievements/coffee-blog (1).html',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rY = ((x - centerX) / centerX) * 10;
    const rX = ((centerY - y) / centerY) * 10;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass rounded-2xl overflow-hidden group"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-cream mb-2">{project.title}</h3>
        <p className="text-cream/70 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex gap-2 flex-wrap mb-3">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="bg-copper/10 text-copper rounded-full px-3 py-1 text-xs font-medium"
            >
              {metric}
            </span>
          ))}
        </div>

        {/* Tools */}
        <div className="flex gap-2 flex-wrap mt-2 mb-4">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="border border-copper/30 text-cream/60 rounded-full px-3 py-1 text-xs"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* View Details */}
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-copper hover:text-gold transition-colors text-sm font-semibold group/link"
          >
            View Details
            <svg
              className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-cream/30 text-sm font-semibold cursor-not-allowed">
            Coming Soon
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading text-gradient">Projects</h2>
        <div className="section-divider" />
        <p className="text-cream/60 max-w-2xl mx-auto mt-4">
          Real-world campaigns and projects showcasing hands-on experience in
          performance marketing, SEO, and content strategy.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
