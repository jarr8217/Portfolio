import React from 'react';
import HeroSection from './HeroSection';
import FeatureProject from './FeatureProject';
import ProjectCard from './ProjectCard';
import ExperienceCard from './ExperienceCard';
import { projects } from '../data/projectData';
import DigitalBadges from './DigitalBadges';

const Home = () => {
    return (
        <>
            <HeroSection />
            <div className="p-4 md:p-8 max-w-4xl mx-auto font-sans">

                <FeatureProject project={projects[0]} />
                <DigitalBadges />

            </div>
        </>
    );
};

export default Home;
