import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const BiologyPage = () => {
  return (
    <div className="subject-page">
      <h1>Biology</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for Biology.</p>
          <Link to="/qp/BIOLOGY/UNIT%201-QUESTION%20BANK%20(Topic%201-5).pdf" target="_blank">
            Download MCQ
          </Link><br />
          <Link to="/qp/BIOLOGY/UNIT%202-QUESTION%20BANK%20(Topic%206-10).pdf" target="_blank">
            Download MCQ
          </Link><br />
          <Link to="/qp/BIOLOGY/UNIT%203-QUESTION%20BANK%20(Topic%2011-13).pdf" target="_blank">
            Download MCQ
          </Link><br />
        </div>
      </div>
    </div>
  );
};

export default BiologyPage;
