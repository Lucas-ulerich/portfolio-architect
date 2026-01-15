import {
    Code2, Leaf, Database, Cpu, Cloud, Container,
    ShieldCheck, Bot, Server, Wallet, Home, Zap,
    Terminal, GitBranch, Layers, Workflow // <--- Novos ícones importados
} from 'lucide-react';

export const profile = {
    name: "Lucas Ulerich",
    role: "Backend Developer",
    tagline: "Desenvolvimento Java Robusto & Soluções com IA.",

    about: "Minha jornada não começou com código, mas com uma chave de fenda. Sempre fui o curioso que desmontava computadores e testava distros Linux para entender como as coisas funcionavam 'debaixo do capô'. Essa paixão por hardware e sistemas evoluiu para uma carreira sólida em Backend. Hoje, uso essa mesma curiosidade para arquitetar soluções robustas em Java e Python para grandes empresas. Quando não estou codando, provavelmente estou otimizando meu Home Lab, jogando algum clássico ou fazendo trilhas.",

    social: {
        linkedin: "https://www.linkedin.com/in/lucas-ulerich/",
        github: "https://github.com/Lucas-ulerich",
        email: "mailto:lucas.ulerich@outlook.com"
    },

    // --- TECH STACK COMPLETA ---
    // Adicionei Linux, Git, Redis e CI/CD para mostrar que você domina a infra também
    stack: [
        { name: "Java 21", icon: Code2, color: "text-red-500" },
        { name: "Spring Boot", icon: Leaf, color: "text-emerald-500" },
        { name: "Python", icon: Cpu, color: "text-yellow-400" },
        { name: "FastAPI", icon: Zap, color: "text-teal-400" },
        { name: "IA & RAG", icon: Bot, color: "text-purple-400" },
        { name: "Linux", icon: Terminal, color: "text-slate-200" }, // Essencial para seu perfil Home Lab
        { name: "AWS", icon: Cloud, color: "text-orange-400" },
        { name: "Docker", icon: Container, color: "text-blue-500" },
        { name: "PostgreSQL", icon: Database, color: "text-blue-300" },
        { name: "Redis", icon: Layers, color: "text-red-400" }, // Valida o projeto do Encurtador
        { name: "Git", icon: GitBranch, color: "text-orange-500" },
        { name: "CI/CD", icon: Workflow, color: "text-cyan-400" }, // Valida experiência com Jenkins/Deploy
    ],

    certifications: [
        {
            name: "Oracle Certified Associate, Java SE 8 Programmer",
            issuer: "Oracle",
            date: "Dez 2022"
        },
        {
            name: "PCEP™ – Certified Entry-Level Python Programmer",
            issuer: "Python Institute",
            date: "Mai 2024"
        },
        {
            name: "Scrum Foundation Professional",
            issuer: "CertiProf",
            date: "Abr 2023"
        }
    ],

    career: [
        {
            role: "Backend Developer",
            company: "TO Brasil / CNSeg",
            period: "Abr 2025 - Momento",
            desc: "Atuação na modernização da plataforma nacional de apólices da CNSeg.",
            skills: ["Java", "Spring Boot", "PostgreSQL", "Clean Code"]
        },
        {
            role: "Backend Developer",
            company: "TO Brasil / Ortocenter",
            period: "Jun 2024 - Fev 2025",
            desc: "Construção da nova plataforma clínica, módulos de agendamento e prontuário.",
            skills: ["Java", "Spring Boot", "AWS S3", "PostgreSQL"]
        },
        {
            role: "Desenvolvedor Backend & IA",
            company: "TO Brasil / Prio",
            period: "Set 2024 - Jan 2025",
            desc: "Construção de plataforma de IA conversacional inspirada no ChatGPT.",
            skills: ["Python", "FastAPI", "RAG", "NVIDIA NIM"]
        },
        {
            role: "Automação de Processos",
            company: "TO Brasil / Valgroup",
            period: "Jul 2024 - Ago 2024",
            desc: "Desenvolvimento de automações RPA com Python e Automation Anywhere.",
            skills: ["Python", "RPA", "Automation Anywhere"]
        },
        {
            role: "Backend Developer",
            company: "TO Brasil / RioCard",
            period: "Jan 2023 - Jun 2023",
            desc: "Criação de APIs RESTful financeiras na AWS.",
            skills: ["Java", "Spring Boot", "AWS", "Swagger"]
        },
        {
            role: "Sustentação de Sistemas",
            company: "TO Brasil / Editora Globo",
            period: "Mai 2022 - Abr 2025",
            desc: "Sustentação crítica de sistemas legados de alta volumetria.",
            skills: ["Java", "SQL Server", "MySQL", "Jenkins"]
        }
    ],

    projects: {
        corporate: [
            {
                title: "Plataforma RNPA",
                client: "CNSeg",
                desc: "Modernização da plataforma nacional de apólices.",
                fullDesc: "Atuo como desenvolvedor backend na modernização da plataforma nacional de apólices da CNSeg. Responsável por criação e revisão de endpoints em Java com Spring Boot, integração com banco PostgreSQL, testes automatizados, versionamento em Git e aplicação de boas práticas de Clean Code e revisão de PRs técnicas.",
                tags: ["Java", "Spring Boot", "PostgreSQL", "Clean code", "Git"],
                icon: ShieldCheck
            },
            {
                title: "Plataforma Clínica",
                client: "Ortocenter",
                desc: "Backend para agendamento, prontuário e integração.",
                fullDesc: "Atuei como desenvolvedor backend na construção da nova plataforma clínica da Ortocenter, focado em módulos de agendamento, prontuário e integração com convênios. Desenvolvi endpoints complexos com regras de negócio específicas, utilizando Spring Boot com autenticação JWT, JPA para persistência e PostgreSQL como banco de dados. Também implementei integração com a AWS S3 para envio e armazenamento seguro de arquivos clínicos.",
                tags: ["Java", "Spring Boot", "JWT", "JPA", "PostgreSQL", "AWS S3"],
                icon: Database
            },
            {
                title: "Plataforma de IA Conversacional",
                client: "Prio",
                desc: "Chatbot corporativo com RAG e tecnologias NVIDIA.",
                fullDesc: "Trabalhei na construção de uma plataforma de IA conversacional inspirada no ChatGPT, utilizando Python, FastAPI e tecnologias da NVIDIA (NIM, Triton Inference Server). Responsável por conectar LLMs com bases de dados empresariais via RAG (Retrieval-Augmented Generation) e estruturar o backend da solução.",
                tags: ["Python", "FastAPI", "NVIDIA NIM", "RAG", "LLM", "Git"],
                icon: Bot
            },
            {
                title: "Automação de Processos",
                client: "Valgroup",
                desc: "RPA com Python para edição e fluxo de PDFs.",
                fullDesc: "Atuei no desenvolvimento de automações de processos (RPA) com Python, utilizando a plataforma Automation Anywhere. Criei um script customizado para edição de PDFs que solucionou uma limitação crítica das ferramentas do mercado, sendo integrado ao fluxo automatizado da empresa. A solução aumentou a eficiência do processo e eliminou dependência de soluções externas.",
                tags: ["Python", "RPA", "Git", "Automation Anywhere"],
                icon: Cpu
            },
            {
                title: "Plataforma RioCard",
                client: "RioCard",
                desc: "APIs financeiras 100% em nuvem AWS.",
                fullDesc: "Participei da criação de APIs RESTful usando Java com Spring Boot, integrando módulos financeiros da plataforma RioCard com serviços na AWS (EC2, RDS). Atuei na arquitetura de endpoints seguros, documentação via Swagger e integração com serviços legados. Ambiente 100% em nuvem.",
                tags: ["Java", "Spring Boot", "API REST", "AWS", "Swagger", "Git"],
                icon: Wallet
            },
            {
                title: "Sustentação de Sistemas",
                client: "Editora Globo",
                desc: "Manutenção e otimização de legados críticos.",
                fullDesc: "Atuei na sustentação de sistemas legados desenvolvidos em Java, focado em correções críticas, refatoração de código e melhorias contínuas. Trabalhei com bancos de dados SQL Server e MySQL em ambientes distintos, realizando análise de logs, resolução de bugs em produção e suporte a incidentes críticos. Colaborei diretamente com analistas e times funcionais da Editora Globo para garantir a estabilidade e performance dos sistemas.",
                tags: ["Java", "SQL Server", "MySQL", "Git", "Jenkins", "GO CD"],
                icon: Server
            }
        ],
        personal: [
            {
                title: "Encurtador de URL Distribuído",
                desc: "Sistema escalável de encurtamento de URLs (Read-Heavy).",
                fullDesc: "API de alta performance para encurtamento de URLs. Arquitetura desenhada para suportar alta carga de leitura (Read-Heavy) utilizando cache distribuído com Redis (padrão Cache-Aside), Docker para containerização e algoritmo Base62 para geração de hashes curtos e eficientes.",
                tags: ["Java 21", "Redis", "Docker", "Base62", "System Design"],
                icon: Cloud,
                githubLink: "https://github.com/Lucas-ulerich/encurtador-url-distribuido"
            }
        ]
    },

    posts: []
};