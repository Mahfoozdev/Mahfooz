import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, MapPin, Phone, Loader2, Check } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const subject = `Portfolio Contact from ${formData.firstName} ${formData.lastName}`;
        const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:mahfoozdoit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Section id="contact" className="bg-background relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold font-display mb-6">Let's Create <br />Something Amazing</h2>
                    <p className="text-textSecondary mb-8 text-lg">
                        I'm currently available for freelance work or full-time opportunities.
                        If you have a project that needs some creative touch, let's chat.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-textSecondary hover:text-white transition-colors">
                            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary">
                                <Mail />
                            </div>
                            <div>
                                <p className="text-sm text-textSecondary">Email Me</p>
                                <p className="font-medium">
                                    <a href="mailto:mahfoozdoit@gmail.com" className="hover:text-white transition-colors">
                                        mahfoozdoit@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-textSecondary hover:text-white transition-colors">
                            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-secondary">
                                <Phone />
                            </div>
                            <div>
                                <p className="text-sm text-textSecondary">Call Me</p>
                                <p className="font-medium">03207803941</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-textSecondary hover:text-white transition-colors">
                            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-accent">
                                <MapPin />
                            </div>
                            <div>
                                <p className="text-sm text-textSecondary">Location</p>
                                <p className="font-medium">Lahore, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface p-8 rounded-3xl border border-white/5"
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-textSecondary">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-textSecondary">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-textSecondary">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-textSecondary">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                placeholder="Tell me about your project..."
                                required
                            />
                        </div>
                        <Button className="w-full" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="animate-spin" size={20} /> Sending...
                                </span>
                            ) : isSubmitted ? (
                                <span className="flex items-center gap-2 text-green-400">
                                    <Check className="animate-bounce" size={20} /> Message Sent!
                                </span>
                            ) : (
                                "Send Message"
                            )}
                        </Button>
                    </form>
                </motion.div>
            </div>

            <footer className="mt-20 pt-8 border-t border-white/5 text-center text-textSecondary text-sm">
                <p>&copy; {new Date().getFullYear()} Mahfoozdev. All rights reserved.</p>
            </footer>
        </Section>
    );
};

export default Contact;
