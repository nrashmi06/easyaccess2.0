import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const CPPPage = () => {
  return (
    <div className="subject-page">
      <h1>CPP</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for C++.</p>
          <Link to="/qp/CPP/CPP%20MSE%202017.pdf" target="_blank">
            Download MSE Paper 2017
          </Link><br />
          <Link to="/qp/CPP/CPP%20MSE%202022.pdf" target="_blank">
            Download MSE Paper 2022
          </Link><br />
        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for C++.</p>
          <Link to="/qp/CPP/CPP%20SEE%202015.pdf" target="_blank">
            Download SEE Paper 2015
          </Link><br />
          <Link to="/qp/CPP/CPP%20SEE%202016.pdf" target="_blank">
            Download SEE Paper 2016
          </Link><br />
          <Link to="/qp/CPP/CPP%20SEE%202017.pdf" target="_blank">
            Download SEE Paper 2017
          </Link><br />
          <Link to="/qp/CPP/CPP%20SEE%202018.pdf" target="_blank">
            Download SEE Paper 2018
          </Link><br />
          <Link to="/qp/CPP/CPP%20SEE%202019.pdf" target="_blank">
            Download SEE Paper 2019
          </Link><br />
          <Link to="/qp/CPP/CPP%20SEE%202021.pdf" target="_blank">
            Download SEE Paper 2021
          </Link><br />
          <Link to="/qp/CPP/CPP%20SEE%202022.pdf" target="_blank">
            Download SEE Paper 2022
          </Link><br />
        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for C++.</p>
          <Link to="/qp/CPP/MCQ%20Set%201.pdf" target="_blank">
            Download MCQ 1
          </Link><br />
          <Link to="/qp/CPP/MCQ%20Set%202.pdf" target="_blank">
            Download MCQ 2
          </Link><br />
          <Link to="/qp/CPP/MCQ%20Set%203.pdf" target="_blank">
            Download MCQ 3
          </Link><br />
          <Link to="/qp/CPP/MCQ%20Set%204.pdf" target="_blank">
            Download MCQ 4
          </Link><br />
          <Link to="/qp/CPP/MCQ%20Set%205.pdf" target="_blank">
            Download MCQ 5
          </Link><br />
          <Link to="/qp/CPP/MCQ%20Set%206.pdf" target="_blank">
            Download MCQ 6
          </Link><br />
          <Link to="/qp/CPP/MCQ%20Set%207.pdf" target="_blank">
            Download MCQ 7
          </Link><br />
          <Link to="/qp/CPP/MCQ%20Set%208.pdf" target="_blank">
            Download MCQ 8
          </Link><br />
          <Link to="/qp/CPP/MCQ%20Set%209.pdf" target="_blank">
            Download MCQ 9
          </Link><br />
          <Link to="/qp/CPP/MCQ%20Set%2010.pdf" target="_blank">
            Download MCQ 10
          </Link><br />
        </div>
      </div>
    </div>
  );
};

export default CPPPage;
