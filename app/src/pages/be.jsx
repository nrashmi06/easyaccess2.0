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
          <Link to="/path-to-mse-paper-basicelectronics.pdfapp/src/qp/BE/MSE/BE MSE 2015.pdf" target="_blank">
            Download MSE Paper 2015
          </Link>
          <br />
          <Link to="/path-to-mse-paper-basicelectronics.pdfapp/src/qp/BE/MSE/BE MSE 2016.pdf" target="_blank">
            Download MSE Paper 2016
          </Link>
          <br />
          <Link to="/path-to-mse-paper-basicelectronics.pdfapp/src/qp/BE/MSE/BE MSE 2017.pdf" target="_blank">
            Download MSE Paper 2017
          </Link>
          <br />
          <Link to="/path-to-mse-paper-basicelectronics.pdfapp/src/qp/BE/MSE/BE MSE 2022.pdf" target="_blank">
            Download MSE Paper 2022
          </Link>

        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for Basic Electronics.</p>
          <Link to="app\src\qp\BE\SEE\BE SEE 2015.pdf" target="_blank">
            Download SEE Paper 2015
          </Link>
          <br />
          <Link to="app\src\qp\BE\SEE\BE SEE 2016.pdf" target="_blank">
            Download SEE Paper 2016
          </Link>
          <br />
          <Link to="app\src\qp\BE\SEE\BE SEE 2017.pdf" target="_blank">
            Download SEE Paper 2017
          </Link><br />
          <Link to="app\src\qp\BE\SEE\BE SEE 2018.pdf" target="_blank">
            Download SEE Paper 2018
          </Link><br />
          <Link to="app\src\qp\BE\SEE\BE SEE 2021.pdf" target="_blank">
            Download SEE Paper 2021
          </Link><br />
          <Link to="app\src\qp\BE\SEE\BE SEE 2022.pdf" target="_blank">
            Download SEE Paper 2022
          </Link><br />
        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for Basic Electronics.</p>
          <Link to="app\src\qp\BE\MCQ\MCQ Question Bank-compressed.pdf" target="_blank">
            Download MCQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasicElectronicsPage;
