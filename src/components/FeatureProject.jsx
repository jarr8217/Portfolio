import React from 'react';

const FeatureProject = ({ project }) => {
    return (
        <section className='feature-project'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>

            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </section>
    )
}

export default FeatureProject;