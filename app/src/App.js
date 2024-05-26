// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main.jsx';
import Maths from './pages/maths';
import Physics from './pages/physics';
import Python from './pages/python';
import Mech from './pages/mech';
import Bee from './pages/bee';
import Bio from './pages/bio';
import Chem from './pages/chem';
import Civil from './pages/civil';
import Coi from './pages/coi';
import Cpp from './pages/cpp';
import Eng from './pages/eng';
import Evs from './pages/evs';
import Ld from './pages/ld';
import Be from './pages/be.jsx';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/python" element={<Python />} />
        <Route path="/mech" element={<Mech />} />
        <Route path="/be" element={<Be/>} />
        <Route path="/bee" element={<Bee />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/chem" element={<Chem />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/coi" element={<Coi />} />
        <Route path="/cpp" element={<Cpp />} />
        <Route path="/eng" element={<Eng />} />
        <Route path="/evs" element={<Evs />} />
        <Route path="/ld" element={<Ld />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
