'use client';

import * as React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Shield,
  Wrench,
  GraduationCap,
  Sparkles,
  Trophy,
  Gauge,
  TrendingUp,
  Hash,
  Stethoscope,
  Flag,
  Lightbulb,
  Calculator,
  Dumbbell,
  Circle,
  Medal,
  Layers,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  Download,
  Send,
  MapPinned,
  Cpu,
  Network,
  Lock,
  Brain,
} from 'lucide-react';

const leetcodeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.5 21C2.5 21 1 18.5 1 16s1.5-5 4.5-5h11c2 0 3.5 1.5 3.5 3.5S18.5 18 16.5 18H8" />
      <path d="M16 8 8.5 15.5" />
      <path d="M14.5 6.5 16 8l-7.5 7.5" />
      <path d="M16 8l2.5-2.5" />
    </svg>
  )
);
leetcodeIcon.displayName = 'LeetCodeIcon';

const iconMap = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  shield: Shield,
  wrench: Wrench,
  graduation: GraduationCap,
  sparkles: Sparkles,
  trophy: Trophy,
  gauge: Gauge,
  trending: TrendingUp,
  hash: Hash,
  stethoscope: Stethoscope,
  flag: Flag,
  lightbulb: Lightbulb,
  calculator: Calculator,
  volleyball: Dumbbell,
  dumbbell: Dumbbell,
  circle: Circle,
  medal: Medal,
  layers: Layers,
  github: Github,
  linkedin: Linkedin,
  leetcode: leetcodeIcon,
  mail: Mail,
  phone: Phone,
  location: MapPin,
  cpu: Cpu,
  network: Network,
  lock: Lock,
  external: ExternalLink,
  arrowUpRight: ArrowUpRight,
  arrowRight: ArrowRight,
  arrowDown: ArrowDown,
  menu: Menu,
  close: X,
  download: Download,
  send: Send,
  map: MapPinned,
  brain: Brain,
} as const;

export type IconName = keyof typeof iconMap;

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export function Icon({
  name,
  className,
  ...props
}: { name: IconName; className?: string } & React.SVGProps<SVGSVGElement>) {
  const Cmp = (iconMap[name] || iconMap.code) as unknown as IconComponent;
  return <Cmp className={className} {...props} />;
}
