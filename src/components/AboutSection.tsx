import { ArrowDownRight, FileText, Mail, MapPin, User } from 'lucide-react';
import { ABOUT, PROFILE, SKILL_GROUPS, type Lang } from '../data/portfolioData';
import { MediaPlayerWidget } from './MediaPlayerWidget';

export function AboutSection({ lang }: { lang: Lang }) {
  const es = lang === 'es';
  return (
    <section id="about" className="scroll-mt-24 pt-8 pb-16 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-start">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <h1 className="aero-text-shadow px-1 text-xl font-bold leading-[1.32] text-[#f2fbfd] sm:text-[28px]">
              {ABOUT.headline[lang]}
            </h1>

            <div className="aero-window rounded-2xl">
              <div className="aero-titlebar flex items-center gap-2.5 px-5 py-3">
                <User className="h-3.5 w-3.5" />
                <h2 className="text-sm font-bold">{es ? 'Sobre mí' : 'About me'}</h2>
              </div>
              <div className="p-5 sm:p-6">
                <div className="aero-well rounded-xl p-4 text-[15px] leading-[1.78] sm:p-5">
                  <p>{ABOUT.paragraph[lang]}</p>
                </div>
                <p className="mt-4 rounded-xl border border-[#f5a623]/30 px-4 py-3 text-sm font-semibold">
                  {ABOUT.seeking[lang]}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <a href="#works" className="aero-gel-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm">
                {es ? 'Ver mis proyectos' : 'See my projects'}
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="aero-gel-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                <Mail className="h-4 w-4 text-[#38d9e8]" />
                {es ? 'Contáctame' : 'Contact me'}
              </a>
              {PROFILE.cvUrl[lang] && (
                <a
                  href={PROFILE.cvUrl[lang]}
                  target="_blank"
                  rel="noreferrer"
                  className="aero-gel-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
                >
                  <FileText className="h-4 w-4 text-[#f5a623]" />
                  CV
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="aero-window rounded-2xl p-3">
              <img src="/images/street.jpg" alt="" className="h-60 w-full rounded-xl object-cover sm:h-64" />
              <p className="mt-3 flex items-center gap-1.5 px-1 text-sm font-semibold">
                <MapPin className="h-3.5 w-3.5 text-[#38d9e8]" />
                {es ? 'Lima, Perú' : 'Lima, Peru'}
              </p>
            </div>
            <MediaPlayerWidget lang={lang} />
          </div>
        </div>

        {SKILL_GROUPS.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label.en} className="aero-card rounded-2xl">
                <h3 className="aero-titlebar px-5 py-3 text-sm font-bold">{group.label[lang]}</h3>
                <div className="flex flex-wrap gap-2 p-5">
                  {group.items.map((skill) => (
                    <span key={skill} className="aero-tag rounded-full px-3.5 py-1.5 text-xs font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
