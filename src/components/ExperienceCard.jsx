import React from 'react';
import { experience } from '../data/experienceData';

const ExperienceCard = () => {
    return (
        <section className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Experience</h2>
            <ul className="space-y-3 md:space-y-4">
                {experience.map((job, index) => (
                    <li key={index} className="bg-white shadow-lg rounded-lg p-4 md:p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            {job.role} @ {job.company}
                        </h3>
                        <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">{job.duration}</p>
                        <p className="text-gray-700 text-sm md:text-base">{job.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ExperienceCard;
