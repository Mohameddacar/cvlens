import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-20 pb-12 px-6 border-t border-black/[0.03] bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                            CV
                        </div>
                        <span className="text-xl font-bold tracking-tight">CVLens</span>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-8">
                        <a href="#" className="text-sm font-medium text-text-light hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="text-sm font-medium text-text-light hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="text-sm font-medium text-text-light hover:text-primary transition-colors">Contact</a>
                        <a href="#" className="text-sm font-medium text-text-light hover:text-primary transition-colors">Pricing</a>
                    </nav>
                </div>

                <div className="text-center pt-8 border-t border-black/[0.03]">
                    <p className="text-text-lighter text-sm">
                        © {new Date().getFullYear()} CVLens AI. Built with precision for the modern job seeker.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
