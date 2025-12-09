import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl ${className}`}>
            {children}
        </section>
    );
};

export default Section;
