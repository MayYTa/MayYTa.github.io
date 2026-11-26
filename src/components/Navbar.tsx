import { useEffect, useState } from 'react';
import { Languages, Lightbulb, Menu, X } from 'lucide-react';
import { ABOUT, PROFILE, type Lang, type Text } from '../data/portfolioData';

export type SectionId = 'about' | 'works' | 'certifications' | 'contact';

const LABELS: Record<SectionId, Text> = {
  about: { en: 'About me', es: 'Sobre mí' },
  works: { en: 'Projects', es: 'Proyectos' },
  certifications: { en: 'Certifications', es: 'Certificados' },
  contact: { en: 'Contact', es: 'Contacto' },
};

interface Props {
  lang: Lang;
  sections: SectionId[];
  activeSection: SectionId;
  fontLights: boolean;
  onToggleFontLights: () => void;
  onToggleLang: () => void;
}

const limaTime = () =>
  new Intl.DateTimeFormat('en-GB', { timeZone: 'America/Lima', hour: '2-digit', minute: '2-digit' }).format(new Date());

export function Navbar({ lang, sections, activeSection, fontLights, onToggleFontLights, onToggleLang }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState(limaTime);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(limaTime()), 15000);
    return () => window.clearInterval(timer);
  }, []);

  const links = sections.map((id) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setMobileOpen(false)}
      className={`rounded-xl px-4 py-1.5 text-[13px] font-semibold text-[#f2fbfd] ${
        activeSection === id ? 'aero-nav-btn-active' : 'aero-nav-btn'
      }`}
    >
      {LABELS[id][lang]}
    </a>
  ));

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Primary" className="aero-dock-bar flex items-center justify-between gap-2 rounded-2xl px-3.5 py-2.5 sm:px-5">
          <a href="#about" className="flex min-w-0 items-center gap-3">
            <span className="aero-sphere-play hidden h-9 w-9 shrink-0 items-center justify-center rounded-full sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e6fffa]" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-bold text-[#f2fbfd]">{PROFILE.name}</span>
              <span className="text-[11px] text-[#a7d8e2] md:hidden lg:block">{ABOUT.role[lang]}</span>
            </span>
          </a>

          <div className="hidden items-center gap-2 md:flex">{links}</div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="aero-well hidden rounded-xl px-3 py-1.5 text-xs xl:inline">
              Lima <span className="font-semibold text-[#fbbf24]">{time}</span>
            </span>
            <button
              type="button"
              onClick={onToggleLang}
              aria-label={lang === 'en' ? 'Ver en español' : 'View in English'}
              className="aero-nav-btn flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold"
            >
              <Languages className="h-3.5 w-3.5" />
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              type="button"
              onClick={onToggleFontLights}
              aria-pressed={fontLights}
              aria-label="Text glow"
              className={`cursor-pointer rounded-xl p-2 ${fontLights ? 'aero-nav-btn-active' : 'aero-nav-btn'}`}
            >
              <Lightbulb className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label="Menu"
              className="aero-nav-btn rounded-xl p-2 md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        {mobileOpen && <div className="aero-window mt-2 flex flex-col gap-2 rounded-2xl p-3 md:hidden">{links}</div>}
      </div>
    </header>
  );
}
