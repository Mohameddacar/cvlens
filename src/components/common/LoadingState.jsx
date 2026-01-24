import React, { useState, useEffect } from 'react';

const LoadingState = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        "Parsing resume...",
        "Analyzing skills & accomplishments...",
        "Checking ATS compatibility...",
        "Generating score report..."
    ];

    useEffect(() => {
        const totalDuration = 3500;
        const intervalTime = 50;
        const increment = (100 / (totalDuration / intervalTime));

        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 400);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        const stepCount = steps.length;
        const stepThreshold = 100 / stepCount;
        const currentStep = Math.min(Math.floor(progress / stepThreshold), stepCount - 1);
        setActiveStep(currentStep);
    }, [progress]);

    return (
        <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center px-6">
            <div className="w-full max-w-sm">
                <div className="flex flex-col items-center text-center">
                    <div className="relative mb-12">
                        <div className="w-24 h-24 bg-primary/5 rounded-full animate-pulse" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-10 h-10 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold mb-8">AI is auditing your CV</h2>

                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-8">
                        <div
                            className="h-full bg-primary transition-all duration-100 ease-linear rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="relative h-6 w-full flex flex-col items-center overflow-hidden">
                        {steps.map((step, idx) => (
                            <p
                                key={idx}
                                className={`
                    absolute transition-all duration-500 text-sm font-medium
                    ${idx === activeStep
                                        ? 'opacity-100 translate-y-0'
                                        : idx < activeStep
                                            ? 'opacity-0 -translate-y-8'
                                            : 'opacity-0 translate-y-8'}
                  `}
                            >
                                {step}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingState;
