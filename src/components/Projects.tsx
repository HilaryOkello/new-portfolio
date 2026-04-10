"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const projects = [
  {
    title: 'Bongo Hub',
    description:
      'A production social media platform I built as Full Stack Developer — architecting the Ruby on Rails backend, designing a reusable React component system, and implementing real-time user interactions with a focus on accessibility and cross-device compatibility.',
    stack: ['Ruby on Rails', 'React', 'Inertia.js', 'PostgreSQL', 'TailwindCSS', 'Docker', 'RSpec'],
    github: null,
    live: 'https://bongohub.net',
    image: '/bongo-hub.png',
    tag: 'PRODUCTION',
    featured: true,
  },
  {
    title: 'Radrr',
    description:
      'A modern web application with a clean, user-first interface — built with performance and usability in mind, deployed to production on Vercel.',
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/HilaryOkello/radrr',
    live: 'https://radrr.vercel.app',
    image: '/radrr.png',
    tag: 'WEB APP',
    featured: false,
  },
  {
    title: 'Keyvan HMIS',
    description:
      'A Hospital Management Information System built for Kenyan healthcare facilities — covering patient management, M-Pesa billing, appointment scheduling, pharmacy, lab, insurance workflows, and role-based dashboards for eight user types.',
    stack: ['Astro', 'M-Pesa API', 'WhatsApp API', 'PostgreSQL'],
    github: null,
    live: 'https://keyvan.co.ke',
    image: '/keyvan.png',
    tag: 'PRODUCTION',
    featured: false,
  },
  {
    title: 'Emotions Detector',
    description:
      'A computer vision application that detects and classifies human emotions from facial expressions in real-time — applying ML pipeline techniques from my AI/ML work.',
    stack: ['Python', 'Computer Vision', 'ML Pipelines'],
    github: 'https://github.com/HilaryOkello/emotions-detector',
    live: null,
    image: '/emotions-detector.png',
    tag: 'AI / ML',
    featured: false,
  },
];

// Slight rotations for the grid cards
const rotations = [-2.5, 1.8, -1.5];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Projects = () => {
  const featured = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative bg-[#26233D] text-[#E9E9E9] py-24 px-6 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">
              01 / Selected Work
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-[#E9E9E9] leading-none">
              PROJECTS.
            </h2>
          </div>
          <div className="hidden md:block w-1/4 h-px bg-[#E9E9E9]/20" />
        </motion.div>

        {/* Featured Card — Bongo Hub */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-10"
        >
          <div className="group relative bg-[#E9E9E9] text-foreground rounded-3xl overflow-hidden shadow-2xl">
            {/* Featured badge */}
            <div className="absolute top-6 left-6 z-20 bg-primary text-white text-xs font-black px-3 py-1.5 rounded-full tracking-widest uppercase">
              ★ Featured
            </div>
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-3/5 relative h-64 md:h-[440px] bg-foreground/5 overflow-hidden">
                <Image
                  src={featured.image!}
                  alt={featured.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#E9E9E9]/20 md:to-[#E9E9E9] hidden md:block" />
              </div>
              {/* Content */}
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block bg-primary/10 text-primary text-xs font-black px-3 py-1 rounded-full tracking-widest uppercase mb-4">
                  {featured.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-black mb-4">{featured.title}</h3>
                <p className="text-foreground/70 text-base leading-relaxed mb-6">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-foreground/8 text-foreground text-xs font-semibold px-3 py-1 rounded-full border border-foreground/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={featured.live!}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-foreground text-background font-bold px-6 py-3 rounded-full hover:bg-primary transition-colors self-start text-sm"
                >
                  <Globe className="w-4 h-4" /> Visit Site <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid cards — angled */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-12">
          {gridProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: rotations[i] }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[i] }}
              whileHover={{ rotate: 0, scale: 1.03, y: -8 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 200, damping: 18 }}
              className="group bg-[#E9E9E9] text-foreground rounded-2xl overflow-hidden shadow-xl cursor-default"
            >
              {/* Image / placeholder */}
              <div className="relative w-full h-48 bg-primary/10 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-primary/40 font-black text-4xl tracking-tighter">
                      {project.title.split(' ').map((w) => w[0]).join('')}
                    </span>
                  </div>
                )}
                {/* Tag */}
                <div className="absolute top-4 right-4 bg-[#26233D] text-[#E9E9E9] text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest">
                  {project.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black mb-2">{project.title}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-foreground font-bold text-xs transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-primary hover:text-foreground font-bold text-xs transition-colors"
                    >
                      <Globe className="w-4 h-4" /> Live <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
