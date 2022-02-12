import React from 'react';
import './App.css';
import photo from './Assets/Photos/Portrait.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div className='paragraph main'>Hello, I'm Don.</div>
          <div className='paragraph sub'>currently CTO at Magic Box Solutions Co.,Ltd.</div>
          <img src={photo} className='protrait'/>
        </p>
      </header>
    </div>
  );
}

export default App
