// Shared section frame: one width, one rhythm, hairline between sections
export default function Section({ id, title, intro, children, first = false, split = false }) {
  return (
    <section id={id} className={`${first ? '' : 'border-t border-line'} px-6 py-16 md:px-8 md:py-24`}>
      <div className={`mx-auto max-w-[1200px] ${split ? 'grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16' : ''}`}>
        <header className={`max-w-xl ${split ? '' : 'mb-12'}`}>
          <h2 className="text-[32px] leading-[1.15] font-medium tracking-[-0.02em] md:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-base leading-6 text-fg-2">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
