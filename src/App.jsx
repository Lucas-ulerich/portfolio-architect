import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Code2, BookOpen, User, Building2, Laptop, Github, Linkedin, Mail,
    ExternalLink, ArrowRight, Briefcase, X, Loader2, Award
} from 'lucide-react';

import { BackgroundBlobs } from './components/ui/BackgroundBlobs';
import { BentoCard } from './components/ui/BentoCard';
import { ScrambleTitle } from './components/ui/ScrambleTitle';
import { TimelineItem } from './components/ui/TimelineItem';
import { profile } from './content/data';
import { useMediumPosts } from './hooks/useMediumPosts';

// --- Componente de Navegação ---
const NavTabs = ({ active, setActive }) => (
    <div className="flex flex-wrap justify-center gap-2 mb-10 bg-slate-900/50 p-1.5 rounded-full border border-white/5 backdrop-blur-sm sticky top-4 z-20 shadow-xl shadow-black/20">
        {[
            { id: 'about', icon: User, label: 'Perfil' },
            { id: 'projects', icon: Code2, label: 'Projetos' },
            { id: 'career', icon: Briefcase, label: 'Carreira' },
            { id: 'posts', icon: BookOpen, label: 'Posts' }
        ].map(tab => (
            <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full text-sm font-medium transition-all relative ${active === tab.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
                {active === tab.id && (
                    <motion.div layoutId="activeTab" className="absolute inset-0 bg-white/10 border border-white/10 rounded-full backdrop-blur-md" />
                )}
                <span className="relative z-10 flex items-center gap-2"><tab.icon size={16} /> {tab.label}</span>
            </button>
        ))}
    </div>
);

// --- Modal de Detalhes do Projeto ---
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                className="bg-slate-900 border border-white/10 w-full max-w-2xl rounded-2xl p-6 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                    <X size={20} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                        <project.icon size={28} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-medium text-slate-400">{project.client || "Projeto Pessoal"}</span>
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded text-indigo-300 hover:text-white transition-colors">
                                    <Github size={12}/> Repo
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5 mb-6">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Descrição Técnica</h3>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                        {project.fullDesc}
                    </p>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded border border-emerald-500/20">
                {tag}
              </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- Componente Principal ---
function App() {
    const [activeTab, setActiveTab] = useState('about');
    const [selectedProject, setSelectedProject] = useState(null);

    // ==================================================================================
    // ATENÇÃO AQUI: Se não carregar, troque 'lucas-ulerich' pelo seu usuário do Medium correto.
    // Teste 'lucasulerich' (sem traço) ou 'Lucas-ulerich' (maiúsculo) se falhar.
    // ==================================================================================
    const { posts: mediumPosts, loading: loadingPosts } = useMediumPosts('lucas-ulerich');

    const allPosts = [...(profile.posts || []), ...mediumPosts];

    return (
        <div className="min-h-screen p-4 md:pt-16 flex flex-col items-center font-sans">
            <BackgroundBlobs />

            <AnimatePresence>
                {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            </AnimatePresence>

            <div className="max-w-4xl w-full relative z-10 flex flex-col items-center flex-1">
                {/* HERO HEADER */}
                <div className="text-center mb-10 flex flex-col items-center animate-fade-in-up">
                    <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 p-1 shadow-lg shadow-indigo-500/20">
                        <img
                            src="https://github.com/Lucas-ulerich.png"
                            className="w-full h-full rounded-full bg-slate-900 object-cover"
                            alt="Lucas Ulerich"
                        />
                    </div>

                    <ScrambleTitle text={profile.name} className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-200" />

                    <p className="text-lg text-slate-400 max-w-xl text-center leading-relaxed">
                        {profile.tagline}
                    </p>

                    <div className="flex gap-4 mt-6">
                        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"><Linkedin size={22} /></a>
                        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"><Github size={22} /></a>
                        <a href={profile.social.email} className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors"><Mail size={22} /></a>
                    </div>
                </div>

                <NavTabs active={activeTab} setActive={setActiveTab} />

                <div className="w-full min-h-[400px]">
                    <AnimatePresence mode="wait">

                        {/* --- ABA PERFIL (Home) --- */}
                        {activeTab === 'about' && (
                            <motion.div key="about" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                                <BentoCard className="bg-gradient-to-br from-indigo-900/10 to-transparent border-indigo-500/10">
                                    <h3 className="text-sm font-bold text-indigo-300 uppercase mb-4 flex items-center gap-2"><User size={16}/> Bio</h3>
                                    <p className="text-slate-300 leading-relaxed text-lg">{profile.about}</p>
                                </BentoCard>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <BentoCard>
                                        <h3 className="text-sm font-bold text-slate-500 uppercase mb-6 flex items-center gap-2"><Code2 size={16}/> Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {profile.stack.map(tech => (
                                                <div key={tech.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-colors group">
                                                    <tech.icon size={16} className={tech.color} />
                                                    <span className="text-xs font-medium text-slate-300 group-hover:text-white">{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </BentoCard>

                                    <BentoCard>
                                        <h3 className="text-sm font-bold text-emerald-400 uppercase mb-6 flex items-center gap-2"><Award size={16}/> Certificações</h3>
                                        <div className="space-y-4">
                                            {profile.certifications.map((cert, i) => (
                                                <div key={i} className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                                                    <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                                                    <div>
                                                        <h4 className="text-sm font-bold text-slate-200">{cert.name}</h4>
                                                        <p className="text-xs text-slate-500">{cert.issuer} • {cert.date}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </BentoCard>
                                </div>
                            </motion.div>
                        )}

                        {/* --- ABA PROJETOS --- */}
                        {activeTab === 'projects' && (
                            <motion.div key="projects" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-12">
                                <div>
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex gap-2 px-2 items-center">
                                        <Building2 size={16} className="text-indigo-400"/> Experiência Corporativa
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {profile.projects.corporate.map((project, i) => (
                                            <BentoCard key={i} className="group cursor-pointer hover:border-indigo-500/30" onClick={() => setSelectedProject(project)}>
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-colors"><project.icon size={20} /></div>
                                                    <span className="text-[10px] font-bold uppercase text-slate-500 border border-slate-700 px-2 py-1 rounded-full">{project.client}</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                                                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.desc}</p>
                                                <div className="mt-auto flex justify-between items-center">
                                                    <div className="flex gap-1">{project.tags.slice(0,2).map(tag => <span key={tag} className="text-[10px] bg-white/5 px-2 py-1 rounded text-slate-400">#{tag}</span>)}</div>
                                                    <ArrowRight size={16} className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                                </div>
                                            </BentoCard>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex gap-2 px-2 items-center pt-8 border-t border-white/10">
                                        <Laptop size={16} className="text-emerald-400"/> Projetos Pessoais & Open Source
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {profile.projects.personal.map((project, i) => (
                                            <BentoCard key={i} className="group cursor-pointer hover:border-emerald-500/30" onClick={() => setSelectedProject(project)}>
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors"><project.icon size={20} /></div>
                                                    <Github size={18} className="text-slate-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                                                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.desc}</p>
                                                <div className="mt-auto flex gap-1">
                                                    {project.tags.map(tag => <span key={tag} className="text-[10px] bg-emerald-500/5 text-emerald-300/70 border border-emerald-500/10 px-2 py-1 rounded">#{tag}</span>)}
                                                </div>
                                            </BentoCard>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* --- ABA CARREIRA --- */}
                        {activeTab === 'career' && (
                            <motion.div
                                key="career"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-white/5 backdrop-blur-md"
                            >
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-10 flex gap-2 items-center">
                                    <Briefcase size={18} className="text-indigo-400"/> Jornada Profissional
                                </h3>
                                <div className="pl-2">
                                    {profile.career.map((item, i) => (
                                        <TimelineItem key={i} index={i} {...item} />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* --- ABA POSTS --- */}
                        {activeTab === 'posts' && (
                            <motion.div key="posts" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid gap-4">

                                {loadingPosts && (
                                    <div className="flex justify-center py-10 text-slate-500">
                                        <Loader2 className="animate-spin" /> Buscando artigos no Medium...
                                    </div>
                                )}

                                {allPosts.map((post, i) => (
                                    <BentoCard key={i} className="flex-row items-center gap-6 py-6 cursor-pointer group border-transparent hover:border-indigo-500/30" onClick={() => window.open(post.link, '_blank')}>
                                        <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-white/5 text-slate-500 font-mono text-xs border border-white/5 uppercase">
                                            <span className="font-bold text-lg text-indigo-400">{post.date.split(' ')[0]}</span>
                                            <span>{post.date.split(' ')[1]}</span>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider mb-1 block">{post.platform}</span>
                                            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">{post.title}</h3>
                                            <p className="text-sm text-slate-400 line-clamp-2">{post.desc}</p>
                                        </div>
                                        <div className="p-3 rounded-full bg-white/5 text-slate-500 group-hover:text-white group-hover:bg-indigo-600 transition-all">
                                            <ExternalLink size={20} />
                                        </div>
                                    </BentoCard>
                                ))}
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>

                {/* --- FOOTER --- */}
                <footer className="w-full mt-24 pt-8 pb-8 border-t border-white/5 flex flex-col items-center text-center">
                    <p className="text-slate-500 text-sm mb-4">
                        © 2026 Lucas Ulerich. Desenvolvido com React, Tailwind & Café ☕
                    </p>
                    <div className="flex gap-6">
                        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">LinkedIn</a>
                        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">GitHub</a>
                        <a href={profile.social.email} className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">Email</a>
                    </div>
                </footer>

            </div>
        </div>
    );
}

export default App;