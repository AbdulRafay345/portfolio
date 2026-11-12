import { Code, Smartphone, Server } from 'lucide-react';
import Section from './Section';
import { projects } from '../data/projects';
import { technologyCount } from '../data/skills';

const services = [
  { icon: Code, label: 'Website development' },
  { icon: Smartphone, label: 'App development' },
  { icon: Server, label: 'Website hosting' },
];

const stats = [
  { value: projects.length, label: 'Projects' },
  { value: technologyCount, label: 'Technologies' },
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="max-w-xl text-lg leading-7 text-fg-2">
            I am a software engineer skilled in the MERN stack, creating websites and mobile apps. I like
            learning, building and turning ideas into working products.
          </p>
          <dl className="mt-12 flex gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="tnum text-[32px] leading-none font-medium">{s.value}</dd>
                <dt className="mt-2 text-sm text-fg-3">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <ul className="self-start rounded-2xl border border-line bg-ink-card">
          {services.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={`flex h-16 items-center gap-3 px-6 ${i > 0 ? 'border-t border-line' : ''}`}
            >
              <Icon size={18} strokeWidth={1.5} className="text-fg-3" />
              <span className="text-base">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
