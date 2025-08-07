import React from 'react';
import HeroSection from './HeroSection';
import FeatureProject from './FeatureProject';
import ProjectCard from './ProjectCard';
import ExperienceCard from './ExperienceCard';
import { projects } from '../data/projectData';
import FeatureBadges from './FeatureBadges';

const Home = () => {
    return (
        <div className="pt-20">
            <HeroSection />
            <div className="p-4 md:p-8 max-w-4xl mx-auto font-sans">

                <FeatureProject project={projects[0]} />
                <FeatureBadges />

            </div>
        </div>
    );
};

export default Home;
