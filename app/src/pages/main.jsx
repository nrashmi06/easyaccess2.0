import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../src/components/navbar/Navbar.jsx';
import img2 from '../images/img2.png';
import './mainpage.css';
import Footer from '../../src/components/footer/contact.jsx';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const sectionClassNames = ['section1', 'section2', 'section3'];
  const [loadedImage, setLoadedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const Sun = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffe747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  );
  
  const Moon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  );

  const subjects = [
    { path: '/maths', name: 'Mathematics', emoji: '➗', color: 'bg-blue-100 dark:bg-blue-900' },
    { path: '/physics', name: 'Physics', emoji: '⚡', color: 'bg-yellow-100 dark:bg-yellow-900' },
    { path: '/chem', name: 'Chemistry', emoji: '🧪', color: 'bg-green-100 dark:bg-green-900' },
    { path: '/civil', name: 'Civil', emoji: '🏗️', color: 'bg-orange-100 dark:bg-orange-900' },
    { path: '/mech', name: 'Mechanical', emoji: '⚙️', color: 'bg-red-100 dark:bg-red-900' },
    { path: '/be', name: 'Basic Electronics', emoji: '🔌', color: 'bg-purple-100 dark:bg-purple-900' },
    { path: '/bee', name: 'Basic Electricals', emoji: '💡', color: 'bg-indigo-100 dark:bg-indigo-900' },
    { path: '/cpp', name: 'CPP', emoji: '💻', color: 'bg-pink-100 dark:bg-pink-900' },
    { path: '/ld', name: 'Logic Design', emoji: '🔧', color: 'bg-teal-100 dark:bg-teal-900' },
    { path: '/coi', name: 'COI', emoji: '📚', color: 'bg-cyan-100 dark:bg-cyan-900' },
    { path: '/eng', name: 'Technical English', emoji: '📝', color: 'bg-emerald-100 dark:bg-emerald-900' },
    { path: '/bio', name: 'Biology', emoji: '🧬', color: 'bg-lime-100 dark:bg-lime-900' },
    { path: '/python', name: 'Python', emoji: '🐍', color: 'bg-sky-100 dark:bg-sky-900' },
    { path: '/evs', name: 'EVS', emoji: '🌍', color: 'bg-violet-100 dark:bg-violet-900' }
  ];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    setTimeout(() => setSlideIn(true), 100);
    return () => URL.revokeObjectURL(loadedImage);
  }, [loadedImage]);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setSlideIn(false);
          setTimeout(() => setSlideIn(true), 100);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (section1Ref.current) {
      observer1.observe(section1Ref.current);
    }

    return () => {
      if (section1Ref.current) {
        observer1.unobserve(section1Ref.current);
      }
    };
  }, [section1Ref]);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (section2Ref.current) {
      observer2.observe(section2Ref.current);
    }

    return () => {
      if (section2Ref.current) {
        observer2.unobserve(section2Ref.current);
      }
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar sectionClassNames={sectionClassNames} />
      
      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 z-50 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
      </button>

      <div className="page flex flex-col min-h-screen">
        {/* Hero Section */}
        <section
          ref={section1Ref}
          className="section1 min-h-screen relative overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 opacity-30"></div>
          
          {/* Content container */}
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex-1 text-center md:text-left space-y-6 max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient">
                Gain Easy Access to Question Papers
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Streamline your exam preparation with our comprehensive collection of past question papers. Access, study, and succeed with ease.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="flex-1 p-4">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
                <img
                  src={img2}
                  alt="Study materials illustration"
                  className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 max-w-md mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Subjects Section */}
        <section
          ref={section2Ref}
          className={`section2 relative py-20 transition-opacity duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          } bg-gray-100 dark:bg-gray-800`}
        >
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                Explore Subjects
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose from our wide range of subjects and access comprehensive study materials
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subjects.map((subject, index) => (
                <Link 
                  key={subject.path} 
                  to={subject.path}
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`h-full rounded-xl shadow-lg backdrop-blur-lg bg-white/80 dark:bg-gray-700/80 p-6 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300`}>
                    <div className="flex flex-col items-center space-y-4">
                      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${subject.color} text-3xl`}>
                        <span role="img" aria-label={subject.name}>{subject.emoji}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                        {subject.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/20 dark:to-purple-900/20"></div>
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="section3 footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default MainPage;