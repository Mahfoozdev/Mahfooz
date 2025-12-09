import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-6 px-6">
            <div className={`max-w-5xl mx-auto transition-all duration-500 rounded-full border border-white/10 ${isScrolled ? 'bg-surface/70 backdrop-blur-xl py-3 px-8 shadow-2xl' : 'bg-transparent py-4 px-6'}`}>
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="text-xl font-bold font-display tracking-tight hover:text-primary transition-colors">
                        Mahfooz<span className="text-primary">.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" className="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="md:hidden absolute top-24 left-6 right-6 bg-surface/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-200 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
