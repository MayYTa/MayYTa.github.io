import { ExternalLink, FolderGit2 } from 'lucide-react';
import { WORKS_DATA, type Lang } from '../data/portfolioData';

const ACCENT = {
  aqua: 'text-[#67f3ff]',
  emerald: 'text-[#6ee7b7]',
};

export function WorksSection({ lang }: { lang: Lang }) {
  const es = lang === 'es';
  return (
    <section id="works" className="scroll-mt-24 border-t border-[#38d9e8]/20 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="aero-text-shadow text-2xl font-bold text-[#f2fbfd] sm:text-3xl">
          {es ? 'Mis proyectos' : 'My projects'}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2">
          {WORKS_DATA.map((work) => (
            <article key={work.id} className="aero-window flex flex-col rounded-2xl p-4 sm:p-5">
              <img
                src={work.image}
                alt={work.imageFit === 'contain' ? (es ? 'Importancia de variables según SHAP' : 'SHAP feature importance') : ''}
                className={`h-56 w-full rounded-xl ${work.imageFit === 'contain' ? 'bg-white object-contain p-1' : 'object-cover'}`}
              />
              <h3 className="mt-4 text-lg font-bold">{work.title[lang]}</h3>
              <p className={`text-sm font-semibold ${ACCENT[work.accent]}`}>{work.subtitle[lang]}</p>
              <p className="mt-2.5 text-[14.5px] leading-relaxed">{work.description[lang]}</p>
              <p className="aero-well mt-4 rounded-xl px-4 py-2.5 text-sm font-bold">{work.metrics[lang]}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                {work.highlights[lang].map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span key={tag} className="aero-tag rounded-full px-3 py-1 text-[11px] font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2.5 border-t border-[#38d9e8]/25 pt-3.5">
                  <a href={work.repoUrl} target="_blank" rel="noreferrer" className="aero-gel-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold">
                    <FolderGit2 className="h-4 w-4 text-[#2dd4a0]" />
                    {es ? 'Código' : 'Source code'}
                  </a>
                  {work.demoUrl && (
                    <a href={work.demoUrl} className="aero-gel-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs">
                      <ExternalLink className="h-4 w-4" />
                      {es ? 'Demo' : 'Demo (in Spanish)'}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
