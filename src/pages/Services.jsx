import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Wifi, Wind, Coffee, Utensils, Music, Car, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
    { id: 'halls', label: 'Banquet Halls' },
    { id: 'rooms', label: 'Luxury Rooms' }
];

const features = {
    halls: [
        { icon: <Users className="w-6 h-6" />, label: "Capacity 100-500 Guests" },
        { icon: <Utensils className="w-6 h-6" />, label: "In-house Catering" },
        { icon: <Music className="w-6 h-6" />, label: "AV Equipment & DJ" },
        { icon: <Car className="w-6 h-6" />, label: "Valet Parking" },
    ],
    rooms: [
        { icon: <Wind className="w-6 h-6" />, label: "Air Conditioned" },
        { icon: <Wifi className="w-6 h-6" />, label: "High-Speed Wi-Fi" },
        { icon: <Coffee className="w-6 h-6" />, label: "24/7 Room Service" },
        { icon: <Tv className="w-6 h-6" />, label: "Smart TV & Entertainment" },
    ]
};

const images = {
    halls: [
        "/images/1.jpg",
        "/images/2.jpg"
    ],
    rooms: [
        "/images/3.jpg",
        "/images/4.jpg"
    ]
};

export default function Services() {
    const [activeTab, setActiveTab] = useState('halls');

    return (
        <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
                >
                    Our <span className="text-gold-500">Premium</span> Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    Tailored experiences for your grand celebrations and luxurious stays. Explore our offerings below.
                </motion.p>
            </div>

            <div className="flex justify-center mb-12">
                <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-8 py-3 text-sm sm:text-base font-semibold rounded-full transition-colors ${activeTab === tab.id ? 'text-brand-black dark:text-brand-black' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="active-tab"
                                    className="absolute inset-0 bg-gold-500 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="overflow-hidden min-h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Content Side */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                                {activeTab === 'halls' ? "Elegant Banquet Halls" : "Luxurious Accommodations"}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                                {activeTab === 'halls'
                                    ? "Host your weddings, receptions, and corporate events in our meticulously designed banquet halls. With flexible seating for 100 to 500 guests and comprehensive service packages, your event will seamlessly blend grandeur with elegance."
                                    : "Retreat into our state-of-the-art luxury rooms designed for ultimate relaxation. Whether it's a weekend getaway or a pre-wedding stay, our well-appointed rooms offer premium comfort, top-tier amenities, and impeccable service."}
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-10">
                                {features[activeTab].map((feat, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 text-gray-800 dark:text-gray-200">
                                        <div className="text-gold-500 p-2 bg-gold-500/10 rounded-lg">
                                            {feat.icon}
                                        </div>
                                        <span className="font-medium text-sm md:text-base">{feat.label}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/contact" className="inline-block px-8 py-4 bg-brand-black dark:bg-white text-white dark:text-brand-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
                                Inquire Now
                            </Link>
                        </div>

                        {/* Images Side */}
                        <div className="grid grid-cols-2 gap-4 relative">
                            <img
                                src={images[activeTab][0]}
                                alt={`${activeTab} view 1`}
                                className="rounded-2xl w-full h-64 object-cover shadow-xl mt-8"
                            />
                            <img
                                src={images[activeTab][1]}
                                alt={`${activeTab} view 2`}
                                className="rounded-2xl w-full h-80 object-cover shadow-xl -mt-8"
                            />
                            <div className="absolute inset-0 bg-gold-500/10 rounded-2xl mix-blend-overlay" />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
