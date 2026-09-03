import type {
  Project, Experience, SkillCategory, Trait, SiteConfig, CvHighlight, Stat, M2Module, NavLink
} from "@/types";

// ─── Skills ────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    cat: "Frontend",
    items: [
      { n: "React", icon: "SiReact", certified: false },
      { n: "Next.js", icon: "SiNextdotjs", certified: false },
      { n: "TypeScript", icon: "SiTypescript", certified: false },
      { n: "Tailwind", icon: "SiTailwindcss", certified: false },
      { n: "JavaScript", icon: "SiJavascript", certified: false },
      { n: "Angular", icon: "SiAngular", certified: false },
      { n: "Figma", icon: "SiFigma", certified: false },
      { n: "Framer", icon: "SiFramer", certified: false },
      { n: "CSS", icon: "SiCss", certified: false },
    ],
  },
  {
    cat: "Backend",
    items: [
      { n: "Java", icon: "FaJava", certified: false },
      { n: "Spring Boot", icon: "SiSpring", certified: false },
      { n: "Python", icon: "SiPython", certified: false },
      { n: "FastAPI", icon: "SiFastapi", certified: false },
      { n: "Node.js", icon: "SiNodedotjs", certified: false },
      { n: "NestJS", icon: "SiNestjs", certified: false },
      { n: "PHP", icon: "SiPhp", certified: false },
      { n: "PostgreSQL", icon: "SiPostgresql", certified: false },
      { n: "MySQL", icon: "SiMysql", certified: false },
      { n: "MongoDB", icon: "SiMongodb", certified: false },
      { n: "Redis", icon: "SiRedis", certified: false },
    ],
  },
  {
    cat: "DevOps & Cloud",
    items: [
      { n: "Docker", icon: "SiDocker", certified: false },
      { n: "Kubernetes", icon: "SiKubernetes", certified: false },
      { n: "AWS", icon: "SiAmazonwebservices", certified: false },
      { n: "Azure", icon: "SiMicrosoftazure", certified: true },
      { n: "Jenkins", icon: "SiJenkins", certified: false },
      { n: "GitHub", icon: "SiGithub", certified: false },
      { n: "Vercel", icon: "SiVercel", certified: false },
      { n: "Linux", icon: "SiLinux", certified: false },
      { n: "Terraform", icon: "SiTerraform", certified: false },
      { n: "Ansible", icon: "SiAnsible", certified: false },
    ],
  },
  {
    cat: "AI & Data",
    items: [
      { n: "TensorFlow", icon: "SiTensorflow", certified: false },
      { n: "PyTorch", icon: "SiPytorch", certified: false },
      { n: "Hugging Face", icon: "SiHuggingface", certified: false },
      { n: "OpenAI", icon: "SiOpenai", certified: false },
      { n: "Pandas", icon: "SiPandas", certified: false },
      { n: "Jupyter", icon: "SiJupyter", certified: false },
      { n: "Spark", icon: "SiApachespark", certified: false },
      { n: "Kafka", icon: "SiApachekafka", certified: false },
      { n: "Elasticsearch", icon: "SiElasticsearch", certified: false },
      { n: "Power BI", icon: "SiMicrosoftpowerbi", certified: false },
    ],
  },
] satisfies SkillCategory[];

// ─── CV Highlights ──────────────────────────────────────────────────────────
export const cvHighlights = [
  { icon: "GraduationCap", label: "Education", val: "Engineering Degree", sub: "Computer Science" },
  { icon: "Code2", label: "Experience", val: "5+ Years", sub: "Full-Stack & Cloud" },
  { icon: "Terminal", label: "Projects", val: "20+ Built", sub: "Web · Mobile · AI" },
  { icon: "Award", label: "Certifications", val: "Azure Certified", sub: "AZ-900 · AZ-204" },
] satisfies CvHighlight[];

// ─── Experience ─────────────────────────────────────────────────────────────
export const experience = [
  {
    icon: "BarChart2",
    title: "Data & BI Developer Intern",
    co: "Entreprise A",
    period: "Jun 2024 – Aug 2024",
    loc: "Casablanca, MA",
    desc: "Built interactive Power BI dashboards and automated reporting pipelines, reducing manual reporting time by 60%.",
    tags: ["Power BI", "SQL", "Python", "ETL"],
  },
  {
    icon: "Code2",
    title: "Full-Stack Developer Intern",
    co: "Entreprise B",
    period: "Jun 2023 – Aug 2023",
    loc: "Rabat, MA",
    desc: "Developed RESTful APIs with Spring Boot and built responsive React interfaces for an internal HR management platform.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    icon: "Brain",
    title: "AI Research Intern",
    co: "Entreprise C",
    period: "Jun 2022 – Aug 2022",
    loc: "Tanger, MA",
    desc: "Trained NLP models for Arabic text classification using HuggingFace Transformers, achieving 87% accuracy on the test set.",
    tags: ["Python", "HuggingFace", "PyTorch", "NLP"],
  },
] satisfies Experience[];

// ─── Site Config ────────────────────────────────────────────────────────────
export const siteConfig = {
  initial: "A",
  name: "Amina EL HADDAD",
  email: "elhaddadamina410@gmail.com",
  copyright: "© 2026 Amina EL HADDAD — Made with",
  copyrightSub: "in Morocco & France.",
  location: "Morocco & France",
  footerBio: "Software, Data engineer & AI building modern intelligent systems.",
  bio: [
    "I'm a 5th-year Computer Engineering student at ENSA Tangier, specialising in Data Science & AI.",
    "Starting September 2026, I'll be pursuing a Master's programme in France to deepen my expertise in modern information systems.",
    "I build full-stack applications, design cloud infrastructure, and experiment with machine learning models — always with a focus on clean code and real-world impact.",
  ],
  tags: [
    "🇲🇦 Tanger → 🇫🇷 France",
    "Open to opportunities",
    "Full-Stack · Data · AI · Cloud",
  ],
  linkedin: "Amina EL HADDAD",
  github: "aminael24",
  linkedinUrl: "https://www.linkedin.com/in/amina-el-haddad-476210341",
  githubUrl: "https://github.com/aminael24",
} satisfies SiteConfig;

// ─── About Traits ───────────────────────────────────────────────────────────
export const traits = [
  { icon: "Code2", label: "Full-Stack Dev", desc: "React, Next.js, Spring Boot, Node.js — end-to-end product delivery." },
  { icon: "Brain", label: "AI & ML", desc: "PyTorch, HuggingFace, scikit-learn — from research to production models." },
  { icon: "BarChart2", label: "Data Engineering", desc: "Spark, Kafka, Elasticsearch, Power BI — pipelines and analytics at scale." },
  { icon: "BookOpen", label: "Continuous Learner", desc: "Azure certified, always exploring new frameworks and research papers." },
] satisfies Trait[];

// ─── Nav Links ──────────────────────────────────────────────────────────────
export const navLinks = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "CV",
  "Contact",
] satisfies NavLink[];

// ─── Projects ───────────────────────────────────────────────────────────────
export const projectCategories = ["All", "Web App", "AI / ML", "DevOps", "Data"] satisfies string[];

