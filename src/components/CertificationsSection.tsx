import { CERTIFICATIONS, type Lang } from '../data/portfolioData';

export function CertificationsSection({ lang }: { lang: Lang }) {
  if (CERTIFICATIONS.length === 0) return null;
  return (
    <section id="certifications" className="scroll-mt-24 border-t border-[#38d9e8]/20 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="aero-text-shadow text-2xl font-bold text-[#f2fbfd] sm:text-3xl">
          {lang === 'es' ? 'Certificados' : 'Certifications'}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <a key={cert.title} href={cert.url} target="_blank" rel="noreferrer" className="aero-card aero-card-interactive rounded-2xl p-5">
              <h3 className="text-lg font-bold">{cert.title}</h3>
              <p className="mt-1 text-sm">{cert.issuer} · {cert.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
