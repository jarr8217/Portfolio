import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projectData';

const Projects = () => {
    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto font-sans min-h-screen">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">My Projects</h1>
            <ProjectCard projects={projects} />
        </div>
    );
};

export default Projects;
