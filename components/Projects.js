import React from 'react';
import { GitHub } from 'lucide-react';
import { detailedProjects } from '../sections/constants';

function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Projects</h2>
      <div className="space-y-8">
        {detailedProjects.map((project, index) => (
          <div 
            key={index} 
            className="grid md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="md:order-2">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 md:order-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
              >
                <GitHub className="mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
