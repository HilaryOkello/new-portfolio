import Image from 'next/image';
import Link from 'next/link';

const coreSkills = [
  'Go', 'JavaScript', 'PHP', 'React', 'Gin (Go)', 'Ruby on Rails', 
  'Tailwind CSS', 'Yii2', 'Docker', 'GitHub Actions', 'MySQL', 'PostgreSQL',
  'Object-oriented programming', 'API design', 'Authentication & authorization',
  'Relational databases', 'ORM (GORM)', 'Responsive design', 'Accessibility',
  'Mobile-friendly development', 'Code reviews', 'Miro', 'Jira'
];

const softSkills = [
  'Effective communication',
  'Teamwork',
  'Adaptability & continuous learning',
  'Creativity',
  'Analytical skills',
];

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">ABOUT</h2>
        <div className="w-1/3 h-px bg-foreground"></div>
        <p className="text-3xl md:text-5xl font-bold">02/03</p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-16">
        <div className="md:w-1/2">
          <p className="text-lg md:text-xl text-foreground/80 mb-6">
            I&apos;m a certified Full Stack Software Developer with over 2 years of experience in web development. My expertise lies in building secure, scalable applications, from backend logic and API design to creating intuitive user interfaces.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-6">
            Currently, I&apos;m an Apprentice Software Developer at Zone 01 Kisumu, where I&apos;m honing my skills in a professional environment and contributing to real-world software engineering projects.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            I&apos;m passionate about continuous learning, teamwork, and using my creativity to solve complex problems. I&apos;m always eager to connect with fellow developers and work on impactful projects.
          </p>
          <Link href="https://docs.google.com/document/d/1U6QceM3dcIGcV7aj5lTVF_g7EBbtYIccsYzloDlK-cc/edit?usp=sharing" target="_blank" className="bg-foreground text-background px-10 py-4 font-bold rounded-md hover:bg-primary hover:text-foreground transition-colors">
            MY CV
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/about.jpg"
            alt="Hilary Okello"
            width={600}
            height={700}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="mt-24">
        <div className="flex items-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold">CORE SKILLS</h3>
          <div className="w-1/4 h-px bg-foreground/50 ml-8"></div>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
          {coreSkills.map((skill) => (
            <div key={skill} className="bg-primary/10 text-primary font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24">
        <div className="flex items-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold">SOFT SKILLS</h3>
          <div className="w-1/4 h-px bg-foreground/50 ml-8"></div>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
          {softSkills.map((skill) => (
            <div key={skill} className="bg-primary/10 text-primary font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;