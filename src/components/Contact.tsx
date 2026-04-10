"use client";

import { Linkedin, Github, Twitter, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
});

const Contact = () => {
  return (
    <section id="contact" className="bg-background py-24 px-6">
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
              03 / Contact
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-foreground leading-none">
              REACH OUT.
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-foreground/15 mb-4" />
        </motion.div>

        {/* CTA Block */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="relative bg-[#26233D] rounded-3xl overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 p-10 md:p-20 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#E9E9E9]/60 font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Let&apos;s build something great
            </motion.p>

            <h3 className="text-2xl md:text-4xl font-black text-[#E9E9E9] mb-10 max-w-2xl mx-auto leading-snug">
              Have a project in mind? I&apos;d love to hear about it.
            </h3>

            <div className="flex flex-col items-center gap-5">
              <a
                href="mailto:hilaryokello091@gmail.com"
                className="group inline-flex items-center gap-3 bg-primary text-white font-black text-lg md:text-2xl px-8 md:px-12 py-5 rounded-full hover:bg-[#E9E9E9] hover:text-foreground transition-all duration-300 tracking-tight"
              >
                <Mail className="w-6 h-6 md:w-7 md:h-7" />
                hilaryokello091@gmail.com
              </a>
              <a
                href="tel:+254718304785"
                className="inline-flex items-center gap-2 text-[#E9E9E9]/70 hover:text-[#E9E9E9] font-semibold text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                +254 718 304 785
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-col md:flex-row justify-between items-center mt-16 gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <p className="font-black text-lg uppercase tracking-tight">Hilary Okello</p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="https://www.linkedin.com/in/hilary-okello-9b19551b1/"
              target="_blank"
              className="w-11 h-11 rounded-full bg-foreground/8 hover:bg-primary flex items-center justify-center text-foreground hover:text-white transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/HilaryOkello"
              target="_blank"
              className="w-11 h-11 rounded-full bg-foreground/8 hover:bg-primary flex items-center justify-center text-foreground hover:text-white transition-all"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/HilaryOnyango"
              target="_blank"
              className="w-11 h-11 rounded-full bg-foreground/8 hover:bg-primary flex items-center justify-center text-foreground hover:text-white transition-all"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-foreground/50 text-sm font-semibold text-center md:text-right">
            Designed & built by Hilary Okello
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
