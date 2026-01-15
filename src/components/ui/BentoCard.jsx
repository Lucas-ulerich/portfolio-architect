import { motion } from 'framer-motion';

export const BentoCard = ({ children, className, delay = 0, ...props }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={`glass-card rounded-2xl p-6 relative z-10 flex flex-col transition-all duration-300 hover:bg-white/10 ${className}`}
        {...props}
    >
        {children}
    </motion.div>
);