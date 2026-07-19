import { Navbar } from '@/components/portfolio/navbar';
import { ScrollProgress } from '@/components/portfolio/scroll-progress';
import { Hero } from '@/components/portfolio/hero';
import { About } from '@/components/portfolio/about';
import { Skills } from '@/components/portfolio/skills';
import { Projects } from '@/components/portfolio/projects';
import { Experience, Certifications } from '@/components/portfolio/experience';
import { Achievements } from '@/components/portfolio/achievements';
import { Contact } from '@/components/portfolio/contact';
import { Footer } from '@/components/portfolio/footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
