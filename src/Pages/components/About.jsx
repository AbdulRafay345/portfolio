import React from 'react';
import { Send, Menu, Github, Wifi, Codesandbox, Code, Smartphone, Server } from 'lucide-react';
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

export default function About() {
    return (
        <section id='about' className="relative px-8 py-24 min-h-screen flex items-center overflow-hidden bg-[#0e1220]">
            {/* Floating Icons */}
            <FloatingIcon icon={Send} className="top-10 right-20" delay={0.5} />
            <FloatingIcon icon={Menu} className="bottom-40 left-20" delay={2.5} />
            <FloatingIcon icon={Github} className="top-1/3 left-1/3" delay={1.2} />
            <FloatingIcon icon={Wifi} className="bottom-1/4 right-32" delay={1.8} />
            <FloatingIcon icon={Codesandbox} className="top-1/2 right-10" delay={3} />

            {/* Gradient Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff28] to-[#7b2ff728] blur-3xl pointer-events-none" />

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:30px_30px]" />

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="animate-fade-in-up">
                    <h2 className="text-5xl font-bold mb-8">
                        About <span className="gradient-text">me</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                        I am a Software Engineering student skilled in the MERN Stack, creating modern websites and mobile apps.
                        I love learning, building, and turning ideas into real digital products.
                    </p>

                    {/* Statistics */}
                    <div className="grid grid-cols-3 gap-8 mb-10">
                        <div>
                            <div className="text-4xl font-bold mb-2">10 <span className="text-blue-500">+</span></div>
                            <div className="text-gray-400 text-base font-medium">Projects</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">10 <span className="text-blue-500">+</span></div>
                            <div className="text-gray-400 text-base font-medium">Technologies</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">1 <span className="text-blue-500">+</span></div>
                            <div className="text-gray-400 text-base font-medium">Years Experience</div>
                        </div>
                    </div>
                </div>

                <div className="animate-slide-in-right relative">
                    <div className="space-y-7">
                        <div className="flex items-center gap-5 p-6 bg-[#1a1f2f]/70 backdrop-blur-md rounded-2xl border border-[#00d4ff40] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff] to-[#7b2ff7] rounded-xl flex items-center justify-center shadow-md">
                                <Code className="w-7 h-7" />
                            </div>
                            <span className="text-xl font-semibold">Website Development</span>
                        </div>

                        <div className="flex items-center gap-5 p-6 bg-[#1a1f2f]/70 backdrop-blur-md rounded-2xl border border-[#00d4ff40] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff] to-[#7b2ff7] rounded-xl flex items-center justify-center shadow-md">
                                <Smartphone className="w-7 h-7" />
                            </div>
                            <span className="text-xl font-semibold">App Development</span>
                        </div>

                        <div className="flex items-center gap-5 p-6 bg-[#1a1f2f]/70 backdrop-blur-md rounded-2xl border border-[#00d4ff40] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff] to-[#7b2ff7] rounded-xl flex items-center justify-center shadow-md">
                                <Server className="w-7 h-7" />
                            </div>
                            <span className="text-xl font-semibold">Website Hosting</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}