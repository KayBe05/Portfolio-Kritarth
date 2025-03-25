import React, { useState } from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const KritarthPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: (
      <div className="text-center">
        <img 
          src="/api/placeholder/300/300" 
          alt="Kritarth Bijalwann" 
          className="rounded-full mx-auto mb-6 w-64 h-64 object-cover shadow-lg"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Kritarth Bijalwann</h1>
        <p className="text-xl text-gray-600 mb-6">Software Developer | Tech Enthusiast</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://github.com/kritarthbijalwann" 
            target="_blank" 
            className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/kritarthbijalwann" 
            target="_blank" 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    ),
    about: (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          I'm a passionate software developer with expertise in web technologies, 
          machine learning, and cloud computing. I love solving complex problems 
          and creating innovative solutions that make a difference.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Code className="mr-2 text-blue-600" />
                Python, JavaScript, React
              </li>
              <li className="flex items-center">
                <Code className="mr-2 text-blue-600" />
                Machine Learning, Data Science
              </li>
              <li className="flex items-center">
                <Code className="mr-2 text-blue-600" />
                Cloud Technologies (AWS, GCP)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div>
              <h4 className="font-medium">Bachelor of Technology</h4>
              <p className="text-gray-600">Computer Science & Engineering</p>
              <p className="text-sm text-gray-500">XYZ Institute of Technology</p>
            </div>
          </div>
        </div>
      </div>
    ),
    projects: (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Machine Learning Predictor</h3>
            <p className="text-gray-600 mb-4">
              Developed a predictive model using Python and scikit-learn 
              to forecast market trends with 85% accuracy.
            </p>
            <div className="flex space-x-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">ML</span>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Web Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Created a real-time analytics dashboard using React and 
              Node.js with interactive data visualizations.
            </p>
            <div className="flex space-x-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    ),
    contact: (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="your.email@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea 
              id="message" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              rows="4" 
              placeholder="Your message..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    )
  };

  const navItems = [
    { icon: Home, section: 'home', label: 'Home' },
    { icon: User, section: 'about', label: 'About' },
    { icon: Briefcase, section: 'projects', label: 'Projects' },
    { icon: Mail, section: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 md:top-0 md:bottom-auto">
        <div className="flex justify-around py-3 max-w-xl mx-auto">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => setActiveSection(item.section)}
              className={`flex flex-col items-center ${
                activeSection === item.section 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16 pt-24 md:pt-32 max-w-4xl">
        {sections[activeSection]}
      </main>
    </div>
  );
};

export default KritarthPortfolio;