export const projects = [
  {
    id: "1",
    title: "AI Portfolio Assistant",
    cat: "AI / ML",
    img: "/projects/ai-assistant.png",
    stars: "4.9",
    desc: "Conversational AI assistant trained on personal portfolio data, built with LangChain, FastAPI, and a Next.js chat UI.",
    tags: ["Next.js", "FastAPI", "LangChain", "OpenAI"],
  },
  {
    id: "2",
    title: "HR Management Platform",
    cat: "Web App",
    img: "/projects/hr-platform.png",
    stars: "4.8",
    desc: "Full-stack HR platform with payroll, leave management, and analytics dashboards, deployed on Azure with Docker.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Docker", "Azure"],
  },
  {
    id: "3",
    title: "Real-Time Data Pipeline",
    cat: "Data",
    img: "/projects/data-pipeline.png",
    stars: "4.7",
    desc: "Kafka + Spark streaming pipeline ingesting IoT sensor data, stored in Elasticsearch and visualised in Kibana.",
    tags: ["Kafka", "Spark", "Elasticsearch", "Python"],
  },
  {
    id: "4",
    title: "Arabic NLP Classifier",
    cat: "AI / ML",
    img: "/projects/nlp.png",
    stars: "4.8",
    desc: "Fine-tuned AraBERT model for multi-class Arabic text classification, achieving 87% accuracy on a 50k-sample dataset.",
    tags: ["PyTorch", "HuggingFace", "Python", "NLP"],
  },
  {
    id: "5",
    title: "K8s Monitoring Stack",
    cat: "DevOps",
    img: "/projects/k8s.png",
    stars: "4.6",
    desc: "Production-grade Kubernetes cluster with Prometheus, Grafana, and automated alerting via PagerDuty integration.",
    tags: ["Kubernetes", "Terraform", "Prometheus", "Grafana"],
  },
  {
    id: "6",
    title: "E-Commerce Analytics",
    cat: "Data",
    img: "/projects/analytics.png",
    stars: "4.7",
    desc: "Power BI dashboards connected to a star-schema data warehouse, delivering real-time sales insights to stakeholders.",
    tags: ["Power BI", "SQL Server", "Python", "ETL"],
  },
] satisfies Project[];

// ─── Education ──────────────────────────────────────────────────────────────
export const ensaCurriculum: Record<string, string[]> = {
  "Year 1 — Fundamentals": [
    "Mathematics & Analysis",
    "Algorithms & Data Structures",
    "Object-Oriented Programming (Java)",
    "Computer Architecture",
    "Technical English",
  ],
  "Year 2 — Core Engineering": [
    "Databases (SQL & NoSQL)",
    "Operating Systems & Linux",
    "Networks & Protocols",
    "Web Development (HTML, CSS, JS)",
    "Statistics & Probability",
  ],
  "Year 3 — Software Engineering": [
    "Design Patterns & UML",
    "Spring Framework & REST APIs",
    "DevOps & CI/CD",
    "Software Testing & Quality",
    "Project Management (Agile/Scrum)",
  ],
  "Year 4 — Specialisation": [
    "Machine Learning & Deep Learning",
    "Big Data (Hadoop, Spark)",
    "Cloud Computing (Azure, AWS)",
    "Data Warehousing & BI",
    "Natural Language Processing",
  ],
  "Year 5 — Advanced & Internship": [
    "MLOps & Model Deployment",
    "Microservices Architecture",
    "Kubernetes & Container Orchestration",
    "Research Methodology",
    "6-Month End-of-Studies Internship",
  ],
};

export const m2Modules: Record<string, M2Module[]> = {
  "Semester 9": [
    { name: "Advanced Software Architecture", ects: 6 },
    { name: "Cloud-Native Development", ects: 6 },
    { name: "AI & Decision Systems", ects: 6 },
    { name: "Enterprise Information Systems", ects: 6 },
    { name: "Agile Project & Team Management", ects: 6 },
  ],
  "Semester 10": [
    { name: "Distributed Systems & Microservices", ects: 6 },
    { name: "Security & Compliance", ects: 6 },
    { name: "Data Science in Practice", ects: 6 },
    { name: "Innovation & Entrepreneurship", ects: 6 },
    { name: "6-Month Professional Internship", ects: 6 },
  ],
};

export const stats = [
  { val: "5+", label: "Years coding" },
  { val: "20+", label: "Projects shipped" },
  { val: "3", label: "Internships" },
] satisfies Stat[];