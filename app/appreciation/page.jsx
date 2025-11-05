'use client';

import Link from 'next/link';
import { Card } from 'components/card';
import { useState, useEffect } from 'react';

const navItems = [
    { id: 'overview', label: 'Proposal Overview', icon: '' },
    { id: 'background', label: 'Background & Problem', icon: '' },
    { id: 'solution', label: 'Proposed Solution', icon: '' },
    { id: 'implementation', label: 'Implementation Plan', icon: '' },
    { id: 'benefits', label: 'Expected Benefits', icon: '' },
    { id: 'management', label: 'Proposal', icon: '' },
    { id: 'conclusion', label: 'Conclusion', icon: '' }
];

export default function AppreciationPage() {
    const [activeSection, setActiveSection] = useState('overview');

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
                                <span className="text-sm">{item.label}</span>
                            </button>
                        ))}
                    </nav>
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                        <p className="text-xs text-neutral-600 mb-2">Presented by:</p>
                        <p className="text-sm font-semibold text-neutral-900">Sivananda Reddy Bogireddy</p>
                        <p className="text-xs text-neutral-600 mt-1">Software Development Team</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl">
                <div className="flex flex-col gap-12 sm:gap-16">
                    {/* Header Section */}
                    <section className="mb-8">
                        <div className="bg-white rounded-lg p-6 mb-6 border-2 border-primary shadow-lg">
                            <h1 className="mb-4 text-neutral-900">
                                Appreciation Card Program Proposal
                            </h1>
                            <p className="text-lg text-neutral-700 mb-4">
                                I would like to propose the Appreciation Card Program initiative to help build a stronger culture of 
                                gratitude and recognition within our Software Development Team. This program will encourage team members 
                                to express appreciation in a structured, positive way.
                            </p>
                            <div className="bg-neutral-50 rounded-sm p-4 text-neutral-900 border border-neutral-200">
                                <p className="mb-2">
                                    <strong>Proposed by:</strong> Sivananda Reddy Bogireddy
                                </p>
                                <p className="text-neutral-600">Software Development Team</p>
                            </div>
                        </div>
                    </section>

                    {/* 1. Proposal Overview */}
                    <section id="overview" className="scroll-mt-24">
                        <h2 className="mb-6">
                            1. Proposal Overview
                        </h2>
                        <Card>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <h3 className="mb-2 text-neutral-900">
                                        Objective
                                    </h3>
                                    <p className="text-neutral-600">
                                        Introduce a formal appreciation card system within the Software Development Team.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-neutral-900">
                                        Purpose
                                    </h3>
                                    <p className="text-neutral-600">
                                        Encourage gratitude, boost morale, and enhance collaboration among team members.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-neutral-900">
                                        Approach
                                    </h3>
                                    <p className="text-neutral-600">
                                        Implement a friendly, structured method for non-verbal appreciation using printed or digital cards.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-neutral-900">
                                        Outcome
                                    </h3>
                                    <p className="text-neutral-600">
                                        Strengthened team relationships, improved confidence, and a positive work culture.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>

                    {/* 2. Background and Problem Statement */}
                    <section id="background" className="scroll-mt-24">
                        <h2 className="mb-6">
                            2. Background and Problem Statement
                        </h2>
                        <Card>
                            <ul className="flex flex-col gap-4 text-neutral-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-xl shrink-0">•</span>
                                    <span>Team members frequently help one another, but appreciation often goes unnoticed.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl shrink-0">•</span>
                                    <span>Lack of recognition can reduce motivation and engagement.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl shrink-0">•</span>
                                    <span>Many prefer not to speak publicly during meetings but still wish to express gratitude.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl shrink-0">•</span>
                                    <span>
                                        <strong>Need:</strong> A simple, formalized process to express appreciation privately and positively.
                                    </span>
                                </li>
                            </ul>
                        </Card>
                    </section>

                    {/* 3. Proposed Solution */}
                    <section id="solution" className="scroll-mt-24">
                        <h2 className="mb-6">
                            3. Proposed Solution – Appreciation Card System
                        </h2>
                        <Card>
                            <div className="flex flex-col gap-4">
                                <ul className="flex flex-col gap-4 text-neutral-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>Team members receive a set of Appreciation Cards each month.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>Cards contain short, friendly thank-you messages.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>Given whenever someone provides help, guidance, or support.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>Cards can be kept personally or displayed as motivation.</span>
                                    </li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-neutral-200">
                                    <h3 className="mb-4 text-neutral-900">Examples of Messages:</h3>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                            <p className="font-medium text-neutral-800">"You made my day easier 💪"</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                            <p className="font-medium text-neutral-800">"Thanks for being awesome 🌟"</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                            <p className="font-medium text-neutral-800">"Your help meant a lot 🙌"</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                            <p className="font-medium text-neutral-800">"Small help, big impact ❤️"</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-neutral-200">
                                    <h3 className="mb-4 text-neutral-900">Sample Product Links:</h3>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="https://www.amazon.com/24-Appreciation-Thank-you-Anniversary/dp/B0D7YQWGMY?th=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-colors text-neutral-700"
                                        >
                                            <span className="flex-1 text-sm">Amazon.com - 24 Appreciation Thank-you Cards</span>
                                        </a>
                                        <a
                                            href="https://www.amazon.sg/dp/B0CX594VRL?ref_=mr_referred_us_sg_sg&th=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-colors text-neutral-700"
                                        >
                                            <span className="flex-1 text-sm">Amazon.sg - Appreciation Cards</span>
                                        </a>
                                        <a
                                            href="https://www.amazon.sg/dp/B0C5LMP5P8?ref_=mr_referred_us_sg_sg&th=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-colors text-neutral-700"
                                        >
                                            <span className="flex-1 text-sm">Amazon.sg - Thank You Cards</span>
                                        </a>
                                        <a
                                            href="https://www.amazon.ca/Yeaqee-Appreciation-Motivational-Encouragement-Recognition/dp/B0CY2R3J76?th=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-colors text-neutral-700"
                                        >
                                            <span className="flex-1 text-sm">Amazon.ca - Yeaqee Appreciation Cards</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </section>

                    {/* 4. Implementation Plan */}
                    <section id="implementation" className="scroll-mt-24">
                        <h2 className="mb-6">
                            4. Implementation Plan
                        </h2>
                        <Card>
                            <div className="flex flex-col gap-6">
                                {[
                                    { step: 1, title: 'Purchase appreciation cards from sample product links', time: 'Week 1', icon: '' },
                                    { step: 2, title: 'Distribute cards to team members', time: 'Week 2', icon: '' },
                                    { step: 3, title: 'Launch 1-month pilot within the Software Development Team', time: 'Weeks 3–6', icon: '' },
                                    { step: 4, title: 'Collect team feedback and measure participation', time: 'Week 7', icon: '' },
                                    { step: 5, title: 'Expand to other teams if successful', time: 'After pilot evaluation', icon: '' }
                                ].map((item) => (
                                    <div key={item.step} className="flex items-start gap-4 p-4 rounded-lg bg-neutral-50">
                                        <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-primary text-primary-content shrink-0 text-lg">
                                            {item.step}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
                                            <p className="text-sm text-neutral-600">{item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                    {/* 5. Expected Benefits */}
                    <section id="benefits" className="scroll-mt-24">
                        <h2 className="mb-6">
                            5. Expected Benefits
                        </h2>
                        <Card>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    'Improves team morale and engagement.',
                                    'Promotes a culture of appreciation and respect.',
                                    'Encourages teamwork and collaboration.',
                                    'Provides quiet members a non-verbal way to express gratitude.',
                                    'Boosts confidence and reinforces positive behavior.'
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50">
                                        <span className="text-neutral-600">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                    {/* 6. Proposal */}
                    <section id="management" className="scroll-mt-24">
                        <h2 className="mb-6">
                            6. Proposal
                        </h2>
                        <Card>
                            <ul className="flex flex-col gap-4 text-neutral-600">
                                {[
                                    'Propose implementing a 1-month pilot in the Software Development Team.',
                                    'Propose expanding the initiative across departments after pilot evaluation if successful.'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </section>

                    {/* 7. Conclusion */}
                    <section id="conclusion" className="scroll-mt-24">
                        <h2 className="mb-6">
                            7. Conclusion
                        </h2>
                        <Card>
                            <div className="flex flex-col gap-4">
                                <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                    <p className="text-xl italic text-neutral-800 font-medium">
                                        "A simple thank you can create a stronger, happier team."
                                    </p>
                                </div>
                                <p className="text-neutral-600">
                                    This initiative aligns with our company's values and commitment to fostering a positive work environment.
                                </p>
                            </div>
                        </Card>
                    </section>
                </div>
            </main>
            </div>
        </div>
    );
}
