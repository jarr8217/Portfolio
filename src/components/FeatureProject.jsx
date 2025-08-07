import React from 'react';

const FeatureProject = ({ project }) => {
    return (
        <>
            <h1 className='text-xl md:text-4xl font-semibold mb-3 md:mb-4 text-white text-center'>Featured Project</h1>
            <section className='bg-white shadow-lg rounded-lg p-4 md:p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 mb-8'>

                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">{project.title}</h2>
                <p className="text-gray-700 mb-4 text-sm md:text-base">{project.description}</p>

                {project.image ? (
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href={project.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-80 transition-opacity duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.imageAlt || `${project.title} screenshot`}
                                className="w-full h-48 md:h-64 object-cover rounded-lg border border-gray-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                            />
                        </a>
                        {project.image2 && (
                            <a
                                href={project.image2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:opacity-80 transition-opacity duration-300"
                            >
                                <img
                                    src={project.image2}
                                    alt={project.image2Alt || `${project.title} additional screenshot`}
                                    className="w-full h-48 md:h-64 object-cover rounded-lg border border-gray-300 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                                />
                            </a>
                        )}
                    </div>
                ) : (
                    <div className="mb-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-48 md:h-64 flex items-center justify-center">
                        <p className="text-gray-500 text-sm md:text-base font-medium">Images coming soon...</p>
                    </div>
                )}

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 text-sm md:text-base"
                >
                    View Project →
                </a>
            </section>
        </>
    )
}

export default FeatureProject;