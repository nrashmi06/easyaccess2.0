import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const BasicElectricalPage = () => {
  return (
    <div className="subject-page">
      <h1>Basic Electrical</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for Basic Electrical.</p>
          <Link to="app\src\qp\BEE\BEE MSE 2014.pdf" target="_blank">
            Download MSE Paper 2014
          </Link><br />
          <Link to="app\src\qp\BEE\BEE MSE 2015.pdf" target="_blank">
            Download MSE Paper 2015
          </Link><br />
          <Link to="app\src\qp\BEE\BEE MSE 2016.pdf" target="_blank">
            Download MSE Paper 2016
          </Link><br />
          <Link to="app\src\qp\BEE\BEE MSE 2017.pdf" target="_blank">
            Download MSE Paper 2017
          </Link><br />
          <Link to="app\src\qp\BEE\BEE MSE 2022.pdf" target="_blank">
            Download MSE Paper 2022
          </Link><br />
         
        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for Basic Electrical.</p>
          <Link to="app\src\qp\BEE\BEE SEE 2015..pdf" target="_blank">
            Download SEE Paper 2015
          </Link><br />
          <Link to="app\src\qp\BEE\BEE SEE 2016.pdf" target="_blank">
            Download SEE Paper 2016
          </Link><br />
          <Link to="app\src\qp\BEE\BEE SEE 2017.pdf" target="_blank">
            Download SEE Paper 2017
          </Link><br />
          <Link to="app\src\qp\BEE\BEE SEE 2018.pdf" target="_blank">
            Download SEE Paper 2018
          </Link><br />
          <Link to="app\src\qp\BEE\BEE 2019.pdf" target="_blank">
            Download SEE Paper 2018
          </Link><br />          
          <Link to="app\src\qp\BEE\BEE SEE 2021.pdf" target="_blank">
            Download SEE Paper 2021
          </Link><br />
          <Link to="app\src\qp\BEE\BEE SEE 2022.pdf" target="_blank">
            Download SEE Paper 2022
          </Link><br />
        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for Basic Electrical.</p>
          <Link to="app\src\qp\BEE\MCQ-BEE.pdf" target="_blank">
            Download MCQ
          </Link><br />
        </div>
      </div>
    </div>
  );
};

export default BasicElectricalPage;
