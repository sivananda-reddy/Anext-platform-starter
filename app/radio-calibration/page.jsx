'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';
import { useState, useEffect } from 'react';

const navItems = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'breakthrough', label: 'The Breakthrough', icon: '💡' },
    { id: 'components', label: 'Key Components', icon: '🔧' },
    { id: 'impact', label: 'The Impact', icon: '⚡' },
    { id: 'comparison', label: 'Before vs After', icon: '📊' },
    { id: 'how-it-works', label: 'How It Works', icon: '🔄' },
    { id: 'slides', label: 'Presentation Slides', icon: '📊' },
    { id: 'future', label: 'The Future', icon: '🚀' }
];

// Add your slide images here
// Example: Place your slide images in /public/slides/ folder
// and update this array with the paths
const slides = [
    // Example paths - replace with your actual slide image paths
     { src: '/slides/slide-1.jpg', alt: 'Slide 1: Integrating Radio Calibration into AI' },
     { src: '/slides/slide-2.jpg', alt: 'Slide 2: Current Calibration System Limitations' },
     { src: '/slides/slide-3.jpg', alt: 'Slide 3: AI Calibration Architecture' },
     { src: '/slides/slide-4.jpg', alt: 'Slide 4: AI Calibration Benefits' },
     { src: '/slides/slide-5.jpg', alt: 'Slide 5: Upgrade' },
     { src: '/slides/slide-6.jpg', alt: 'Slide 6: Enhancing Prediction Accuracy' },
     { src: '/slides/slide-7.jpg', alt: 'Slide 7: AI/ML Calibration Optimization Process' },
     { src: '/slides/slide-8.jpg', alt: 'Slide 8: Calibration Process Before AI Implementation' },
     { src: '/slides/slide-9.jpg', alt: 'Slide 9: AI-Enhanced Calibration' },
];

