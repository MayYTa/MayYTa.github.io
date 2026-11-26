import { useState } from 'react';
import { Check, Copy, FolderGit2, Link2, Mail } from 'lucide-react';
import { PROFILE, type Lang } from '../data/portfolioData';

const BUTTON = 'aero-gel-secondary inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold';

export function ContactSection({ lang }: { lang: Lang }) {
  const es = lang === 'es';
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // The address stays visible to copy by hand
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-[#38d9e8]/20 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="aero-window rounded-2xl p-6 sm:p-8">
          <h2 className="aero-text-shadow text-2xl font-bold text-[#f2fbfd] sm:text-3xl">
            {es ? 'Contacto' : 'Get in touch'}
          </h2>
          <p className="mt-4 break-all text-[15px] font-bold">{PROFILE.email}</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a href={`mailto:${PROFILE.email}`} className={BUTTON}>
              <Mail className="h-4 w-4 text-[#fbbf24]" />
              {es ? 'Escribirme' : 'Email me'}
            </a>
            <button type="button" onClick={copyEmail} className={BUTTON}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? (es ? 'Copiado' : 'Copied') : es ? 'Copiar correo' : 'Copy email'}
            </button>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className={BUTTON}>
              <FolderGit2 className="h-4 w-4 text-[#38d9e8]" />
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className={BUTTON}>
              <Link2 className="h-4 w-4 text-[#2dd4a0]" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
