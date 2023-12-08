const projectList = [
    {
      title: 'shufl.fm',
      desc: (
        <>
          shufl.fm is a React Native mobile app which allows users to listen to music, rate each song and receive new music based on previous ratings. I created a bespoke neural network using Python to provide recommendations to users.
          <br /><br />
          I also built a custom API using data from Spotify (song data such as danceability, acousticness etc) and Deezer (album art and mp3 previews) to store our dataset.
          <br /><br />
          We developed our own machine learning algorithm, without the use of AI/ML libraries. Each song has 10 characteristics including energy, popularity, and danceability that the neural network uses to learn the user's preferences.
        </>
      ),
      images: ['shufl_frontend.jpeg', 'shufl_backend.png'],
      links: [
        { label: 'Frontend', url: 'https://github.com/rob-Lehane/SHUFFLE-FE/' },
        { label: 'Backend', url: 'https://github.com/joebailey1000/SHUFFLE-BE' },
      ],
      stack: ['JavaScript (Node.js)', 'React Native', 'Python', 'PSQL', 'Express', 'Expo', 'Jest', 'supertest'],
    },
    {
      title: 'NC News',
      desc: (
        <>
        I created NC News as part of Northcoders software engineering bootcamp. The project was created over two weeks, demonstrating my knowledge of backend and APIs first, and then creating a frontend in React to bring this API to life.
        <br /><br />
        NC News uses seed data provided by Northcoders to create an API which allows users to get, post, patch and delete news articles, comments, topics and users. The frontend displays these articles to the user with the option to sort articles by date, comment count and votes, filter by topic, comment on these articles and vote on articles and comments.
        </>
      ),
      images: ['nc-news-fe.png', 'nc-news-be.png'],
      links: [
        { label: 'Hosted', url: 'https://nc-news-rl.netlify.app/'},
        { label: 'Frontend', url: 'https://github.com/rob-Lehane/nc-news' },
        { label: 'Backend', url: 'https://github.com/rob-Lehane/nc-news-rl' },
      ],
      stack: ['JavaScript (Node.js)', 'React', 'PSQL', 'Express', 'Jest', 'supertest'],
    },
  ];
  
  export default projectList;