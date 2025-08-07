import React from 'react';
import { badges } from '../data/digitalBadgesdata';
import DigitalBadges from './DigitalBadges';

const About = () => {
    return (
        <section id="about" className="bg-gray-100 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-800 ">
                    Hi there,
                </p>
                <p className="text-gray-700">
                    I am Jose, a full stack developer with a Python Flask specialization and expertise in JavaScript, SQL, HTML and CSS. I build
                    secure, scalable RESTful APIs with JWT authentication and implement CRUD operations using ORM with MySQL. On the front end I
                    create responsive interfaces with React, Bootstrap and Tailwind CSS and manipulate the DOM to deliver seamless user experiences.
                    I leverage Git and GitHub for version control, Postman and Swagger for API testing and documentation and VS Code for
                    development. I also implement continuous integration and continuous delivery pipelines and write unit tests to ensure code
                    quality. I am fluent in English and Spanish, thrive in remote Agile teams and continuously expand my technical skill set.
                </p>
                <p className="text-gray-700 mb-12 pb-8">
                    My journey through Coding Temple’s apprenticeship and self-guided learning has given me deep experience in REST API development,
                    database modeling, and CI/CD workflows. I now build web applications where frontend polish meets backend reliability.
                </p>
                <DigitalBadges />
            </div>
        </section>
    );
}

export default About;
