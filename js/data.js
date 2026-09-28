/**
 * VEDA TECHNOLOGY - Data Store
 * Structured data for programs, services, internships, FAQs, and testimonials.
 */

const VEDA_DATA = {
  stats: [
    { label: "Students & Interns Trained", value: 15000, suffix: "+", icon: "academic-cap" },
    { label: "Enterprise Projects Completed", value: 180, suffix: "+", icon: "briefcase" },
    { label: "Hiring & Industry Partners", value: 65, suffix: "+", icon: "building" },
    { label: "Career Transition Rate", value: 96, suffix: "%", icon: "chart-bar" }
  ],

  techStack: [
    { name: "React / Next.js", category: "Frontend", icon: "react" },
    { name: "TypeScript", category: "Languages", icon: "typescript" },
    { name: "Node.js & Express", category: "Backend", icon: "nodejs" },
    { name: "Python & AI/ML", category: "AI / Data", icon: "python" },
    { name: "AWS & Azure", category: "Cloud", icon: "aws" },
    { name: "Docker & Kubernetes", category: "DevOps", icon: "docker" },
    { name: "PostgreSQL & MongoDB", category: "Databases", icon: "database" },
    { name: "Flutter & React Native", category: "Mobile", icon: "mobile" },
    { name: "Cybersecurity & Kali", category: "Security", icon: "shield" },
    { name: "GraphQL & REST APIs", category: "Architecture", icon: "api" }
  ],

  programs: [
    {
      id: "prog-fullstack",
      title: "Master Full-Stack Web Development",
      category: "web-dev",
      badge: "Most Popular",
      level: "Beginner to Advanced",
      duration: "16 Weeks (4 Months)",
      mode: "Live Interactive + Hands-on Labs",
      description: "Master modern web architectures from frontend to backend with React, Node.js, Next.js, TypeScript, PostgreSQL, and cloud deployments.",
      topics: [
        "Modern JavaScript ES6+ & TypeScript",
        "React.js, Next.js 14 App Router & Tailwind CSS",
        "Node.js, Express & RESTful APIs",
        "PostgreSQL, Prisma ORM & MongoDB",
        "Authentication (JWT, OAuth), Docker & CI/CD",
        "3 Production Capstone Projects & Portfolio Building"
      ],
      prerequisites: "Basic programming logic recommended, no prior framework experience required.",
      careerOutcomes: ["Full Stack Engineer", "Frontend Developer", "MERN Stack Specialist", "Backend Developer"],
      certification: "Veda Certified Full-Stack Professional (VCFP)"
    },
    {
      id: "prog-cloud-devops",
      title: "Cloud Engineering & DevOps Masterclass",
      category: "cloud-devops",
      badge: "High Demand",
      level: "Intermediate",
      duration: "14 Weeks (3.5 Months)",
      mode: "Hybrid / Cloud Labs",
      description: "Architect scalable, automated cloud infrastructure using AWS, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, and Prometheus.",
      topics: [
        "AWS Core Services (EC2, S3, RDS, Lambda, VPC)",
        "Docker Containerization & Microservices Architecture",
        "Kubernetes Orchestration & Helm Charts",
        "Infrastructure as Code (Terraform)",
        "CI/CD Pipelines with GitHub Actions & Jenkins",
        "Site Reliability Engineering (SRE) & Monitoring"
      ],
      prerequisites: "Basic Linux commands and foundational networking knowledge.",
      careerOutcomes: ["Cloud Architect", "DevOps Engineer", "Site Reliability Engineer", "Build/Release Engineer"],
      certification: "Veda Certified Cloud & DevOps Engineer (VCCDE)"
    },
    {
      id: "prog-ai-data",
      title: "Applied AI, Data Science & GenAI",
      category: "ai-data",
      badge: "Emerging Tech",
      level: "Intermediate to Advanced",
      duration: "18 Weeks (4.5 Months)",
      mode: "Live Online + Real Dataset Labs",
      description: "Harness Python, Pandas, Machine Learning, Deep Learning, NLP, and Large Language Models (LLMs) to build intelligent systems.",
      topics: [
        "Advanced Python, NumPy, Pandas & Data Wrangling",
        "Statistical Modeling & Scikit-Learn Machine Learning",
        "Deep Learning with PyTorch & TensorFlow",
        "Natural Language Processing (NLP) & Computer Vision",
        "Generative AI, LangChain, RAG Pipelines & Prompt Engineering",
        "Deploying ML Models with FastAPI & Streamlit"
      ],
      prerequisites: "Foundational mathematics and basic Python scripting familiarity.",
      careerOutcomes: ["AI Engineer", "Data Scientist", "ML Operations Specialist", "GenAI Developer"],
      certification: "Veda Certified AI & Data Practitioner (VCAID)"
    },
    {
      id: "prog-cybersecurity",
      title: "Cybersecurity & Ethical Hacking Defense",
      category: "security",
      badge: "Security Core",
      level: "Beginner to Intermediate",
      duration: "14 Weeks (3.5 Months)",
      mode: "Virtual Cyber Range Labs",
      description: "Learn vulnerability assessment, penetration testing, threat detection, network security, and defensive security strategies.",
      topics: [
        "Networking Fundamentals, OSI Model & Wireshark",
        "Linux Administration & Bash Scripting for Security",
        "Vulnerability Assessment & OWASP Top 10 Web Security",
        "Penetration Testing Methodology & Metasploit",
        "SOC Operations, SIEM Logging & Incident Response",
        "Cloud Security Best Practices & Compliance"
      ],
      prerequisites: "Basic understanding of operating systems and networking.",
      careerOutcomes: ["Cybersecurity Analyst", "Penetration Tester", "SOC Analyst Tier 1", "Security Consultant"],
      certification: "Veda Certified Ethical Defender (VCED)"
    },
    {
      id: "prog-mobile-dev",
      title: "Cross-Platform Mobile App Engineering",
      category: "mobile",
      badge: "Trending",
      level: "Beginner to Intermediate",
      duration: "12 Weeks (3 Months)",
      mode: "Project-Based Learning",
      description: "Build high-performance iOS and Android applications with Flutter, Dart, React Native, Firebase, and REST API integrations.",
      topics: [
        "Dart & Flutter Framework Deep Dive",
        "State Management (Riverpod, Bloc & Redux)",
        "Local Storage, SQLite & Firebase Cloud Firestore",
        "Device Native APIs (Camera, Geolocation, Biometrics)",
        "App Store & Google Play Publishing Pipelines",
        "Performance Profiling & Offline-first Architectures"
      ],
      prerequisites: "Familiarity with Object-Oriented Programming principles.",
      careerOutcomes: ["Flutter Developer", "Mobile App Engineer", "Cross-Platform Specialist"],
      certification: "Veda Certified Mobile Developer (VCMD)"
    },
    {
      id: "prog-backend-systems",
      title: "Enterprise Backend Architecture & Microservices",
      category: "web-dev",
      badge: "Architecture",
      level: "Intermediate to Advanced",
      duration: "12 Weeks (3 Months)",
      mode: "Live System Design Sessions",
      description: "Design high-throughput, fault-tolerant enterprise backend services using Node.js, Go, Redis caching, Kafka, and distributed system patterns.",
      topics: [
        "High-Scale REST & gRPC API Design",
        "Relational & NoSQL Database Optimization & Indexing",
        "Event-Driven Systems with Apache Kafka & RabbitMQ",
        "Redis Distributed Caching & Rate Limiting",
        "Microservices Patterns (CQRS, SAGA, Circuit Breaker)",
        "System Design Interviews & Scalability Benchmarking"
      ],
      prerequisites: "Strong foundation in at least one backend language.",
      careerOutcomes: ["Backend Architect", "Systems Engineer", "Senior API Specialist"],
      certification: "Veda Certified Systems Architect (VCSA)"
    }
  ],

  services: [
    {
      id: "srv-custom-software",
      title: "Custom Software & Web Application Development",
      category: "software-dev",
      icon: "code-bracket",
      badge: "Core Service",
      description: "End-to-end bespoke software engineering tailored to your enterprise workflows, built with modern tech stacks, high scalability, and robust security.",
      deliverables: [
        "Scalable Web Applications (SPA / SSR)",
        "Enterprise Portals & Internal Dashboards",
        "REST & GraphQL Microservices Architecture",
        "Legacy Codebase Modernization & Migration",
        "Automated Unit, Integration & End-to-End Testing"
      ],
      idealFor: "SMEs, Tech Startups, and Enterprises seeking custom digital solutions."
    },
    {
      id: "srv-cloud-infra",
      title: "Cloud Infrastructure & DevOps Transformation",
      category: "cloud-infra",
      icon: "cloud",
      badge: "Enterprise",
      description: "Accelerate your cloud journey with seamless cloud migrations, automated CI/CD pipelines, Kubernetes containerization, and cost optimization.",
      deliverables: [
        "AWS, Azure & Google Cloud Architecture Design",
        "Automated Infrastructure as Code (Terraform / Pulumi)",
        "Kubernetes Cluster Setup & Zero-Downtime Deployments",
        "24/7 Cloud Monitoring, Log Aggregation & Alerting",
        "Cloud Cost Governance & Security Auditing"
      ],
      idealFor: "Companies scaling up application traffic and requiring enterprise reliability."
    },
    {
      id: "srv-ai-solutions",
      title: "AI, GenAI & Data Intelligence Solutions",
      category: "ai-solutions",
      icon: "sparkles",
      badge: "Next-Gen",
      description: "Leverage artificial intelligence, predictive machine learning models, and custom Retrieval-Augmented Generation (RAG) chatbots to automate business processes.",
      deliverables: [
        "Custom LLM & RAG Application Development",
        "Predictive Analytics & Customer Churn Modeling",
        "Intelligent Document Processing & OCR",
        "Business Intelligence Dashboards (Power BI / Tableau / Custom)",
        "MLOps Pipelines & Automated Retraining"
      ],
      idealFor: "Enterprises wanting data-driven insights and AI automated workflows."
    },
    {
      id: "srv-ui-ux",
      title: "Digital Product Strategy & UI/UX Design",
      category: "design",
      icon: "paint-brush",
      badge: "Human-Centric",
      description: "Craft intuitive, aesthetically stunning, and conversion-optimized digital experiences through rigorous user research, wireframing, and design systems.",
      deliverables: [
        "User Journey Mapping & Competitive UX Audits",
        "Figma Interactive Prototypes & Wireframing",
        "Comprehensive Design Systems & Component Libraries",
        "Accessibility (WCAG 2.1 AA) Compliance",
        "Design-to-Code Implementation Assistance"
      ],
      idealFor: "Founders and Product Managers launching or redesigning digital products."
    },
    {
      id: "srv-cyber-audit",
      title: "Cybersecurity Audits & Vulnerability Assessment",
      category: "security",
      icon: "shield-check",
      badge: "Security",
      description: "Protect your digital assets with comprehensive vulnerability testing, penetration testing, compliance verification, and security posture enhancement.",
      deliverables: [
        "Web Application & API Penetration Testing (VAPT)",
        "Network Infrastructure & Cloud Security Scans",
        "Source Code Security Review (SAST / DAST)",
        "ISO 27001 / GDPR Readiness Checks",
        "Remediation Roadmaps & Security Training for Teams"
      ],
      idealFor: "Organizations handling sensitive customer data and fintech operations."
    },
    {
      id: "srv-it-consulting",
      title: "IT Advisory, Architecture & Staff Augmentation",
      category: "consulting",
      icon: "chart-bar",
      badge: "Advisory",
      description: "Strategic technology advisory to help businesses choose the right technical stacks, optimize IT budgets, and augment engineering teams with elite talent.",
      deliverables: [
        "Technology Stack Selection & Roadmap Planning",
        "Fractional CTO & Technical Advisory Services",
        "Vetted Engineering Team Augmentation",
        "Vendor & Technical Due Diligence",
        "Corporate Training & Upskilling Programs"
      ],
      idealFor: "Organizations undertaking digital transformation or team scaling."
    }
  ],

  internships: [
    {
      id: "int-fullstack",
      title: "Full-Stack Development Internship",
      track: "Software Engineering",
      duration: "3 to 6 Months",
      stipend: "Performance-Based Stipend + PPO Opportunity",
      location: "Hybrid / Remote",
      badge: "Open for Enrollment",
      description: "Work directly on live client sprints and internal product features. Gain hands-on exposure to production Git workflows, Agile ceremonies, and CI/CD pipelines.",
      skills: ["React.js", "Node.js", "REST APIs", "SQL / NoSQL", "Git / GitHub", "Docker"],
      perks: [
        "Real Production Codebase Experience",
        "1-on-1 Mentorship from Senior Tech Leads",
        "Verified Experience Letter & Recommendation",
        "Fast-Track Pre-Placement Offer (PPO) Consideration"
      ]
    },
    {
      id: "int-devops-cloud",
      title: "Cloud & DevOps Operations Internship",
      track: "Cloud Infrastructure",
      duration: "3 to 6 Months",
      stipend: "Performance-Based Stipend + PPO Opportunity",
      location: "Hybrid / Remote",
      badge: "Open for Enrollment",
      description: "Assist in automating deployment pipelines, configuring containerized clusters, writing Terraform scripts, and maintaining 99.9% service uptime.",
      skills: ["AWS", "Docker", "Kubernetes", "Linux", "CI/CD Actions", "Bash"],
      perks: [
        "Live Cloud Sandbox Environments",
        "Hands-on DevOps Incident Drills",
        "Digital Industry Credential",
        "Mentorship from Cloud Solutions Architects"
      ]
    },
    {
      id: "int-data-ai",
      title: "Data Science & AI Research Internship",
      track: "Artificial Intelligence",
      duration: "3 to 6 Months",
      stipend: "Performance-Based Stipend + PPO Opportunity",
      location: "Hybrid / Remote",
      badge: "Open for Enrollment",
      description: "Collaborate on predictive modeling datasets, fine-tuning open-source LLMs, building data scrapers/pipelines, and developing interactive AI demos.",
      skills: ["Python", "Pandas", "Scikit-Learn", "FastAPI", "HuggingFace", "LangChain"],
      perks: [
        "Publishable Project Portfolio",
        "Real-world Data Engineering Pipelines",
        "Career Guidance & Resume Reviews",
        "Industry Networking Opportunities"
      ]
    },
    {
      id: "int-uiux-frontend",
      title: "UI/UX & Frontend Design Internship",
      track: "Product Design",
      duration: "3 to 6 Months",
      stipend: "Performance-Based Stipend + PPO Opportunity",
      location: "Hybrid / Remote",
      badge: "Open for Enrollment",
      description: "Transform user research into pixel-perfect Figma UI kits and convert them into responsive, accessible, interactive web interfaces with modern CSS & JS.",
      skills: ["Figma", "Design Systems", "HTML5/CSS3", "JavaScript/React", "Accessibility"],
      perks: [
        "Build a Live Interactive Portfolio",
        "Direct Collaboration with Product Designers",
        "Design Review & Critique Sessions",
        "Certificate of Merit & Letter of Recommendation"
      ]
    }
  ],

  faqs: [
    {
      id: "faq-1",
      category: "general",
      question: "What is Veda Technology and what services does it provide?",
      answer: "Veda Technology is a premier technology innovation and digital services organization. We specialize in enterprise software development, cloud infrastructure & DevOps, AI/GenAI solutions, UI/UX design, and IT consulting. Simultaneously, we empower students, graduates, and professionals through industry-aligned technology training and immersive hands-on internship programs."
    },
    {
      id: "faq-2",
      category: "programs",
      question: "Who can enroll in Veda Technology training programs?",
      answer: "Our training programs are designed for college students, recent graduates, working IT professionals seeking to upskill, and career changers transitioning into tech. Each program starts with core fundamentals before progressing to advanced architectural concepts, supported by dedicated mentor office hours."
    },
    {
      id: "faq-3",
      category: "programs",
      question: "Do you offer placement support or career guidance after training?",
      answer: "Yes! All full-length programs include comprehensive career acceleration support: resume and portfolio reviews, GitHub profile optimization, 1-on-1 technical mock interviews, behavioral coaching, and direct referrals to our 65+ hiring and industry partner network."
    },
    {
      id: "faq-4",
      category: "internships",
      question: "How does the Veda Technology Internship Program work?",
      answer: "Our internship program is a structured, project-driven experience. Selected interns join active development sprints, work under senior engineering mentors, write production code, solve real-world problems, and participate in daily standups. High-performing interns are regularly considered for Pre-Placement Offers (PPO) or full-time roles."
    },
    {
      id: "faq-5",
      category: "internships",
      question: "What is the duration and mode of the internships?",
      answer: "Internships range from 3 months to 6 months depending on the track and academic schedule. We offer flexible Hybrid and Remote tracks with scheduled live synchronization meetings and mentor code reviews."
    },
    {
      id: "faq-6",
      category: "services",
      question: "How can businesses initiate an IT or software development project with Veda?",
      answer: "Getting started is straightforward: reach out via our contact form or book a free discovery session. Our technical architects will schedule a 30-minute discovery call to analyze your requirements, outline technical feasibility, propose architecture options, and provide a clear project milestone roadmap and estimate."
    },
    {
      id: "faq-7",
      category: "services",
      question: "What security standards and confidentiality measures do you follow?",
      answer: "We sign strict Non-Disclosure Agreements (NDAs) prior to any project discussion. All client code, data pipelines, and infrastructure follow OWASP security standards, role-based access control (RBAC), end-to-end encryption, and industry-standard compliance guidelines."
    },
    {
      id: "faq-8",
      category: "general",
      question: "Are certificates issued by Veda Technology verifiable?",
      answer: "Yes, every graduate from our training and internship programs receives a unique, digitally verifiable certificate with a QR code and online verification link, validating completed project hours, technology competencies, and capstone achievements."
    }
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Aakash Sharma",
      role: "Software Development Engineer at CloudTech",
      program: "Full-Stack Web Development Graduate",
      rating: 5,
      content: "The practical, project-centric approach at Veda Technology changed my career trajectory. Building real microservices and deploying on AWS gave me the exact skills my interviewers were looking for.",
      avatar: "AS"
    },
    {
      id: "test-2",
      name: "Priya Nair",
      role: "DevOps Engineer at FinServe Global",
      program: "Cloud & DevOps Masterclass Alum",
      rating: 5,
      content: "The mentors at Veda don't just teach theory; they teach real production troubleshooting. Setting up Kubernetes clusters and CI/CD pipelines in the labs made me feel like an experienced engineer from day one.",
      avatar: "PN"
    },
    {
      id: "test-3",
      name: "Rajesh Kulkarni",
      role: "Director of Product at NextWave Solutions",
      program: "Enterprise Client - Custom Software Dev",
      rating: 5,
      content: "Veda Technology delivered our SaaS platform ahead of schedule with immaculate code quality and architecture. Their communication, agile sprints, and post-launch support were world-class.",
      avatar: "RK"
    },
    {
      id: "test-4",
      name: "Sneha Patel",
      role: "AI / Data Intern -> Full-time AI Specialist",
      program: "Veda AI Internship Fellow",
      rating: 5,
      content: "During my 6-month internship, I contributed to real RAG LLM pipelines and automated document classification. The mentorship and supportive engineering culture are unmatched.",
      avatar: "SP"
    }
  ]
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.VEDA_DATA = VEDA_DATA;
}
