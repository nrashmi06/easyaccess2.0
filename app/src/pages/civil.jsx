import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const CivilPage = () => {
  return (
    <div className="subject-page">
      <h1>Civil</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for Civil.</p>
          <Link to="/path-to-mse-paper-civil.pdf" target="_blank">
            Download MSE Paper
          </Link>
        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for Civil.</p>
          <Link to="/path-to-see-paper-civil.pdf" target="_blank">
            Download SEE Paper
          </Link>
        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for Civil.</p>
          <Link to="/path-to-mcq-civil.pdf" target="_blank">
            Download MCQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CivilPage;
