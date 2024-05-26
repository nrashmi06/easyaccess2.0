import React from 'react';
import Navbar from '../components/navbar/Navbar';

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="page flex flex-col">
        <section className="h-screen bg-white flex items-center justify-center">
          <h1 className="text-black text-4xl">Section 1 - White</h1>
        </section>
        <section className=" bg-slate-300 h-screen relative my-5">
          <div className=" bg-slate-500 absolute inset-0 transform rotate-3  opacity-1 overflow-visible " style={{ perspective: '1000px' }}>
            <div className="absolute top-0 left-0 w-full h-full bg-slate-500 rotate-2 opacity-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-slate-600 opacity-75 transform rotate-3 "></div>
            <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-85 transform rotate-6"></div>
          </div>
          <div className="h-screenbg-opacity-75 flex items-center justify-center">
            
          </div>
        </section>
        <section className="h-screen bg-white flex items-center justify-center">
          <h1 className="text-black text-4xl">Section 3 - White</h1>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
