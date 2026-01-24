import React from 'react';
import Button from '../common/Button';

const HeroSection = ({ onGetStarted }) => {
    return (
        <section className="relative overflow-hidden pt-12 pb-12 md:pt-24 md:pb-20 px-6">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-30" />
            </div>

            {/* Ghosted Score Number in background */}
            <div className="absolute top-10 right-0 md:right-10 opacity-[0.03] select-none pointer-events-none -z-10 hidden md:block">
                <span className="text-[25rem] font-black leading-none">78</span>
            </div>

            <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest mb-8 md:mb-12 border border-primary/10">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    AI Resume Analysis
                </div>

                <h1 className="text-4xl md:text-8xl font-black tracking-tight text-text mb-8 leading-[0.95] md:leading-[1]">
                    Unlock your <br />
                    <span className="text-primary italic">career potential.</span>
                </h1>

                <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                    Get instant AI-powered resume scoring and actionable feedback. <br className="hidden md:block" /> Land more interviews with a CV that stands out.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 md:mb-32">
                    <Button onClick={onGetStarted} className="w-full sm:w-auto h-16 px-10 text-lg shadow-2xl shadow-primary/30 group">
                        Analyze My CV
                        <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Button>
                    <p className="text-sm text-text-lighter font-bold border-l-2 border-gray-100 pl-6 flex flex-col items-start">
                        <span>Supports PDF, DOCX</span>
                        <span className="text-[10px] uppercase opacity-60">(Max 5MB)</span>
                    </p>
                </div>

                <div className="pt-10 border-t border-black/[0.03]">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-text-lighter mb-10">
                        Trusted by 10,000+ students from top universities
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-30 grayscale contrast-[1.5]">
                        {/* Simple SVG Logo style placeholders */}
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-current rounded-full" />
                            <span className="font-black text-sm tracking-tighter">STANFORD</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-4 bg-current rounded-sm" />
                            <span className="font-extrabold text-sm tracking-widest">MIT</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 border-2 border-current rounded-sm rotate-45" />
                            <span className="font-bold text-sm">HARVARD</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-current rounded-tr-xl" />
                            <span className="font-black text-sm italic">OXFORD</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
