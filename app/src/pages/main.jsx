import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import img2 from '../images/img2.png'; // Import the image
import img1 from '../images/img1.png'; // Import the image
import './mainpage.css'; // Import the CSS file for animations
import Footer from '../components/footer/contact.jsx';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [loadedImage, setLoadedImage] = useState(null);
  const [slideIn, setSlideIn] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const section1Ref = useRef(null); // Reference for the first section
  const section2Ref = useRef(null); // Reference for the second section

  useEffect(() => {
    // Set the slide-in effect after a short delay
    setTimeout(() => setSlideIn(true), 100);

    // Clean up the URL object when the component unmounts
    return () => {
      URL.revokeObjectURL(loadedImage);
    };
  }, [loadedImage]);

  useEffect(() => {
    // Fetch the image 'img2' when the component mounts
    const fetchImage = async () => {
      try {
        const response = await fetch(img2); // Use imported image variable
        const blob = await response.blob();
        setLoadedImage(URL.createObjectURL(blob)); // Set the loaded image to state
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
          setSlideIn(false);
          setTimeout(() => setSlideIn(true), 100);
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
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
      { threshold: 0.1 } // Adjust the threshold as needed
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
    <div>
      <Navbar />
      <div className="page flex flex-col min-h-screen">
        <section
          ref={section1Ref}
          className="h-screen bg-white flex items-center justify-center"
        >
          <div className="text-center p-32">
            <h1 className="text-black text-4xl font-bold mb-4">
              Gain easy access to question papers
            </h1>
            <p className="text-gray-700">
              This website provides access to question papers to help with the
              preparation of exams.
            </p>
          </div>
          <div
            className={`h-screen bg-opacity-75 flex items-center justify-center m-4 transition duration-700 ease-in-out ${
              slideIn ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}
          >
            {loadedImage && (
              <img
                src={loadedImage}
                alt="Image"
                className="max-h-full max-w-full"
              />
            )}
          </div>
        </section>
        <section
          ref={section2Ref}
          className={`bg-slate-300 relative min-h-screen my-5 transition-opacity duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative z-10 pl-20 mr-0">
            <div className="text-center mb-8">
              <h2 className="text-white text-3xl font-bold">Subjects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="./maths.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Maths</h3>
                </div>
              </Link>
              <Link to="/physics.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Physics</h3>
                </div>
              </Link>
              <Link to="/chemistry.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Chemistry</h3>
                </div>
              </Link>
              <Link to="/civil.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Civil</h3>
                </div>
              </Link>
              <Link to="/mech.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Mechanical</h3>
                </div>
              </Link>
              <Link to="/be.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Basic Electronics</h3>
                </div>
              </Link>
              <Link to="/bee.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Basic Electricals</h3>
                </div>
              </Link>
              <Link to="/cpp.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">CPP</h3>
                </div>
              </Link>
              <Link to="/ld.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Logic Design</h3>
                </div>
              </Link>
              <Link to="/coi.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">COI</h3>
                </div>
              </Link>
              <Link to="/eng.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Technical English</h3>
                </div>
              </Link>
              <Link to="/bio.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Biology</h3>
                </div>
              </Link>
              <Link to="/python.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">Python</h3>
                </div>
              </Link>
              <Link to="/evs.jsx" className="subject-link">
                <div className="subject-card bg-white p-4 rounded shadow">
                <img
                  src={img1}
                  alt="Subject Image"
                  className="mb-4 w-full h-32 object-cover rounded"
                />
                  <h3 className="text-xl font-bold">EVS</h3>
                </div>
              </Link>
              
            </div>
          </div>
          <div
            className="absolute inset-0 transform rotate-3 opacity-1 overflow-visible z-0"
            style={{ perspective: '1000px' }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-slate-500 rotate-2 opacity-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-slate-600 opacity-75 transform rotate-3"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-85 transform rotate-6"></div>
          </div>
        </section>
        
        <section className='footer flex-col min-h-screen flex-grow overflow-hidden mb-0 pb-0'>
        
      <div className='pt-40 '>
        <Footer />
      </div>
    </section>
      </div>
    </div>
  );
};

export default MainPage;