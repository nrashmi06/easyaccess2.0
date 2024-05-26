import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const ChemistryPage = () => {
  return (
    <div className="subject-page">
      <h1>Chemistry</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for Chemistry.</p>
          <Link to="/qp/CHEMISTRY/CHE%20MSE%202009.pdf" target="_blank">
            Download MSE Paper 2009
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20MSE%202012.pdf" target="_blank">
            Download MSE Paper 2012
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20MSE%202013.pdf" target="_blank">
            Download MSE Paper 2013
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20MSE%202014(2).pdf" target="_blank">
            Download MSE Paper 2014
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20MSE%202015.pdf" target="_blank">
            Download MSE Paper 2015
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20MSE%202017.pdf" target="_blank">
            Download MSE Paper 2017
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20MSE%202022.pdf" target="_blank">
            Download MSE Paper 2022
          </Link><br />
        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for Chemistry.</p>
          <Link to="/qp/CHEMISTRY/CHE%20SEE%202015.pdf" target="_blank">
            Download SEE Paper 2015
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20SEE%202016.pdf" target="_blank">
            Download SEE Paper 2016
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20SEE%202017.pdf" target="_blank">
            Download SEE Paper 2017
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20SEE%202018.pdf" target="_blank">
            Download SEE Paper 2018
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20SEE%202019.pdf" target="_blank">
            Download SEE Paper 2019
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20SEE%202021.pdf" target="_blank">
            Download SEE Paper 2021
          </Link><br />
          <Link to="/qp/CHEMISTRY/CHE%20SEE%202022.pdf" target="_blank">
            Download SEE Paper 2022
          </Link><br />
        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for Chemistry.</p>
          <Link to="/qp/CHEMISTRY/MCQs%20che.pdf" target="_blank">
            Download MCQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChemistryPage;
