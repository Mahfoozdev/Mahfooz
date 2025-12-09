import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';
import DotGrid from '../react-bits/DotGrid';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
            {/* React Bits Background: DotGrid */}
            <div className="absolute inset-0 z-0 opacity-80">
                <DotGrid
                    dotSize={4}
                    gap={20}
                    baseColor="#3b82f6"
                    activeColor="#8b5cf6"
                    proximity={200}
                    shockRadius={400}
                />
            </div>

            {/* Radial overlay to fade edges */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 text-sm font-medium mb-8"
                    >
                        Full Stack Developer
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 leading-none tracking-tight text-white">
                        Turning Ideas into <br />
                        <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                            Digital Reality
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        I construct robust, scalable web applications with pixel-perfect precision.
                        Blending advanced engineering with premium design.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                        <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects <ArrowRight size={20} />
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    </div>

                    <div className="flex justify-center gap-6 text-gray-400">
                        <a href="https://github.com/Mahfoozdev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300"><Github size={22} /></a>
                        <a href="https://www.linkedin.com/in/mahfooz-ul-haq-10bb67346/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300"><Linkedin size={22} /></a>
                        <a href="mailto:mahfoozdoit@hmail.com" className="hover:text-white transition-colors duration-300"><Mail size={22} /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
