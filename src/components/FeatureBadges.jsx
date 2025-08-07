import React from 'react';
import { badges } from '../data/digitalBadgesdata';

const FeatureBadges = () => {
    const featuredBadges = badges.filter(badge => [1, 2, 3].includes(badge.id));

    return (
        <section className="mb-8 md:mb-20">
            <h2 className="text-xl md:text-4xl font-semibold mb-3 md:mb-4 text-white text-center">Featured Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {featuredBadges.map((badge) => (
                    <div key={badge.id} className="bg-white shadow-lg rounded-lg p-3 md:p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="flex-shrink-0 mb-3">
                            <img src={badge.image} alt={badge.title} className="w-full h-32 md:h-36 object-contain rounded-lg" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-sm md:text-base font-semibold mb-2 line-clamp-2">{badge.title}</h3>
                            <p className="text-gray-600 mb-3 text-xs md:text-sm line-clamp-3">{badge.description}</p>
                        </div>
                        <a
                            href={badge.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 text-xs md:text-sm mt-auto"
                        >
                            Verify Certificate →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureBadges;
