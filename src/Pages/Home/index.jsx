import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import portrait from '../assets/portrait.webp';
import logo from '../assets/logo.png';
import MyWork from '../components/MyWork';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import AboutSection from '../components/About';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Projects' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-fg">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-line bg-ink px-6 md:px-8">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between">
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-[17px] leading-none font-medium tracking-[-0.01em] transition-opacity hover:opacity-90"
          >
            <img
              src={logo}
              alt="Abdul Rafay logo"
              className="h-[22px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span>Abdul Rafay</span>
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            {links.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="text-fg-2 transition-colors duration-150 hover:text-fg">
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex h-9 items-center rounded-lg border border-line bg-ink-raised px-4 text-fg transition-colors duration-150 hover:border-line-strong"
            >
              Contact
            </a>
          </div>

          <button
            className="text-fg-2 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {menuOpen && (
          <div className="-mx-6 flex flex-col border-t border-line bg-ink px-6 py-4 md:hidden">
            {[...links, { id: 'contact', label: 'Contact' }].map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="flex h-11 items-center text-base text-fg-2 transition-colors duration-150 hover:text-fg"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="px-6 pt-16 md:px-8">
        <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-[1200px] items-center gap-12 py-16 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <p className="rise font-mono text-sm text-fg-3">Software Engineer</p>
            <h1 className="rise rise-1 mt-4 text-[44px] leading-[1.05] font-medium tracking-[-0.03em] md:text-[64px] md:leading-[1.02]">
              Abdul Rafay
            </h1>
            <p className="rise rise-2 mt-6 max-w-xl text-lg leading-7 text-fg-2">
              I build websites and mobile apps.
            </p>
            <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-lg bg-accent px-6 text-base font-medium text-ink-deep transition-colors duration-150 hover:bg-accent-hover active:scale-[0.98]"
              >
                Start a project
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-lg border border-line bg-ink-raised px-6 text-base transition-colors duration-150 hover:border-line-strong active:scale-[0.98]"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="rise rise-2 relative mx-auto flex h-[420px] w-full max-w-[440px] items-end justify-center overflow-hidden rounded-[20px] border border-line bg-ink-card md:h-[560px] md:max-w-none">
            <img
              src={portrait}
              alt="Abdul Rafay"
              width="493"
              height="957"
              fetchPriority="high"
              className="h-[96%] w-auto max-w-none object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      <AboutSection />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}
