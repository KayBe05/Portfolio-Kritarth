import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Get In Touch</h2>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-xl rounded-lg p-8 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Your Full Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            rows="5" 
            placeholder="Your message to Kritarth..."
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
