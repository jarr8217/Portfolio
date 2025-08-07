import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-slate-800 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <ul className="hidden md:flex md:space-x-16 lg:space-x-24 py-4 justify-center">
                    <li>
                        <Link to="/" className="text-white hover:text-blue-400 transition-colors duration-200 text-lg font-medium">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-blue-400 transition-colors duration-200 text-lg font-medium">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="text-white hover:text-blue-400 transition-colors duration-200 text-lg font-medium">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience" className="text-white hover:text-blue-400 transition-colors duration-200 text-lg font-medium">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-blue-400 transition-colors duration-200 text-lg font-medium">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* For screens 767px and below*/}
                <div className="md:hidden">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-white font-bold text-lg">Jose Refoyo-Ron</div>
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-blue-400 focus:outline-none transition-colors duration-200"
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
                        <ul className="pb-4 space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="block text-white hover:text-blue-400 transition-colors duration-200 text-base font-medium py-2 px-4 hover:bg-slate-700 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block text-white hover:text-blue-400 transition-colors duration-200 text-base font-medium py-2 px-4 hover:bg-slate-700 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="block text-white hover:text-blue-400 transition-colors duration-200 text-base font-medium py-2 px-4 hover:bg-slate-700 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block text-white hover:text-blue-400 transition-colors duration-200 text-base font-medium py-2 px-4 hover:bg-slate-700 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};
export default Navbar;