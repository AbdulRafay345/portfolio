import Section from './Section';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The technologies I use across the stack">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-12">
        {skillGroups.map(({ title, icon: Icon, items, span }) => (
          <div key={title} className={`${span} rounded-2xl border border-line bg-ink-card p-6`}>
            <div className="flex items-center gap-2">
              <Icon size={18} strokeWidth={1.5} className="text-fg-3" />
              <h3 className="text-base font-medium">{title}</h3>
            </div>
            <p className="mt-3 text-sm leading-5 text-fg-2">{items.join(', ')}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
