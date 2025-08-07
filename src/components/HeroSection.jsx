import React from 'react';
import { Link } from 'react-router-dom';
import Portrait from '../assets/portraits/Portrait.jpg';

const HeroSection = () => {
    return (
        <section className='min-h-screen py-12 md:py-20 px-4 relative overflow-hidden'>
            <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full'>
                <div className='text-left space-y-8 lg:space-y-12'>
                    <div>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 md:mb-4 tracking-wider'>
                            Full Stack
                        </h1>
                        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light tracking-wide'>
                            Engineer & Backend Developer
                        </h2>
                    </div>

                    <div className='space-y-4 lg:space-y-6'>
                        <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-white'>
                            ABOUT ME
                        </h3>
                        <p className='text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl'>
                            I am a software development specialist with extensive experience in designing, building, and programming web applications. My journey through Coding Temple's apprenticeship and self-guided learning gave me deep experience in REST API development, database modeling, and CI/CD workflows.
                        </p>
                    </div>

                    <div className='space-y-4 lg:space-y-6'>
                        <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-white'>
                            MY WORK
                        </h3>
                        <Link
                            to="/projects"
                            className='inline-block px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white font-semibold text-sm md:text-base hover:bg-white hover:text-slate-800 transition-all duration-300 tracking-wide'
                        >
                            VIEW PROJECTS
                        </Link>
                    </div>
                </div>

                <div className='hidden lg:flex justify-center items-center'>
                    <div className='w-full max-w-lg h-[40rem] rounded-lg shadow-2xl overflow-hidden'>
                        <img
                            src={Portrait}
                            alt="Portrait"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
