import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto font-sans min-h-screen">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">My Experience</h1>
            <ExperienceCard />
        </div>
    );
};

export default Experience;
