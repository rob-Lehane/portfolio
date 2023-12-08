import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css'

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
          {textType === 'short' && <>{renderParagraphs('Junior Full Stack Developer. Northcoders software engineering graduate. Previous HR professional & Head Chef. Enjoys cooking (obviously), coffee, running, sandwiches and travel. Proficient in JavaScript (Node.js), React, Python, C#, React Native, SQL, HTML, CSS and always learning more.')}</>}
          {textType === 'long' && <>{renderParagraphs("I'm a Junior Full Stack Developer with a passion for all things tech. My passion started at a young age, building my first website aged 9 and jailbreaking iPhones from the first generation, aged 11. After four years as a HR professional within not-for-profits and a tech company, I moved to HR consultancy on a remote basis for companies across the world. Now, I'm excited to pursue a career in tech. \n \n \n In a previous HR role, I'd worked with a software development bootcamp provider called Northcoders, hiring Junior Devs. Having seen the standard of developers we hired from Northcoders, I decided to undertake the bootcamp myself. \n \n \n Northcoders is an intensive 13-week, 480-hour course which covers a mixture of front-end and back-end development. Through this course and my own further learning, I am proficient in JavaScript (Node.js), Python, C#, React, React Native, HTML, CSS, Express, SQL (Postgres) and Expo. The Northcoders bootcamp also covers test driven development, agile methodologies and includes lots of pair programming work. \n \n \n Some of my favourite things to do in my free time include cooking, running, coffee and travel. \n \n \n I'm currently studying C# and freelancing to gain further experience.")}</>}
        </div>

        <div className="buttons">
          <button onClick={() => handleButtonClick('short')}>{'<short />'}</button>
          <button onClick={() => handleButtonClick('long')}>{'<long />'}</button>
        </div>
        <p className="in-touch">If you want to know more, <u><Link to="/contact" className="getInTouch">get in touch.</Link></u></p>
      </div>
    </div>
  );
};

export default App;
