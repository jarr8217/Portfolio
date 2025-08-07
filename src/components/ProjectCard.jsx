import React from 'react';

const ProjectCard = ({ projects }) => {
    return (
        <section className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Projects</h2>
            <ul className="space-y-3 md:space-y-4">
                {projects.map((project, index) => (
                    <li key={index} className="bg-white shadow-lg rounded-lg p-4 md:p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 text-sm md:text-base"
                        >
                            View Project →
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProjectCard;