import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/1.jpg"
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showAllMobile, setShowAllMobile] = useState(false);

    return (
        <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
                >
                    Our <span className="text-gold-500">Gallery</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    A glimpse into the majestic moments and elegant spaces at PMR Banquets.
                </motion.p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {galleryImages.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer ${!showAllMobile && index >= 4 ? 'hidden sm:block' : ''
                            }`}
                        onClick={() => setSelectedImage(src)}
                    >
                        <img
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">View Larger</span>
                        </div>

                        {/* Mobile Overlay on 4th image */}
                        {!showAllMobile && index === 3 && galleryImages.length > 4 && (
                            <div
                                className="sm:hidden absolute inset-0 bg-brand-black/70 backdrop-blur-[2px] flex flex-col items-center justify-center text-white z-10 transition-opacity hover:bg-brand-black/80"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowAllMobile(true);
                                }}
                            >
                                <span className="text-4xl font-bold text-gold-500">+{galleryImages.length - 4}</span>
                                <span className="text-sm font-semibold uppercase tracking-widest mt-2">More Images</span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedImage}
                            alt="Expanded view"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
