export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SkillGroup = {
  category: string;
  icon: string;
  skills: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  liveDemo?: string;
  featured: boolean;
  image?: string;
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  field: string;
  school: string;
  period: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
};

export type Achievement = {
  title: string;
  detail?: string;
  icon: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const profile = {
  name: 'Nithish Bharathwaj N',
  role: 'Full-Stack Developer • 3D Digital Twins • Cybersecurity & AI',
  email: 'nithishbharathwajn@gmail.com',
  phone: '+91 9363958388',
  location: 'Chennai, Tamil Nadu, India',
  resumeUrl: '/NITHISH_BHARATHWAJ_N_Resume_2026-08-15.pdf',
  tagline: 'Designed & Developed by Nithish Bharathwaj N.',
} as const;

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const heroBadge = 'Top 8 Aerothon 2026 Finalist (HAL & IIT Indore) • AI • Cybersecurity • Full-Stack';

export const heroHeadline =
  'Building AI-powered applications, 3D Digital Twins, and secure full-stack software architectures.';

export const heroSupporting =
  'I design and develop high-performance software combining artificial intelligence, 3D WebGL simulations, cybersecurity, and modern full-stack architectures. Top 8 Finalist in Aerothon 2026 (HAL & IIT Indore).';

export const aboutParagraph =
  "I'm a Computer Science (Cyber Security) student at Chennai Institute of Technology who enjoys building software that solves complex real-world problems. My expertise spans AI application engineering, 3D WebGL simulation platforms (SubAERO), cybersecurity threat monitoring, and full-stack software development. Top 8 Finalist in Aerothon 2026 (HAL & IIT Indore), finalist in 5+ national hackathons, and active competitive programmer with 500+ LeetCode problems solved (Rating: 1771).";

export const aboutStats: Stat[] = [
  { value: '500+', label: 'LeetCode Problems' },
  { value: '1771', label: 'Contest Rating' },
  { value: '118 Days', label: 'Coding Streak' },
  { value: '5+', label: 'Hackathon Finalist' },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    icon: 'code',
    skills: ['Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'SQL', 'Java'],
  },
  {
    category: 'Frontend & 3D',
    icon: 'layout',
    skills: ['React 19', 'Next.js', 'Three.js (WebGL)', 'Blender', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend & API',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Socket.IO'],
  },
  {
    category: 'Database & Cloud',
    icon: 'database',
    skills: ['PostgreSQL', 'MySQL', 'Docker', 'AWS Cloud', 'Vercel', 'Vite'],
  },
  {
    category: 'Machine Learning & AI',
    icon: 'brain',
    skills: ['Scikit-Learn', 'Multi-Target Regression', 'Foundation Models', 'LLMs', 'Prompt Engineering'],
  },
  {
    category: 'Cybersecurity',
    icon: 'shield',
    skills: ['Networking', 'Linux Administration', 'CTF', 'Threat Modeling'],
  },
  {
    category: 'Tools & Concepts',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'CI/CD', 'Data Structures & Algorithms', 'Aero-Thermal Physics'],
  },
];

