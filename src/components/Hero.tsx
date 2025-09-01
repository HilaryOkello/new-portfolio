"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-40 pb-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-left"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-foreground leading-tight">
            Hey, ✋!<br />
            I&apos;m <span className="text-primary">Hilary Okello</span>,<br />
            a <span className="text-primary">Full Stack Software Developer</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80">
            Ambitious certified full-stack developer with 2+ years of experience in full-stack web development, with a strong foundation in building secure and scalable applications.
          </p>
          <Link href="#contact" className="mt-8 inline-block bg-foreground text-background px-8 py-3 md:px-10 md:py-4 font-bold rounded-md hover:bg-primary hover:text-foreground transition-colors text-sm md:text-base">
            GET IN TOUCH
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <div className="relative w-96 h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-primary shadow-2xl bg-background">
            <Image
              src="/profile.png"
              alt="Hilary Okello"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
