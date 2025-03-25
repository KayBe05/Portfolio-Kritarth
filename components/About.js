import React from 'react';
import { technologies, certifications } from '../sections/constants';

function About() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          A passionate technologist with a blend of software engineering, 
          machine learning, and cloud computing expertise. I thrive on 
          solving complex problems and creating innovative solutions that 
          drive technological advancement.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Core Technologies</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <tech.icon className={`mr-4 w-12 h-12 p-2 rounded-full text-white ${tech.color}`} />
              <span className="font-medium text-gray-800">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Certifications</h3>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 bg-white shadow-md rounded-lg"
            >
              <cert.icon className="mr-4 w-12 h-12 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">{cert.title}</h4>
                <p className="text-gray-600">{cert.issuer} - {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
