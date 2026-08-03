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
  role: 'AI • Cybersecurity • Full-Stack Developer',
  email: 'nithishbharathwajn@gmail.com',
  phone: '+91 9363958388',
  location: 'Chennai, Tamil Nadu, India',
  resumeUrl: '/NITHISH_BHARATHWAJ_N_FlowCV_Resume.pdf',
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

export const heroBadge = 'Open to Internships • AI • Cybersecurity • Full-Stack';

export const heroHeadline =
  'Building AI-powered software that transforms complex ideas into practical, real-world solutions.';

export const heroSupporting =
  'I design and develop intelligent full-stack applications that combine artificial intelligence, cybersecurity, and modern web technologies. My goal is to build secure, scalable software that solves meaningful real-world problems.';

export const aboutParagraph =
  "I'm a Computer Science (Cyber Security) student who enjoys turning ideas into software that people can actually use. My journey into development began with curiosity about how technology works, but quickly evolved into a passion for building intelligent systems that combine AI, secure engineering, and modern web development. I enjoy solving challenging problems through hackathons, competitive programming, and personal projects. I'm currently focused on strengthening my expertise in AI, cybersecurity, cloud technologies, and scalable full-stack application development.";

export const aboutStats: Stat[] = [
  { value: '513+', label: 'LeetCode Problems' },
  { value: '5+', label: 'Hackathon Finalist' },
  { value: '1731', label: 'Contest Rating' },
  { value: '34', label: 'Contests' },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    icon: 'code',
    skills: ['Python', 'C++', 'JavaScript', 'SQL', 'C', 'Java'],
  },
  {
    category: 'Frontend',
    icon: 'layout',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: 'database',
    skills: ['MySQL'],
  },
  {
    category: 'Cybersecurity',
    icon: 'shield',
    skills: ['Linux', 'Networking', 'CTF'],
  },
  {
    category: 'Tools',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'CI/CD'],
  },
  {
    category: 'Learning',
    icon: 'graduation',
    skills: ['AI', 'Cloud Computing', 'System Design'],
  },
];

export const projects: Project[] = [
  {
    slug: 'voyage-ai',
    title: 'Voyage AI',
    tagline: 'AI-powered intelligent travel planning platform.',
    description:
      'Create personalized itineraries using AI, optimize travel budgets, recommend destinations, and manage complete travel plans.',
    tech: ['React', 'Node', 'Express', 'Tailwind', 'REST APIs'],
    github: 'https://github.com/Nithish-Bharathwaj-N/Voyage-AI',
    featured: true,
    image: '/images/canva-traveler-MAED8krQkFQ.jpg',
  },
  {
    slug: 'queue-cure',
    title: 'Queue Cure',
    tagline: 'AI-powered smart healthcare queue management platform.',
    description:
      'Modernizes hospital queues using AI wait-time prediction, QR check-in, live synchronization, and role-based dashboards.',
    tech: ['React', 'Node', 'Express', 'Socket.IO', 'MySQL', 'Tailwind'],
    github: 'https://github.com/Nithish-Bharathwaj-N/QUEUE-CURE---AI',
    featured: true,
    image: '/images/istockphoto-1193029537-612x612.jpg',
  },
];

export const experiences: Experience[] = [
  {
    role: 'AI Virtual Intern',
    org: 'AICTE × EduSkills × AWS Academy',
    period: 'October 2025 – December 2025',
    bullets: [
      'Completed a 10-week Generative AI Virtual Internship under the AICTE National Internship Program.',
      'Learned AI concepts through AWS Academy.',
      'Strengthened AI, cloud, and software engineering skills.',
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
  { title: 'Python Essentials 1', issuer: 'Cisco', date: '2024' },
  { title: 'Python Essentials 2', issuer: 'Cisco', date: '2024' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco', date: '2024' },
  { title: 'Introduction to Modern AI', issuer: 'Cisco', date: '2024' },
  { title: 'Operating Systems Basics', issuer: 'Cisco', date: '2024' },
  { title: 'GEN-AI Virtual Internship', issuer: 'AICTE × AWS Academy', date: 'Dec 2025' },
];

export const achievements: Achievement[] = [
  { title: 'Finalist in 5+ National-Level Hackathons', icon: 'trophy' },
  { title: '513+ LeetCode Problems', icon: 'code' },
  { title: 'Contest Rating 1731', detail: 'LeetCode competitive', icon: 'gauge' },
  { title: 'Top 11.62%', detail: 'LeetCode contest percentile', icon: 'trending' },
  { title: '34 Contests', detail: 'LeetCode rated contests', icon: 'hash' },
  { title: "Queue Cure '26 Participant", icon: 'stethoscope' },
  { title: 'RootAccess CTF 2026 Participant', icon: 'flag' },
  { title: 'Notion Workshop & Unbound Creativity with Trae', icon: 'lightbulb' },
  { title: 'International Abacus Competition Qualifier', icon: 'calculator' },
  { title: 'District-Level Throwball Player', icon: 'dumbbell' },
  { title: 'Zonal-Level Carrom Player', icon: 'circle' },
  { title: "Chief Minister's Trophy Participant", icon: 'medal' },
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
