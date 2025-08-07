import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-slate-900/95 backdrop-blur-sm fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="hidden md:flex md:space-x-12 lg:space-x-16 py-6 justify-center">
                    <li>
                        <Link
                            to="/"
                            className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-medium tracking-wide"
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-medium tracking-wide"
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-medium tracking-wide"
                        >
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/experience"
                            className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-medium tracking-wide"
                        >
                            EXPERIENCE
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-white hover:text-gray-300 transition-colors duration-300 text-lg font-medium tracking-wide"
                        >
                            CONTACT
                        </Link>
                    </li>
                </ul>

                <div className="md:hidden">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-white font-bold text-lg">JOSE REFOYO-RON</div>
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <ul className="pb-4 space-y-2 bg-slate-800/95 backdrop-blur-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="block text-white hover:text-gray-300 transition-colors duration-300 text-base font-medium py-3 px-4 hover:bg-slate-700/50 rounded tracking-wide"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="block text-white hover:text-gray-300 transition-colors duration-300 text-base font-medium py-3 px-4 hover:bg-slate-700/50 rounded tracking-wide"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    ABOUT
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects"
                                    className="block text-white hover:text-gray-300 transition-colors duration-300 text-base font-medium py-3 px-4 hover:bg-slate-700/50 rounded tracking-wide"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    PROJECTS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/experience"
                                    className="block text-white hover:text-gray-300 transition-colors duration-300 text-base font-medium py-3 px-4 hover:bg-slate-700/50 rounded tracking-wide"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    EXPERIENCE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="block text-white hover:text-gray-300 transition-colors duration-300 text-base font-medium py-3 px-4 hover:bg-slate-700/50 rounded tracking-wide"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