export default function RadioCalibrationPage() {
    const [activeSection, setActiveSection] = useState('overview');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i] && sections[i].offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Keyboard navigation for slides
    useEffect(() => {
        if (!isFullscreen || slides.length === 0) return;

        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') {
                setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
            } else if (e.key === 'ArrowRight') {
                setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
            } else if (e.key === 'Escape') {
                setIsFullscreen(false);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isFullscreen, slides.length]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="w-full">
            {/* Mobile Navigation */}
            <div className="lg:hidden mb-6">
                <select
                    onChange={(e) => scrollToSection(e.target.value)}
                    className="w-full p-3 rounded bg-white text-neutral-900 border border-neutral-300"
                    value={activeSection}
                >
                    {navItems.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.icon} {item.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
                {/* Sidebar Navigation */}
                <aside className="hidden lg:block w-64 shrink-0 sticky top-6 h-fit">
                    <div className="bg-white rounded-sm p-6 text-neutral-900 shadow-lg">
                        <h2 className="mb-4 font-bold text-lg">Navigation</h2>
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`flex items-center gap-2 px-3 py-2.5 text-left rounded transition-colors ${
                                        activeSection === item.id
                                            ? 'bg-primary text-primary-content font-bold shadow-md'
                                            : 'hover:bg-neutral-100 text-neutral-700'
                                    }`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="text-sm">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 max-w-4xl">
                    <div className="flex flex-col gap-12 sm:gap-16">
                        {/* Header Section */}
                        <section id="overview" className="scroll-mt-24 mb-8">
                            <div className="bg-white rounded-lg p-6 mb-6 border-2 border-primary shadow-lg">
                                <h1 className="mb-4 flex items-center gap-3 text-neutral-900 text-3xl font-bold">
                                    <span className="text-4xl">📡</span>
                                    <span>Radio Calibration through Cutting-Edge Technology and AI Intelligence</span>
                                </h1>
                                <p className="text-lg text-neutral-700 mb-4">
                                    Radio Calibration through Cutting-Edge Technology and AI Intelligence At DoodleLabs, we operate at the forefront of advanced wireless innovation, where precision calibration directly impacts the reliability and performance of our radio systems. For years, the calibration process was slow, manual, and error-prone. Today, we've revolutionized it by integrating artificial intelligence (AI) into our calibration workflows — enhancing efficiency, visibility, and accuracy, all while maintaining our existing hardware infrastructure.
                                </p>
                            </div>
                        </section>

                        {/* The Breakthrough: AI-Integrated Calibration System */}
                        <section id="breakthrough" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">💡</span>
                                <span>The Breakthrough: AI-Integrated Calibration System</span>
                            </h2>
                            <Card>
                                <p className="text-neutral-700 mb-6">
                                    The AI-driven calibration system represents a leap forward in automation, accuracy, and adaptability. It brings together a multi-layered architecture that connects the frontend UI, API gateway, calibration scripts, and AI/ML optimization services into a single intelligent ecosystem.
                                </p>
                            </Card>
                        </section>

                        {/* Key Components */}
                        <section id="components" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">🔧</span>
                                <span>Key Components</span>
                            </h2>
                            <Card>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                        <h3 className="mb-2 text-neutral-900 font-bold flex items-center gap-2">
                                            <span>⚛️</span>
                                            <span>Next.js Frontend (React)</span>
                                        </h3>
                                        <p className="text-neutral-600 text-sm">
                                            A modern, browser-based interface accessible on both desktop and mobile.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                        <h3 className="mb-2 text-neutral-900 font-bold flex items-center gap-2">
                                            <span>🚀</span>
                                            <span>FastAPI Gateway</span>
                                        </h3>
                                        <p className="text-neutral-600 text-sm">
                                            Manages calibration requests and status updates.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                        <h3 className="mb-2 text-neutral-900 font-bold flex items-center gap-2">
                                            <span>⚙️</span>
                                            <span>CalibrationService Layer</span>
                                        </h3>
                                        <p className="text-neutral-600 text-sm">
                                            Executes calibration routines and interacts with AI models.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                        <h3 className="mb-2 text-neutral-900 font-bold flex items-center gap-2">
                                            <span>🧠</span>
                                            <span>AI/ML Engine</span>
                                        </h3>
                                        <p className="text-neutral-600 text-sm">
                                            Learns from historical data, predicts optimal parameters, and continuously improves accuracy.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 sm:col-span-2">
                                        <h3 className="mb-2 text-neutral-900 font-bold flex items-center gap-2">
                                            <span>💾</span>
                                            <span>Data Storage</span>
                                        </h3>
                                        <p className="text-neutral-600 text-sm">
                                            PostgreSQL, TimescaleDB, and Qdrant ensure traceable, high-performance data retention.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </section>

                        {/* The Impact: Smarter, Faster, More Transparent */}
                        <section id="impact" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">⚡</span>
                                <span>The Impact: Smarter, Faster, More Transparent</span>
                            </h2>
                            <Card>
                                <p className="text-neutral-700 mb-6">
                                    With AI, calibration becomes not just automated — but intelligent.
                                </p>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">⏱</span>
                                            <h3 className="font-bold text-neutral-900">70% Faster Setup</h3>
                                        </div>
                                        <p className="text-neutral-600 text-sm">Calibration setup time drops dramatically.</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">⚡</span>
                                            <h3 className="font-bold text-neutral-900">3–10x Faster Execution</h3>
                                        </div>
                                        <p className="text-neutral-600 text-sm">AI-predicted parameters reduce trial-and-error cycles.</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">📊</span>
                                            <h3 className="font-bold text-neutral-900">Real-Time Monitoring</h3>
                                        </div>
                                        <p className="text-neutral-600 text-sm">Operators can view calibration progress from anywhere.</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🔍</span>
                                            <h3 className="font-bold text-neutral-900">Full Traceability</h3>
                                        </div>
                                        <p className="text-neutral-600 text-sm">Every calibration run is logged for compliance and diagnostics.</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 sm:col-span-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🧠</span>
                                            <h3 className="font-bold text-neutral-900">Continuous Learning</h3>
                                        </div>
                                        <p className="text-neutral-600 text-sm">The system improves predictions with each calibration cycle.</p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-neutral-200">
                                    <p className="text-neutral-700 italic">
                                        Perhaps most impressively, all of this is achieved without any hardware changes — the AI integrates seamlessly with existing setups.
                                    </p>
                                </div>
                            </Card>
                        </section>

                        {/* Before vs After AI */}
                        <section id="comparison" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">📊</span>
                                <span>Before vs After AI</span>
                            </h2>
                            <Card>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-primary text-primary-content">
                                                <th className="p-4 text-left border border-primary/20">Aspect</th>
                                                <th className="p-4 text-left border border-primary/20">Manual Calibration</th>
                                                <th className="p-4 text-left border border-primary/20">AI-Powered Calibration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-neutral-200">
                                                <td className="p-4 font-semibold text-neutral-900">Setup Time</td>
                                                <td className="p-4 text-neutral-600">30–45 minutes</td>
                                                <td className="p-4 text-neutral-600">Under 15 minutes</td>
                                            </tr>
                                            <tr className="border-b border-neutral-200 bg-neutral-50">
                                                <td className="p-4 font-semibold text-neutral-900">Operator Involvement</td>
                                                <td className="p-4 text-neutral-600">High</td>
                                                <td className="p-4 text-neutral-600">Minimal</td>
                                            </tr>
                                            <tr className="border-b border-neutral-200">
                                                <td className="p-4 font-semibold text-neutral-900">Accuracy</td>
                                                <td className="p-4 text-neutral-600">Variable</td>
                                                <td className="p-4 text-neutral-600">Consistent and optimized</td>
                                            </tr>
                                            <tr className="border-b border-neutral-200 bg-neutral-50">
                                                <td className="p-4 font-semibold text-neutral-900">Failure Risk</td>
                                                <td className="p-4 text-neutral-600">High</td>
                                                <td className="p-4 text-neutral-600">Low</td>
                                            </tr>
                                            <tr className="border-b border-neutral-200">
                                                <td className="p-4 font-semibold text-neutral-900">Visibility</td>
                                                <td className="p-4 text-neutral-600">Local only</td>
                                                <td className="p-4 text-neutral-600">Global, real-time</td>
                                            </tr>
                                            <tr className="bg-neutral-50">
                                                <td className="p-4 font-semibold text-neutral-900">Learning</td>
                                                <td className="p-4 text-neutral-600">None</td>
                                                <td className="p-4 text-neutral-600">Adaptive via AI/ML</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </section>

                        {/* How It Works: The AI Optimization Cycle */}
                        <section id="how-it-works" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">🔄</span>
                                <span>How It Works: The AI Optimization Cycle</span>
                            </h2>
                            <Card>
                                <div className="flex flex-col gap-6">
                                    {[
                                        { 
                                            step: 1, 
                                            title: 'Data Collection', 
                                            description: 'Gathers calibration metrics, MAC patterns, and environmental variables.',
                                            icon: '📥' 
                                        },
                                        { 
                                            step: 2, 
                                            title: 'Feature Engineering', 
                                            description: 'Converts raw inputs into predictive features.',
                                            icon: '🔬' 
                                        },
                                        { 
                                            step: 3, 
                                            title: 'Model Training', 
                                            description: 'Builds ML models to predict and refine calibration parameters.',
                                            icon: '🎓' 
                                        },
                                        { 
                                            step: 4, 
                                            title: 'Prediction Service', 
                                            description: 'Suggests real-time calibration values for operators.',
                                            icon: '🔮' 
                                        }
                                    ].map((item) => (
                                        <div key={item.step} className="flex items-start gap-4 p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                                            <div className="flex items-center justify-center w-12 h-12 font-bold text-white rounded-full bg-primary text-primary-content shrink-0 text-lg">
                                                {item.step}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-2xl">{item.icon}</span>
                                                    <h3 className="font-bold text-neutral-900 text-lg">{item.title}</h3>
                                                </div>
                                                <p className="text-neutral-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t border-neutral-200">
                                    <p className="text-neutral-700">
                                        By analyzing historical data and device specifications, the system can even predict potential calibration anomalies before they occur.
                                    </p>
                                </div>
                            </Card>
                        </section>

                        {/* Presentation Slides */}
                        <section id="slides" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">📊</span>
                                <span>Presentation Slides</span>
                            </h2>
                            <Card>
                                <div className="flex flex-col gap-4">
                                    {/* Detailed PPT Link */}
                                    <div className="mb-6 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-3xl">📄</span>
                                            <h3 className="text-xl font-bold text-neutral-900">Detailed Presentation</h3>
                                        </div>
                                        <p className="text-neutral-700 mb-4">
                                            Access the complete PowerPoint presentation with detailed information, diagrams, and comprehensive documentation.
                                        </p>
                                        <a
                                            href="https://doodlelabs.sharepoint.com/:p:/r/sites/DevelopmentLibrary/_layouts/15/Doc.aspx?sourcedoc=%7B81EA5BF6-15A6-4973-A8B2-B683F56A6787%7D&file=calibraton%20ppt.pptx&action=edit&mobileredirect=true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-content hover:bg-primary/90 transition-colors font-semibold shadow-md hover:shadow-lg"
                                        >
                                            <span>📥</span>
                                            <span>View Full Presentation on SharePoint</span>
                                            <span>↗</span>
                                        </a>
                                    </div>
                                        {/* Slide Navigation */}
                                        <div className="flex items-center justify-between mb-4">
                                            <button
                                                onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
                                                className="px-4 py-2 rounded bg-primary text-primary-content hover:bg-primary/90 transition-colors"
                                                disabled={slides.length === 0}
                                            >
                                                ← Previous
                                            </button>
                                            <span className="text-neutral-600 font-medium">
                                                Slide {currentSlide + 1} of {slides.length}
                                            </span>
                                            <button
                                                onClick={() => setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
                                                className="px-4 py-2 rounded bg-primary text-primary-content hover:bg-primary/90 transition-colors"
                                                disabled={slides.length === 0}
                                            >
                                                Next →
                                            </button>
                                        </div>

                                        {/* Current Slide Display */}
                                        <div className="relative w-full bg-neutral-100 rounded-lg overflow-hidden border-2 border-neutral-200" style={{ aspectRatio: '16/9' }}>
                                            {slides.length > 0 ? (
                                                <>
                                                    <Image
                                                        src={slides[currentSlide].src}
                                                        alt={slides[currentSlide].alt}
                                                        fill
                                                        style={{ objectFit: 'contain' }}
                                                        className="cursor-pointer"
                                                        onClick={() => setIsFullscreen(true)}
                                                    />
                                                    <button
                                                        onClick={() => setIsFullscreen(true)}
                                                        className="absolute top-4 right-4 px-3 py-2 rounded bg-neutral-900/70 text-white hover:bg-neutral-900/90 transition-colors text-sm"
                                                    >
                                                        🔍 Fullscreen
                                                    </button>
                                                </>
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-neutral-500">
                                                    <p>No slides added yet. Add slide images to the slides array in the code.</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Thumbnail Navigation */}
                                        {slides.length > 1 && (
                                            <div className="flex gap-2 overflow-x-auto pb-2 pt-4">
                                                {slides.map((slide, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setCurrentSlide(index)}
                                                        className={`relative shrink-0 w-24 h-16 rounded overflow-hidden border-2 transition-all ${
                                                            currentSlide === index
                                                                ? 'border-primary shadow-lg scale-105'
                                                                : 'border-neutral-300 opacity-60 hover:opacity-100'
                                                        }`}
                                                    >
                                                        <Image
                                                            src={slide.src}
                                                            alt={slide.alt}
                                                            fill
                                                            style={{ objectFit: 'cover' }}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </section>

                        {/* Fullscreen Modal */}
                        {isFullscreen && slides.length > 0 && (
                            <div
                                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                                onClick={() => setIsFullscreen(false)}
                            >
                                <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
                                    <Image
                                        src={slides[currentSlide].src}
                                        alt={slides[currentSlide].alt}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        className="cursor-pointer"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <button
                                        onClick={() => setIsFullscreen(false)}
                                        className="absolute top-4 right-4 px-4 py-2 rounded bg-white/20 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
                                    >
                                        ✕ Close
                                    </button>
                                    {slides.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
                                                }}
                                                className="absolute left-4 px-4 py-2 rounded bg-white/20 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
                                            >
                                                ← Previous
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
                                                }}
                                                className="absolute right-4 px-4 py-2 rounded bg-white/20 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
                                            >
                                                Next →
                                            </button>
                                        </>
                                    )}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded bg-white/20 text-white backdrop-blur-sm">
                                        {currentSlide + 1} / {slides.length}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* The Future: Intelligent Calibration at Scale */}
                        <section id="future" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">🚀</span>
                                <span>The Future: Intelligent Calibration at Scale</span>
                            </h2>
                            <Card>
                                <div className="flex flex-col gap-4">
                                    <p className="text-neutral-700">
                                        This transformation is more than just automation — it's evolution. AI calibration systems bring industrial-level traceability, adaptive optimization, and real-time insights to what was once a slow, opaque process.
                                    </p>
                                    <p className="text-neutral-700">
                                        As industries push for higher precision and faster production cycles, AI calibration isn't a luxury — it's the new standard. With this integration, we've moved from reactive troubleshooting to proactive intelligence.
                                    </p>
                                    <div className="mt-4 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                        <p className="text-xl italic text-neutral-800 font-medium">
                                            "AI has turned calibration from a manual chore into a self-learning, self-optimizing process — one that sets the stage for the next generation of smart manufacturing and radio performance excellence."
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

