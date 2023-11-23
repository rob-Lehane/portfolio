import React, { Image, useState } from 'react';


const App = () => {
  const [textType, setTextType] = useState('short');

  const handleButtonClick = (type) => {
    setTextType(type);
  };

  return (
    <>

      <div className="app">
        <img
          className="mobile-image"
          src='/profile_pic.JPG'
          alt="Profile picture"
        />

        <div className="text-section">
          <h1>Hi, I'm Rob</h1>
          <p className="body-text">
            {textType === 'short' && 'junior full stack developer. northcoders software engineering graduate. previous hr professional & head chef. enjoys cooking (obviously), coffee, running and travel.'}
            {textType === 'medium' && 'Medium Body Text Here'}
            {textType === 'long' && 'Long Body Text Here'}
          </p>

          <div className="buttons">
            <button onClick={() => handleButtonClick('short')}>{'<short />'}</button>
            <button onClick={() => handleButtonClick('medium')}>{'<medium />'}</button>
            <button onClick={() => handleButtonClick('long')}>{'<long />'}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;