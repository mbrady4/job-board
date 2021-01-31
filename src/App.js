import React from 'react';
import './App.css';
import desktopHeader from './images/bg-header-desktop.svg'
import JobBoard from './components/jobBoard/jobBoard.js'

function App() {
  return (
    <div className="App">
      <div class="containerBox">
        <div class="text-box">
          <div>
            <h4>Pensive</h4>
            <p>Remeber what you learn</p>
          </div>
        </div>
        <img class="img-responsive" src={desktopHeader} alt="" />
      </div>
      {/* <div className="App-header">
        <img src={desktopHeader} alt=''/>
        <h1 className='title'>Pensive</h1>
      </div> */}
      <JobBoard className="jobBoard" />
    </div>
  );
}

export default App;
