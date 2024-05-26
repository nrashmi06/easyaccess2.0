import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const COIPage = () => {
  return (
    <div className="subject-page">
      <h1>COI</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for COI.</p>
          <Link to="/qp/COI/MCQ/UNIT%20I%20-%20QUESTION%20BANK.pdf" target="_blank">
            Download MCQ Unit 1
          </Link><br />
          <Link to="/qp/COI/MCQ/UNIT%20II%20-%20QUESTION%20BANK.pdf" target="_blank">
            Download MCQ Unit 2
          </Link><br />
          <Link to="/qp/COI/MCQ/Unit%203%20MCQ.pdf" target="_blank">
            Download MCQ Unit 3
          </Link><br />
        </div>
      </div>
    </div>
  );
};

export default COIPage;
