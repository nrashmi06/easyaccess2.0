import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const EnglishPage = () => {
  return (
    <div className="subject-page">
      <h1>Technical English</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for Technical English.</p>
          <Link to="/qp/ENGLISH/MSE/ENG%20MSE%202012.pdf" target="_blank">
            Download MSE Paper 2012
          </Link><br />
          <Link to="/qp/ENGLISH/MSE/ENG%20MSE%202013.pdf" target="_blank">
            Download MSE Paper 2013
          </Link><br />
          <Link to="/qp/ENGLISH/MSE/ENG%20MSE%202014.pdf" target="_blank">
            Download MSE Paper 2014
          </Link><br />
          <Link to="/qp/ENGLISH/MSE/ENG%20MSE%202015.pdf" target="_blank">
            Download MSE Paper 2015
          </Link><br />
          <Link to="/qp/ENGLISH/MSE/ENG%20MSE%202016.pdf" target="_blank">
            Download MSE Paper 2016
          </Link><br />
          <Link to="/qp/ENGLISH/MSE/ENG%20MSE%202017.pdf" target="_blank">
            Download MSE Paper 2017
          </Link><br />
          <Link to="/qp/ENGLISH/MSE/ENG%20MSE%202021.pdf" target="_blank">
            Download MSE Paper 2021
          </Link><br />
          <Link to="/qp/ENGLISH/MSE/ENG%20MSE%202022.pdf" target="_blank">
            Download MSE Paper 2022
          </Link><br />
        </div>
        <div className="subject-card">
          <h2>SEE</h2>
          <p>Semester End Examination Papers for Technical English.</p>
          <Link to="/qp/ENGLISH/SEE/ENG%20SEE%202015.pdf" target="_blank">
            Download SEE Paper 2015
          </Link><br />
          <Link to="/qp/ENGLISH/SEE/ENG%20SEE%202016.pdf" target="_blank">
            Download SEE Paper 2016
          </Link><br />
          <Link to="/qp/ENGLISH/SEE/ENG%20SEE%202017.pdf" target="_blank">
            Download SEE Paper 2017
          </Link><br />
          <Link to="/qp/ENGLISH/SEE/ENG%20SEE%202018.pdf" target="_blank">
            Download SEE Paper 2018
          </Link><br />
          <Link to="/qp/ENGLISH/SEE/ENG%20SEE%202019.pdf" target="_blank">
            Download SEE Paper 2019
          </Link><br />
          <Link to="/qp/ENGLISH/SEE/ENG%20SEE%202021.pdf" target="_blank">
            Download SEE Paper 2021
          </Link><br />
          <Link to="/qp/ENGLISH/SEE/ENG%20SEE%202022.pdf" target="_blank">
            Download SEE Paper 2022
          </Link><br />
        </div>
      </div>
    </div>
  );
};

export default EnglishPage;
