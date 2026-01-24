import React, { useState, useEffect } from 'react';

const ScoreReveal = ({ score = 78 }) => {
    const [animatedScore, setAnimatedScore] = useState(0);
    const size = 200;
    const strokeWidth = 14;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;

    useEffect(() => {
        let startTime;
        const duration = 2000;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function: easeOutExpo
            const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setAnimatedScore(Math.floor(easedProgress * score));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [score]);

    const offset = circumference - (animatedScore / 100) * circumference;

    return (
        <div className="flex flex-col items-center animate-scale-in">
            <div className="relative flex items-center justify-center mb-8">
                <svg
                    width={size}
                    height={size}
                    className="transform -rotate-90"
                >
                    {/* Background Circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        className="text-gray-100"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-300 ease-out text-primary"
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-extrabold tracking-tighter text-text">
                        {animatedScore}
                    </span>
                    <span className="text-text-lighter text-sm font-bold uppercase tracking-widest">
                        out of 100
                    </span>
                </div>
            </div>

            <div className="text-center">
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-warning/10 text-warning text-xs font-bold uppercase tracking-wider mb-4">
                    Needs Improvement
                </div>
                <h3 className="text-2xl font-extrabold mb-2">Resume Score</h3>
                <p className="text-text-light text-sm max-w-[280px] leading-relaxed">
                    Based on formatting, skills, and ATS compatibility. Your resume is better than <span className="text-primary font-bold">65%</span> of other applicants.
                </p>
            </div>
        </div>
    );
};

export default ScoreReveal;
