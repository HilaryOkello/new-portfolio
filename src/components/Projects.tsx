"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Artists Tracker',
    description: 'A web app that enables users to find out about their favorite artists, including their concert dates, members, and albums.',
    stack: 'Go, JavaScript, HTML, CSS',
    link: 'https://github.com/HilaryOkello/artists-tracker',
    image: '/artists-tracker.png',
  },
  {
    title: 'Alpha-Beta',
    description: 'A web forum that allows users to post, comment, and vote on posts. It also has a secure authentication system.',
    stack: 'Go, SQLite, JavaScript, HTML, CSS',
    link: 'https://github.com/HilaryOkello/alpha-beta',
    image: '/alpha-beta.png',
  },
  {
    title: 'Wget Mimic',
    description: 'A command-line tool that mimics the functionality of wget, allowing users to download files from the internet.',
    stack: 'Go',
    link: 'https://github.com/HilaryOkello/wget-mimic',
    image: '/wget-mimic.png',
  },
  {
    title: 'ATM Management System',
    description: 'A Java-based ATM management system that allows users to perform basic banking operations.',
    stack: 'Java',
    link: 'https://github.com/HilaryOkello/atm-management-system',
    image: '/atm-management-system.png',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">SELECTED<br/>PROJECTS</h2>
        <div className="w-1/3 h-px bg-foreground"></div>
        <p className="text-3xl md:text-5xl font-bold">01/03</p>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:flex items-center justify-between">
        <button onClick={handlePrev} className="p-2 rounded-full hover:bg-primary/20 transition-colors">
          <ChevronLeft className="w-10 h-10 text-foreground" />
        </button>
        <div className="flex-1 mx-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex gap-8"
            >
              <div className="w-1/2">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-1/2 text-left flex flex-col justify-center">
                <h3 className="text-3xl font-bold">{currentProject.title}</h3>
                <p className="mt-4 text-lg text-foreground/80">{currentProject.description}</p>
                <p className="mt-4 font-bold text-primary">{currentProject.stack}</p>
                <Link href={currentProject.link} target="_blank" className="mt-6 inline-flex items-center text-foreground font-bold hover:text-primary transition-colors">
                  GITHUB LINK <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button onClick={handleNext} className="p-2 rounded-full hover:bg-primary/20 transition-colors">
          <ChevronRight className="w-10 h-10 text-foreground" />
        </button>
      </div>
      <div className="hidden md:flex justify-center mt-8 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-primary' : 'bg-foreground/30 hover:bg-foreground/50'}`}
          />
        ))}
      </div>

      {/* Mobile List */}
      <div className="md:hidden space-y-12">
        {projects.map((project) => (
          <div key={project.title} className="border border-foreground/10 rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 text-foreground/80">{project.description}</p>
              <p className="mt-4 font-bold text-primary">{project.stack}</p>
              <Link href={project.link} target="_blank" className="mt-4 inline-flex items-center text-foreground font-bold hover:text-primary transition-colors">
                GITHUB LINK <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
