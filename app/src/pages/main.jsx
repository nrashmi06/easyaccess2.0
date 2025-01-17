import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../src/components/navbar/Navbar.jsx';
import img2 from '../images/img2.png';
import './mainpage.css';
import Footer from '../../src/components/footer/contact.jsx';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

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

  const subjects = [
    { path: '/maths', name: 'Mathematics', emoji: '➗' },
    { path: '/physics', name: 'Physics', emoji: '⚡' },
    { path: '/chem', name: 'Chemistry', emoji: '🧪' },
    { path: '/civil', name: 'Civil', emoji: '🏗️' },
    { path: '/mech', name: 'Mechanical', emoji: '⚙️' },
    { path: '/be', name: 'Basic Electronics', emoji: '🔌' },
    { path: '/bee', name: 'Basic Electricals', emoji: '💡' },
    { path: '/cpp', name: 'CPP', emoji: '💻' },
    { path: '/ld', name: 'Logic Design', emoji: '🔧' },
    { path: '/coi', name: 'COI', emoji: '📚' },
    { path: '/eng', name: 'Technical English', emoji: '📝' },
    { path: '/bio', name: 'Biology', emoji: '🧬' },
    { path: '/python', name: 'Python', emoji: '🐍' },
    { path: '/evs', name: 'EVS', emoji: '🌍' }
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
    const fetchImage = async () => {
      try {
        const response = await fetch(img2);
        const blob = await response.blob();
        setLoadedImage(URL.createObjectURL(blob));
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    fetchImage();
  }, []);

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
  }, [section2Ref]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar sectionClassNames={sectionClassNames} />
      
      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-50 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
      </button>

      <div className="page flex flex-col min-h-screen">
        {/* Hero Section */}
        <section
          ref={section1Ref}
          className="section1 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 transition-colors duration-300 dark:bg-gray-900"
        >
          <div className="text-center md:text-left p-8 md:p-16 lg:p-32 flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300 dark:text-white">
              Gain easy access to question papers
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
              This website provides access to question papers to help with the
              preparation of exams.
            </p>
          </div>
          <div
            className={`flex-1 p-4 image-container transition-opacity duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {loadedImage && (
              <img
                src={loadedImage}
                alt="Study materials illustration"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </div>
        </section>

        {/* Subjects Section */}
        <section
          ref={section2Ref}
          className={`section2 relative min-h-screen py-12 transition-opacity duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          } ${darkMode ? 'bg-gray-800' : 'bg-slate-300'}`}
        >
          <div className="relative z-10 p-6 md:p-12 lg:p-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">Subjects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {subjects.map((subject) => (
                <Link key={subject.path} to={subject.path} className="subject-link">
                  <div className="subject-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-center mb-4">
                      <span className="text-6xl" role="img" aria-label={subject.name}>
                        {subject.emoji}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                      {subject.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Background layers */}
          <div className="absolute inset-0 transform rotate-3 opacity-1 overflow-hidden z-0">
            <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? 'bg-gray-700' : 'bg-slate-500'} rotate-2 opacity-10`}></div>
            <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? 'bg-gray-800' : 'bg-slate-600'} opacity-75 transform rotate-3`}></div>
            <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? 'bg-gray-900' : 'bg-slate-800'} opacity-85 transform rotate-6`}></div>
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
