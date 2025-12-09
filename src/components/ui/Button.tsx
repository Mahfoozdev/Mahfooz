import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
    const baseStyles = 'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2';

    const variants = {
        primary: 'bg-primary hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/30',
        secondary: 'bg-secondary hover:bg-violet-600 text-white shadow-lg hover:shadow-violet-500/30',
        outline: 'border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
