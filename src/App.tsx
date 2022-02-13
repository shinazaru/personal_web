import React from 'react';
import './App.css';
import photo from './Assets/Photos/Portrait.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="main-navbar">
          <ul>
            <li>Narudon Wannaphanom</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </nav>
        <p>
          <div className='paragraph main'>Hello, I'm Don.</div>
          <div className='paragraph sub'>currently as fulltime CTO at <a href='https://www.magicboxsolution.com' className='paragraph sub'>Magic Box Solutions Co.,Ltd.</a></div>
          <div className='paragraph sub'>And part-time "life coach", 24/7 WFH ={'>'} "Work For Her"</div>
          <div className='paragraph sub'>Happy wife, Happy life</div>
          <div className='paragraph sub'>Scroll down to check update,</div>
          <div className='paragraph sub'>Can't do it, do you?, Yeah not thing update.</div>
          <img src={photo} className='portrait' alt=''/>
        </p>
      </header>
    </div>
  );
}

export default App
