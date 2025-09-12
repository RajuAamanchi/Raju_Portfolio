export const HOME = {
    name: "Raju Aamanchi",
    role: "Software Engineer",
    avatar: "assets/images/avatar.jpg",
    tagline:
      "Software engineer with 6 years building high-performance web apps and services. Specializes in microservices, secure auth, data persistence, and cloud-native deployments on AWS. Ships fast, tests properly, and keeps systems observable and scalable.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/raju-aamanchi-25a54abb", icon: "bi-linkedin" },
      { label: "Email", url: "mailto:rajuamanchi124@gmail.com", icon: "bi-envelope-fill" },
      { label: "GitHub", url: "https://github.com/RajuAamanchi", icon: "bi-github" },  
    ],
    highlights: [
      "I builds products end-to-end and makes them reliable.",
      "6 years across finance, healthcare, and enterprise platforms.",
      "Full-stack delivery: React/Angular → APIs → data → AWS/GCP.",
      "Strong on OOP and DSA; cares about performance and clean abstractions.",
      "Comfortable with microservices, API design, automation, and CI/CD."
    ]
};

export const ABOUT_DATA = {
  full_summary:
    "Software Engineer with around 6 years of experience designing and developing high-performance web applications using React.js, Node.js, Express.js, J2EE, Spring Boot, Spring MVC, Spring Security, Hibernate, and JPA. I focus on microservices architecture, secure authentication, and data persistence (MongoDB, MySQL, PostgreSQL). I build and integrate RESTful APIs and use Python/Django for backend automation where needed. I have deployed cloud-native applications on AWS (EC2, Lambda, S3, RDS) and worked with containerized environments using Docker and Kubernetes for scalable, resilient delivery. On the front-end I build responsive, accessible interfaces using React, Next.js, Angular, TypeScript and modern CSS (Tailwind/Bootstrap).",
  highlights: [
    '6 years across finance, healthcare, and enterprise platforms.',
    'Full-stack delivery: React/Angular → APIs → data → AWS/GCP.',
    'Strong foundation in OOP and Data Structures & Algorithms; focus on performance and clean abstractions.',
    'Comfortable with microservices, API design, automation, and CI/CD (Docker, Kubernetes, GitHub Actions).'
  ],

skills: {
    'Frontend': 'React, Redux, Next.js, Tailwind CSS, Angular 10+, Bootstrap 5, jQuery',
    'Backend': 'Node.js, Express, Django, J2EE, Spring Boot, Spring MVC, Spring Security, Hibernate, JPA',
    'Languages': 'JavaScript (ES6+), TypeScript, Java, Python, SQL',
    'Web' : 'HTML5, CSS3, AJAX, JSON, XML',
    'Cloud / Servers': 'AWS (CloudFront, S3, Lambda, API Gateway, Amplify, RDS), GCP (Firebase, Cloud Functions, Storage)',
    'Databases' : 'MongoDB, PostgreSQL, MySQL, DynamoDB, Firebase Realtime DB',
    'CI/CD & Deploy': 'Docker, Kubernetes, Jenkins, GitHub Actions, Netlify, Vercel',
    'Testing':'Jest, Cypress, Enzyme, JUnit, Lighthouse, Postman',
    'Tools': 'Git/GitHub, JIRA, Figma, Chrome DevTools, VS Code, Jenkins'
  },

  education:
    'Master of Science in Information Technology Management, Campbellsville University, Kentucky'
};

export const CONTACT = {
    "LinkedIn": "https://linkedin.com/in/raju-aamanchi-25a54abb",
    "Email": "rajuamanchi124@gmail.com",
    "GitHub": "https://github.com/RajuAamanchi",
    "Phone": "+1 (901) 319-9865", 
};

export const EXPERIENCE_DATA = [
    {
    "title":"Charles Schwab, USA — Software Engineer",
    "logoPath": "assets/images/charles-schwab.png",
    "duration":"May 2024 – Present",
    "summary":[
        "Built a secure client onboarding portal (React, Node, Express) with KYC/AML integrations; onboarding efficiency up 35%.",
        "Automated loan-doc intake with AWS Lambda, S3, API Gateway; saved 11+ hours/week of manual work.",
        "Containerized payment settlement services; production-like staging cut env mismatch bugs and reduced tickets 40%.",
        "Added Cypress UI suites + JUnit backend tests; test coverage up 60% and release reliability improved.",
        "CI/CD with GitHub Actions for Java microservices; release errors down 60%, audit posture improved.",
        "Refactored Spring services to Spring Boot 3 on Java 17; credit risk API response times improved 25%."
    ]
},
{
    "title":"Accenture, India — Software Engineer",
    "duration":"Nov 2021 – Dec 2023",
    "logoPath": "assets/images/accenture.png",
    "summary":[
        "Angular 10+ front end for patient workflows; task completion speed up 30% for 15k+ daily users; 99.95% uptime.",
        "React + Redux health dashboards with lazy loading/memoization; physician satisfaction up 35%.",
        "HIPAA-compliant Node/Express APIs handling 10k+/day with zero downtime for six months.",
        "Led CSS → Tailwind migration; design consistency up and styling effort down 40%.",
        "Automated clinical report scheduling and monitoring (cron); manual effort down 40%."

    ]
},
{
    "title":"Hexaware Technologies, India — Software Engineer",
    "duration":"Apr 2019 – Oct 2021",
    "logoPath": "assets/images/hexaware.png",
    "summary":[
        "Refactored Node APIs and MongoDB schema; Angular 6+ upgrade achieved 30% faster data sync.",
        "Migrated AngularJS → Angular 6+ for internal tools used by 5k+ employees; accessibility and responsiveness improved.",
        "Automated backups, health checks, and reports (Python/Bash); saved 50+ hours/month.",
        "Postman collections integrated into CI; bugs caught 30% earlier; UAT cycle time down 25%.",
        "Active in Agile ceremonies; sprint velocity up 15%, 95%+ goal completion over 6 months."
    ]
}
];


