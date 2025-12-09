import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Skills = () => {
    const skills = [
        "JavaScript", "React", "TypeScript", "Node.js", "Next.js", "Vue.js", "PHP", "Laravel", "Java", "Python",
        "MongoDB", "PostgreSQL", "SQL Server", "NoSQL",
        "AWS", "Docker", "Ubuntu", "VPS", "Vercel", "GitHub",
        "Tailwind CSS", "SASS", "Material UI", "GSAP", "Redux"
    ];

    return (
        <Section id="skills" className="bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold font-display mb-4">Technical Arsenal</h2>
                <p className="text-textSecondary max-w-2xl mx-auto">
                    A wide range of tools and technologies I use to build scalable solutions.
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                        className="px-6 py-3 bg-surface border border-white/5 rounded-full text-textSecondary font-medium cursor-default hover:text-white hover:border-primary/50 transition-colors"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
