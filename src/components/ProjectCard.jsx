import React, { useState } from 'react';

const ProjectCard = ({ projects }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (imageSrc, imageAlt) => {
        setSelectedImage({ src: imageSrc, alt: imageAlt });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <section className="mb-8 md:mb-10">
                <ul className="space-y-3 md:space-y-4">
                    {projects.map((project, index) => (
                        <li key={index} className="bg-white shadow-lg rounded-lg p-4 md:p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">{project.description}</p>
                            {project.image ? (
                                <div className='mb-4'>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt || `${project.title} screenshot`}
                                            className="w-full h-48 md:h-64 object-cover rounded-lg border border-gray-300 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                                            onClick={() => openImageModal(project.image, project.imageAlt || `${project.title} screenshot`)}
                                        />
                                        {project.image2 && (
                                            <img
                                                src={project.image2}
                                                alt={project.image2Alt || `${project.title} screenshot`}
                                                className="w-full h-48 md:h-64 object-cover rounded-lg border border-gray-300 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                                                onClick={() => openImageModal(project.image2, project.image2Alt || `${project.title} screenshot`)}
                                            />
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className='mb-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-48 md:h-64 flex items-center justify-center'>
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
                        </li>
                    ))}
                </ul>
            </section>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeImageModal}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={closeImageModal}
                            className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectCard;