import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -10, transition: { duration: 0.3 } } : {}}
            className={`
        bg-surface/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl 
        shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300
        ${className}
      `}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
