import type {
  Project, Experience, SkillCategory, Trait, SiteConfig, CvHighlight, Stat, M2Module, NavLink
} from "@/types";


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
      { n: "CSS", icon: "SiCss", certified: false },

      // Added from Wallet
      { n: "Flutter", icon: "SiFlutter", certified: false },
      { n: "Dart", icon: "SiDart", certified: false },
    ],
  },
  {
    cat: "Backend",
    items: [
      { n: "Java", icon: "FaJava", certified: false },
      { n: "Spring Boot", icon: "SiSpring", certified: false },
      { n: "Python", icon: "SiPython", certified: false },
      { n: "Node.js", icon: "SiNodedotjs", certified: false },
      { n: "NestJS", icon: "SiNestjs", certified: false },
      { n: "PHP", icon: "SiPhp", certified: false },
      { n: "PostgreSQL", icon: "SiPostgresql", certified: false },
      { n: "MySQL", icon: "SiMysql", certified: false },
      { n: "MongoDB", icon: "SiMongodb", certified: false },
      { n: "Redis", icon: "SiRedis", certified: false },

      // Added from existing projects
      { n: "ASP.NET Core", icon: "SiDotnet", certified: false },
      { n: "Flask", icon: "SiFlask", certified: false },
      { n: "Laravel", icon: "SiLaravel", certified: false },
      { n: "Express.js", icon: "SiExpress", certified: false },
      { n: "Keycloak", icon: "SiKeycloak", certified: false },
      { n: "SQLite", icon: "SiSqlite", certified: false },
      { n: "Socket.IO", icon: "SiSocketdotio", certified: false },
    ],
  },
  {
    cat: "DevOps & Cloud",
    items: [
      { n: "Docker", icon: "SiDocker", certified: false },
      { n: "Kubernetes", icon: "SiKubernetes", certified: false },
      { n: "AWS", icon: "SiAmazonwebservices", certified: false },
      { n: "Azure", icon: "SiMicrosoftazure", certified: false },
      { n: "GitHub", icon: "SiGithub", certified: false },
      { n: "Vercel", icon: "SiVercel", certified: false },
      { n: "Linux", icon: "SiLinux", certified: false },

      // Added from FuelFlow, Maestro and CloudBot
      { n: "Docker Compose", icon: "SiDocker", certified: false },
      { n: "Git", icon: "SiGit", certified: false },
      { n: "GitHub Actions", icon: "SiGithubactions", certified: false },
      { n: "GitLab CI", icon: "SiGitlab", certified: false },
      { n: "Nginx", icon: "SiNginx", certified: false },
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
      { n: "Kafka", icon: "SiApachekafka", certified: false },
      { n: "Power BI", icon: "SiMicrosoftpowerbi", certified: false },

      // Added from FuelFlow and Data Warehouse
      { n: "dbt", icon: "SiDbt", certified: false },
      { n: "Talend", icon: "SiTalend", certified: false },
{ n: "Pentaho PDI", icon: "PentahoPDI", certified: false },
      // Added from Tanger Med Zones / DataCleaner
      { n: "LangGraph", icon: "SiLanggraph", certified: false },
      { n: "Streamlit", icon: "SiStreamlit", certified: false },
      { n: "DAX", icon: "SiMicrosoftpowerbi", certified: false },
      { n: "Power Query", icon: "SiMicrosoftpowerbi", certified: false },

      // Added from AI projects
      { n: "Keras", icon: "SiKeras", certified: false },
      { n: "OpenCV", icon: "SiOpencv", certified: false },
      { n: "Ollama", icon: "SiOllama", certified: false },
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
    title: "Data, Business Intelligence & AI Intern",
    co: "Tanger Med Zones",
    period: "May 2026 – Aug 2026",
    loc: "Tangier, Morocco",
    desc: [
      "Cleaned and transformed financial data from multiple sources using Power Query and Excel.",
      "Designed data models, calendar tables, and DAX measures to analyze financial KPIs.",
      "Built an interactive Power BI dashboard to monitor supplier payment delays (DPO).",
      "Developed DataCleaner, a Python-based tool for detecting missing values, duplicates, and inconsistent data formats in CSV and Excel files.",
      "Integrated an AI agent using LangGraph to suggest data corrections, reviewed before execution with Pandas.",
    ],
    tags: [
      "Power BI",
      "DAX",
      "Power Query",
      "Python",
      "Pandas",
      "LangGraph",
      "Streamlit"
    ],
  },
  {
    icon: "Code2",
    title: "Software Development Intern",
    co: "OPmobility Lighting Systems",
    period: "May 2025 – Sep 2025",
    loc: "Tangier, Morocco",
    desc: [
      "Configured the AGW environment for internal company operations.",
      "Developed an internal work permit management web application using Java and Spring Boot.",
      "Completed an existing PHP-based equipment reservation application."
    ],
    tags: [
      "Java",
      "Spring Boot",
      "PHP",
      "SQL",
      "JavaScript"
    ],
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
  "Certifications",
  "CV",
  "Contact",
] satisfies NavLink[];

// ─── Projects ───────────────────────────────────────────────────────────────

export const projectCategories = [
  "All",
  "Web App",
  "Mobile App",
  "Desktop App",
  "AI / ML",
  "DevOps",
  "Data",
] satisfies string[];

export const projects = [

{
  id: "1",
  title: "DataCleaner – AI-Powered Data Cleaning Agent",
  cat: ["Data", "AI / ML"],
  img: "/projects/data-cleaner.png",
  stars: "4.9",
  desc: "AI data cleaning tool using LangGraph and Pandas to detect and fix CSV/Excel quality issues.",
  tags: ["Python", "Pandas", "LangGraph", "LLM", "Streamlit"],
  code: "https://github.com/aminael24/data-cleaner-agent",
  demo: "https://data-cleaner-agent.streamlit.app/",
  video: "/videos/data-cleaner-demo.mp4",
},

{
  id: "14",
  title: "FuelFlow – Real-Time Fuel Data Pipeline",
  cat: ["Data", "DevOps"],
  img: "/projects/fuelflow.png",
  stars: "4.8",
  desc: "In-progress fuel price pipeline using Kafka, dbt, SQL, Docker, and Streamlit analytics.",
  tags: [
    "Python",
    "Kafka",
    "dbt",
    "SQL",
    "Docker",
    "Streamlit"
  ],
  code: "https://github.com/aminael24/fuelflow",
},

{
  id: "13",
  title: "Sales Data Warehouse – ETL & BI",
  cat: "Data",
  img: "/projects/etl-bi.png",
  images: [
    "/projects/etl-bi.png",
    "/projects/etl-star-schema.png",
    "/projects/etl-staging.png",
    "/projects/etl-dimensions.png",
    "/projects/etl-product.png",
    "/projects/etl-location.png",
    "/projects/etl-shipmode.png",
    "/projects/etl-factsales.png"
  ],
  stars: "4.9",
  desc: "Talend ETL pipeline loading a MySQL star schema, with sales analysis and interactive Power BI reports.",
  tags: [
    "Talend",
    "MySQL",
    "ETL",
    "Power BI",
    "DAX",
    "Star Schema"
  ],
},

{
  id: "2",
  title: "Maestro – AI-Powered DevSecOps Automation",
cat: ["AI / ML", "DevOps", "Web App"],
  img: "/projects/maestro.png",
  stars: "4.8",
  desc: "AI DevSecOps platform automating code generation, testing, security checks, and deployment.",
  tags: [
    "AI Agents",
    "DevSecOps",
    ".NET 8",
    "FastAPI",
    "React",
    "Kafka",
    "Keycloak",
    "Docker",
    "GitHub Actions"
  ],
  code: "https://github.com/aminael24/Maestro",
  video: "/videos/maestro-demo.mp4",
},

{
  id: "15",
  title: "Facial Emotion Recognition – Deep Learning",
  cat: "AI / ML",
  img: "/projects/emotion-recognition.png",
  stars: "4.9",
  desc: "CNN-based facial emotion recognition trained on FER2013, using OpenCV and TensorFlow Lite for real-time detection.",
  tags: [
    "Python",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "CNN",
    "TFLite"
  ],
  code: "https://github.com/aminael24/Emotions-Recognition-from-Facial-Expression",
},

{
  id: "12",
  title: "Tanger Med Zones – Financial BI Analytics",
  cat: "Data",
  img: "/projects/tangermed-bi.png",
  images: [
    "/projects/tangermed-bi.png",
    "/projects/tangermed-contracts.png",
    "/projects/tangermed-tax.png"
  ],
  stars: "4.9",
  desc: "Power BI dashboards tracking payment delays, contractual billing, and tax declarations through financial KPIs.",
  tags: [
    "Power BI",
    "DAX",
    "Power Query",
    "Excel",
    "Financial Analytics"
  ],
},

{
  id: "5",
  title: "CloudBot – AI-Powered Chatbot",
  cat: ["AI / ML", "Web App", "DevOps"],
  img: "/projects/cloudbot.png",
  stars: "4.8",
  desc: "Local AI chatbot with Flask, Ollama, conversation history, and Docker deployment.",
  tags: [
    "Python",
    "Flask",
    "Ollama",
    "MySQL",
    "Nginx",
    "Docker"
  ],
  code: "https://github.com/aminael24/chatbot",
  video: "/videos/cloudbot-demo.mp4",
},

{
  id: "6",
  title: "MoodSphere – AI-Powered Social Platform",
  cat: ["AI / ML", "Web App"],
  img: "/projects/moodsphere.png",
  stars: "4.9",
  desc: "Emotional social app with AI emotion detection, live chat, private journals, and mood tracking.",
  tags: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Hugging Face",
    "Socket.IO",
    "JWT"
  ],
  code: "https://github.com/aminael24/MoodSphere",
  video: "/videos/moodsphere-demo.mp4",
},

{
  id: "11",
  title: "Interactive Generative Art Gallery",
  cat: ["AI / ML", "Web App"],
  img: "/projects/art-gallery.png",
  stars: "4.8",
  desc: "Interactive digital art gallery combining computer vision, image and audio processing, and AI-assisted generative content.",
  tags: [
    "Python",
    "Flask",
    "OpenCV",
    "PyDub",
    "Generative AI"
  ],
  video: "/videos/art-gallery-demo.mp4",
},

{
  id: "9",
  title: "PermitPro – Work Permit Management System",
  cat: "Web App",
  img: "/projects/permitpro.png",
  stars: "4.8",
  desc: "Enterprise web application built with Spring Boot to digitalize work permit requests, approval workflows, and administrative tracking.",
  tags: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "SQL",
    "Maven"
  ],
  video: "/videos/permitpro-demo.mp4",
},

