import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const BasicElectronicsPage = () => {
  return (
    <div className="subject-page">
      <h1>Basic Electronics</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for Basic Electronics.</p>
          <Link to="/qp/BE/MSE/BE%20MSE%202015.pdf" target="_blank" download>
            Download MSE Paper 2015
          </Link>
          <br />
          <Link to="/qp/BE/MSE/BE%20MSE%202016.pdf" target="_blank" download>
            Download MSE Paper 2016
          </Link>
          <br />
          <Link to="/qp/BE/MSE/BE%20MSE%202017.pdf" target="_blank" download>
            Download MSE Paper 2017
          </Link>
          <br />
          <Link to="/qp/BE/MSE/BE%20MSE%202022.pdf" target="_blank" download>
            Download MSE Paper 2022
          </Link>
        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for Basic Electronics.</p>
          <Link to="/qp/BE/SEE/BE%20SEE%202015.pdf" target="_blank" download>
            Download SEE Paper 2015
          </Link>
          <br />
          <Link to="/qp/BE/SEE/BE%20SEE%202016.pdf" target="_blank" download>
            Download SEE Paper 2016
          </Link>
          <br />
          <Link to="/qp/BE/SEE/BE%20SEE%202017.pdf" target="_blank" download>
            Download SEE Paper 2017
          </Link><br />
          <Link to="/qp/BE/SEE/BE%20SEE%202018.pdf" target="_blank" download>
            Download SEE Paper 2018
          </Link><br />
          <Link to="/qp/BE/SEE/BE%20SEE%202021.pdf" target="_blank" download>
            Download SEE Paper 2021
          </Link><br />
          <Link to="/qp/BE/SEE/BE%20SEE%202022.pdf" target="_blank" download>
            Download SEE Paper 2022
          </Link><br />
        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for Basic Electronics.</p>
          <Link to="/qp/BE/MCQ/MCQ%20Question%20Bank-compressed.pdf" target="_blank" download>
            Download MCQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasicElectronicsPage;
