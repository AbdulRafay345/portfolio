import bakery from '../assets/bakery.webp';
import next from '../assets/next.webp';
import intern from '../assets/intern.webp';
import event from '../assets/event.webp';
import learn from '../assets/learn.webp';
import founder from '../assets/founder.webp';
import puzzle from '../assets/puzzle.webp';
import stock_flow from '../assets/stock_flow.webp';

// link: '#' means no live link yet, the card hides that action
export const projects = [
  {
    id: 1,
    title: 'Nova-Bloom',
    description: 'Food ordering web app with menu browsing and cart management for customers, and an admin dashboard for orders and the menu',
    tech: ['React', 'Firebase', 'Ant Design', 'Bootstrap', 'Sass', 'React Router'],
    image: bakery,
    link: 'https://bakery-manager-12.web.app/',
    github: 'https://github.com/AbdulRafay345/nova-bloom',
  },
  {
    id: 2,
    title: 'Founder Pilot',
    description: 'Startup operations assistant and daily task manager for founders',
    tech: ['Next.js', 'TypeScript', 'React', 'Groq API', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    image: founder,
    link: 'https://founder-pilot-theta.vercel.app/',
    github: 'https://github.com/AbdulRafay345/FounderPilot',
  },
  {
    id: 3,
    title: 'Internship-Platform',
    description: 'InternHub connects students to internships, career roadmaps and admin-managed opportunities across all fields',
    tech: ['React', 'Tailwind', 'Emailjs', 'MongoDB'],
    image: intern,
    link: '#',
    github: 'https://github.com/abdullahbutt09/internship-platform',
  },
  {
    id: 4,
    title: 'Learnexa',
    description: 'Creates personalized quizzes and timetables from your study inputs',
    tech: ['React', 'Tailwind', 'Firebase', 'GROQ API', 'Express'],
    image: learn,
    link: '#',
    github: 'https://github.com/AbdulRafay345/Lernexa',
  },
  {
    id: 5,
    title: 'Stock Flow',
    description: 'Inventory management desktop app that uses self-balancing AVL trees for stock tracking and A* pathfinding for warehouse routes',
    tech: ['Python', 'Tkinter', 'AVL Tree', 'A* Algorithm', 'Nearest-Neighbor Heuristic'],
    image: stock_flow,
    link: 'https://github.com/AbdulRafay345/StockFlow/releases/tag/v1.0.0',
    github: 'https://github.com/AbdulRafay345/StockFlow',
  },
  {
    id: 6,
    title: 'Tile Rush',
    description: 'Interactive 15-puzzle solver and visualiser with manual play, AI search algorithms and side-by-side performance comparison',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    image: puzzle,
    link: 'https://www.loom.com/share/2db3c541033747f787667d6abc3b94a1',
    github: 'https://github.com/AbdulRafay345/EventManagment-APP',
  },
  {
    id: 7,
    title: 'Event Planner',
    description: 'Event planner app with MongoDB-based authentication to log in, then create, manage and track personal or organizational events',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    image: event,
    fit: 'contain',
    link: 'https://www.loom.com/share/2db3c541033747f787667d6abc3b94a1',
    github: 'https://github.com/AbdulRafay345/EventManagment-APP',
  },

];
