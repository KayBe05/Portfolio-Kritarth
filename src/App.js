import React, { useState, useEffect } from 'react';
import { 
  Home as HomeIcon, 
  User, 
  Briefcase, 
  Mail 
} from 'lucide-react';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: HomeIcon, section: 'home', label: 'Home' },
    { icon: User, section: 'about', label: 'About' },
    { icon: Briefcase, section: 'projects', label: 'Projects' },
    { icon: Mail, section: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav 
        className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 md:top-0 md:bottom-auto transition-all duration-300 ${
          isNavFixed ? 'md:shadow-xl' : 'md:shadow-none'
        }`}
      >
        <div className="flex justify-around py-3 max-w-xl mx-auto">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => {
                setActiveSection(item.section);
                if (window.innerWidth >= 768) {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
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
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
