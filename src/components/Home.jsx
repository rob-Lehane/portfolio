import React, { useState } from 'react';

const App = () => {
  const [textType, setTextType] = useState('short');

  const handleButtonClick = (type) => {
    setTextType(type);
  };

  const renderParagraphs = (text) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  return (
    <div className="app">
      <img
        className="mobile-image"
        src='/profile_pic.JPG'
        alt="Profile picture"
      />

      <div className="text-section">
        <h1>Hi, I'm Rob</h1>
        <div className="body-text">
          {textType === 'short' && <>{renderParagraphs('Junior Full Stack Developer. Northcoders software engineering graduate. Previous HR professional & Head Chef. Enjoys cooking (obviously), coffee, running and travel. Proficient in JavaScript (Node.js), React, Python, React Native, SQL, HTML, CSS and always keen to learn more.')}</>}
          {textType === 'long' && <>{renderParagraphs("I'm a Junior Full Stack Developer with a passion for all things tech. My passion started a young age, building my first website aged 9 and jailbreaking iPhones from the first generation, aged 11. After a career in HR and a couple of years off to travel, I decided a career change to tech was right for me. \n \n \n In a previous HR role, I'd worked with a software development bootcamp provider called Northcoders, hiring Junior Devs for the company I worked for. Having seen the standard of junior devs we hired from Northcoders, I decided to undertake the bootcamp myself. \n \n \n Northcoders is an intensive 13-week, 480-hour course which covers a mixture of front-end and back-end development. The curriculum at Northcoders covers JavaScript, HTML, CSS, Node.js, Express, SQL, React, APIs and more. It also covers test driven development, agile methodologies and lots of pair programming work. \n \n \n Some of my favourite things to do in my free time include cooking, running, coffee and travel.")}</>}
        </div>

        <div className="buttons">
          <button onClick={() => handleButtonClick('short')}>{'<short />'}</button>
          <button onClick={() => handleButtonClick('long')}>{'<long />'}</button>
        </div>
        {renderParagraphs('If you want to know more ')}
      </div>
    </div>
  );
};

export default App;
