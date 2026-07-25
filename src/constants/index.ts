import {
  NavLink,
  Skill,
  Project,
  Experience,
  Education,
  Testimonial,
  BlogPost,
  FAQ,
  Service,
  Stat,
  TechStackItem,
  SocialLink,
} from "@/types";

export const SITE_CONFIG = {
  name: "Muhammad Shariq Shahid",
  title: "Muhammad Shariq Shahid | Full Stack Web Developer",
  description:
    "Crafting digital experiences with clean code and creative design. Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  url: "https://muhammadshariq.dev",
  email: "shariqshahid610@gmail.com",
  phone: "+92 3092105738",
  location: "Karachi, Pakistan",
  github: "https://github.com/muhammadshariq",
  linkedin: "https://linkedin.com/in/muhammadshariq",
  twitter: "https://twitter.com/muhammadshariq",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/muhammadshariq", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/muhammadshariq", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/muhammadshariq", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com/muhammadshariq", icon: "instagram" },
];

export const SKILLS: Skill[] = [
  { name: "React", level: 95, icon: "react", category: "frontend" },
  { name: "Next.js", level: 92, icon: "nextjs", category: "frontend" },
  { name: "TypeScript", level: 90, icon: "typescript", category: "languages" },
  { name: "Vue.js", level: 78, icon: "vue", category: "frontend" },
  { name: "Tailwind CSS", level: 95, icon: "tailwind", category: "frontend" },
  { name: "HTML5", level: 98, icon: "html5", category: "frontend" },
  { name: "CSS3", level: 95, icon: "css3", category: "frontend" },
  { name: "Node.js", level: 88, icon: "nodejs", category: "backend" },
  { name: "Express.js", level: 85, icon: "express", category: "backend" },
  { name: "PostgreSQL", level: 85, icon: "postgresql", category: "database" },
  { name: "MongoDB", level: 88, icon: "mongodb", category: "database" },
  { name: "Redis", level: 72, icon: "redis", category: "database" },
  { name: "Docker", level: 80, icon: "docker", category: "devops" },
  { name: "AWS", level: 76, icon: "aws", category: "devops" },
  { name: "Git", level: 92, icon: "git", category: "tools" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "NexGen Commerce",
    description: "A blazing-fast e-commerce platform with AI-powered recommendations and real-time inventory management.",
    longDescription:
      "Built from the ground up to handle 10K+ concurrent users. Features include AI-driven product recommendations, real-time inventory tracking, Stripe integration, and a comprehensive admin dashboard with analytics.",
    image: "/images/project1.jpg",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Tailwind CSS"],
    features: ["AI Recommendations", "Real-time Inventory", "Payment Processing", "Admin Dashboard"],
    github: "https://github.com/muhammadshariq/nexgen-commerce",
    liveDemo: "https://nexgen-commerce.vercel.app",
    category: "fullstack",
    featured: true,
  },
  {
    id: "2",
    title: "AI Content Studio",
    description: "An AI-powered content creation platform that generates blog posts, social media content, and marketing copy.",
    longDescription:
      "Leverages GPT-4 and custom fine-tuned models to generate high-quality content. Includes a WYSIWYG editor, content scheduling, brand voice customization, and multi-platform publishing.",
    image: "/images/project2.jpg",
    techStack: ["React", "Python", "FastAPI", "OpenAI", "MongoDB", "Docker"],
    features: ["AI Content Generation", "WYSIWYG Editor", "Content Scheduling", "Multi-platform Publishing"],
    github: "https://github.com/muhammadshariq/ai-content-studio",
    liveDemo: "https://ai-content-studio.vercel.app",
    category: "ai",
    featured: true,
  },
  {
    id: "3",
    title: "DevOps Dashboard",
    description: "A real-time monitoring dashboard for CI/CD pipelines, server health, and deployment tracking.",
    longDescription:
      "Integrates with GitHub Actions, AWS, and Docker to provide a unified view of your development pipeline. Features real-time alerts, performance metrics, and team collaboration tools.",
    image: "/images/project3.jpg",
    techStack: ["Vue.js", "Node.js", "WebSocket", "Grafana", "Docker", "AWS"],
    features: ["Real-time Monitoring", "CI/CD Integration", "Team Collaboration", "Performance Metrics"],
    github: "https://github.com/muhammadshariq/devops-dashboard",
    liveDemo: "https://devops-dashboard.vercel.app",
    category: "fullstack",
    featured: true,
  },
  {
    id: "4",
    title: "FinTrack Pro",
    description: "A personal finance tracker with intelligent budgeting, investment tracking, and financial insights.",
    longDescription:
      "Connects to bank APIs to automatically categorize transactions, track investments, and provide AI-powered financial advice. Features interactive charts, budget alerts, and goal tracking.",
    image: "/images/project4.jpg",
    techStack: ["Next.js", "TypeScript", "Plaid API", "Chart.js", "Prisma", "PostgreSQL"],
    features: ["Bank Integration", "Investment Tracking", "AI Financial Advice", "Budget Alerts"],
    github: "https://github.com/muhammadshariq/fintrack-pro",
    liveDemo: "https://fintrack-pro.vercel.app",
    category: "fullstack",
    featured: true,
  },
  {
    id: "5",
    title: "Portfolio Generator",
    description: "A drag-and-drop portfolio builder with beautiful templates and one-click deployment.",
    longDescription:
      "No-code portfolio builder with 20+ premium templates, custom domain support, SEO optimization, and automatic deployment to Vercel. Used by 500+ developers worldwide.",
    image: "/images/project5.jpg",
    techStack: ["React", "DnD Kit", "Tailwind CSS", "Firebase", "Vercel API"],
    features: ["Drag & Drop Builder", "20+ Templates", "Custom Domains", "Auto Deploy"],
    github: "https://github.com/muhammadshariq/portfolio-generator",
    liveDemo: "https://portfolio-generator.vercel.app",
    category: "frontend",
    featured: true,
  },
  {
    id: "6",
    title: "HealthPulse API",
    description: "A comprehensive health tracking API with wearable device integration and ML-powered health insights.",
    longDescription:
      "RESTful API that aggregates data from Apple Health, Fitbit, and Garmin. Uses machine learning to detect health patterns, predict potential issues, and provide personalized wellness recommendations.",
    image: "/images/project6.jpg",
    techStack: ["Node.js", "Express", "TensorFlow", "MongoDB", "GraphQL", "Docker"],
    features: ["Wearable Integration", "ML Health Insights", "GraphQL API", "HIPAA Compliant"],
    github: "https://github.com/muhammadshariq/healthpulse-api",
    liveDemo: "https://healthpulse-api.vercel.app",
    category: "backend",
    featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "K&H TECH SOL",
    role: "Full Stack Web Developer",
    duration: "2025 - Present",
    description:
      "Working as a Full Stack Web Developer, building and maintaining web applications using modern technologies. Handling both frontend and backend development with a focus on performance and scalability.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    company: "Freelancing",
    role: "Full Stack Web Developer",
    duration: "2024 - Present",
    description:
      "Providing full stack web development services to clients worldwide. Building custom web applications, e-commerce platforms, and landing pages. Managing end-to-end project delivery from concept to deployment.",
    technologies: ["React", "Next.js", "Node.js", "JavaScript", "Tailwind CSS", "PostgreSQL"],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "The Nation Public School",
    degree: "Matric",
    duration: "2026 - 2027 (Current)",
    description: "Currently pursuing Matriculation with a focus on science subjects.",
    achievements: [],
  },
];

