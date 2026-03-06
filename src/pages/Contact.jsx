import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Using placeholders as requested
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE', form.current, 'YOUR_PK')
            .then((result) => {
                setIsSubmitting(false);
                setSubmitStatus('success');
                form.current.reset();
            }, (error) => {
                setIsSubmitting(false);
                setSubmitStatus('error');
                console.log(error.text);
            });
    };

    return (
        <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
                >
                    Get in <span className="text-gold-500">Touch</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    We'd love to discuss how we can make your next event truly extraordinary. Reach out to our planning experts.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-brand-dark p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <MessageSquare className="w-6 h-6 mr-3 text-gold-500" />
                        Send us a Message
                    </h2>

                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-brand-black border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-brand-black border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="user_phone"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-brand-black border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Date</label>
                                <input
                                    type="date"
                                    name="event_date"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-brand-black border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white color-scheme-dark"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Type</label>
                            <select
                                name="event_type"
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-brand-black border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                            >
                                <option value="wedding">Wedding / Reception</option>
                                <option value="corporate">Corporate Event</option>
                                <option value="birthday">Birthday / Anniversary</option>
                                <option value="other">Other Celebration</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-brand-black border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white resize-none"
                                placeholder="Tell us about your requirements..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center items-center px-8 py-4 bg-gold-500 text-brand-black font-bold rounded-xl hover:bg-gold-400 transition-colors shadow-lg disabled:opacity-70"
                        >
                            {isSubmitting ? 'Sending...' : (
                                <>
                                    Send Message <Send className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </button>

                        {submitStatus === 'success' && (
                            <p className="text-green-600 dark:text-green-400 text-center font-medium mt-4">Thank you! Your message has been sent successfully.</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-600 dark:text-red-400 text-center font-medium mt-4">Oops! Something went wrong. Please try again later.</p>
                        )}
                    </form>
                </motion.div>

                {/* Contact Info & Map */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="bg-white dark:bg-brand-dark p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mr-4">
                                    <MapPin className="w-6 h-6 text-gold-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Our Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        PMR Banquets,<br />
                                        Hyderabad, Telangana,<br />
                                        India - 500081
                                    </p>
                                    <a href="https://maps.app.goo.gl/aNvoz1puvnaDihxP7" target="_blank" rel="noopener noreferrer" className="text-gold-600 dark:text-gold-500 text-sm font-medium hover:underline mt-2 inline-block">
                                        Get Directions &rarr;
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mr-4">
                                    <Phone className="w-6 h-6 text-gold-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone & WhatsApp</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-2">+91 98765 43210</p>
                                    <div className="flex space-x-4">
                                        <a href="tel:+919876543210" className="text-brand-black dark:text-white bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Call Us</a>
                                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-white bg-green-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">WhatsApp</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mr-4">
                                    <Mail className="w-6 h-6 text-gold-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                                    <a href="mailto:info@pmrbanquets.com" className="text-gray-600 dark:text-gray-400 hover:text-gold-500 transition-colors">info@pmrbanquets.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="rounded-3xl overflow-hidden shadow-xl h-64 border border-gray-100 dark:border-gray-800">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.1485417729195!2d78.4241699!3d17.523985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f00679218ed%3A0xec0db2bb764b9576!2sPMR%20BANQUET%20HALLS%20%26%20LUXURY%20ROOMS!5e1!3m2!1sen!2sin!4v1772711945028!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Location"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
