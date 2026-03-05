import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Star } from 'lucide-react';

const heroImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg"
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden bg-brand-black">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt="PMR Banquets Venue"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-4xl mx-auto px-4 text-center z-10">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
                        >
                            Book <span className="text-gold-500">PMR Banquets</span> & Luxury Rooms
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md"
                        >
                            Experience unparalleled luxury and create unforgettable memories for your special events and getaways.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-brand-black font-semibold rounded-full hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/20 group">
                                Explore Services
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-colors shadow-lg">
                                Book Now
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Teaser */}
            <section className="py-24 bg-white dark:bg-brand-black transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeUp} className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">What We Offer</motion.h2>
                        <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white capitalize">Exquisite Spaces for Every Occasion</motion.h3>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        {/* Banquet Teaser */}
                        <motion.div variants={fadeUp} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000"
                                    alt="Grand Banquet Hall"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h4 className="text-2xl font-bold text-white mb-2">Grand Banquet Halls</h4>
                                    <p className="text-gold-400 font-medium">Perfect for Weddings & Corporate Events</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                                Our opulent banquet halls are custom-designed to host grand celebrations. High ceilings, crystal chandeliers, and state-of-the-art acoustics create an enchanting atmosphere.
                            </p>
                            <Link to="/services" className="inline-flex items-center text-gold-600 dark:text-gold-500 font-medium hover:text-gold-700 transition-colors">
                                Discover Halls <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>

                        {/* Rooms Teaser */}
                        <motion.div variants={fadeUp} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1000"
                                    alt="Luxury Suite"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h4 className="text-2xl font-bold text-white mb-2">Luxury Rooms & Suites</h4>
                                    <p className="text-gold-400 font-medium">Premium Comfort & Amenities</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                                Experience unparalleled comfort in our luxury accommodations. Each room features premium bedding, modern amenities, and elegant decor for a restful stay.
                            </p>
                            <Link to="/services" className="inline-flex items-center text-gold-600 dark:text-gold-500 font-medium hover:text-gold-700 transition-colors">
                                View Rooms <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quick CTA */}
            <section className="py-20 bg-gray-50 dark:bg-brand-dark transition-colors border-t border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <Star className="w-12 h-12 text-gold-500 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to plan your unforgettable event?</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Our dedicated team of professionals is here to turn your vision into reality.</p>
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-black dark:bg-white text-white dark:text-brand-black font-bold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
                            Contact Our Planners
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
