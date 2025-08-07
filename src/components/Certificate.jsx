import React from 'react';

const Certificate = () => {
    return (
        <div className="pt-20 p-4 md:p-8 max-w-4xl mx-auto font-sans min-h-screen">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-white tracking-wide">My Certificates</h1>
            <div className="flex flex-col items-center space-y-6">
                <a
                    href="/certificates/software-engineering-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                >
                    View Software Engineering Certificate
                </a>
            </div>
        </div>
    );
}