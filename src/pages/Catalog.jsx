import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Download } from 'lucide-react';

const catalogItems = [
    {
        id: 'veg',
        category: "Vegetarian Menu Packages",
        description: "Authentic and pure vegetarian delicacies crafted by our culinary experts.",
        features: [
            "Welcome Drinks (3 Types)",
            "Starters (4 Types)",
            "Main Course (North Indian & South Indian)",
            "Live Counters (Chaat, Pasta)",
            "Desserts (3 Types)",
            "Salad Bar & Accompaniments"
        ]
    },
    {
        id: 'nonveg',
        category: "Non-Vegetarian Menu Packages",
        description: "A rich spread of aromatic non-vegetarian and vegetarian dishes.",
        features: [
            "Welcome Drinks (3 Types)",
            "Starters (3 Veg, 3 Non-Veg)",
            "Main Course (Mutton/Chicken specialties + Veg options)",
            "Biryani Station",
            "Desserts (4 Types)",
            "Salad Bar & Accompaniments"
        ]
    },
    {
        id: 'premium',
        category: "Premium Royal Package",
        description: "The ultimate luxury dining experience with exclusive live counters and global cuisines.",
        features: [
            "Welcome Drinks (Mocktails & Fresh Juices)",
            "Global Starters (Oriental, Continental, Tandoor)",
            "Elaborate Multi-Cuisine Main Course",
            "Multiple Live Counters (Wok, Tawa, Carving)",
            "Exotic Dessert Buffet & Ice Cream Sundae Bar",
            "Dedicated Butler Service per table"
        ]
    },
    {
        id: 'decor',
        category: "Decoration & Setup Themes",
        description: "Elevate your venue with our bespoke decoration themes.",
        features: [
            "Floral Extravaganza (Imported flowers, grand arches)",
            "Royal Heritage (Drapes, props, traditional seating)",
            "Contemporary Minimalist (Fairy lights, subtle pastels)",
            "Custom Mandap setups & Stage designs",
            "Ambient Lighting & LED screens"
        ]
    }
];

export default function Catalog() {
    const [openAccordion, setOpenAccordion] = useState('veg');

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="py-20 px-4 max-w-4xl mx-auto min-h-screen">
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
                >
                    Service <span className="text-gold-500">Catalog</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-400 mb-8"
                >
                    Explore our tailored catering and decoration packages. Customize your event to perfection.
                </motion.p>

                {/* Menu PDF Downloads */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                    {/* Veg Menu */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-between p-6 bg-brand-black dark:bg-white rounded-2xl shadow-xl border border-gray-800 dark:border-gray-200 w-full lg:w-1/2 gap-4"
                    >
                        <div className="flex items-center gap-4 w-full sm:w-auto text-center sm:text-left">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full text-green-500">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white dark:text-brand-black font-bold">Pure Veg Menu</h3>
                                <p className="text-gray-400 dark:text-gray-500 text-sm">PDF, 20.6 MB</p>
                            </div>
                        </div>
                        <a
                            href="/menu/PMR%20BANQUET%20HALL%20VEG%20-%20MENU%20.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto p-3 bg-gold-500 hover:bg-gold-600 text-brand-black rounded-lg transition-colors flex justify-center items-center shadow-md font-semibold mt-2 sm:mt-0"
                        >
                            <Download className="w-5 h-5 mr-2" /> Download
                        </a>
                    </motion.div>

                    {/* Non-Veg Menu */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-between p-6 bg-brand-black dark:bg-white rounded-2xl shadow-xl border border-gray-800 dark:border-gray-200 w-full lg:w-1/2 gap-4"
                    >
                        <div className="flex items-center gap-4 w-full sm:w-auto text-center sm:text-left">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-full text-red-500">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white dark:text-brand-black font-bold">Non-Veg Menu</h3>
                                <p className="text-gray-400 dark:text-gray-500 text-sm">PDF, 20.9 MB</p>
                            </div>
                        </div>
                        <a
                            href="/menu/PMR%20BANQUET%20HALL%20NON%20-%20VEG%20MENU.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto p-3 bg-gold-500 hover:bg-gold-600 text-brand-black rounded-lg transition-colors flex justify-center items-center shadow-md font-semibold mt-2 sm:mt-0"
                        >
                            <Download className="w-5 h-5 mr-2" /> Download
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="space-y-4">
                {catalogItems.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        key={item.id}
                        className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-brand-dark shadow-sm hover:shadow-md transition-shadow"
                    >
                        <button
                            onClick={() => toggleAccordion(item.id)}
                            className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-gold-500 transition-colors">
                                {item.category}
                            </h3>
                            <motion.div
                                animate={{ rotate: openAccordion === item.id ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                            >
                                <ChevronDown className="w-5 h-5" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openAccordion === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-800/50">
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 italic border-l-4 border-gold-500 pl-4 py-1">
                                            {item.description}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                                            {item.features.map((feature, i) => (
                                                <div key={i} className="flex items-start">
                                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5 mr-3" />
                                                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
