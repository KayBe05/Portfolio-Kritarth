import React from 'react';
import { GitHub, Linkedin } from 'lucide-react';

function Home() {
  return (
    <div className="text-center relative">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-r from-blue-500 to-purple-600 -z-10"></div>
      <div className="pt-16">
        <img 
          src="/api/placeholder/300/300" 
          alt="Kritarth Bijalwann" 
          className="rounded-full mx-auto mb-6 w-64 h-64 object-cover shadow-2xl border-8 border-white"
        />
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Kritarth Bijalwann</h1>
        <p className="text-xl text-white/90 mb-6 drop-shadow-md">
          Software Engineer | Machine Learning Specialist | Cloud Architect
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://github.com/kritarthbijalwann" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition flex items-center"
          >
            <GitHub className="mr-2" /> GitHub
          </a>
          <a 
            href="https://linkedin.com/in/kritarthbijalwann" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition flex items-center"
          >
            <Linkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
