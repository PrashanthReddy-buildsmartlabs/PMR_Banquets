import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Priya & Rahul",
        role: "Wedding Couple",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
        text: "Our wedding at PMR Banquets was a dream come true. The hall was breathtaking, and the staff went above and beyond to ensure every detail was perfect. The catering was absolutely phenomenal!",
        rating: 5,
    },
    {
        id: 2,
        name: "Sunil Sharma",
        role: "Corporate Event Director",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
        text: "We hosted our annual company gala here, and it exceeded expectations. The AV setup was professional, the valet service was seamless, and the overall ambiance set the perfect tone for our event.",
        rating: 5,
    },
    {
        id: 3,
        name: "Anita Desai",
        role: "Birthday Host",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        text: "I booked a luxury suite for a weekend getaway along with the small banquet hall for my 50th birthday. The rooms are incredibly comfortable and the service is 5-star quality all the way.",
        rating: 5,
    },
    {
        id: 4,
        name: "Vikram Mehta",
        role: "Exhibition Organizer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        text: "The space is incredibly versatile. We were able to transform the hall perfectly for our art exhibition. The lighting options and spacious layout made it an ideal venue. Highly recommended.",
        rating: 5,
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="py-24 px-4 bg-gray-50 dark:bg-brand-black min-h-screen flex items-center transition-colors duration-300">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
                    >
                        Client <span className="text-gold-500">Testimonials</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Don't just take our word for it. Read what our esteemed guests have to say about their experiences.
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden relative px-4 md:px-16 py-10">
                        <Quote className="absolute top-0 left-0 text-gold-500/20 w-32 h-32 -z-10" />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white dark:bg-brand-dark p-8 md:p-12 rounded-3xl shadow-xl dark:shadow-2xl border border-gray-100 dark:border-gray-800"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-gold-500 fill-gold-500" />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-10 leading-relaxed font-light">
                                        "{testimonials[currentIndex].text}"
                                    </p>

                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={testimonials[currentIndex].avatar}
                                            alt={testimonials[currentIndex].name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-gold-500 shadow-md"
                                        />
                                        <div className="text-left">
                                            <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-gold-600 dark:text-gold-500 text-sm font-medium">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        <Quote className="absolute bottom-0 right-0 text-gold-500/20 w-32 h-32 -z-10 rotate-180" />
                    </div>

                    <div className="flex justify-center mt-8 space-x-6">
                        <button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gold-500 hover:border-gold-500 dark:hover:text-gold-500 dark:hover:border-gold-500 transition-all shadow-sm hover:shadow-md"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <div className="flex space-x-2 items-center">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex
                                        ? 'bg-gold-500 w-8'
                                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gold-400'
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gold-500 hover:border-gold-500 dark:hover:text-gold-500 dark:hover:border-gold-500 transition-all shadow-sm hover:shadow-md"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
