'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  emoji: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Performance Marketing',
    emoji: '🚀',
    skills: [
      { name: 'Meta Ads', level: 90 },
      { name: 'Google Ads', level: 88 },
      { name: 'SEO', level: 86 },
    ],
  },
  {
    title: 'Analytics & Programmatic',
    emoji: '📊',
    skills: [
      { name: 'GA4', level: 85 },
      { name: 'Semrush', level: 88 },
      { name: 'DV360', level: 80 },
    ],
  },
  {
    title: 'Creative Tools',
    emoji: '🎨',
    skills: [
      { name: 'Canva', level: 90 },
      { name: 'WordPress', level: 82 },
    ],
  },
  {
    title: 'AI Tools',
    emoji: '🤖',
    skills: [
      { name: 'ChatGPT', level: 95 },
      { name: 'Claude', level: 90 },
    ],
  },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-5 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-coffee text-sm font-medium">{skill.name}</span>
        <motion.span
          className="text-copper text-sm font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="progress-bar-bg">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: '0%' }}
          animate={isInView ? { width: `${skill.level}%` } : { width: '0%' }}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="text-lg font-semibold text-copper mb-6 flex items-center gap-2">
        <span className="text-2xl">{category.emoji}</span>
        {category.title}
      </h3>
      {category.skills.map((skill, skillIndex) => (
        <SkillBar
          key={skill.name}
          skill={skill}
          delay={index * 0.15 + skillIndex * 0.2}
        />
      ))}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-navy-light relative">
      {/* Subtle decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-copper/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative"
      >
        <h2 className="section-heading text-gradient">Skills</h2>
        <div className="section-divider" />
        <p className="text-muted max-w-2xl mx-auto mt-4">
          Proficiency across marketing platforms, analytics tools, creative
          software, and cutting-edge AI technologies.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
        {skillCategories.map((category, index) => (
          <CategoryCard
            key={category.title}
            category={category}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
