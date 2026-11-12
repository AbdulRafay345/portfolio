import { Code2, Server, Database, Smartphone, Palette, GitBranch, Layers } from 'lucide-react';

export const skillGroups = [
  { title: 'Frontend', span: 'md:col-span-6', icon: Code2, items: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Backend', span: 'md:col-span-6', icon: Server, items: ['Node.js', 'Express.js', 'Firebase Auth', 'APIs'] },
  { title: 'Databases', span: 'md:col-span-4', icon: Database, items: ['MongoDB', 'Firestore'] },
  { title: 'Mobile apps', span: 'md:col-span-4', icon: Smartphone, items: ['React Native'] },
  { title: 'UI and design', span: 'md:col-span-4', icon: Palette, items: ['Figma', 'Responsive web design'] },
  { title: 'Tools', span: 'md:col-span-6', icon: GitBranch, items: ['Git', 'GitHub', 'VS Code', 'Vite'] },
  { title: 'Other', span: 'md:col-span-6', icon: Layers, items: ['C++', 'C#', 'SQL'] },
];

// Items that are practices rather than named technologies are left out of the count
const notTech = ['APIs', 'Responsive web design'];
export const technologyCount = new Set(
  skillGroups.flatMap((g) => g.items).filter((i) => !notTech.includes(i))
).size;