export const projects: Project[] = [
  {
    slug: 'subaero',
    title: 'SubAERO',
    tagline: 'Aerospace Digital Twin & PHM Platform for HAL Tejas turbojet engines.',
    description:
      'High-precision digital twin featuring 3D engine component modeling in Blender, real-time WebGL (Three.js) visualizations, aero-thermal physics calculations, and multi-target ML regression (98.7%–99.9% R² accuracy) for health and RUL prediction.',
    tech: ['React 19', 'TypeScript', 'Three.js', 'Blender', 'Python', 'FastAPI', 'Scikit-Learn', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Nithish-Bharathwaj-N/SubAERO',
    liveDemo: 'https://null-pointers-aerothon-2026.vercel.app/',
    featured: true,
    image: '/images/subaero-preview.jpg',
  },
  {
    slug: 'voyage-ai',
    title: 'Voyage AI',
    tagline: 'AI-powered intelligent travel planning platform.',
    description:
      'Create personalized trip itineraries using LLMs and Prompt Engineering, budget optimization, destination recommendations, and interactive travel management dashboards.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'REST APIs', 'PostgreSQL'],
    github: 'https://github.com/Nithish-Bharathwaj-N/Voyage-AI',
    featured: true,
    image: '/images/canva-traveler-MAED8krQkFQ.jpg',
  },
  {
    slug: 'finsight',
    title: 'FinSight',
    tagline: 'AI-driven financial analytics and banking platform.',
    description:
      'Real-time financial insights, transaction analytics, and modern banking dashboards.',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Nithish-Bharathwaj-N/FinSight',
    liveDemo: 'https://fin-sight-banking.vercel.app',
    featured: true,
  },
  {
    slug: 'sentinelx',
    title: 'SentinelX',
    tagline: 'Autonomous cyber risk intelligence & threat monitoring.',
    description:
      'Real-time attack surface monitoring and threat intelligence assessment platform.',
    tech: ['TypeScript', 'React', 'Node.js', 'Cybersecurity'],
    github: 'https://github.com/Nithish-Bharathwaj-N/SentinelX',
    featured: false,
  },
  {
    slug: 'queue-cure',
    title: 'Queue Cure',
    tagline: 'AI-powered smart healthcare queue management system.',
    description:
      'Digitizes hospital queues with AI wait-time estimation, QR check-in, live token tracking via Socket.IO.',
    tech: ['React', 'Node.js', 'Express', 'Socket.IO', 'MySQL', 'Tailwind'],
    github: 'https://github.com/Nithish-Bharathwaj-N/QUEUE-CURE---AI',
    featured: false,
    image: '/images/istockphoto-1193029537-612x612.jpg',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Generative AI Virtual Intern',
    org: 'AWS Academy × AICTE × EduSkills',
    period: 'October 2025 – December 2025',
    bullets: [
      'Completed an intensive 10-week virtual internship on Generative AI architectures and AWS Cloud infrastructure.',
      'Developed hands-on expertise with Foundation Models, LLMs, Prompt Engineering, and AWS AI services.',
      'Built foundational expertise in designing secure, scalable AI-powered cloud applications.',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Engineering (Cyber Security)',
    school: 'Chennai Institute of Technology',
    period: 'September 2025 – Present',
  },
];

export const certifications: Certification[] = [
  { title: 'AWS Academy Gen-AI Virtual Internship', issuer: 'AICTE × EduSkills', date: 'Dec 2025' },
  { title: 'Cisco Python Essentials 1 & 2', issuer: 'Cisco Networking Academy', date: '2024' },
  { title: 'Cisco Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', date: '2024' },
  { title: 'Cisco Introduction to Modern AI', issuer: 'Cisco Networking Academy', date: '2024' },
  { title: 'Cisco Operating Systems', issuer: 'Cisco Networking Academy', date: '2024' },
];

export const achievements: Achievement[] = [
  { title: 'Top 8 Finalist – Aerothon 2026', detail: 'HAL (Hindustan Aeronautics Limited) & IIT Indore National Hackathon', icon: 'trophy' },
  { title: 'Finalist in 5+ National-Level Hackathons', detail: 'AI, 3D Digital Twins, and Full-Stack Apps', icon: 'medal' },
  { title: '500+ LeetCode Problems Solved', detail: 'Rating: 1771 | 118-Day Coding Streak', icon: 'code' },
  { title: 'International Abacus Competition Qualifier', detail: 'Cleared State-Level Selection Round', icon: 'calculator' },
  { title: 'District-Level Throwball & Zonal Carrom Player', detail: 'CM Trophy participant in Athletics & Cricket', icon: 'dumbbell' },
];

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Nithish-Bharathwaj-N',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nithish-bharathwaj-n-847a00379',
    icon: 'linkedin',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/nithish_cit/',
    icon: 'leetcode',
  },
];
