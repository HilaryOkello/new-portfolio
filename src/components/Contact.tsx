import { Linkedin, Github, Twitter, Phone } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">REACH<br/>OUT</h2>
        <div className="w-1/3 h-px bg-foreground"></div>
        <p className="text-3xl md:text-5xl font-bold">03/03</p>
      </div>
      <div className="bg-foreground text-background p-8 md:p-24 rounded-lg text-center">
        <h3 className="text-2xl md:text-4xl mb-6">For any collaborative projects or inquiries, feel free to reach out:</h3>
        <a href="mailto:hilaryokello091@gmail.com" className="text-2xl md:text-6xl font-bold hover:underline break-all">
          HILARYOKELLO091@GMAIL.COM
        </a>
        <div className="flex items-center justify-center mt-6">
          <Phone className="w-6 h-6 md:w-8 md:h-8 mr-4" />
          <a href="tel:+254718304785" className="text-xl md:text-3xl font-bold hover:underline">
            +254 718 304 785
          </a>
        </div>
      </div>
      <footer className="flex flex-col md:flex-row justify-between items-center mt-16 text-center md:text-left">
        <p className="font-bold text-lg mb-4 md:mb-0">HILARY OKELLO</p>
        <div className="flex space-x-8 my-4 md:my-0">
          <Link href="https://www.linkedin.com/in/hilary-okello-9b19551b1/" target="_blank" className="text-primary hover:text-foreground transition-colors">
            <Linkedin className="w-8 h-8 md:w-10 md:h-10" />
          </Link>
          <Link href="https://github.com/HilaryOkello" target="_blank" className="text-primary hover:text-foreground transition-colors">
            <Github className="w-8 h-8 md:w-10 md:h-10" />
          </Link>
          <Link href="https://x.com/HilaryOnyango" target="_blank" className="text-primary hover:text-foreground transition-colors">
            <Twitter className="w-8 h-8 md:w-10 md:h-10" />
          </Link>
        </div>
        <p className="font-bold text-lg text-right">Design & Development<br/>by Hilary Okello</p>
      </footer>
    </section>
  );
};

export default Contact;