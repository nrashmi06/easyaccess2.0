import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const MechanicalPage = () => {
  return (
    <div className="subject-page">
      <h1>Mechanical</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for Mechanical.</p>
          <Link to="/path-to-mse-paper-mechanical.pdf" target="_blank">
            Download MSE Paper
          </Link>
        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for Mechanical.</p>
          <Link to="/path-to-see-paper-mechanical.pdf" target="_blank">
            Download SEE Paper
          </Link>
        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for Mechanical.</p>
          <Link to="/path-to-mcq-mechanical.pdf" target="_blank">
            Download MCQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MechanicalPage;
