import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Contact', path: '/contact' },
];

export default function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Enforce Light Mode explicitly
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.style.colorScheme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.colorScheme = 'light';
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
            <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-brand-black/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white uppercase transition-colors hover:text-gold-500">
                                PMR <span className="text-gold-500">Banquets</span>
                            </Link>
                        </div>

                        <nav className="hidden md:flex space-x-8 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-500 ${location.pathname === link.path
                                        ? 'text-gold-500'
                                        : 'text-gray-600 dark:text-gray-300'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-full text-gray-500 hover:text-gold-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-gold-500"
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        </nav>

                        <div className="flex items-center md:hidden gap-4">
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-full text-gray-500 hover:text-gold-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gold-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-500"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-brand-black overflow-hidden"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === link.path
                                            ? 'text-gold-500 bg-gray-50 dark:bg-gray-800/50'
                                            : 'text-gray-600 dark:text-gray-300 hover:text-gold-500 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-gray-50 dark:bg-brand-dark border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-1">
                            <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white uppercase mb-4 inline-block">
                                PMR <span className="text-gold-500">Banquets</span>
                            </Link>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                Creating unforgettable moments with luxury banquet halls and elegant accommodations in Hyderabad.
                            </p>
                            <div className="flex flex-row space-x-4">
                                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                                <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {navLinks.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-gray-500 dark:text-gray-400 hover:text-gold-500 text-sm transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <MapPin className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                                        Hyderabad, Telangana, India
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                                        <a href="tel:+919876543210" className="hover:text-gold-500 transition-colors">+91 98765 43210</a>
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                                        <a href="mailto:info@pmrbanquets.com" className="hover:text-gold-500 transition-colors">info@pmrbanquets.com</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            &copy; {new Date().getFullYear()} PMR Banquets. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm mt-2 md:mt-0 text-center">
                            Designed for luxury and elegance.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
