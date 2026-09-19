import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Users,
  FolderGit2,
  MessageSquareText,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
  Globe,
  Video,
  FileText,
  UserCheck,
  Compass,
  Infinity as InfinityIcon,
  BookOpenCheck,
  ClipboardCheck,
  Rocket,
  Linkedin,
  Instagram,
} from "lucide-react";

export const siteConfig = {
  name: "SDLC Tech Academy",
  shortName: "SDLC",
  tagline: "Learn from Real-Time Industry Experts",
  altTagline: "Cloud & DevOps Training for Future-Ready Professionals",
  description:
    "SDLC Tech Academy offers 100% live online training in AWS, Azure, DevOps, DevSecOps and AIOps, led by real-time industry experts with small batch sizes, real projects and dedicated interview preparation.",
  location: "Hyderabad, India",
  businessStatus: "MSME Registered",
  trainingMode: "100% Online Live Classes",
  batchSize: "Maximum 15 Students per Batch",
  phone: "8008258425",
  phoneHref: "tel:+918008258425",
  whatsapp: "9966107782",
  whatsappHref: "https://wa.me/919966107782",
  email: "info@sdlctechacademy.com",
  url: "https://www.sdlctechacademy.com",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Courses", href: "#courses" },
  { label: "Journey", href: "#journey" },
  { label: "Technologies", href: "#technologies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights = [
  "100% Live Online Classes",
  "Real-Time Industry Mentors",
  "Interview Preparation Support",
  "Real-Time Projects",
  "Small Batch Size (Max 15)",
  "Career Guidance",
];

export type WhyChooseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Users,
    title: "Real-Time Experts",
    description:
      "Learn directly from professionals working in leading organizations.",
  },
  {
    icon: UserCheck,
    title: "Small Batches",
    description: "Maximum 15 students per batch for personalized attention.",
  },
  {
    icon: FolderGit2,
    title: "Real Projects",
    description: "Work on practical industry use cases and projects.",
  },
  {
    icon: MessageSquareText,
    title: "Interview Preparation",
    description: "Mock interviews, resume guidance, and placement preparation.",
  },
  {
    icon: TrendingUp,
    title: "Trending Technologies",
    description: "Courses designed around current market demand.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Learning",
    description:
      "Learn how AI tools are transforming Cloud and DevOps workflows.",
  },
];

export type Course = {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  level: string;
  tag?: string;
};

export const courses: Course[] = [
  {
    icon: Cloud,
    title: "AWS Cloud",
    description:
      "Learn AWS fundamentals to advanced services with practical labs.",
    duration: "10-12 Weeks",
    level: "Beginner to Advanced",
    tag: "Most Popular",
  },
  {
    icon: Cloud,
    title: "Azure Cloud",
    description: "Master Microsoft Azure architecture and services.",
    duration: "10-12 Weeks",
    level: "Beginner to Advanced",
  },
  {
    icon: Layers,
    title: "AWS DevOps",
    description: "CI/CD, Docker, Kubernetes, Terraform, Jenkins, Monitoring.",
    duration: "12-14 Weeks",
    level: "Intermediate to Advanced",
    tag: "Trending",
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps",
    description: "Integrate security into modern DevOps pipelines.",
    duration: "10-12 Weeks",
    level: "Intermediate to Advanced",
  },
  {
    icon: Activity,
    title: "AIOps",
    description: "AI-driven monitoring, automation, and operations.",
    duration: "8-10 Weeks",
    level: "Intermediate to Advanced",
    tag: "New",
  },
  {
    icon: Globe,
    title: "Multi-Cloud DevOps",
    description: "AWS + Azure + DevOps + Security + AI.",
    duration: "14-16 Weeks",
    level: "Advanced",
  },
];

export type JourneyStep = {
  step: string;
  title: string;
  icon: LucideIcon;
};

export const journeySteps: JourneyStep[] = [
  { step: "01", title: "Enroll", icon: ClipboardCheck },
  { step: "02", title: "Attend Live Sessions", icon: Video },
  { step: "03", title: "Work on Real-Time Projects", icon: FolderGit2 },
  { step: "04", title: "Interview Preparation", icon: MessageSquareText },
  { step: "05", title: "Career Growth", icon: Rocket },
];

