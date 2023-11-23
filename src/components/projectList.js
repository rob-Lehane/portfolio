const projectList = [
    {
      title: 'shufl.fm',
      desc: 'shufl.fm was created as part of my final project at Northcoders. Alongside three other developers, we set out to build our own bespoke neural network, which takes a user\'s previous ratings and suggests songs it thinks the user might like. \n \n We developed our own machine learning algorithm, without the use of AI/ML libraries. It has a functioning music player and uses our own custom API to get songs. Each song has 10 characteristics including energy, popularity, and danceability that the neural network uses to learn the user\'s preferences.',
      images: ['shufl_frontend.jpeg', 'shufl_backend.png'],
      links: [
        { label: 'Frontend', url: 'https://github.com/rob-Lehane/SHUFFLE-FE/' },
        { label: 'Backend', url: 'https://github.com/joebailey1000/SHUFFLE-BE' },
      ],
      stack: ['Node.js', 'React Native', 'Python', 'PSQL', 'Express', 'Jest', 'supertest'],
    },
    {
      title: 'NC News',
      desc: 'I created NC News as part of Northcoders software engineering bootcamp. The project was created over two weeks, demonstrating my knowledge of backend and APIs first, and then creating a frontend in React to bring this API to life.',
      images: ['nc-news-fe.png', 'nc-news-be.png'],
      links: [
        { label: 'Hosted', url: 'https://nc-news-rl.netlify.app/'},
        { label: 'Frontend', url: 'https://github.com/rob-Lehane/nc-news' },
        { label: 'Backend', url: 'https://github.com/rob-Lehane/nc-news-rl' },
      ],
      stack: ['JavaScript', 'React', 'PSQL', 'Express', 'Jest', 'supertest'],
    },
  ];
  
  export default projectList;