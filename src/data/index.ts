import type { Project, Experience } from "@/types";

export const siteConfig = {
  name: "Amina EL HADDAD",
  initial: "A",
  title: "AI & Software Engineer",
  location: "Tangier, Morocco",
  email: "amina.elhaddad@ensa.ac.ma",
  linkedin: "/in/amina-elhaddad",
  status: "Open to Master's & Internships · 2025",
  available: true,
  bio: [
    "I'm a final-year student in Computer Engineering and Data Science & AI at ENSA Tangier, one of Morocco's leading engineering schools. My 5-year journey has taken me from C++ and relational databases to deploying ML models in production and architecting BigData pipelines.",
    "This year I'll join a Master's DOSI programme in France, deepening my expertise in software engineering, ERP integration, and enterprise-scale systems.",
  ],
  tags: ["Morocco", "Open to Relocation", "French & English"],
  heroDescription:
    "Building intelligent systems at the intersection of AI, data engineering, and software architecture.",
  stats: [
    { value: "15+", label: "Projects Built" },
    { value: "25+", label: "Technologies" },
    { value: "3", label: "Internships" },
    { value: "5", label: "Years of Study" },
  ],
  collaborationText: "Collaborated with",
  collaborationHighlight: "15+ teams & mentors",
  collaborationSub: "across research labs and internships.",
  footerBio:
    "AI & Software Engineering student from ENSA Tangier. Building intelligent systems, one line at a time.",
  copyright: "© 2025 Amina EL HADDAD — Made with",
  copyrightSub: "in Tangier",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "MedVision AI",
    cat: "AI/ML",
    stars: 42,
    tags: ["Python", "TensorFlow", "Computer Vision", "Flask"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=380&fit=crop",
    desc: "Deep learning pipeline for automated medical image analysis. CNN architecture detects anomalies in chest X-rays with 94% accuracy, deployed as a REST API.",
  },
  {
    id: 2,
    title: "SmartFlow BigData",
    cat: "Data",
    stars: 38,
    tags: ["Spark", "Kafka", "Hadoop", "Elasticsearch"],
    img: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600&h=380&fit=crop",
    desc: "Real-time pipeline processing 1M+ events/sec with Kafka + Spark Streaming and live analytics dashboards.",
  },
  {
    id: 3,
    title: "ArabSentiment NLP",
    cat: "AI/ML",
    stars: 55,
    tags: ["NLP", "BERT", "PyTorch", "FastAPI"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=380&fit=crop",
    desc: "Multilingual sentiment analyzer for Arabic & French social media. Fine-tuned BERT — 88% F1 on a 50K annotated dataset.",
  },
  {
    id: 4,
    title: "EduSync ERP",
    cat: "Web",
    stars: 29,
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    img: "https://images.unsplash.com/photo-1580894908361-967195033215?w=600&h=380&fit=crop",
    desc: "Full-stack university ERP with Spring Boot microservices and a React dashboard, deployed for 500+ users at ENSA.",
  },
  {
    id: 5,
    title: "CloudDeploy CLI",
    cat: "DevOps",
    stars: 61,
    tags: ["Python", "Terraform", "Docker", "AWS"],
    img: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600&h=380&fit=crop",
    desc: "Open-source CLI for multi-cloud deployments using Terraform + Ansible orchestration with drift detection and rollback.",
  },
  {
    id: 6,
    title: "BioTrack Mobile",
    cat: "Mobile",
    stars: 34,
    tags: ["React Native", "TF Lite", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?w=600&h=380&fit=crop",
    desc: "Cross-platform health tracker with AI-powered insights. TensorFlow Lite runs inference on-device — no server round-trips.",
  },
];

export const experience: Experience[] = [
  {
    title: "Data Science Intern",
    co: "OCP Group",
    loc: "Casablanca",
    period: "Jul – Sep 2024",
    icon: "BarChart2",
    tags: ["Python", "Apache Spark", "Power BI", "Azure ML"],
    desc: "Built predictive models for chemical-process optimisation. Reduced material waste by 12%. Power BI dashboards used daily by 30+ process engineers.",
  },
  {
    title: "Full-Stack Developer Intern",
    co: "StartTech Digital",
    loc: "Tangier",
    period: "Jun – Aug 2023",
    icon: "Code2",
    tags: ["Spring Boot", "React", "MySQL", "Docker", "Jenkins"],
    desc: "Built REST APIs and React dashboards for an e-commerce platform. Improved page load time by 40% via code-splitting and Redis caching. Set up Jenkins CI/CD pipeline.",
  },
  {
    title: "Research Assistant — NLP Lab",
    co: "ENSA Tangier",
    loc: "Tangier",
    period: "Jan – Jun 2023",
    icon: "Brain",
    tags: ["Python", "BERT", "NLTK", "Hugging Face", "Jupyter"],
    desc: "Contributed to Darija (Moroccan Arabic) NLP research. Co-built a dataset of 50K annotated posts. Implemented BERT-based sentiment classifier.",
  },
];

export const ensaCurriculum: Record<string, string[]> = {
  "Year 1 — Computer Engineering": [
    "Mathematics",
    "Networks & Systems I",
    "Computer Electronics & Architecture",
    "Relational Database Design",
    "C++ & Data Structures",
    "Management I",
    "Languages & Communication I",
  ],
  "Year 2 — Computer Engineering": [
    "Networks & Systems II",
    "Web Dev (PHP & JS)",
    "Advanced OOP",
    "SQL / PL-SQL",
    "Digital Skills",
    "Operations Research & Graph Theory",
    "Languages & Communication II",
  ],
  "Year 3 — Computer Engineering": [
    "JavaFX & Design Patterns",
    "Advanced Database",
    "Advanced DevOps & PHP",
    "OO Modeling & Agile PM",
    "Windows Admin, Virtualisation & Containers",
    "Professional Communication",
    "Management II",
  ],
  "Year 4 — Data Science & AI (M1)": [
    "Business Intelligence & NoSQL",
    "Cross-Platform Development",
    "ERP & Cloud Computing",
    "Image Processing & Vision Systems",
    "Web Dev in Java & Python",
    "AI Ethics & Applications",
    "Languages & Communication III",
  ],
  "Year 5 — Data Science & AI (Graduation)": [
    "Advanced Artificial Intelligence",
    "Spring Frameworks & Microservices",
    "Machine Learning & NLP",
    "BigData Architecture & DataOps",
    "Professional Law",
    "Management III",
    "Projects, Internships & Professional Networking",
  ],
};

export const m2Modules: Record<string, { name: string; ects: number }[]> = {
  "Semester 9": [
    { name: "English & Communication", ects: 4 },
    { name: "Continuous Integration Platform", ects: 3 },
    { name: "ERP Integration & Configuration", ects: 4 },
    { name: "Information Systems Engineering", ects: 5 },
    { name: "Frontend Web Development", ects: 5 },
    { name: "J2EE Development & Frameworks", ects: 5 },
    { name: "Software Engineering", ects: 4 },
  ],
  "Semester 10": [
    { name: "Web Services & Mobility", ects: 4 },
    { name: "Application Architecture", ects: 3 },
    { name: "Agile Project", ects: 8 },
    { name: "6-Month Industry Internship", ects: 15 },
  ],
};

export const skillCategories = [
  {
    cat: "Frontend",
    items: [
      { n: "React",      icon: "SiReact" },
      { n: "Next.js",    icon: "SiNextdotjs" },
      { n: "TypeScript", icon: "SiTypescript" },
      { n: "Tailwind",   icon: "SiTailwindcss" },
      { n: "Figma",      icon: "SiFigma" },
      { n: "Framer",     icon: "SiFramer" },
    ],
  },
  {
    cat: "Backend",
    items: [
      { n: "Node.js",    icon: "SiNodedotjs" },
      { n: "Python",     icon: "SiPython" },
      { n: "FastAPI",    icon: "SiFastapi" },
      { n: "PostgreSQL", icon: "SiPostgresql" },
      { n: "MongoDB",    icon: "SiMongodb" },
      { n: "Prisma",     icon: "SiPrisma" },
    ],
  },
  {
    cat: "DevOps & Cloud",
    items: [
      { n: "Docker",     icon: "SiDocker" },
      { n: "AWS",        icon: "SiAmazonaws" },
      { n: "GitHub",     icon: "SiGithub" },
      { n: "Vercel",     icon: "SiVercel" },
      { n: "Linux",      icon: "SiLinux" },
      { n: "Supabase",   icon: "SiSupabase" },
    ],
  },
  {
    cat: "AI & Data",
    items: [
      { n: "TensorFlow", icon: "SiTensorflow" },
      { n: "PyTorch",    icon: "SiPytorch" },
      { n: "OpenAI",     icon: "SiOpenai" },
      { n: "Pandas",     icon: "SiPandas" },
      { n: "Jupyter",    icon: "SiJupyter" },
      { n: "HuggingFace",icon: "SiHuggingface" },
    ],
  },
];

export const projectCategories = ["All", "AI/ML", "Data", "Web", "DevOps", "Mobile"];

export const navLinks = ["Experience", "Projects", "Skills", "About", "Contact"];

export const cvHighlights = [
  { icon: "GraduationCap", label: "Education", val: "Bac+5 Engineering", sub: "ENSA Tangier + M2 France" },
  { icon: "Code2", label: "Specialty", val: "AI & Software Eng.", sub: "Full-stack + BigData" },
  { icon: "Terminal", label: "Top Languages", val: "Python · Java · JS", sub: "C++ · PHP · SQL" },
  { icon: "Award", label: "Certifications", val: "Azure · Scrum", sub: "In progress 2025" },
];

export const traits = [
  { icon: "Brain", label: "AI-Driven", desc: "Passionate about ML, NLP, and Computer Vision" },
  { icon: "Code2", label: "Full-Stack", desc: "From REST APIs to React UIs and mobile apps" },
  { icon: "BarChart2", label: "Data-Centric", desc: "BigData pipelines, BI dashboards, statistics" },
  { icon: "BookOpen", label: "Lifelong Learner", desc: "MSc bound — always exploring new technologies" },
];