export const CERTIFICATES = [
  { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2023" },
  { name: "Google Cloud Professional Developer", issuer: "Google", year: "2022" },
  { name: "Meta Front-End Developer Professional", issuer: "Meta", year: "2021" },
  { name: "MongoDB Certified Developer", issuer: "MongoDB Inc.", year: "2020" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechNova Inc.",
    avatar: "/images/avatar1.jpg",
    content: "Muhammad Shariq Shahid is one of the most talented developers I've worked with. His ability to translate complex requirements into elegant solutions is remarkable. He delivered our analytics platform 2 weeks ahead of schedule.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Founder & CEO",
    company: "FinTrack Solutions",
    avatar: "/images/avatar2.jpg",
    content: "Working with Muhammad was an absolute pleasure. He not only built exactly what we envisioned but improved upon it with his technical expertise. Our platform handles 10K+ users seamlessly.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager",
    company: "CloudSync Labs",
    avatar: "/images/avatar3.jpg",
    content: "Muhammad has an incredible eye for detail and a deep understanding of user experience. He's proactive, communicated clearly throughout the project, and the results exceeded our expectations.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Engineering Lead",
    company: "PixelForge Studio",
    avatar: "/images/avatar4.jpg",
    content: "I've hired many developers over my career, and Muhammad stands out for his clean code, thorough documentation, and ability to mentor team members. A true 10x developer.",
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Building Scalable Microservices with Next.js and Node.js",
    excerpt:
      "A deep dive into architecting microservices that scale. Learn how to break down monoliths, implement service discovery, and handle inter-service communication.",
    category: "Architecture",
    readTime: "8 min read",
    date: "2024-01-15",
    slug: "building-scalable-microservices",
  },
  {
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how AI tools are transforming the way we build web applications. From code generation to automated testing, AI is reshaping development workflows.",
    category: "AI & Tech",
    readTime: "6 min read",
    date: "2024-01-08",
    slug: "future-of-ai-web-development",
  },
  {
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt:
      "Level up your TypeScript skills with advanced patterns like discriminated unions, template literal types, and conditional types for building type-safe applications.",
    category: "Tutorial",
    readTime: "12 min read",
    date: "2023-12-20",
    slug: "mastering-typescript-patterns",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern JavaScript/TypeScript ecosystems including React, Next.js, and Node.js. I'm also proficient with Python, cloud services (AWS, GCP), databases (PostgreSQL, MongoDB), and containerization with Docker. I stay current with emerging technologies and best practices.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start by deeply understanding the business requirements and user needs. Then I create a technical architecture that balances performance, scalability, and maintainability. I follow agile methodologies with regular check-ins and iterative development to ensure the final product exceeds expectations.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity. A landing page typically takes 1-2 weeks, a full web application 4-8 weeks, and enterprise solutions 3-6 months. I provide detailed timelines during the planning phase and keep you updated throughout development.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely. I offer flexible maintenance packages that include bug fixes, performance monitoring, security updates, and feature enhancements. I believe in building long-term relationships with my clients to ensure their applications continue to perform optimally.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Yes, I'm experienced in working with legacy codebases and modernizing them. I can refactor existing code, migrate to newer frameworks, improve performance, and add new features while maintaining stability and backward compatibility.",
  },
  {
    question: "What is your development process?",
    answer:
      "I follow a structured process: Discovery & Planning, UI/UX Design, Development, Testing, Deployment, and Post-launch Support. I use Git for version control, implement CI/CD pipelines, write comprehensive tests, and follow code review practices to ensure high-quality deliverables.",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Web Application Development",
    description:
      "Full-stack web applications built with modern frameworks, optimized for performance, and designed for scalability.",
    icon: "code",
    features: [
      "Custom Web Applications",
      "SPA & SSR Solutions",
      "Real-time Features",
      "Performance Optimization",
    ],
  },
  {
    title: "E-Commerce Solutions",
    description:
      "End-to-end e-commerce platforms with secure payment processing, inventory management, and analytics dashboards.",
    icon: "shopping-cart",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Admin Dashboard",
      "Analytics & Reporting",
    ],
  },
  {
    title: "API Development & Integration",
    description:
      "RESTful and GraphQL APIs designed for reliability, documented thoroughly, and integrated with third-party services.",
    icon: "server",
    features: [
      "RESTful APIs",
      "GraphQL",
      "Third-party Integration",
      "API Documentation",
    ],
  },
  {
    title: "UI/UX Design & Development",
    description:
      "Beautiful, intuitive interfaces built with attention to every pixel. Responsive, accessible, and animation-rich experiences.",
    icon: "palette",
    features: [
      "Responsive Design",
      "Custom Animations",
      "Accessibility (WCAG)",
      "Design Systems",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure setup, CI/CD pipelines, containerization, and monitoring to ensure reliable deployments.",
    icon: "cloud",
    features: [
      "AWS/GCP Setup",
      "CI/CD Pipelines",
      "Docker & Kubernetes",
      "Performance Monitoring",
    ],
  },
  {
    title: "Technical Consulting",
    description:
      "Expert guidance on architecture decisions, technology selection, code reviews, and team mentoring.",
    icon: "brain",
    features: [
      "Architecture Review",
      "Technology Selection",
      "Code Audits",
      "Team Mentoring",
    ],
  },
];

export const STATS: Stat[] = [
  { label: "Years Experience", value: 2, suffix: "+", icon: "calendar" },
  { label: "Projects Completed", value: 50, suffix: "+", icon: "folder" },
  { label: "Happy Clients", value: 0, suffix: "", icon: "users" },
  { label: "Technologies", value: 25, suffix: "+", icon: "cpu" },
];

export const TECH_STACK: TechStackItem[] = [
  { name: "React.js", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", color: "#000000" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
  { name: "Express.js", icon: "express", color: "#000000" },
  { name: "HTML5", icon: "html5", color: "#E34F26" },
  { name: "CSS3", icon: "css3", color: "#1572B6" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "REST API", icon: "rest", color: "#6B46C1" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitHub", icon: "github", color: "#181717" },
  { name: "Responsive Web Design", icon: "responsive", color: "#00D4FF" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "AWS", icon: "aws", color: "#FF9900" },
  { name: "Redis", icon: "redis", color: "#DC382D" },
  { name: "Vercel", icon: "vercel", color: "#000000" },
];