{
  id: "4",
  title: "LuxeRide – Car Rental Platform",
  cat: "Web App",
  img: "/projects/luxride.png",
  stars: "4.8",
  desc: "Car rental platform with online bookings, fleet management, dashboards, and AI insights.",
  tags: [
    "Angular",
    "Laravel",
    "MySQL",
    "Docker",
    "Ollama",
    "Mistral"
  ],
  code: "https://github.com/aminael24/LuxeRide",
  video: "/videos/luxride-demo.mp4",
},

{
  id: "3",
  title: "WorkShare – Collaborative Project Management Platform",
  cat: "Web App",
  img: "/projects/workshare.png",
  stars: "4.7",
  desc: "Team project management app with task assignment, Kanban boards, and progress tracking.",
  tags: [
    "Java",
    "Jakarta EE",
    "JSF",
    "PrimeFaces",
    "Hibernate",
    "MySQL",
    "Maven"
  ],
  code: "https://github.com/aminael24/WorkShare",
  video: "/videos/workshare-demo.mp4",
},

{
  id: "10",
  title: "SoftSkills – Skills Assessment Platform",
  cat: "Web App",
  img: "/projects/softskills.png",
  stars: "4.7",
  desc: "Interactive soft skills assessment platform for evaluating communication, teamwork, adaptability, and personal development.",
  tags: [
    "Web Development",
    "Assessment",
    "Soft Skills"
  ],
  video: "/videos/softskills-demo.mp4",
},

{
  id: "8",
  title: "Wallet – Personal Finance Manager",
  cat: "Mobile App",
  img: "/projects/wallett.png",
  stars: "4.8",
  desc: "Flutter finance app for tracking expenses, monthly budgets, spending alerts, and charts.",
  tags: [
    "Flutter",
    "Dart",
    "SQLite",
    "MVC",
    "Material Design"
  ],
  code: "https://github.com/aminael24/wallet",
  video: "/videos/wallet-demo.mp4",
},

{
  id: "7",
  title: "Gradix – Academic Management System",
cat: "Desktop App",
  img: "/projects/gradix.png",
  stars: "4.7",
  desc: "JavaFX desktop app for managing students, courses, programs, and academic records.",
  tags: [
    "Java",
    "JavaFX",
    "FXML",
    "Maven"
  ],
  code: "https://github.com/aminael24/Gestion_formation_JavaFX",
  video: "/videos/gradix-demo.mp4",
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