export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Project',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'React Admin Dashboard',
    desc: 'Developed an interactive React Admin Dashboard for task and data management, incorporating tools such as charts, a data table, a calendar, and a Kanban Trello board. ',
    subdesc:
      'Improved data processing speed by 30% and task management efficiency by 25%. Enhanced the user experience through a comprehensive, user-friendly interface designed for efficient data visualization and task tracking. Achieved 98% positive feedback from users for ease of navigation and functionality.',
    href: 'https://anitej-react-dashboard.netlify.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Pokemon API App',
    desc: 'Pokémon API Search and Filter tool enabling users to search and filter data from a public Pokémon API.',
    subdesc:
      'I implemented efficient data retrieval and filtering mechanisms that significantly enhanced search speed. Through this process, I gained a solid understanding of how to work with APIs and handle data at a foundational level. This experience allowed me to improve my ability to interact with external data sources, parse and process data efficiently, and ensure optimal performance in real-time applications.',
    href: 'https://anitej-pokemon-api.netlify.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: '3D Carousel',
    desc: 'Created a 3D image slider using HTML and CSS, featuring Kung Fu Panda movie posters.',
    subdesc:
      'I applied advanced transformation and animation properties in HTML and CSS to create a dynamic 3D carousel. This approach enhanced the visual depth and user interaction, resulting in a more immersive and engaging experience—all without the use of JavaScript.',
    href: 'https://anitejsood.github.io/3D_Kunf_Fu__Slider/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html1.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
    ],
  },
  {
    title: 'Sethi Jewellers Website',
    desc: 'Designed and developed a responsive website prototype for Sethi Jewellers using HTML, CSS, and JavaScript',
    subdesc:
      'For my first client project, I designed and developed a responsive website prototype for Sethi Jewellers using HTML, CSS, and JavaScript. This project focused on enhancing both the user experience and visual appeal, resulting in a 40% increase in user engagement.',
    href: 'https://anitejsood.github.io/Sethi-Jewellers/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html1.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: 'assets/java.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Tech Mahindra',
    pos: 'Student Trainee',
    duration: 'Aug 2023 - Sep 2023',
    title:
      'As a Student Trainee at Tech Mahindra, I gained proficiency in remote collaboration tools and communication strategies, improving project delivery times by 25%. I also developed skills in data protection, enhancing business operations security.',
    icon: '/assets/tech-mahindra.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Leanopsys LLC',
    pos: 'Business Technology Intern',
    duration: 'Sep 2023 - Nov 2023',
    title:
      'During my internship at Leanopsys LLC, I enhanced data extraction and validation methods, improving accuracy by 40%. I also gained exposure to financial systems, streamlining cross-border financial analysis by 38%, and improving reporting efficiency by 32%.',
    icon: '/assets/leanopsys.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'IEEE SSIT VIT',
    pos: 'Head of Finance / Financial Advisor',
    duration: 'Mar 2022 - Present',
    title:
      'As the Finance Head at IEEE SSIT VIT, I led budgeting, accounting, and financial planning for over 10 events, managing resources for a chapter with 50+ members. I also procured external sponsorships, securing over $1200 for Hack4Cause 4.0.',
    icon: '/assets/ieee-icon.svg',
    animation: 'salute',
  },
];

