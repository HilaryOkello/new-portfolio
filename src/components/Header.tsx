"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-6">
          <Link href="/" className="text-primary text-3xl font-bold">
            HILARY OKELLO
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
              01/PROJECTS
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              02/ABOUT
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              03/CONTACT
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#projects" onClick={toggleMenu} className="text-foreground hover:text-primary transition-colors">
              01/PROJECTS
            </Link>
            <Link href="#about" onClick={toggleMenu} className="text-foreground hover:text-primary transition-colors">
              02/ABOUT
            </Link>
            <Link href="#contact" onClick={toggleMenu} className="text-foreground hover:text-primary transition-colors">
              03/CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;