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
          <Link to="/qp/EME/EME%20MSE%202017.pdf" target="_blank">
            Download MSE Paper 2017
          </Link> <br />
          <Link to="/qp/EME/EME%20MSE%202022.pdf" target="_blank">
            Download MSE Paper 2022
          </Link> <br />
        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for Mechanical.</p>
          <Link to="/qp/EME/EME%20SEE%202013.pdf" target="_blank">
            Download SEE Paper 2013
          </Link><br />
          <Link to="/qp/EME/EME%20SEE%202014.pdf" target="_blank">
            Download SEE Paper 2014
          </Link><br />
          <Link to="/qp/EME/EME%20SEE%202015.pdf" target="_blank">
            Download SEE Paper 2015
          </Link><br />
          <Link to="/qp/EME/EME%20SEE%202016.pdf" target="_blank">
            Download SEE Paper 2016
          </Link><br />
          <Link to="/qp/EME/EME%20SEE%202017.pdf" target="_blank">
            Download SEE Paper 2017
          </Link><br />
          <Link to="/qp/EME/EME%20SEE%202018.pdf" target="_blank">
            Download SEE Paper 2018
          </Link><br />
          <Link to="/qp/EME/EME%20SEE%202019.pdf" target="_blank">
            Download SEE Paper 2019
          </Link><br />
          <Link to="/qp/EME/EME%20SEE%202021.pdf" target="_blank">
            Download SEE Paper 2021
          </Link><br />
          <Link to="/qp/EME/EME%20SEE%202022.pdf" target="_blank">
            Download SEE Paper 2022
          </Link><br />

        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for EME.</p>
          <Link to="/qp/EME/EME%20MCQ-Combined.pdf" target="_blank">
            Download MCQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MechanicalPage;
