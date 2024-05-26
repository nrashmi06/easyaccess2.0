import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const CPPPage = () => {
  return (
    <div className="subject-page">
      <h1>C++</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for C++.</p>
          <Link to="/path-to-mse-paper-cpp.pdf" target="_blank">
            Download MSE Paper
          </Link>
        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for C++.</p>
          <Link to="/path-to-see-paper-cpp.pdf" target="_blank">
            Download SEE Paper
          </Link>
        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for C++.</p>
          <Link to="/path-to-mcq-cpp.pdf" target="_blank">
            Download MCQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CPPPage;
