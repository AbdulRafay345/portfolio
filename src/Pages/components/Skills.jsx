import React from 'react';
import { Code2, Server, Database, Smartphone, Palette, GitBranch,Layers } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-[#0a0f1f]">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-4xl font-bold text-white mb-4">
          Skill <span className="text-[#00d4ff]">Stack</span>
        </h2>
        <p className="text-gray-400 mb-12">
          The technologies I use to craft smooth, scalable digital experiences
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="group p-8 bg-[#111627] rounded-2xl border border-transparent hover:border-[#00d4ff] transition">
            <Code2 className="w-10 h-10 mx-auto text-gray-300 group-hover:text-[#00d4ff] transition" />
            <h3 className="text-white font-semibold mt-4">Frontend</h3>
            <p className="text-gray-400 text-sm mt-2">
              React, Tailwind CSS, JavaScript, HTML, CSS
            </p>
          </div>

          <div className="group p-8 bg-[#111627] rounded-2xl border border-transparent hover:border-[#00d4ff] transition">
            <Server className="w-10 h-10 mx-auto text-gray-300 group-hover:text-[#00d4ff] transition" />
            <h3 className="text-white font-semibold mt-4">Backend</h3>
            <p className="text-gray-400 text-sm mt-2">
              Node.js, Express.js, Firebase Auth + APIs
            </p>
          </div>

          <div className="group p-8 bg-[#111627] rounded-2xl border border-transparent hover:border-[#00d4ff] transition">
            <Database className="w-10 h-10 mx-auto text-gray-300 group-hover:text-[#00d4ff] transition" />
            <h3 className="text-white font-semibold mt-4">Databases</h3>
            <p className="text-gray-400 text-sm mt-2">
              MongoDB, Firestore
            </p>
          </div>

          <div className="group p-8 bg-[#111627] rounded-2xl border border-transparent hover:border-[#00d4ff] transition">
            <Smartphone className="w-10 h-10 mx-auto text-gray-300 group-hover:text-[#00d4ff] transition" />
            <h3 className="text-white font-semibold mt-4">Mobile Apps</h3>
            <p className="text-gray-400 text-sm mt-2">
              React Native
            </p>
          </div>

          <div className="group p-8 bg-[#111627] rounded-2xl border border-transparent hover:border-[#00d4ff] transition">
            <Palette className="w-10 h-10 mx-auto text-gray-300 group-hover:text-[#00d4ff] transition" />
            <h3 className="text-white font-semibold mt-4">UI & Design</h3>
            <p className="text-gray-400 text-sm mt-2">
              Figma, Responsive Web Design
            </p>
          </div>

          <div className="group p-8 bg-[#111627] rounded-2xl border border-transparent hover:border-[#00d4ff] transition">
            <GitBranch className="w-10 h-10 mx-auto text-gray-300 group-hover:text-[#00d4ff] transition" />
            <h3 className="text-white font-semibold mt-4">Tools</h3>
            <p className="text-gray-400 text-sm mt-2">
              Git, GitHub, VS Code, Vite
            </p>
          </div>

          <div className="group p-8 bg-[#111627] rounded-2xl border border-transparent hover:border-[#00d4ff] transition">
            <Layers className="w-10 h-10 mx-auto text-gray-300 group-hover:text-[#00d4ff] transition" />
            <h3 className="text-white font-semibold mt-4">Others</h3>
            <p className="text-gray-400 text-sm mt-2">
              C++, C#, SQL Database,etc
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}