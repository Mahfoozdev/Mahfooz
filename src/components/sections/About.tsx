import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
    const experiences = [
        {
            role: 'Full Stack Software Engineer',
            company: 'Softech UK Lahore',
            period: '08/2025 - Present',
            desc: 'Developing comprehensive applications and ERP systems. Creating responsive front-end interfaces and scalable back-end architectures using React.js, Laravel, Node.js, PHP, JavaScript, TypeScript, MySQL, PostgreSQL, and MongoDB.',
        },
        {
            role: 'Full Stack Developer',
            company: 'Mind It Lahore',
            period: '01/2025 - 07/2025',
            desc: 'Led web application development with React.js and Tailwind. Integrated robust backend solutions using Node.js. Utilized Laravel, Vue.js, and Inertia.js for ERP systems.',
        }
    ];

    const education = [
        {
            degree: 'Bachelors in Computer Science',
            school: 'Punjab University Wahdat Road',
            period: '03/2022 - 03/2026',
        }
    ];

    return (
        <Section id="about" className="bg-surface/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold font-display mb-4">About Me</h2>
                <p className="text-textSecondary max-w-2xl mx-auto">
                    Passionate Full-Stack Web Developer with expertise in building robust and scalable applications.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Experience */}
                <div>
                    <h3 className="flex items-center gap-2 text-2xl font-bold mb-8 text-primary">
                        <Briefcase /> Experience
                    </h3>
                    <div className="space-y-6">
                        {experiences.map((exp, idx) => (
                            <Card key={idx} hoverEffect className="relative border-l-4 border-l-primary">
                                <h4 className="text-xl font-bold">{exp.role}</h4>
                                <p className="text-secondary font-medium mb-2">{exp.company}</p>
                                <div className="flex items-center gap-2 text-sm text-textSecondary mb-4">
                                    <Calendar size={14} /> {exp.period}
                                </div>
                                <p className="text-textSecondary leading-relaxed">{exp.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h3 className="flex items-center gap-2 text-2xl font-bold mb-8 text-secondary">
                        <GraduationCap /> Education
                    </h3>
                    <div className="space-y-6">
                        {education.map((edu, idx) => (
                            <Card key={idx} hoverEffect className="relative border-l-4 border-l-secondary">
                                <h4 className="text-xl font-bold">{edu.degree}</h4>
                                <p className="text-primary font-medium mb-2">{edu.school}</p>
                                <div className="flex items-center gap-2 text-sm text-textSecondary">
                                    <Calendar size={14} /> {edu.period}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
