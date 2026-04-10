"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const floatingBadges = [
  { label: 'Python', rotate: -10, top: '12%', left: '-8%' },
  { label: 'FastAPI', rotate: 7, top: '8%', right: '-5%' },
  { label: 'AI / ML', rotate: -6, bottom: '20%', left: '-10%' },
  { label: 'Go', rotate: 9, bottom: '25%', right: '-8%' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-grid overflow-hidden">
      {/* Blue glow blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32 flex flex-col md:flex-row items-center gap-16 md:gap-8">
        {/* Left — Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-1 text-left"
        >
          <motion.h1 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight">
            Hey, I&apos;m<br />
            <span className="text-primary">Hilary</span>
            <br />
            <span className="text-primary">Okello</span>.
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg md:text-xl font-semibold text-foreground/60 uppercase tracking-widest">
            Backend Developer &amp; AI/ML Specialist
          </motion.p>

          <motion.p variants={item} className="mt-6 text-base md:text-lg text-foreground/70 max-w-lg leading-relaxed">
            2+ years building scalable web applications and AI/ML systems. Proven track record in machine learning pipelines, few-shot learning, and production APIs.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex items-center gap-4 flex-wrap">
            <Link
              href="#projects"
              className="bg-foreground text-background px-8 py-4 font-bold rounded-full hover:bg-primary transition-colors text-sm tracking-wider uppercase"
            >
              See my work
            </Link>
            <Link
              href="#contact"
              className="border-2 border-foreground/30 text-foreground px-8 py-4 font-bold rounded-full hover:border-primary hover:text-primary transition-colors text-sm tracking-wider uppercase"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="flex-1 flex justify-center relative"
        >
          {/* Floating badges */}
          {floatingBadges.map((badge) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + Math.random() * 0.3 }}
              style={{
                rotate: badge.rotate,
                top: badge.top,
                bottom: badge.bottom,
                left: badge.left,
                right: badge.right,
              }}
              className="absolute hidden lg:flex bg-background border border-foreground/10 shadow-lg px-4 py-2 rounded-2xl text-sm font-bold text-foreground z-20 whitespace-nowrap"
            >
              {badge.label}
            </motion.div>
          ))}

          {/* Blue glow behind image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Profile image — slightly tilted frame */}
          <motion.div
            style={{ rotate: -3 }}
            whileHover={{ rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-primary shadow-2xl z-10"
          >
            <Image
              src="/profile.png"
              alt="Hilary Okello"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 text-xs font-semibold tracking-widest uppercase"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
