import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const PythonPage = () => {
  return (
    <div className="subject-page">
      <h1>Python</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for Python.</p>
          <Link to="/qp/PYTHON/MSE/PYTHON%20MSE1%202022.pdf" target="_blank">
            Download MSE Paper 2022
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PythonPage;
