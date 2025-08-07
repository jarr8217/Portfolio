import React from 'react';

const HeroSection = () => {
    return (
        <section className='bg-gray-100 py-12 md:py-20 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6'>
                    Welcome! My name is Jose Refoyo-Ron
                </h1>
                <p className='text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto'>
                    My journey through Coding Temple's apprenticeship and self guided learning gave me deep experience in REST API development database modelling and CI CD workflows. I now build web applications where frontend polish meets backend reliability.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
