import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Paytime',
            category: 'FinTech',
            tech: ['React', 'Node.js', 'SQL'],
            description: 'Payroll management system used by companies to generate payrolls of clients and see for financial managment for salaries salary slips etc.',
        },
        {
            title: 'Rentroos',
            category: 'Real Estate',
            tech: ['React', 'Node.js', 'MongoDB'],
            description: 'Platform allowing users to see the places or homes and they can buy from that platform.',
        },
        {
            title: 'E-commerce Web App',
            category: 'Full Stack',
            tech: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'MUI'],
            description: 'A feature-rich E-commerce application with secure authentication, payment processing, and scalable architecture.',
        },
        {
            title: 'Payroll Orbit',
            category: 'SAAS',
            tech: ['React', 'Node.js', 'PostgreSQL'],
            description: 'Comprehensive payroll management SAAS solution designed for varied business needs.',
        },
        {
            title: 'Metax Banking',
            category: 'ERP',
            tech: ['React', 'Java', 'SQL Server'],
            description: 'Robust ERP system for banking operations handling complex data modeling and secure transactions.',
        },
        {
            title: 'Compito',
            category: 'SAAS',
            tech: ['Vue.js', 'Laravel', 'MySQL'],
            description: 'Task management platform optimizing team collaboration and productivity.',
        },
    ];

    return (
        <Section id="projects" className="bg-surface/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold font-display mb-4">Featured Projects</h2>
                <p className="text-textSecondary max-w-2xl mx-auto">
                    Showcasing my expertise in Full Stack Development through real-world applications.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} hoverEffect className="group">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">{project.title}</h3>
                            </div>
                            <div className="flex gap-2">
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors"><Github size={18} /></a>
                                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors"><ExternalLink size={18} /></a>
                            </div>
                        </div>

                        <p className="text-textSecondary mb-6 line-clamp-3">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-textSecondary border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-12 flex justify-center gap-4">
                <Button variant="outline" onClick={() => window.open('https://mahfooz-nu.vercel.app/#projects', '_blank')}>Previous Projects</Button>
                <Button variant="outline" onClick={() => window.open('https://github.com/Mahfoozdev', '_blank')}>View More on GitHub</Button>
            </div>
        </Section>
    );
};

export default Projects;
