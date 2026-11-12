import { ExternalLink, Github, Play, Download } from 'lucide-react';
import Section from './Section';
import { projects } from '../data/projects';

// The first action label follows where the link goes
function primaryAction(url) {
  if (url.includes('loom.com')) return { label: 'Demo video', Icon: Play };
  if (url.includes('github.com')) return { label: 'Release', Icon: Download };
  return { label: 'Live site', Icon: ExternalLink };
}

const actionClass =
  'inline-flex h-9 items-center gap-2 rounded-lg border border-line bg-ink-raised px-3 text-sm text-fg transition-colors duration-150 hover:border-line-strong hover:bg-[#222735]';

export default function MyWork() {
  return (
    <Section id="work" title="Projects" intro="Web, mobile and desktop projects">
      <ol className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          const hasLive = p.link && p.link !== '#';
          const { label, Icon } = hasLive ? primaryAction(p.link) : {};
          return (
            <li key={p.id} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-card">
              <div className="relative aspect-2/1 overflow-hidden bg-ink-deep">
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full ${p.fit === 'contain' ? 'object-contain' : 'object-cover object-top'}`}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline gap-3">
                  <span className="tnum font-mono text-xs text-fg-3">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-medium">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-5 text-fg-2">{p.description}</p>
                <p className="mt-4 font-mono text-xs leading-5 text-fg-3">{p.tech.join(' · ')}</p>
                <div className="mt-auto flex gap-2 pt-6">
                  {hasLive && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className={actionClass}>
                      <Icon size={16} strokeWidth={1.5} className="text-fg-3" /> {label}
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={actionClass}>
                    <Github size={16} strokeWidth={1.5} className="text-fg-3" /> Code
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
