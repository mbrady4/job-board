import React from 'react';
import './App.css';
import desktopHeader from './images/bg-header-desktop.svg'
import JobBoard from './components/jobBoard/jobBoard.js'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={desktopHeader} alt=''/>
      </div>
      <JobBoard className='jobBoard'/>
    </div>
  );
}

export default App;
