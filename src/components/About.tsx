"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { FileText } from 'lucide-react';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'Go', 'Ruby', 'Rust'],
  },
  {
    category: 'AI / ML',
    skills: [
      'FastAPI',
      'Few-Shot Learning',
      'Computer Vision',
      'ML Pipelines',
      'Model Training & Evaluation',
      'Vision Transformers (ViT)',
      'CLIP',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'REST API Design',
      'OpenAPI',
      'JWT / OAuth',
      'PostgreSQL',
      'SQLite',
      'Ruby on Rails',
      'Docker',
      'RSpec',
    ],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Inertia.js', 'TailwindCSS', 'shadcn/ui'],
  },
];

const softSkills = [
  'Problem-Solving',
  'Reliability',
  'Clear Communication',
  'Planning',
  'Fast Learning',
  'Timely Delivery',
];

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
});

const About = () => {
  return (
    <section id="about" className="bg-background py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-end gap-8 mb-16"
        >
          <div>
            <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">
              02 / About Me
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-foreground leading-none">
              ABOUT.
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-foreground/15 mb-4" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Text */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="border-l-4 border-primary pl-6 mb-8">
              <p className="text-xl md:text-2xl font-black text-foreground leading-snug">
                Backend developer with a sharp focus on AI/ML systems and production APIs.
              </p>
            </div>

            <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-5">
              I&apos;m a backend developer with 2+ years of experience building scalable web
              applications and AI/ML systems. I specialize in machine learning pipelines, few-shot
              learning, and high-performance APIs — with a consistent track record of delivering
              quality work on time.
            </p>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-5">
              Currently at{' '}
              <span className="font-bold text-foreground">Zone 01 Kisumu</span>, I work as a{' '}
              <span className="font-bold text-foreground">Backend Developer (AI/ML)</span> on Berrijam AI
              — architecting FastAPI backends for ML model training, prediction, and evaluation
              endpoints — and as a{' '}
              <span className="font-bold text-foreground">Full Stack Developer</span> on BongoHub, a
              production social platform.
            </p>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-10">
              Beyond building, I&apos;m passionate about democratizing AI through education and
              mentorship — recently serving as a judge at The Tech Challenge Kenya 2025 and as an
              AI in Education panelist at Technovation Kenya 2025.
            </p>

            <Link
              href="https://docs.google.com/document/d/1U6QceM3dcIGcV7aj5lTVF_g7EBbtYIccsYzloDlK-cc/edit?usp=sharing"
              target="_blank"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-bold rounded-full hover:bg-primary transition-colors text-sm tracking-wider uppercase"
            >
              <FileText className="w-4 h-4" /> View My CV
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            whileHover={{ rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10" />
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary rounded-3xl -z-10" />
            <Image
              src="/about.jpg"
              alt="Hilary Okello"
              width={600}
              height={700}
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Core Skills — grouped by category */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-24"
        >
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-2xl md:text-3xl font-black whitespace-nowrap">CORE SKILLS</h3>
            <div className="flex-1 h-px bg-foreground/15" />
          </div>

          <div className="space-y-8">
            {skillGroups.map((group, gi) => (
              <div key={group.category}>
                <p className="text-xs font-black tracking-[0.2em] uppercase text-foreground/40 mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.06 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: gi * 0.05 + i * 0.03 }}
                      className="bg-background border-2 border-foreground/10 hover:border-primary text-foreground font-semibold px-4 py-2 rounded-xl text-sm shadow-sm hover:shadow-md transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14"
        >
          <div className="flex items-center gap-6 mb-8">
            <h3 className="text-2xl md:text-3xl font-black whitespace-nowrap">STRENGTHS</h3>
            <div className="flex-1 h-px bg-foreground/15" />
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.06 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="bg-primary/10 border-2 border-primary/20 hover:border-primary text-primary font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-primary hover:text-white transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
