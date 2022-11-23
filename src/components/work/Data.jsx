import Work1 from '../../assets/Work1.png'
import Work2 from '../../assets/Work2.png'
import Work3 from '../../assets/Work3.png'
import Work4 from '../../assets/Work4.png'
import Work5 from '../../assets/Work5.jpg'

export const projectsData = [
    {
      id: 1,
      image: Work1,
      title: "Larose",
      category: "web",
      builtWith:<><p>CSS</p><p>React</p></>,
      detail: 'Single page restaurant website with a beautiful photo gallery built with React.',
      code: 'https://github.com/Lamarr9/P',
      url: 'larose.netlify.app',
    },
    {
      id: 2,
      image: Work2,
      title: "Youtube clone",
      detail: 'A Youtube clone with videos being fetched from the Youtube v3 API on RapidApi, built with Styled Components & React.',
      category: "app",
      builtWith:<> <p>Styled Components</p><p>Youtube v3 API</p><p>React</p></>,
      url: 'youtube-tony.netlify.app',
      code: '',
    },
    {
      id: 3,
      image: Work3,
      title: "Hoobank",
      category: "design",
      detail: 'Pixel-perfect bank website with modern UI/UX interface built with Tailwind CSS & React.',
      builtWith:<> <p>Tailwind CSS</p><p>React</p></>,
      url: 'hoobbank.netlify.app',
    },
    {
      id: 4,
      image: Work4,
      title: "Fierce Fitness",
      category: "app",
      builtWith:<> <p>Styled Components</p><p>ExerciseDB API</p><p>React</p></>,
      detail: 'Fitness website with over 1300 exercises being fetched from the ExerciseDB API on RapidApi, built with React & Styled Components.',
      url: 'fiercefitness.netlify.app',
    },
    {
      id: 5,
      image: Work5,
      title: "CryptOne",
      category: "web",
      detail: 'A simple Youtube clone made with Material UI',
      url: 'cryptone.netlify.app',
    },
  ];
  

  export const projectsNav = [
    {
        name : 'all',
    },
    {
        name : 'web',
    },
    {
        name : 'app',
    },
    {
        name : 'design',
    },
  ];
  
  
  
  