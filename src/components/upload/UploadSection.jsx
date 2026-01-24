import React, { useState, useRef } from 'react';

const UploadSection = ({ onFileSelected }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        validateAndProcessFile(file);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        validateAndProcessFile(file);
    };

    const validateAndProcessFile = (file) => {
        if (!file) return;

        if (file.type !== 'application/pdf') {
            alert('Please upload a PDF file.');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('File size exceeds 5MB limit.');
            return;
        }

        setSelectedFile(file);
        setTimeout(() => {
            onFileSelected(file);
        }, 800);
    };

    const clearFile = (e) => {
        e.stopPropagation();
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <section id="upload" className="py-24 px-6 bg-white relative">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Analyze Your Resume</h2>
                    <p className="text-text-light text-lg">Upload your CV to get started with the audit.</p>
                </div>

                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`
            relative cursor-pointer transition-all duration-500 group
            min-h-[360px] flex flex-col items-center justify-center rounded-[3rem]
            border-2 border-dashed
            ${isDragging
                            ? 'border-primary bg-primary/[0.02] scale-[1.01] shadow-2xl shadow-primary/5'
                            : 'border-gray-200 hover:border-primary/30 hover:bg-gray-50/50'
                        }
          `}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    {!selectedFile ? (
                        <div className="flex flex-col items-center text-center px-10">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black mb-3">Upload Resume</h3>
                            <p className="text-text-light font-medium mb-10 max-w-[280px]">
                                Drag and drop your PDF here or tap to browse
                            </p>
                            <button className="px-10 py-3.5 bg-white border border-gray-200 rounded-2xl font-black text-sm shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                Select PDF
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center animate-fade-in px-10">
                            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center text-success mb-8">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-center truncate max-w-[240px] mb-2 text-text">
                                {selectedFile.name}
                            </h3>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                                <p className="text-success text-xs font-black uppercase tracking-[0.15em]">
                                    Ready for Analysis
                                </p>
                            </div>
                            <button
                                onClick={clearFile}
                                className="px-6 py-2 text-text-lighter hover:text-danger hover:bg-danger/5 rounded-xl flex items-center gap-2 text-xs font-bold transition-all duration-200"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Remove and start over
                            </button>
                        </div>
                    )}
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
                    <div className="flex items-center gap-2.5 opacity-40">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-text">100% Secure</span>
                    </div>
                    <div className="flex items-center gap-2.5 opacity-40">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-text">ATS Friendly</span>
                    </div>
                    <div className="flex items-center gap-2.5 opacity-40">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-text">AI Powered</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UploadSection;
