'use client';

import { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';

/* ─── Counter data ─── */
interface CounterItem {
  target: number;
  suffix: string;
  label: string;
}

const counters: CounterItem[] = [
  { target: 9, suffix: '+', label: 'Certifications' },
  { target: 7, suffix: '+', label: 'Projects' },
  { target: 4, suffix: '', label: 'Live Projects' },
  { target: 4, suffix: '', label: 'Case Studies' },
];

/* ─── Achievement cards data ─── */
interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    title: 'Marketing Launchpad Graduate',
    description:
      'Completed the intensive Kraftshala Marketing Launchpad Program with hands-on campaign execution.',
    icon: (
      <svg
        className="w-8 h-8 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing Certifications',
    description:
      'Earned 9+ certifications from Google, Semrush, HubSpot, and other industry leaders.',
    icon: (
      <svg
        className="w-8 h-8 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: 'Performance Marketing Projects',
    description:
      'Executed 7+ live and simulated projects across Meta, Google, Amazon, and DV360 platforms.',
    icon: (
      <svg
        className="w-8 h-8 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
  {
    title: 'SEO & Advertising Projects',
    description:
      'Delivered measurable improvements in organic rankings, ad quality scores, and campaign ROI.',
    icon: (
      <svg
        className="w-8 h-8 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
];

/* ─── Animated Counter Component ─── */
function AnimatedCounter({ item, index }: { item: CounterItem; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, item.target, {
        duration: 2,
        ease: 'easeOut' as const,
        delay: index * 0.2,
      });
      return controls.stop;
    }
  }, [isInView, motionVal, item.target, index]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = `${v}${item.suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, item.suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-8 text-center"
    >
      <span ref={ref} className="text-4xl font-bold text-gradient block mb-2">
        0{item.suffix}
      </span>
      <span className="text-muted text-sm font-medium">{item.label}</span>
    </motion.div>
  );
}

/* ─── Achievement Card ─── */
function AchievementCard({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="glass rounded-2xl p-6 card-hover"
    >
      <div className="w-14 h-14 rounded-xl bg-copper/10 flex items-center justify-center mb-4">
        {achievement.icon}
      </div>
      <h3 className="text-lg font-semibold text-dark-heading mb-2">
        {achievement.title}
      </h3>
      <p className="text-coffee text-sm leading-relaxed">
        {achievement.description}
      </p>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-navy-light relative">
      {/* Decorative glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative"
      >
        <h2 className="section-heading text-gradient">
          Achievements &amp; Recognition
        </h2>
        <div className="section-divider" />
        <p className="text-muted max-w-2xl mx-auto mt-4">
          Milestones and accolades earned through dedication, continuous
          learning, and hands-on marketing execution.
        </p>
      </motion.div>

      {/* Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 relative">
        {counters.map((item, index) => (
          <AnimatedCounter key={item.label} item={item} index={index} />
        ))}
      </div>

      {/* Achievement Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto relative">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.title}
            achievement={achievement}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
