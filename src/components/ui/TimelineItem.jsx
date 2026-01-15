import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

export const TimelineItem = ({ role, company, period, desc, skills, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative pl-8 pb-12 border-l border-white/10 last:pb-0 last:border-0 group"
    >
        {/* Bolinha da linha do tempo com efeito neon */}
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500 border border-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:scale-150 group-hover:bg-cyan-400 transition-all duration-300" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-cyan-300 transition-all">
                {role}
            </h3>
            <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5 flex items-center gap-2 w-fit mt-1 sm:mt-0">
        <Calendar size={12} /> {period}
      </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-indigo-400 mb-3 font-medium">
            <Building2 size={14} />
            {company}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-2xl">
            {desc}
        </p>

        <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
                <span key={skill} className="text-[10px] text-indigo-200/70 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
          {skill}
        </span>
            ))}
        </div>
    </motion.div>
);