export const PROJECT_DATA = [
  {
    title: "IPL Dashboard App",
    desc: "React dashboard to explore IPL match results, player stats, and team performance with interactive filtering and responsive UI.",
    stack: ["React", "Reusable components", "State management", "Responsive design"],
    full_desc:
      "A dynamic web application built with React.js, designed to display and analyze IPL (Indian Premier League) cricket data. This dashboard allows users to browse match results, player statistics, and team performance with interactive data visualization and filtering features. Leveraging Create React App for rapid development and maintainable code structure, the project showcases modern front-end development practices including reusable components, responsive design, and efficient state management.",
    videoPath: 'assets/images/projects/ipl-dashboard.mp4',
    posterPath: 'assets/images/projects/ipl-dashboard-poster.png',
    githubUrl: 'https://github.com/RajuAamanchi/IPL_Dashboard',
  },
  {
    title: "Jobby App",
    desc: "Job search app with secure auth, protected routes, advanced filtering, and robust API error handling.",
    stack: ["React", "Context/Redux", "REST APIs", "Loaders", "Responsive UI"],
    full_desc:
      "A robust job search web application built with React.js, featuring secure user authentication, dynamic job listings, and advanced filtering. The app enables users to log in, browse and search for jobs with multiple filter criteria (such as employment type and salary range), view personalized recommendations, and access detailed job information. Key features include protected routes for authenticated users, real-time data fetching from APIs, error handling with retry options, and responsive user interface elements like loaders, search, and navigation.",
    videoPath: 'assets/images/projects/jobby-app.mp4',
    posterPath: 'assets/images/projects/jobby-app-poster.png',
    githubUrl: 'https://github.com/RajuAamanchi/Jobby_App'
  },
  {
    title: "Prime Video Clone",
    desc: "Category carousels with React Slick and in-place trailer playback via React Player.",
    stack: ["React", "React Slick", "React Player"],
    full_desc:
      "A visually engaging streaming platform replica built with React.js, featuring categorized movie lists such as Action and Comedy displayed through interactive carousels using React Slick. Users can seamlessly navigate through movie thumbnails, and upon clicking a thumbnail, a popup displays the movie trailer using the React Player component. The app supports intuitive next/previous navigation within carousels, responsive design, and delivers a smooth user experience like leading video streaming platforms.",
    videoPath: 'assets/images/projects/prime-video-clone.mp4',
    posterPath: 'assets/images/projects/prime-video-clone-poster.png',
    githubUrl: 'https://github.com/RajuAamanchi/PrimeVideo_Clone'
  },
  {
    title: "Nxt Trendz (E-commerce)",
    desc: "Secure login, protected routes, product filtering, cart management, and summaries.",
    stack: ["React", "Context API", "REST APIs", "Error handling", "Responsive design"],
    full_desc:
      "A comprehensive e-commerce web application inspired by leading online shopping platforms, built using React.js. Nxt Trendz offers a secure login flow, protected routes for authenticated users, and a responsive user interface for browsing products, viewing details, and managing cart items. Customers can filter products by category, price, and rating, update item quantities in the cart, and see cart summaries. The project demonstrates advanced React techniques including state management with Context API, API integration for dynamic product listings, and seamless navigation.",
    videoPath: 'assets/images/projects/nxt-trendz.mp4',
    posterPath: 'assets/images/projects/nxt-trendz-poster.png',
    githubUrl: 'https://github.com/RajuAamanchi'
  },
  {
    title: "Nxt Watch — YouTube Clone",
    desc: "Explore Trending/Gaming/Saved videos, full video details, search, and theme toggle (light/dark) with protected routes.",
    stack: ["React", "Authenticated flows", "Theme management", "API integration"],
    full_desc:
      "A feature-rich YouTube clone developed with React.js, allowing users to explore and view video content across categories like Trending, Gaming, and Saved videos. The application implements secure login, theme switching (Light/Dark), and protected routes for authenticated access to personalized features. Users can search for videos, view detailed video information, and manage a list of saved videos. Responsive design and seamless navigation ensure an engaging user experience.",
    videoPath: 'assets/images/projects/nxt-watch.mp4',
    posterPath: 'assets/images/projects/nxt-watch-poster.png',
    githubUrl: 'https://github.com/RajuAamanchi/NxtWatch_YouTubeClone.git'
  }
];