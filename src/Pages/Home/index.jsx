import React, { useState } from 'react';
import { Codesandbox, Menu, Send, Wifi, } from 'lucide-react';
import img from '../assets/pr.png';
import MyWork from '../components/MyWork';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import AboutSection from '../components/About';

const FloatingIcon = ({ icon: Icon, className = '', delay = 0 }) => (
  <div
    className={`absolute opacity-20 ${className}`}
    style={{
      animation: `float 6s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    <Icon size={20} strokeWidth={1.5} />
  </div>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#1a1d2e] text-white min-h-screen overflow-x-hidden relative">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
        .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }
        .gradient-text {
          background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .neon-border { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
        .card-3d { transform-style: preserve-3d; transition: transform 0.3s ease; }
        .card-3d:hover { transform: translateY(-10px) rotateX(5deg); }
        html { scroll-padding-top: 80px; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 sm:px-8 py-3 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="text-xl font-bold">
          Abdul<span className="text-[#00d4ff]">Rafay</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm">
          {['home', 'about', 'skills', 'mywork', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-[#00d4ff] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(`#${id}`)
                  .scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#00d4ff]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1a1d2e]/95 backdrop-blur-md flex flex-col items-center py-8 space-y-6 md:hidden z-40">
            {['home', 'about', 'skills', 'my work', 'contact'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-lg hover:text-[#00d4ff] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  document
                    .querySelector(`#${id}`)
                    .scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative px-4 sm:px-8 pt-20 sm:pt-24 min-h-screen flex items-center overflow-hidden"
      >

        {/* Floating Icons */}
        <FloatingIcon icon={Menu} className="top-10 left-5 sm:left-10" delay={0} />
        <FloatingIcon icon={Wifi} className="top-40 right-10 sm:right-32" delay={1} />
        <FloatingIcon
          icon={Codesandbox}
          className="bottom-20 left-20 sm:left-40"
          delay={2}
        />
        <FloatingIcon icon={Send} className="top-60 left-32 sm:left-60" delay={1.5} />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Abdul Rafay
              <br />
              <span className="gradient-text text-2xl sm:text-3xl md:text-4xl">
                Software Engineer
              </span>
              <span className="text-pink-500 text-2xl sm:text-3xl md:text-4xl">.</span>
            </h1>
            <p className="max-w-xl text-gray-300 mb-6 text-sm sm:text-base">
              I'm Abdul Rafay — I build scalable websites and apps with modern
              technologies and clean, user-focused design.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#contact`)
                    .scrollIntoView({ behavior: 'smooth' })
                }
                }
                className="bg-[#00d4ff] text-[#1a1d2e] px-6 py-3 rounded-full font-semibold hover:bg-[#00b8e6] transition-all neon-border">
                Got Project?
              </a>
              <a href='/resume.pdf' target="_blank"   rel="noopener noreferrer" className="px-6 py-3 rounded-full font-semibold hover:bg-[#00b8e6] transition-all neon-border">
                Resume
              </a>
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <div className="h-px w-16 bg-gray-600"></div>
              <span className="text-sm text-gray-400">Scroll down</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right relative">
            <div className="relative animate-pulse-slow w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-[#00d4ff]/40 ring-offset-4 ring-offset-[#1a1d2e]">
              <img
                src={img}
                alt="Abdul Rafay"
                className="object-cover w-full h-full object-top translate-y-6 md:translate-y-0 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <AboutSection />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}
