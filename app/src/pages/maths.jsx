import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the general CSS file

const MathsPage = () => {
  return (
    <div className="subject-page">
      <h1>Maths</h1>
      <div className="subject-grid">
        <div className="subject-card">
          <h2>MSE Paper</h2>
          <p>Mid-Semester Examination Papers for Maths.</p>
          <Link 
            to="/qp/MATHS/MATHS%201%20MSE%202017.pdf" 
            target="_blank"
          >
            Download MSE 1 Paper 2017
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%201%20MSE%202022.pdf" 
            target="_blank"
          >
            Download MSE 1 Paper 2022
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20MSE%202013.pdf" 
            target="_blank"
          >
            Download MSE 2 Paper 2013
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20MSE%202014.pdf" 
            target="_blank"
          >
            Download MSE 2 Paper 2014
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20MSE%202015.pdf" 
            target="_blank"
          >
            Download MSE 2 Paper 2015
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20MSE%202016.pdf" 
            target="_blank"
          >
            Download MSE 2 Paper 2016
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20MSE%202017.pdf" 
            target="_blank"
          >
            Download MSE 2 Paper 2017
          </Link><br />
        </div>
        <div className="subject-card">
          <h2>SEE Paper</h2>
          <p>Semester End Examination Papers for Maths.</p>
          <Link 
            to="/qp/MATHS/MATHS%201%20SEE%202015.pdf" 
            target="_blank"
          >
            Download SEE Paper 2015 (1)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%201%20SEE%202016.pdf" 
            target="_blank"
          >
            Download SEE Paper 2016 (1)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%201%20SEE%202017.pdf" 
            target="_blank"
          >
            Download SEE Paper 2017 (1)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%201%20SEE%202018.pdf" 
            target="_blank"
          >
            Download SEE Paper 2018 (1)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%201%20SEE%202019.pdf" 
            target="_blank"
          >
            Download SEE Paper 2019 (1)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%201%20SEE%202021.pdf" 
            target="_blank"
          >
            Download SEE Paper 2021 (1)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%201%20SEE%202022.pdf" 
            target="_blank"
          >
            Download SEE Paper 2022 (1)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20SEE%202014.pdf" 
            target="_blank"
          >
            Download SEE Paper 2014 (2)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20SEE%202015.pdf" 
            target="_blank"
          >
            Download SEE Paper 2015 (2)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20SEE%202016.pdf" 
            target="_blank"
          >
            Download SEE Paper 2016 (2)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20SEE%202017.pdf" 
            target="_blank"
          >
            Download SEE Paper 2017 (2)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20SEE%202018.pdf" 
            target="_blank"
          >
            Download SEE Paper 2018 (2)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20SEE%202019.pdf" 
            target="_blank"
          >
            Download SEE Paper 2019 (2)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20SEE%202021.pdf" 
            target="_blank"
          >
            Download SEE Paper 2021 (2)
          </Link><br />
          <Link 
            to="/qp/MATHS/MATHS%202%20SEE%202022.pdf" 
            target="_blank"
          >
            Download SEE Paper 2022 (2)
          </Link><br />
        </div>
        <div className="subject-card">
          <h2>MCQ</h2>
          <p>Multiple Choice Questions for Maths.</p>
          <Link 
            to="/qp/MATHS/Unit%20I%20-%20CO-%201.pdf" 
            target="_blank"
          >
            Download MCQ
          </Link><br />
          <Link 
            to="/qp/MATHS/Unit%20I%20-%20CO-%202.pdf" 
            target="_blank"
          >
            Download MCQ
          </Link><br />
          <Link 
            to="/qp/MATHS/PDE.pdf" 
            target="_blank"
          >
            Download MCQ
          </Link><br />
          <Link 
            to="/qp/MATHS/Differential%20Equations.pdf" 
            target="_blank"
          >
            Download MCQ
          </Link><br />
          <Link 
            to="/qp/MATHS/Differential%20Equations1.pdf" 
            target="_blank"
          >
            Download MCQ
          </Link><br />
          <Link 
            to="/qp/MATHS/Differential%20Equations2.pdf" 
            target="_blank"
          >
            Download MCQ
          </Link><br />
          <Link 
            to="/qp/MATHS/CO-%204%20Vector%20calculus.pdf" 
            target="_blank"
          >
            Download MCQ
          </Link><br />
          <Link
            to="/qp/MATHS/CO%20-%205%20-%20MULTIPLE%20INTEGRATION.pdf" 
            target="_blank"
          >
            Download MCQ
          </Link><br />
          
        </div>
      </div>
    </div>
  );
};

export default MathsPage;
