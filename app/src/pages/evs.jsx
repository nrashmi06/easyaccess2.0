import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const EVSPage = () => {
  return (
    <div className="subject-page">
      <h1>Environmental Studies (EVS)</h1>
      <div className="subject-grid">
        
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for EVS.</p>
          <Link to="/qp/EVS/EVS%20Complete%20Question%20Bank%20SEE.pdf" target="_blank">
            Download MCQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EVSPage;
