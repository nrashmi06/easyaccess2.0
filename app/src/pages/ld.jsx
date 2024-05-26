import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const LDPage = () => {
  return (
    <div className="subject-page">
      <h1>Logic Design</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for Logic Design.</p>
          <Link to="/qp/LD/MSE/LD%20MSE%202022.pdf" target="_blank">
            Download MSE Paper
          </Link>
        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for Logic Design.</p>
          <Link to="/qp/LD/SEE/LD%20SEE%202022.pdf" target="_blank">
            Download SEE Paper
          </Link>
        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for Logic Design.</p>
          <Link to="/qp/LD/MCQ/LD%20MCQs.pdf" target="_blank">
            Download MCQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LDPage;
