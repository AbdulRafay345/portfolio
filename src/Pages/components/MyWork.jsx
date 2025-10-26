import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Menu, Send } from 'lucide-react';
import bakery from '../assets/bakery.png'
import next from '../assets/next.png'
import intern from '../assets/intern.png'
import event from "../assets/event.jpg"
const projects = [
    {
        id: 1,
        title: "Nova-Bloom",
        description: "A bakery management system for a single vendor, using react and firebase",
        tech: ["React", "Bootstrap", "Firebase"],
        image: bakery,
        link: "https://bakery-manager-12.web.app/",
        github: "https://github.com/AbdulRafay345/restaurant-ordering-app"
    },
    {
        id: 2,
        title: "Next-Arm",
        description: "NextARM Web delivers cutting-edge web development, mobile apps, and cloud solutions to transform your business digitally",
        tech: ["React", "Tailwind", "Emailjs"],
        image: next,
        link: "https://next-arm-1.vercel.app/",
        github: "https://github.com/AbdulRafay345/next-arm"
    },
    {
        id: 3,
        title: "Internship-Platform",
        description: "InternHub - A smart platform connecting students to internships, career roadmaps, and admin-managed opportunities across all fields.",
        tech: ["React", "Tailwind", "Emailjs", "MongoDB"],
        image: intern,
        link: "#",
        github: "https://github.com/AbdulRafay345/internshipPlatform"
    },
    {
        id: 6,
        title: "Event Planner",
        description: "An event planner app with MongoDB-based authentication that allows users to securely log in and efficiently create, manage, and track all their personal or organizational events.",
        tech: ["React Native", "Node.js", "MongoDB"],
        image: event,
        link: "https://www.loom.com/share/2db3c541033747f787667d6abc3b94a1",
        github: "https://github.com/abdullahrajpot/zenbud-main.git",
        // gradient: "from-orange-500 via-red-500 to-pink-500"
    },
];

// Floating icon component
const FloatingIcon = ({ icon: Icon, className, delay }) => {
    return (
        <div
            className={`absolute ${className} opacity-10`}
            style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${delay}s`
            }}
        >
            <Icon size={48} className="text-gray-400" />
        </div>
    );
};

export default function MyWork() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getVisibleCount = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1280) return 4; // xl screens
            if (window.innerWidth >= 1024) return 3; // lg screens
            if (window.innerWidth >= 768) return 2;  // md screens
            return 1; // sm screens
        }
        return 4;
    };

    const [visibleCount, setVisibleCount] = useState(getVisibleCount());

    React.useEffect(() => {
        const handleResize = () => {
            setVisibleCount(getVisibleCount());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
            visible.push(projects[(currentIndex + i) % projects.length]);
        }
        return visible;
    };

    const visibleProjects = getVisibleProjects();

    return (
        <div className="h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
            <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }

      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }

      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out;
      }

      .gradient-text {
        background: linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% auto;
        animation: shimmer 3s linear infinite;
      }

      .card-3d {
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
      }

      .card-hover:hover {
        transform: translateY(-8px);
      }

      .tech-badge {
        backdrop-filter: blur(10px);
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.15);
      }

      .project-image {
        transition: transform 0.3s ease;
      }

      .card-hover:hover .project-image {
        transform: scale(1.05);
      }
    `}</style>

            <section id='mywork' className="relative px-6 md:px-8 h-full flex flex-col justify-center overflow-hidden">
                {/* Floating Icons */}
                <FloatingIcon icon={Menu} className="top-20 left-10" delay={1} />
                <FloatingIcon icon={Send} className="bottom-24 right-10" delay={2} />

                <div className="max-w-7xl mx-auto w-full flex flex-col justify-center">
                    {/* Title */}
                    <h2 className="text-3xl md:text-6xl lg:text-6xl font-bold mb-3 animate-fade-in-up text-center">
                        My Recent <span className="gradient-text">Works</span>
                    </h2>
                    <p className="text-gray-400 text-center mb-6 md:mb-10">
                        Explore my latest projects and innovations
                    </p>

                    {/* Carousel */}
                    <div className="relative">
                        {/* Prev Button */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-md rounded-full flex items-center justify-center transition border border-gray-700"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-md rounded-full flex items-center justify-center transition border border-gray-700"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {visibleProjects.map((project) => (
                                <div key={project.id} className="card-3d card-hover bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 h-[380px] flex flex-col">

                                    {/* Image */}
                                    <div className="project-image w-full h-[150px] relative overflow-hidden bg-gray-900">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 flex flex-col justify-between flex-grow">

                                        {/* Title + Description */}
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                                            <p className="text-gray-400 text-xs mb-3 line-clamp-2 min-h-[32px]">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tech Tags */}
                                        <div className="max-h-[60px] overflow-hidden mb-3">
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.tech.map((tech, idx) => (
                                                    <span key={idx} className="tech-badge px-2 py-1 rounded-full text-[10px] font-medium text-gray-300 whitespace-nowrap">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex gap-2 mt-auto">
                                            <a href={project.link} className="flex-1 border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 px-3 py-1.5 rounded-md text-xs flex items-center justify-center gap-1 transition">
                                                <ExternalLink size={14} /> Live
                                            </a>
                                            <a href={project.github} className="flex-1 border border-gray-500/30 bg-gray-700/30 hover:bg-gray-700/50 px-3 py-1.5 rounded-md text-xs flex items-center justify-center gap-1 transition">
                                                <Github size={14} /> Code
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}