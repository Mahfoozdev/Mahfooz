import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from "../../../public/profilePic.jpg"

const Profile = () => {
    return (
        <section id="profile" className="py-24 bg-surface text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-surface opacity-50 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-12">
                        Hi ! Meet <span className="text-primary">Me</span>
                    </h2>

                    <SpotlightCard>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden bg-surfaceHighlight border border-white/10 group">
                            {/* Placeholder Image - User should replace this */}
                            <img
                                src={profilePic}
                                alt="Developer Profile"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                            <div className="absolute bottom-6 left-6 text-left">
                                <p className="text-white text-xl font-bold">Muhammad Mahfooz Ul Haq</p>
                                <p className="text-accent font-bold text-sm">Full Stack Engineer</p>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>
        </section>
    );
};

// Spotlight Card Component
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            className={`relative rounded-3xl border border-white/10 bg-neutral-900 overflow-hidden p-2 ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
                }}
            />

            {/* Content */}
            <div className="relative h-full w-full">{children}</div>
        </div>
    );
};

export default Profile;
