'use client';

import Link from 'next/link';
import { Card } from 'components/card';
import { useState, useEffect } from 'react';

const navItems = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'objectives', label: 'Objectives', icon: '🎯' },
    { id: 'format', label: 'Format', icon: '⚙️' },
    { id: 'submission', label: 'Submission Requirements', icon: '📝' },
    { id: 'evaluation', label: 'Evaluation Criteria', icon: '📊' },
    { id: 'awards', label: 'Awards', icon: '🏆' },
    { id: 'roles', label: 'Roles & Responsibilities', icon: '👥' },
    { id: 'agenda', label: 'Demo Day Agenda', icon: '🗓️' },
    { id: 'metrics', label: 'Success Metrics', icon: '📈' },
    { id: 'risks', label: 'Risks & Mitigations', icon: '⚠️' },
    { id: 'conclusion', label: 'Conclusion', icon: '🎯' }
];

export default function IdeathonPage() {
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
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="text-sm">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                        <div className="mt-6 pt-6 border-t border-neutral-200">
                            <p className="text-xs text-neutral-600 mb-2">Proposed by:</p>
                            <p className="text-sm font-semibold text-neutral-900">Sivananda Reddy Bogireddy</p>
                            <p className="text-xs text-neutral-600 mt-1">Senior software engineer</p>
                            <p className="text-xs text-neutral-600 mt-1">Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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
                                    Yearly Ideathon — Proposal
                                </h1>
                                <p className="text-lg text-neutral-700 mb-4">
                                    I would like to propose an annual, company-wide "Ideathon" where members pitch ideas and build quick POCs (proofs of concept). 
                                    This initiative will surface innovative solutions, improve cross-functional collaboration, and accelerate learning.
                                </p>
                                <div className="bg-neutral-50 rounded-sm p-4 text-neutral-900 border border-neutral-200">
                                    <p className="mb-2">
                                        <strong>Proposed by:</strong> Sivananda Reddy Bogireddy
                                    </p>
                                    <p className="text-neutral-600 mb-2">Senior software engineer</p>
                                    <p className="text-neutral-600 text-sm">Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                            </div>
                        </section>

                        {/* 1. Overview */}
                        <section id="overview" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">📋</span>
                                <span>1. Overview</span>
                            </h2>
                            <Card>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">What</h3>
                                        <p className="text-neutral-600">
                                            An annual, company-wide "Ideathon" where members pitch ideas and build quick POCs (proofs of concept).
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">Why</h3>
                                        <p className="text-neutral-600">
                                            Surface innovative solutions, improve cross-functional collaboration, and accelerate learning.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">Who</h3>
                                        <p className="text-neutral-600">
                                            All company employees (open to cross-functional partners as mentors/judges).
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">Outcome</h3>
                                        <p className="text-neutral-600">
                                            Shortlist of viable ideas, 1–3 winners, and a pipeline for incubation.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </section>

                        {/* 2. Objectives */}
                        <section id="objectives" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">🎯</span>
                                <span>2. Objectives</span>
                            </h2>
                            <Card>
                                <ul className="flex flex-col gap-4 text-neutral-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>Encourage a culture of experimentation and rapid prototyping.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>Improve technical breadth via short, focused builds.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>Identify high-impact ideas for product/process improvements.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>Provide recognition and visibility to contributors.</span>
                                    </li>
                                </ul>
                            </Card>
                        </section>

                        {/* 3. Format */}
                        <section id="format" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">⚙️</span>
                                <span>3. Format (How It Works)</span>
                            </h2>
                            <Card>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">Idea Call</h3>
                                        <p className="text-neutral-600">
                                            Individuals or teams (2–5 people) submit a one-pager (problem, solution, impact, POC plan).
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">POC Sprint</h3>
                                        <p className="text-neutral-600">
                                            1–2 weeks of part-time effort (or a 48-hour focused sprint) to build a demo-able POC.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">Showcase Day</h3>
                                        <p className="text-neutral-600">
                                            7–10 minute live demo + 3–5 minute Q&A per team.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">Judging</h3>
                                        <p className="text-neutral-600">
                                            Panel + audience vote (weighted).
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">Outputs</h3>
                                        <p className="text-neutral-600">
                                            Demo video, short readme, and next-steps doc.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </section>

                        {/* 4. Submission Requirements */}
                        <section id="submission" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">📝</span>
                                <span>4. Submission Requirements</span>
                            </h2>
                            <Card>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h3 className="mb-3 text-neutral-900 font-bold">1-page brief:</h3>
                                        <ul className="flex flex-col gap-2 text-neutral-600 ml-4">
                                            <li>• Problem</li>
                                            <li>• Proposed Approach</li>
                                            <li>• Impact (metrics)</li>
                                            <li>• POC Plan</li>
                                            <li>• Team</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">Success metrics example:</h3>
                                        <p className="text-neutral-600">
                                            time saved, errors reduced, performance gains, cost savings.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-neutral-900 font-bold">Additional requirements:</h3>
                                        <ul className="flex flex-col gap-2 text-neutral-600 ml-4">
                                            <li>• Risks/assumptions + fallback plan</li>
                                            <li>• Infra or data access needed (if any)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </section>

                        {/* 5. Evaluation Criteria */}
                        <section id="evaluation" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">📊</span>
                                <span>5. Evaluation Criteria (weighted)</span>
                            </h2>
                            <Card>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { criteria: 'Impact & Value', weight: '30%', desc: 'measurable benefit (productivity, cost, quality)' },
                                        { criteria: 'Feasibility', weight: '20%', desc: 'technical realism, path to production' },
                                        { criteria: 'Innovation', weight: '20%', desc: 'novelty, smart use of tech' },
                                        { criteria: 'Execution Quality', weight: '20%', desc: 'working demo, clarity, documentation' },
                                        { criteria: 'Collaboration & Learning', weight: '10%', desc: 'cross-functional effort, knowledge sharing' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-neutral-50">
                                            <span className="font-bold text-neutral-900 shrink-0 w-20">{item.weight}</span>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-neutral-900 mb-1">{item.criteria}</h3>
                                                <p className="text-sm text-neutral-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </section>

                        {/* 6. Awards */}
                        <section id="awards" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">🏆</span>
                                <span>6. Awards</span>
                            </h2>
                            <Card>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {[
                                        { award: 'Grand Winner', prize: 'Trophy + swag + incubation sponsorship' },
                                        { award: 'Runner-up', prize: 'Trophy + swag' },
                                        { award: "People's Choice", prize: 'Certificate + swag' },
                                        { award: 'Best Technical Craft (optional)', prize: 'Certificate' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-4 rounded-lg bg-neutral-50">
                                            <h3 className="font-bold text-neutral-900 mb-2">{item.award}</h3>
                                            <p className="text-sm text-neutral-600">{item.prize}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </section>

                        {/* 7. Roles & Responsibilities */}
                        <section id="roles" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">👥</span>
                                <span>7. Roles & Responsibilities</span>
                            </h2>
                            <Card>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { role: 'Program Lead', desc: 'Runs calendar, comms, submissions, logistics.' },
                                        { role: 'Mentors', desc: '30–60 min guidance per team during sprint.' },
                                        { role: 'Judges (3–5)', desc: 'CEOs and managers.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-neutral-50">
                                            <h3 className="font-bold text-neutral-900 shrink-0 w-32">{item.role}</h3>
                                            <p className="text-neutral-600 flex-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </section>

                        {/* 8. Demo Day Agenda */}
                        <section id="agenda" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">🗓️</span>
                                <span>8. Demo Day Agenda (sample)</span>
                            </h2>
                            <Card>
                                <div className="flex flex-col gap-3">
                                    {[
                                        { time: '10 min', activity: 'Welcome & rules' },
                                        { time: '7–10 min each + Q&A', activity: 'Team demos' },
                                        { time: '10 min', activity: 'Break / voting window' },
                                        { time: 'Private', activity: "Judges' discussion" },
                                        { time: '15 min', activity: 'Awards & next steps' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4 py-3 border-b border-neutral-200">
                                            <span className="font-bold text-neutral-900 shrink-0 w-32">{item.time}</span>
                                            <span className="text-neutral-600 flex-1">{item.activity}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </section>

                        {/* 9. Success Metrics */}
                        <section id="metrics" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">📈</span>
                                <span>9. Success Metrics</span>
                            </h2>
                            <Card>
                                <ul className="flex flex-col gap-4 text-neutral-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span># of ideas submitted / teams formed</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span># of demos delivered on time</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>% of ideas selected for incubation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>90-day impact from incubated ideas (quantified)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl shrink-0">•</span>
                                        <span>Participant NPS / satisfaction</span>
                                    </li>
                                </ul>
                            </Card>
                        </section>

                        {/* 10. Risks & Mitigations */}
                        <section id="risks" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">⚠️</span>
                                <span>10. Risks & Mitigations</span>
                            </h2>
                            <Card>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { risk: 'Time conflicts', mitigation: 'Pre-book sprint window; manager sign-off on hours.' },
                                        { risk: 'Scope creep', mitigation: 'Enforce POC scope checklist.' },
                                        { risk: 'Low participation', mitigation: 'Early comms, sample ideas, prizes, mentor office hours.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-4 rounded-lg bg-neutral-50">
                                            <h3 className="font-bold text-neutral-900 mb-2">{item.risk}</h3>
                                            <p className="text-sm text-neutral-600">{item.mitigation}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </section>

                        {/* 11. Conclusion */}
                        <section id="conclusion" className="scroll-mt-24">
                            <h2 className="mb-6 flex items-center gap-2">
                                <span className="text-3xl">🎯</span>
                                <span>11. Conclusion</span>
                            </h2>
                            <Card>
                                <div className="flex flex-col gap-4">
                                    <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                        <p className="text-xl italic text-neutral-800 font-medium">
                                            "Build fast, learn faster."
                                        </p>
                                    </div>
                                    <p className="text-neutral-600">
                                        The Ideathon establishes a lightweight, repeatable engine for innovation—turning team creativity into measurable outcomes and seeding next year's roadmap.
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

