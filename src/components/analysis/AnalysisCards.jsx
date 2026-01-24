import React from 'react';

const AnalysisCard = ({ icon, title, status, description, statusType }) => {
    const statusStyles = {
        good: 'bg-success/10 text-success',
        warning: 'bg-warning/10 text-warning',
        danger: 'bg-danger/10 text-danger',
    };

    const statusLabels = {
        good: 'Good',
        warning: 'Warning',
        danger: 'Critical',
    };

    return (
        <div className="card hover:shadow-premium-hover transition-all duration-300 group">
            <div className="flex items-start gap-4">
                <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${statusStyles[statusType]}`}>
                    {icon}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-bold text-lg truncate">{title}</h4>
                        <span className={`text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full ${statusStyles[statusType]}`}>
                            {statusLabels[statusType]}
                        </span>
                    </div>
                    <p className="text-text-light text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const AnalysisCards = () => {
    const analysisData = [
        {
            title: "Skills Match",
            statusType: "good",
            description: "85% match with entry-level Software Engineer roles. Technical stack is well-defined and clearly highlighted.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Formatting",
            statusType: "warning",
            description: "Multi-column layouts can confuse some older ATS systems. Consider a single-column layout for better readability.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.268 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )
        },
        {
            title: "ATS Readiness",
            statusType: "warning",
            description: "Missing key industry skills like 'Data Analysis' and 'Agile'. Keywords and header tags are not all properly implemented.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-12">
            {analysisData.map((item, idx) => (
                <AnalysisCard key={idx} {...item} />
            ))}
        </div>
    );
};

export default AnalysisCards;
export { AnalysisCard };
