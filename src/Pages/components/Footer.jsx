import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="px-8 py-8 border-t border-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-gray-500 mb-4 md:mb-0">
                    © Abdul Rafay. All rights reserved.
                </div>
                <div className="flex space-x-6">
                    <a href="https://github.com/AbdulRafay345" target='blank_' className="text-gray-500 hover:text-[#00d4ff] transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-[#00d4ff] transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}