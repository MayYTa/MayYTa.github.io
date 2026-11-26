import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar, type SectionId } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { WorksSection } from './components/WorksSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { CERTIFICATIONS, PROFILE, type Lang } from './data/portfolioData';

const SECTIONS: SectionId[] = CERTIFICATIONS.length
  ? ['about', 'works', 'certifications', 'contact']
  : ['about', 'works', 'contact'];

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [fontLights, setFontLights] = useState(true);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id as SectionId);
      },
      { rootMargin: '-25% 0px -55% 0px' }
    );
    SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative min-h-screen text-[#d7eef2] ${fontLights ? 'font-illuminated' : 'font-calm'}`}>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-[#2dd4a0] opacity-14 blur-[145px]" />
        <div className="absolute top-1/5 -right-24 h-[30rem] w-[30rem] rounded-full bg-[#38d9e8] opacity-16 blur-[155px]" />
        <div className="absolute -bottom-20 right-16 h-[20rem] w-[20rem] rounded-full bg-[#f5a623] opacity-12 blur-[150px]" />
      </div>

      <Navbar
        lang={lang}
        sections={SECTIONS}
        activeSection={activeSection}
        fontLights={fontLights}
        onToggleFontLights={() => setFontLights((prev) => !prev)}
        onToggleLang={() => setLang((prev) => (prev === 'en' ? 'es' : 'en'))}
      />

      <main className="relative z-10">
        <AboutSection lang={lang} />
        <WorksSection lang={lang} />
        <CertificationsSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <footer className="relative z-10 px-4 pb-6 pt-4 sm:px-6 lg:px-8">
        <div className="aero-dock-bar mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl px-5 py-3.5 text-xs">
          <span className="font-semibold text-[#f2fbfd]">{PROFILE.name}</span>
          <a href="#about" className="aero-nav-btn inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-semibold">
            {lang === 'en' ? 'Back to top' : 'Volver arriba'}
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
