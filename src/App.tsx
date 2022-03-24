import React from 'react';
import './App.css';
import photo from './Assets/Photos/Portrait.png'

function App() {
  return (
    <div className="App">
      <div className="App-MainPage">
        <p>
          <div className='paragraph main'>Hello, I'm Don.</div>
          <div className='paragraph sub'>currently as fulltime CTO at <a href='https://www.magicboxsolution.com' className='paragraph sub'>Magic Box Solutions Co.,Ltd.</a></div>
          <div className='paragraph sub'>And part-time "life coach", 24/7 WFH ={'>'} "Work For Her"</div>
          <div className='paragraph sub'>Happy wife, Happy life</div>
          <div className='paragraph sub'>Scroll down to check update,</div>
          <div className='paragraph sub'>Can't do it, do you?, Yeah not thing update.</div>
          <img src={photo} className='portrait' alt=''/>
          <div className='paragraph main'>Nardudon Wannaphanom (Dontree)</div>
          <div className='paragraph sub'>Quick Hits</div>
          <div className='paragraph sub'>CTO of Magic Box Solutions</div>
          <div className='paragraph sub'>Former Engineering Director at OTV Platform</div>
          <div className='paragraph sub'>Lead Guitarist of 3 bands since college</div>
          <div className='paragraph sub'>Dontree is the CTO of Magic Box Solutions, where he oversees the creation of Fixtab and Salesmith. He graduated from Silapakorn University with a degree in Computer Science, his main interest in natural language processing. While at university, he was also the lead guitarist in a band and was known for his rocker attitude and cool Sek Loso haircut. Since graduation, Dontree helped create the ITax Application, became a One-Man Solution for WhiteSpace’s Back Office Management software, and was the Engineering Director at OTV platform. In between all of that, he founded UnderscoreThai, an Agile-focused group that deals with tech innovation and he blogs on Medium.com in his spare time.</div>
        </p>
      </div>
    </div>
  );
}

export default App
