import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    ArrowRight,
    Loader2,
    CheckCircle,
    XCircle,
    ExternalLink,
    Twitter,
    Instagram
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// --- Helper Functions ---
const getAge = () => {
    const birthDate = new Date('1998-08-21');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

// --- Data ---
const skills = [
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Prisma', category: 'Database' },
    { name: 'Git', category: 'Tools' },
    { name: 'Docker', category: 'Tools' },
    { name: 'AWS', category: 'Tools' },
    { name: 'Framer Motion', category: 'Animation' },
    { name: 'Three.js', category: '3D' },
    { name: 'WebSockets', category: 'Realtime' },
    { name: 'GraphQL', category: 'API' },
    { name: 'REST API', category: 'API' },
    { name: 'Testing Library', category: 'Testing' },
    { name: 'Jest', category: 'Testing' },
    { name: 'Cypress', category: 'Testing' },
];

const projects = [
    {
        id: '1',
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce website with user authentication, product browsing, shopping cart, and checkout functionality.',
        technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Stripe'],
        link: 'https://github.com/yourusername/ecommerce-platform',
        image: '/placeholder.png', // Replace with actual image path
    },
    {
        id: '2',
        title: 'Real-time Chat Application',
        description: 'A real-time chat application with multiple rooms, direct messaging, and user presence features.',
        technologies: ['React', 'Node.js', 'WebSockets', 'Socket.IO'],
        link: 'https://github.com/officialaddyrana/realtime-chat-app',
        image: '/placeholder.png',  // Replace with actual image path
    },
    {
        id: '3',
        title: '3D Portfolio Website',
        description: 'A personal portfolio website with interactive 3D elements and animations.',
        technologies: ['React', 'Three.js', 'Framer Motion'],
        link: 'https://github.com/yourusername/3d-portfolio',
        image: '/placeholder.png', // Replace with actual image path
    },
    {
        id: '4',
        title: 'AI Image Generation App',
        description: 'Web application to generate images from text prompts using AI.',
        technologies: ['Next.js', 'Replicate API', 'Tailwind CSS'],
        link: 'https://github.com/yourusername/ai-image-generator',
        image: '/placeholder.png',
    }
];

const socialLinks = {
    github: 'https://github.com/officialaddyrana',
    linkedin: 'https://linkedin.com/in/ranaadityasingh',
    email: 'adityakumar8485@gmail.com',
    twitter: 'https://twitter.com/adityakumar8485',
    instagram: 'https://instagram.com/officialaddyrana'
};

// --- Components ---
const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="bg-white/5 backdrop-blur-md rounded-lg p-4 shadow-md border border-white/10
                       hover:bg-white/10 hover:scale-[1.02] transition-all duration-300
                       flex items-center justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="text-gray-300">{skill.name}</span>
            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        className="text-xs text-gray-400"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                    >
                        {skill.category}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10
                       overflow-hidden hover:shadow-2xl hover:scale-[1.01] transition-all duration-300
                       group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            className="absolute inset-0 bg-black/70 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-xl font-semibold flex items-center gap-2
                                           hover:text-blue-400 transition-colors"
                            >
                                View Project <ExternalLink className="w-5 h-5" />
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus('idle');
        setErrorMessage('');

        if (!name.trim() || !email.trim() || !message.trim()) {
            setIsSubmitting(false);
            setSubmissionStatus('error');
            setErrorMessage('Please fill in all fields.');
            return;
        }

        // Basic email validation
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
            setIsSubmitting(false);
            setSubmissionStatus('error');
            setErrorMessage('Invalid email address.');
            return;
        }

        // Simulate an API call
        try {
            // Replace this with your actual API endpoint
            // await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ name, email, message }),
            // });
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2s delay

            // Simulate success or failure
            const success = Math.random() > 0.2; // 80% chance of success
            if (success) {
                setSubmissionStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error('Failed to send message.');
            }

        } catch (error: any) {
            setSubmissionStatus('error');
            setErrorMessage(error.message || 'An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                </label>
                <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="mt-1 bg-white/5 text-white border-white/10"
                    disabled={isSubmitting}
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                </label>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-1 bg-white/5 text-white border-white/10"
                    disabled={isSubmitting}
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                </label>
                <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..."
                    className="mt-1 bg-white/5 text-white border-white/10 min-h-[120px]"
                    disabled={isSubmitting}
                />
            </div>
            <Button
                type="submit"
                className="w-full bg-blue-500/90 text-white hover:bg-blue-500
                           transition-colors duration-300 py-3 flex items-center justify-center gap-2"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin w-5 h-5" />
                        Sending...
                    </>
                ) : (
                    'Send Message'
                )}
            </Button>
            <AnimatePresence>
                {submissionStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-green-500/20 text-green-400 p-3 rounded-md flex items-center gap-2"
                    >
                        <CheckCircle className="w-5 h-5" />
                        Message sent successfully!
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {submissionStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-red-500/20 text-red-400 p-3 rounded-md flex items-center gap-2"
                    >
                        <XCircle className="w-5 h-5" />
                        {errorMessage}
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
};

// --- Main App Component ---
const PortfolioApp = () => {
    const age = getAge();

    return (
        <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen">
            <header className="py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-white">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Tobi
                        </span>{' '}
                        Lawal
                    </h1>
                    <div className="flex gap-6">
                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href={`mailto:${socialLinks.email}`}
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                        <a
                            href={socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a
                            href={socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </header>

            <main className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Hero Section */}
                    <section className="text-center py-16">
                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Hi, I&apos;m{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Tobi Lawal
                            </span>
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-300 mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            A Full-Stack Developer passionate about creating
                            <span className="text-white font-semibold">
                                {' '}engaging and performant web experiences.
                            </span>
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 100 }}
                        >
                            <Button
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3
                                           rounded-full shadow-lg hover:shadow-xl hover:scale-105
                                           transition-all duration-300 flex items-center gap-3"
                            >
                                <a href="#projects" className="no-underline text-white">
                                    See My Work
                                </a>
                                <ArrowRight className="w-6 h-6" />
                            </Button>
                        </motion.div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="py-16">
                        <h2 className="text-3xl font-semibold text-white mb-8 text-center">About Me</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                className="rounded-lg overflow-hidden shadow-lg"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/profile-placeholder.jpg"  // Replace with actual image path
                                    alt="Tobi Lawal"
                                    className="w-full h-auto"
                                />
                            </motion.div>
                            <div className="space-y-4">
                                <motion.p
                                    className="text-gray-300 text-lg"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    Hello! I&apos;m Tobi, a {age}-year-old full-stack developer based in Lagos, Nigeria.
                                    I have a passion for building web applications that are not only functional but also
                                    provide a great user experience.
                                </motion.p>
                                <motion.p
                                    className="text-gray-300 text-lg"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    I enjoy working with modern technologies like React, Node.js, and Next.js to create
                                    scalable and maintainable solutions.  I am always eager to learn new things and take on
                                    new challenges.
                                </motion.p>
                                <motion.p
                                    className="text-gray-300 text-lg"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    When I&apos;m not coding, you can find me playing video games, watching movies, or
                                    exploring new places.
                                </motion.p>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section id="skills" className="py-16">
                        <h2 className="text-3xl font-semibold text-white mb-8 text-center">Skills</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="py-16">
                        <h2 className="text-3xl font-semibold text-white mb-8 text-center">Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-16">
                        <h2 className="text-3xl font-semibold text-white mb-8 text-center">Contact Me</h2>
                        <div className="max-w-md mx-auto">
                            <ContactForm />
                        </div>
                    </section>
                </div>
            </main>

            <footer className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Tobi Lawal. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default PortfolioApp;
