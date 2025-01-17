import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../src/components/navbar/Navbar.jsx';
import Footer from '../../src/components/footer/contact.jsx';

const MainPage = () => {
  const [loadedImage, setLoadedImage] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const heroRef = useRef(null);
  const subjectsRef = useRef(null);

  const subjects = [
    { path: '/maths', name: 'Mathematics', icon: '➗' },
    { path: '/physics', name: 'Physics', icon: '⚡' },
    { path: '/chem', name: 'Chemistry', icon: '🧪' },
    { path: '/civil', name: 'Civil Engineering', icon: '🏗️' },
    { path: '/mech', name: 'Mechanical', icon: '⚙️' },
    { path: '/be', name: 'Basic Electronics', icon: '🔌' },
    { path: '/bee', name: 'Basic Electricals', icon: '💡' },
    { path: '/cpp', name: 'C++', icon: '💻' },
    { path: '/ld', name: 'Logic Design', icon: '🔧' },
    { path: '/coi', name: 'COI', icon: '📚' },
    { path: '/eng', name: 'Technical English', icon: '📝' },
    { path: '/bio', name: 'Biology', icon: '🧬' },
    { path: '/python', name: 'Python', icon: '🐍' },
    { path: '/evs', name: 'EVS', icon: '🌍' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    [heroRef, subjectsRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto py-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 animate-fade-in">
              Access Question Papers
              <span className="block text-blue-600">With Ease</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Prepare effectively for your exams with our comprehensive collection of previous question papers.
            </p>
            <a
              href="#subjects"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Explore Subjects
            </a>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">📚</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section
        id="subjects"
        ref={subjectsRef}
        className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Browse by Subject
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subjects.map((subject) => (
              <Link
                key={subject.path}
                to={subject.path}
                className="group"
              >
                <div className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center gap-4 transform hover:-translate-y-1">
                  <span className="text-4xl">{subject.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {subject.name}
                  </h3>
                  <span className="text-sm text-gray-500 group-hover:text-blue-500">
                    View Papers →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainPage;