export type Benefit = {
  icon: LucideIcon;
  title: string;
};

export const studentBenefits: Benefit[] = [
  { icon: Video, title: "Live Instructor-Led Training" },
  { icon: FileText, title: "Session Recordings" },
  { icon: FolderGit2, title: "Real-Time Projects" },
  { icon: MessageSquareText, title: "Interview Questions" },
  { icon: FileText, title: "Resume Preparation" },
  { icon: UserCheck, title: "Mock Interviews" },
  { icon: Compass, title: "Career Guidance" },
  { icon: InfinityIcon, title: "Lifetime Learning Community" },
  { icon: BookOpenCheck, title: "Industry Best Practices" },
];

export type TechCategory = {
  category: string;
  items: string[];
};

export const techCategories: TechCategory[] = [
  { category: "Cloud", items: ["AWS", "Azure"] },
  {
    category: "DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Git",
      "GitHub Actions",
      "Azure DevOps",
      "Ansible",
    ],
  },
  {
    category: "Monitoring",
    items: ["Prometheus", "Grafana", "ELK", "CloudWatch"],
  },
  {
    category: "AIOps & Automation",
    items: ["AI Agents", "AIOps Tools"],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  feedback: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sai Kiran",
    role: "AWS Cloud Engineer",
    rating: 5,
    feedback:
      "The trainers are working professionals who share real production scenarios, not just theory. The small batch size meant I got my doubts cleared in every session.",
  },
  {
    name: "Anitha Reddy",
    role: "DevOps Engineer",
    rating: 5,
    feedback:
      "Hands-on labs with Docker, Kubernetes and Terraform gave me the confidence to clear interviews within a month of completing the course.",
  },
  {
    name: "Mohammed Faisal",
    role: "Azure Administrator",
    rating: 5,
    feedback:
      "Mock interviews and resume guidance made a huge difference. The mentors genuinely care about your career outcome, not just completing the syllabus.",
  },
  {
    name: "Kupparaj",
    role: "DevOps Engineer",
    rating: 4,
    feedback:
      "Well-structured curriculum with real-time projects. Session recordings helped me revise concepts at my own pace alongside a full-time job.",
  },
  {
    name: "Mamatha",
    role: "DevOps Engineer",
    rating: 5,
    feedback:
      "Loved how the course connected AI tools with everyday development work. It felt future-focused and directly applicable at my job.",
  },
  {
    name: "Harinadh",
    role: "DevOps Engineer",
    rating: 5,
    feedback:
      "A premium learning experience from enrollment to placement support. The community access has been valuable even after course completion.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Is the training 100% online?",
    answer:
      "Yes. All programs at SDLC Tech Academy are delivered through 100% live online classes led by real-time industry experts, so you can learn from anywhere.",
  },
  {
    question: "What is the batch size for each course?",
    answer:
      "We keep batches small, with a maximum of 15 students per batch, to ensure every learner gets personalized attention and their doubts are addressed.",
  },
  {
    question: "Will I work on real-time projects?",
    answer:
      "Absolutely. Every course includes hands-on, real-time projects modeled on actual industry use cases so you graduate with practical, demonstrable experience.",
  },
  {
    question: "Do you provide certification after course completion?",
    answer:
      "Yes, you will receive a course completion certificate from SDLC Tech Academy after successfully completing your training and project work.",
  },
  {
    question: "Do you help with interview preparation and placement support?",
    answer:
      "Yes. We provide dedicated interview preparation with mock interviews, curated interview questions, resume preparation, and career guidance throughout your journey.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "All live sessions are recorded and shared with enrolled students, so you can revisit any topic or catch up at your own convenience.",
  },
];

export const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const trainingPrograms = [
  { label: "AWS Cloud", href: "#courses" },
  { label: "Azure Cloud", href: "#courses" },
  { label: "AWS DevOps", href: "#courses" },
  { label: "DevSecOps", href: "#courses" },
  { label: "AIOps", href: "#courses" },
  { label: "Multi-Cloud DevOps", href: "#courses" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sdlc-techacademy/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sdlctechacademy/",
    icon: Instagram,
  },
];

