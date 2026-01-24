import React from 'react';
import Button from '../common/Button';

const CTASection = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/40">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-dark/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                        Want to Improve Your Score?
                    </h2>
                    <p className="text-primary-light mb-10 text-lg max-w-xl mx-auto opacity-90">
                        Our premium optimizer helps you fix every red flag in minutes. Join 5,000+ users who landed more interviews.
                    </p>
                    <Button variant="secondary" className="h-14 px-10 text-lg bg-white text-primary border-none shadow-xl hover:bg-gray-50">
                        Improve My Resume
                    </Button>
                    <p className="mt-8 text-xs font-medium text-white/60 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Your data is 100% secure and private
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
